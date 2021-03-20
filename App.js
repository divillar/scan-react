import {StatusBar} from 'expo-status-bar';
import React from 'react';
import{StyleSheet,Text,View} from 'react-native';
import {NavigationContainer}from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

const Stack = createStackNavigator()
 import Createbarcode  from './Screens/Createbarcode'
 import barcodelist from './Screens/barcodelist'
 import barcodetail from './Screens/barcodedetail'

function MyStack(){
  return(
    <Stack.Navigator>
      <Stack.Screen name="createbarcode" component={Createbarcode}/>
      <Stack.Screen name="barcodelist" component={barcodelist}/>
      <Stack.Screen name="barcodedetail" component={barcodetail}/>
    </Stack.Navigator>
  )
}
export default function App(){
  return(
    <NavigationContainer>
     <MyStack/>
    </NavigationContainer>
  );
}

const style = StyleSheet.create({
  container:{
      flex: 1,
      backgroundColor:'#fff',
      alignItems:'center',
      justifyContent:'center',
  },
});