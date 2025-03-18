import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    width: "100%",
    height: 150,
    borderRadius: 15,
    backgroundColor: "#202020",
    padding: 20,
    justifyContent: "space-between",
  },
  header: {
    width: "100%",
    height: 60,
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },
  eventImage: {
    width: 60,
    height: "100%",
    borderRadius: 10,
    borderColor: "rgba(255, 255, 255, 0.1)",
    borderWidth: 2,
    overflow: "hidden",
  },
  eventName: {
    fontFamily: "Urbanist_SemiBold",
    color: "white",
    fontSize: 18,
    width: 200,
    lineHeight: 25,
  },
  footer: {
    width: "100%",
    flexDirection: "row",
    gap: 15,
  },
  eventHour: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  eventLocation: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
});
