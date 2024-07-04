import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import StepCounter from "./app/StepCounter";

export default function App() {
  return (
    <View className="flex-1 justify-center items-center bg-pink-400 ">
      <StatusBar style="auto" />
      <Text className="text-center mt-6 text-2xl text-blue-500">
        Schrittzähler
      </Text>
      <StepCounter />
    </View>
  );
}
