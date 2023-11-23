import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

// screens
import MoodCheckInScreen from './MoodCheckInScreen';
import CalendarScreen from './CalendarScreen';
import ResourcesScreen from './ResourcesScreen';
import HelpScreen from './HelpScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const MainContainer = () => {

    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName='Calendar'
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        let rn = route.name;

                        if (rn === 'Calendar') {
                            iconName = focused ? 'calendar' : 'calendar-outline'
                        }
                        else if (rn === 'Check In') {
                            iconName = focused ? 'document' : 'document-outline'
                        }
                        else if (rn === 'Resources') {
                            iconName = focused ? 'folder' : 'folder-outline'
                        }
                        else if (rn === 'Help') {
                            iconName = focused ? 'help-circle' : 'help-circle-outline'
                        }
                        return <Ionicons name={iconName} size={30} color='#EA9E5B' />
                    },

                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarStyle: {
                        
                        
                    }

                    
                })}

                

            >

                <Tab.Screen name='Calendar' component={CalendarScreen} />
                <Tab.Screen name='Check In' component={MoodCheckInScreen} />
                <Tab.Screen name='Resources' component={ResourcesScreen} />
                <Tab.Screen name='Help' component={HelpScreen} />

            </Tab.Navigator>
        </NavigationContainer>

    )
}

export default MainContainer;