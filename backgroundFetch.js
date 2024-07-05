import * as BackgroundFetch from 'expo-background-fetch';
import * as TaskManager from 'expo-task-manager';
import AsyncStorage from '@react-native-async-storage/async-storage';

const BACKGROUND_FETCH_TASK = 'background-fetch';

TaskManager.defineTask(BACKGROUND_FETCH_TASK, async () => {
  try {
    const counter = await AsyncStorage.getItem('counter');
    const newCounter = (parseInt(counter, 10) || 0) + 120; // Assuming 120 steps per minute (500 ms interval)
    await AsyncStorage.setItem('counter', newCounter.toString());

    console.log(`Background fetch: counter updated to ${newCounter}`);

    return BackgroundFetch.BackgroundFetchResult.NewData;
  } catch (error) {
    console.error(error);
    return BackgroundFetch.BackgroundFetchResult.Failed;
  }
});

export const registerBackgroundFetchAsync = async () => {
  return BackgroundFetch.registerTaskAsync(BACKGROUND_FETCH_TASK, {
    minimumInterval: 60, // 1 minute
    stopOnTerminate: false, // android only
    startOnBoot: true, // android only
  });
};

export const unregisterBackgroundFetchAsync = async () => {
  return BackgroundFetch.unregisterTaskAsync(BACKGROUND_FETCH_TASK);
};
