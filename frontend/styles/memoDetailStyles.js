import { StyleSheet } from "react-native";
import colors from "./colors";

export const memoDetailStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    justifyContent: "center",
    backgroundColor: colors.primaryColor,
  },
  quoteWrapper: {
    position: "relative",
  },
  quoteContainer: {
    backgroundColor: colors.secondaryColor,
    padding: 30,
    borderRadius: 15,
  },
  saveButton: {
    position: "absolute",
    top: 32,
    right: 18,
    paddingHorizontal: 4,
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
  },
  saveButtonText: {
    color: colors.tertiaryColor,
    fontSize: 32,
    fontWeight: "bold",
    lineHeight: 32,
  },
  authorContainer: {
    backgroundColor: colors.secondaryColor,
    padding: 10,
    borderRadius: 15,
    marginVertical: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
  quote: {
    textAlign: "center",
    color: colors.primaryTextColor,
    fontFamily: "LibreBaskerville-Bold",
    fontSize: 16,
    lineHeight: 30,
  },
  authors: {
    fontSize: 16,
    textAlign: "center",
    color: colors.primaryTextColor,
  },
});
