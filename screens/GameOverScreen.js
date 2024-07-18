import { Image, StyleSheet, Text, View } from "react-native";
import Title from "../components/ui/Title";
import Colors from "../utils/colors";
import PrimaryButton from "../components/ui/PrimaryButton";

export default function GameOverScreen({ userNumber, rounds, onStartNewGame }) {
  return (
    <View style={styles.rootContainer}>
      <Title>GAME OVER!</Title>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/images/success.png")}
          style={styles.image}
        />
      </View>
      <Text style={styles.summaryText}>
        Your phone needed <Text style={styles.highlight}>{rounds}</Text> rounds
        to guess the number <Text style={styles.highlight}>{userNumber}</Text>.
      </Text>
      <PrimaryButton onPress={onStartNewGame}>START NEW GAME</PrimaryButton>
    </View>
  );
}
const styles = StyleSheet.create({
  imageContainer: {
    borderRadius: 200,
    width: 350,
    height: 350,
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: "hidden",
    margin: 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  rootContainer: {
    flex: 1,
    padding: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  summaryText: {
    fontFamily: "open-sans",
    fontSize: 24,
    textAlign: "center",
    marginBottom: 24,
  },
  highlight: {
    fontFamily: "open-sans-bold",
    color: Colors.primary500,
  },
  button: {
    padding: 12,
  },
});
