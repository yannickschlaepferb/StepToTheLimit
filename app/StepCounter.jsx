import React, { useState, useEffect } from 'react';
import { Text, View, Pressable } from 'react-native';
import Highscore from './Highscore';

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
      clearInterval(interval);
    };
  }, [isRunning]);

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  return (
    <View className="flex justify-center flex-col gap-2">
      <Highscore currentSteps={counter} />
      <Text className="text-center text-2xl text-blue-600">
        Steps: {counter}
      </Text>
      <View className="flex justify-center items-center flex-row gap-2">
        <Pressable
          onPress={handleStop}
          className="p-4 px-10 bg-blue-400 rounded-lg"
        >
          <Text className="text-white">Stop</Text>
        </Pressable>
        <Pressable
          onPress={handleStart}
          className="p-4 px-10 bg-blue-600 rounded-lg"
        >
          <Text className="text-white">Start</Text>
        </Pressable>
      </View>
    </View>
  );
}
