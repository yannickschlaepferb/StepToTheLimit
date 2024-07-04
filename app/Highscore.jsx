import { StatusBar } from "expo-status-bar";
import { Text, TextInput, View } from "react-native";
import { StepCounter } from "./StepCounter";

export default function App() {
  return (
    <View className="flex-1 justify-center items-center bg-pink-400 ">
      <StatusBar style="auto" />
      <TextInput className="text-center mt-3 text-2xl text-blue-500">
        Highscore:3333
      </TextInput>
    </View>
  );
}
