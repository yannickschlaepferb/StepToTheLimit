import React, { useState, useEffect } from 'react';
import { Text, View, Pressable } from 'react-native';

export default function StepCounter() {
  const [counter, setCounter] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setCounter((prevCounter) => prevCounter + 1);
      }, 1000);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isRunning]);

  const handleStart = () => {
    setIsRunning(true);
  };

  return (
    <View className="flex-1 justify-center items-center bg-white">
      <Text className="text-center mt-3 text-2xl text-blue-500 absolute top-10">
        {counter}
      </Text>
      <Pressable
        onPress={handleStart}
        className="absolute top-20 p-4 bg-blue-500 rounded-lg"
      >
        <Text className="text-white">Start</Text>
      </Pressable>
    </View>
  );
}
