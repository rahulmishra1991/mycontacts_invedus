import React, {Fragment, useState , useEffect} from 'react';
import { Dimensions, Image } from 'react-native';
import { createDrawerNavigator, useDrawerStatus, DrawerItem } from '@react-navigation/drawer';
import {
    HomeScreen
} from '../screens';
const { width, height } = Dimensions.get('window');

const Drawer = createDrawerNavigator();

const AppDrawerNavigator = () => {
    
    return (
        <Drawer.Navigator initialRouteName="HomeScreen">
            <Drawer.Screen name="HomeScreen" component={HomeScreen} />
        </Drawer.Navigator>
        
    )
}

export default AppDrawerNavigator;