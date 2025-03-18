import { useState, useEffect } from "react";
import { View, Image, Text, FlatList } from "react-native";

import { Card } from "../Card";
import { usePage } from "../../contexts/PageContext";

import { styles } from "./styles";

type eventsProp = {
  id: string;
  title: string;
  image: string;
  date: string;
  location: string;
};

type ApiResponse = {
  data: {
    id: number;
    title: string;
    image: string;
    location: string;
    date: string;
  }[];
};

export function Events() {
  const { username } = usePage();
  const [events, setEvents] = useState<eventsProp[]>([]);

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");

    return `${day}/${month}/${year} às ${hours}:${minutes}hrs`;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://189.127.164.179:8600/getPosts`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        const resultText = await response.text();
        if (response.ok) {
          const data = JSON.parse(resultText);

          if (data.data.length > 0) {
            const fetchedEvents: eventsProp[] = data.data.map(
              (event: ApiResponse["data"][0]) => ({
                id: String(event.id),
                title: event.title,
                image: event.image,
                location: event.location,
                date: formatDate(event.date),
              })
            );

            setEvents(fetchedEvents);
          }
        }
      } catch (error) {
        console.error("Erro ao criar eventos:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.avatar}>
          <Image
            source={{ uri: "https://avatar.iran.liara.run/public" }}
            style={{ width: "100%", height: "100%" }}
          />
        </View>

        <View style={styles.welcome}>
          <Text
            style={{
              color: "rgba(255, 255, 255, 0.3)",
              fontFamily: "Urbanist_Regular",
            }}
          >
            Bem vindo de volta!
          </Text>
          <Text
            style={{
              fontSize: 20,
              color: "white",
              fontFamily: "Urbanist_Regular",
            }}
          >
            {username}
          </Text>
        </View>

        <View style={styles.transparent}></View>
      </View>

      <View style={styles.main}>
        <Text
          style={{
            fontSize: 24,
            color: "white",
            fontFamily: "Urbanist_Bold",
            marginBottom: 15,
          }}
        >
          Eventos do Brazuca
        </Text>

        <FlatList
          data={events}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Card
              key={item.id}
              title={item.title}
              image={item.image}
              date={item.date}
              location={item.location}
            />
          )}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => (
            <Text
              style={{
                color: "white",
                fontFamily: "Urbanist_Regular",
                fontSize: 15,
              }}
            >
              Nenhum evento previsto.
            </Text>
          )}
        />
      </View>
    </View>
  );
}
