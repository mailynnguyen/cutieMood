import React from 'react';
import MoodCheckInScreen from './screens/MoodCheckInScreen';
import CalendarScreen from './screens/CalendarScreen';
import { useFonts } from 'expo-font';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text } from 'react-native';

const Stack = createNativeStackNavigator();

export default function App() {
    const [fontsLoaded] = useFonts({
        'Gaegu-Reg': require('./assets/font/Gaegu-Regular.ttf'),
        'Gaegu-Bold': require('./assets/font/Gaegu-Bold.ttf')
    })

    if (!fontsLoaded) {
        return <View><Text>Loading...</Text></View>;
    }

   

    return (
        
            <NavigationContainer>
                <Stack.Navigator
                    screenOptions={{
                        headerShown: false,
                    }}
                >
                    <Stack.Screen
                        name='MoodCheckIn'
                        component={MoodCheckInScreen}
                    />

                    <Stack.Screen
                        name='Calendar'
                        component={CalendarScreen}
                    />

                </Stack.Navigator>

            </NavigationContainer>

        

    )

}