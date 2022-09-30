import React from 'react-native';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,NativeModules
  } from 'react-native';
const {PedometerAndroid} = NativeModules;
export default health =() => {
  return new Promise((resolve, reject) => {
    PedometerAndroid.getHistory((result) => {
      try {
        result = JSON.parse(result);
        result = Object.keys(result).map((key) => {
          let date = new Date(key);
          date.setHours(0);
          return {
            steps: result[key].steps,
            date: date
          }
        });
        resolve(result);
      } catch(err) {
        reject(err);
      };
    }, (err) => {
      reject(err);
    });
  });
}
