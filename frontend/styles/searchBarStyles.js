import { StyleSheet } from "react-native";
import colors from "./colors";

export const searchBarStyles = StyleSheet.create({
  bottomBar: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    backgroundColor: "transparent",
    paddingHorizontal: 15,
    paddingBottom: 14,
  },
  searchInput: {
    flex: 1,
    height: 50,
    backgroundColor: "#f8f8f8",
    borderRadius: 25,
    fontSize: 16,
    fontWeight: "bold",
    color: colors.tertiaryColor,
    paddingHorizontal: 23,
  },
  addButton: {
    marginLeft: 12,
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#f8f8f8",
    justifyContent: "center",
    alignItems: "center",
  },
});
