import { createStackNavigator } from '@react-navigation/stack';
import GetNoteScreen from '../screens/GetNoteScreen';
import TabNavigation from './TabNavigation';
import { useState } from 'react';

const Stack = createStackNavigator();

const StackNavigation = () => {
    const [edit, setEdit] = useState(false);

    return (
        <Stack.Navigator
            initialRouteName="tabnavigation"
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="tabnavigation" children={() => <TabNavigation edit={edit} />} />
            <Stack.Screen name="getnote" children={() => <GetNoteScreen edit={edit} setEdit={setEdit}/>} />
        </Stack.Navigator>
    )
}

export default StackNavigation;