import { createStackNavigator } from '@react-navigation/stack';
import CalendarScreen from '../screens/CalendarScreen';
import GetNoteScreen from '../screens/GetNoteScreen';
import TabNavigation from './TabNavigation';

const Stack = createStackNavigator();

const StackNavigation = () => {
    return (
        <Stack.Navigator
            initialRouteName="tabnavigation"
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="tabnavigation" component={TabNavigation} />
            <Stack.Screen name="getnote" component={GetNoteScreen} />
        </Stack.Navigator>
    )
}

export default StackNavigation;