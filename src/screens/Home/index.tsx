import { View } from "react-native";

import { Login } from "../../components/Login";
import { Events } from "../../components/Events";

import { usePage } from "../../contexts/PageContext";

import { styles } from "./styles";

export function Home() {
  const { page } = usePage();

  return (
    <View style={styles.container}>
      {page === "Login" && <Login />}
      {page === "Events" && <Events />}
    </View>
  );
}
