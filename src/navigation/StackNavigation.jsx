import { createStackNavigator } from '@react-navigation/stack';
import OldNoteScreen from '../screens/OldNoteScreen';
import TabNavigation from './TabNavigation';
import { useState } from 'react';
import NewNoteScreen from '../screens/NewNoteScreen';

const Stack = createStackNavigator();

const StackNavigation = () => {
    const [edit, setEdit] = useState(false);
    const [done, setDone] = useState(false);

    return (
        <Stack.Navigator
            initialRouteName="tabnavigation"
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="tabnavigation" children={() => <TabNavigation edit={edit} done={done} />} />
            <Stack.Screen name="oldnote" children={() => <OldNoteScreen edit={edit} setEdit={setEdit}/>} />
            <Stack.Screen name="newnote" children={() => <NewNoteScreen done={done} setDone={setDone} />} />
        </Stack.Navigator>
    )
}

export default StackNavigation;