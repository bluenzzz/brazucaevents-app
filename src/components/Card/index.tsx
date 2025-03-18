import { View, Image, Text } from "react-native";

import { Ionicons } from "@expo/vector-icons";

import { styles } from "./styles";

type Props = {
  title: string;
  image: string;
  date: string;
  location: string;
};

export function Card({ title, image, date, location }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.eventImage}>
          <Image
            source={{ uri: image }}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </View>
        <Text style={styles.eventName}>{title}</Text>
      </View>
      <View style={styles.footer}>
        <View style={styles.eventHour}>
          <Ionicons name={"time-outline"} size={20} color="white" />
          <Text
            style={{
              color: "rgba(255, 255, 255, 0.5)",
              fontFamily: "Urbanist_SemiBold",
              fontSize: 15,
            }}
          >
            {date}
          </Text>
        </View>
        <Text
          style={{
            color: "rgba(255, 255, 255, 0.5)",
          }}
        >
          |
        </Text>
        <View style={styles.eventLocation}>
          <Ionicons name={"location-outline"} size={20} color="white" />
          <Text
            style={{
              color: "rgba(255, 255, 255, 0.5)",
              fontFamily: "Urbanist_SemiBold",
              fontSize: 15,
            }}
          >
            {location}
          </Text>
        </View>
      </View>
    </View>
  );
}
