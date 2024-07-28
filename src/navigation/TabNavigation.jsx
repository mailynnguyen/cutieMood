import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useState } from 'react';
// import CalendarScreen from '../screens/CalendarScreen';
import HelpScreen from '../screens/HelpScreen';
import ResourcesScreen from '../screens/ResourcesScreen';
import ChatScreen from '../screens/ChatScreen'
// import NoteScreen from '../screens/NoteScreen';
import Ionicons from '@expo/vector-icons/Ionicons';
import Entypo from '@expo/vector-icons/Entypo';
import { TouchableOpacity } from 'react-native';
import PostNoteScreen from '../screens/PostNoteScreen';
import StackNavigation from './StackNavigation';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
    const [done, setDone] = useState(false);

    return (
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    headerShown: false,
                    tabBarStyle: {
                        paddingBottom: "7%",
                        paddingTop: "2%",
                        height: "12%",
                        borderTopColor: "#685D79",
                        borderTopWidth: "2px",
                    },
                    tabBarLabelStyle: {
                        color: "#685D79",
                        fontFamily: "Gaegu-Bold",
                        fontSize: 16,
                    },
                    tabBarIcon: ({ focused, color }) => {
                        const lightGray = "#C0C0C0";
                        const yellow = "#EA9E5B";
                        var color;

                        if (route.name === "calendar") {
                            color = focused ? yellow : lightGray;
                            return <Ionicons name="calendar" size={40} color={color} />
                        }
                        else if (route.name === "chat") {
                            color = focused ? yellow : lightGray;
                            return <Entypo name="chat" size={40} color={color} />
                        }
                        else if (route.name === "help") {
                            color = focused ? yellow : lightGray;
                            return <Entypo name="help-with-circle" size={40} color={color} />
                        }
                        else if (route.name === "resources") {
                            color = focused ? yellow : lightGray;
                            return <Ionicons name="folder-open-sharp" size={40} color={color} />
                        }
                    }, 
                })}
            >
                <Tab.Screen name="calendar" children={() => <StackNavigation done={done} />} />
                <Tab.Screen name="chat" component={ChatScreen} />
                <Tab.Screen name="postnote" children={() => <PostNoteScreen done={done} setDone={setDone} />}
                    options={() => ({
                        tabBarStyle: {
                            display: "none",
                        },
                        tabBarButton: (props) => 
                            <TouchableOpacity
                                {...props}
                                style={{
                                    backgroundColor: "#EA9E5B",
                                    height: "110%",
                                    width: "20%",
                                    borderRadius: "20%",
                                    top: "-10%",
                                    flex: 1,
                                    justifyContent: "center",
                                    alignItems: "center",
                                    // shadow styles
                                    shadowRadius: "3%",
                                    shadowOffset: {
                                        height: "5%",
                                        width: 0,
                                    },
                                    shadowOpacity: "30%",
                                    shadowColor: "#C0C0C0",
                                }}
                            >
                                <Entypo name="plus" size={52} color="white" />
                            </TouchableOpacity>
                    })}
                />
                <Tab.Screen name="help" component={HelpScreen} />
                <Tab.Screen name="resources" component={ResourcesScreen} />
            </Tab.Navigator>
    )
}

export default TabNavigation;