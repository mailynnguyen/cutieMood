import { createStackNavigator } from '@react-navigation/stack';
import CalendarScreen from '../screens/CalendarScreen';
import GetNoteScreen from '../screens/GetNoteScreen';

const Stack = createStackNavigator();

const StackNavigation = ({ done }) => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="calendarscreen" children={() => <CalendarScreen done={done} />} />
            <Stack.Screen name="getnote" component={GetNoteScreen} />
        </Stack.Navigator>
    )
}

export default StackNavigation;