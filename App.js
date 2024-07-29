import StackNavigation from "./src/navigation/StackNavigation";
import './gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from "expo-font";
import { useEffect } from "react";
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [loaded, error] = useFonts({
    "Gaegu-Reg": require("./assets/fonts/Gaegu-Regular.ttf"),
    "Gaegu-Bold": require("./assets/fonts/Gaegu-Bold.ttf"),
    "ABeeZee-Reg": require("./assets/fonts/ABeeZee-Regular.ttf")
  })

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  );
}
