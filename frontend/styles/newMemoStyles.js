import { StyleSheet } from "react-native";
import colors from "./colors";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../constants";

export const newMemoStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 0,
    paddingHorizontal: 15,
    paddingBottom: 20,
    overflow: "hidden",
    backgroundColor: colors.primaryColor,
  },
  quoteInputSearchContainer: {
    flex: 1,
    marginBottom: 20,
    width: "100%",
    backgroundColor: colors.secondaryColor,
    borderRadius: 15,
  },
  quoteInput: {
    flex: 1,
    textAlignVertical: "top",
    padding: 23,
    fontSize: 16,
    fontWeight: "bold",
    color: colors.tertiaryColor,
  },
  checkButton: {
    position: "absolute",
    top: 20,
    right: 18,
    paddingHorizontal: 4,
    paddingVertical: 2,
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
  },
  checkButtonText: {
    color: colors.tertiaryColor,
    fontSize: 26,
    fontWeight: "bold",
    lineHeight: 32,
  },
  input: {
    paddingHorizontal: 23,
    borderRadius: 25,
    marginBottom: 20,
    backgroundColor: colors.secondaryColor,
    width: "100%",
    height: 50,
    fontSize: 16,
    fontWeight: "bold",
    color: colors.tertiaryColor,
  },
  button: {
    flex: 1,
    backgroundColor: colors.secondaryColor,
    borderRadius: 25,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: colors.tertiaryColor,
    fontSize: 16,
    lineHeight: 50,
    fontWeight: "bold",
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});
