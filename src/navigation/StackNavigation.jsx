import { createStackNavigator } from '@react-navigation/stack';
import OldNoteScreen from '../screens/OldNoteScreen';
import TabNavigation from './TabNavigation';
import { useState } from 'react';
import NewNoteScreen from '../screens/NewNoteScreen';

const Stack = createStackNavigator();

const StackNavigation = () => {
    const [edit, setEdit] = useState(false);
    const [done, setDone] = useState(false);
    const [del, setDel] = useState(false);


    return (
        <Stack.Navigator
            initialRouteName="tabnavigation"
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="tabnavigation" children={() => <TabNavigation edit={edit} setDone={setDone} done={done} del={del} />} />
            <Stack.Screen name="oldnote" children={() => <OldNoteScreen edit={edit} setEdit={setEdit} del={del} setDel={setDel} />} />
            <Stack.Screen name="newnote" children={() => <NewNoteScreen done={done} setDone={setDone} />} />
        </Stack.Navigator>
    )
}

export default StackNavigation;