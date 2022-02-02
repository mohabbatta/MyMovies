
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeTabs from './HomeNavigation';
import AddMovies from '../screens/AddMovies';

const RootStack = createNativeStackNavigator();


const MainNavigation = () => {
    return (
        <NavigationContainer>
            <RootStack.Navigator screenOptions={{ headerTintColor: '#000' }}>
                <RootStack.Screen
                    name="CinemaX"
                    component={HomeTabs}
                    screenOptions={{ headerShown: false }}
                />
                <RootStack.Screen name="AddMovie" component={AddMovies} />
            </RootStack.Navigator>
        </NavigationContainer>
    );

}

export default MainNavigation