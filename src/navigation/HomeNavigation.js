
import React from 'react';
import { createBottomTabNavigator, } from '@react-navigation/bottom-tabs';
import PopularMovies from '../screens/PopularMovies';
import MyMovies from '../screens/MyMovies';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();


function HomeTabs() {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false}} >
            <Tab.Screen name="Popular Movies" component={PopularMovies} options={{
                tabBarActiveTintColor: "#000",
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="video-vintage" color={color} size={size} />
                ),
            }}
            />
            <Tab.Screen  name="My Movies" component={MyMovies} options={{
                tabBarTestID:"openMyMovies",
                tabBarActiveTintColor: "#000",
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="video-plus" color={color} size={size} />
                ),
            }} />
        </Tab.Navigator>

    );
}

export default HomeTabs
