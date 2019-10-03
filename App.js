import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import{createAppContainer} from 'react-navigation';
import { createBottomTabNavigator} from 'react-navigation-tabs';
import{createStackNavigator} from 'react-navigation-stack';


import LoginScreen from './login';
import tabs from '.tabs';


const stackNavigator = createStackNavigator({
 login: LoginScreen,
 tabs: tabs

},   {

    defaultNavigationOptions: {
        gesturesEnabled: false,

},


 defaultNavigationOptions: {
    gesturesEnabled: false
   
   }


});





export default createAppContainer(stackNavigator)








const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
});
