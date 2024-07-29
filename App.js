import StackNavigation from "./src/navigation/StackNavigation";
import Toast from 'react-native-toast-message';
import { View, Text } from "react-native";
import './gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from "expo-font";
import { useEffect } from "react";
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

const toastConfig = {
  moodToast: ({ text1 }) => (
    <View 
      style={{ 
        height: "100%", 
        paddingTop: "5%",
        paddingBottom: "5%",
        width: "80%", 
        backgroundColor: "#EA9E5B",
        borderRadius: "30%",
        // shadow styles
        shadowRadius: "3%",
        shadowOffset: {
            height: "5%",
            width: 0,
        },
        shadowOpacity: "10%",
        // shadow styles
        shadowRadius: "1%",
        shadowOffset: {
          height: "5%",
          width: 0,
        },
        shadowOpacity: "10%",
        shadowColor: "#D8737F",
      }}
    >
      <Text 
        style={{
          color: "white",
          fontFamily: "Gaegu-Bold",
          fontSize: 20,
          textAlign: "center",
        }}
      >{text1}</Text>
    </View>
  )
}

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
      <Toast 
        config={toastConfig}
        topOffset={70}
        visibilityTime={2000}
      />
    </NavigationContainer>
  );
}
