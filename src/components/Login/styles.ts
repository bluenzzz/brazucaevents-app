import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputWrapper: {
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
    gap: 50,

    padding: 50,
  },
  input: {
    width: "100%",
    borderBottomColor: "white",
    borderBottomWidth: 1,
    fontSize: 20,
    paddingBottom: 15,
    color: "white",
    fontFamily: "Urbanist_SemiBold",
  },
  button: {
    width: "100%",
    height: 50,
    borderRadius: 9999,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 20,
    fontFamily: "Urbanist_Bold",
  },
  passwordContainer: {
    position: "relative",
    flexDirection: "row",
    alignItems: "center",
  },
});
