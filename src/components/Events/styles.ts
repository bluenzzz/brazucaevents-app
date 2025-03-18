import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  header: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 50,
  },
  avatar: {
    width: 54,
    height: 54,
    borderRadius: "50%",
    overflow: "hidden",
  },
  transparent: {
    width: 54,
    height: 54,
    borderRadius: "50%",
    overflow: "hidden",
    backgroundColor: "transparent",
  },
  welcome: {
    alignItems: "center",
    flexDirection: "column",
    gap: 5,
  },
  main: {
    width: "100%",
    height: "85%",
    marginTop: 50,
  },
  containerCard: {
    width: "100%",
    height: 150,
    borderRadius: 15,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
  },
});
