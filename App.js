/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{useEffect} from 'react';
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
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import health from "./health.android";

const App=() => {
  
  
  // const Test1=()=>{
  //   console.log("Hamza")
  // }
  // const Test=()=>{
  //   console.log("Hamza")
  // }
  
  useEffect(()=>{
    health().then((data) => {
     console.log(data,"Data")
    }).catch((err) => {
      console.log(err);
    });
  })
  

  return (
    <SafeAreaView style={{backgroundColor:"white"}}>
      <View>
        <Text> Hello World</Text>
      </View>
      
      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
