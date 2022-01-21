import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
// import { TailwindProvider } from "tailwind-rn";
import Login from "./components/Login";
import MultiSelect from "./components/MultiSelect";
// import utilities from "./tailwind.json";

export default function App() {
  return (
    <View>
      <Login />
      <MultiSelect />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
