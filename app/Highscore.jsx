import React, { useEffect, useState } from 'react';
import { Text, View, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Highscore({ currentSteps }) {
  const [highscore, setHighscore] = useState(0);
  const [highscoreDate, setHighscoreDate] = useState('');

  useEffect(() => {
    loadHighscore();
  }, []);

  useEffect(() => {
    if (currentSteps > highscore) {
      const currentDate = new Date().toLocaleDateString();
      setHighscore(currentSteps);
      setHighscoreDate(currentDate);
      saveHighscore(currentSteps, currentDate);
    }
  }, [currentSteps]);

  const loadHighscore = async () => {
    try {
      const storedHighscore = await AsyncStorage.getItem('highscore');
      const storedDate = await AsyncStorage.getItem('highscoreDate');
      if (storedHighscore !== null) {
        setHighscore(parseInt(storedHighscore, 10));
        setHighscoreDate(storedDate || '');
      }
    } catch (error) {
      Alert.alert('Error loading highscore');
    }
  };

  const saveHighscore = async (score, date) => {
    try {
      await AsyncStorage.setItem('highscore', score.toString());
      await AsyncStorage.setItem('highscoreDate', date);
    } catch (error) {
      Alert.alert('Error saving highscore');
    }
  };
//Funktionen die Async involvieren habe ich mit Hilfe von ChatGPT gemacht

  return (
    <View className="justify-center items-center bg-violet-500 p-4 rounded-lg shadow-md">
      <Text className="text-center text-xl text-blue-500">Highscore</Text>
      <Text className="text-center text-2xl text-blue-500">{highscore}</Text>
      <Text className="text-center text-lg text-blue-500">{highscoreDate}</Text>
    </View>
  );
}
