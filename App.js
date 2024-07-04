import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import StepCounter from "./app/StepCounter";


export default function App() {
  return (
    <View className="flex justify-between bg-pink-400 h-full">
      <Text className="text-center text-2xl text-blue-500 pt-10">
        Schrittzähler
      </Text>
      <View className=" flex-1 justify-center items-center">
        <StepCounter />
      </View>
    </View>
  );
}
