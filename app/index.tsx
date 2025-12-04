import { Text, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const name: string = "Rainier";

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <Text style={styles.title}>Welcome, {name}</Text>
        <Text style={styles.subtitle}>Hello World! Expo</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  scroll: {
    alignItems: "center",
    padding: 20,
  },
  title: {
    color: "blue",
    fontSize: 40,
    fontWeight: "bold",
  },
  subtitle: {
    backgroundColor: "black",
    color: "white",
    fontSize: 50,
    marginTop: 10,
    padding: 10,
    borderRadius: 10,
  },
});
