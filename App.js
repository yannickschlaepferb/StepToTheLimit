import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import StepCounter from './StepCounter'; 

export default function App() {
  return (
    <View className='flex-1 justify-center items-center bg-pink-400 '>
      <StatusBar style='auto' />
      <Text className='text-center absolute top-3 mt-3 text-2xl text-blue-500'>
        Schrittzähler
      </Text>
      <StepCounter />
    </View>
  );
}
