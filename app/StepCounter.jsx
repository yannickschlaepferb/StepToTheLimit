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
      }, 500);
    }
    return () => {
      clearInterval(interval); // Clean up the interval on component unmount or when isRunning changes
    };
  }, [isRunning]);

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  return (
    <View className="flex-1 justify-center items-center w-full">
      <Text className="text-center mt-3 text-2xl text-blue-500 absolute top-10">
        Steps: {counter}
      </Text>
      <Pressable
        onPress={handleStart}
        className="p-4 px-10 mb-5 bg-blue-600 rounded-lg border"
      >
        <Text className="text-white">Start</Text>
      </Pressable>
      <Pressable
        onPress={handleStop}
        className="p-4 px-10 bg-violet-500 rounded-lg"
      >
        <Text className="text-white">Stop</Text>
      </Pressable>
    </View>
  );
}
