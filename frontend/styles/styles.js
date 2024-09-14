import {StyleSheet, Dimensions} from "react-native";

const {width, height} = Dimensions.get("screen");

export const commonStyles = StyleSheet.create({
    listContainer: {
        flex: 1,
        alignItems: "center",
        marginTop: 70,
        paddingBottom: 100,
        height,
        width,
    }
});

export const newMemoStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 50,
    height,
    width,
  },
  label: {
    fontSize: 18,
    marginVertical: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "gray",
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  toggleContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
});

export const memoDetailStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
    },
    content: {
        fontSize: 16,
        marginTop: 10,
    },
    mediaTitle: {
        fontSize: 20,
        fontWeight: "bold",
        marginTop: 20,
    },
    mediaSubtitle: {
        fontSize: 18,
        marginTop: 10,
    },
    mediaGenre: {
        fontSize: 16,
        marginTop: 10,
    },
    mediaCover: {
        width: "100%",
        height: 200,
        borderRadius: 10,
        marginTop: 10,
    },
});

export const memoCardStyles = StyleSheet.create({
    card: {
        backgroundColor: "white",
        padding: 10,
        margin: 10,
        borderRadius: 15,
        width: width - 30, // Adjust width to fit within the screen with padding
    },
    textContainer: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
    },
    text: {
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
    },
    divider: {
        height: 1,
        backgroundColor: "darkgrey",
        marginVertical: 10,
    },
    authorContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginHorizontal: 5,
    },
    author: {
        fontSize: 14,
        flex: 1,
    },
    button: {
        marginLeft: 10,
    },
});
