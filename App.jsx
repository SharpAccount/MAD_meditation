import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Context, ContextProvider } from "./src/core/Context";
import { routes } from "./src/constants/routes";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {useContext, useEffect} from "react";

const Stack = createNativeStackNavigator();

export default function App() {

    const {setUser} = useContext(Context);

    let a;

    const isEntered = async () => {
        let userInfo = await AsyncStorage.getItem("userInfo");
        userInfo = JSON.parse(userInfo);
        if (userInfo.email === "") {
            console.log(userInfo);
            return false
        }
        setUser(userInfo)
        console.log(userInfo);
        return true;
    }

  return (
    <NavigationContainer>
        <ContextProvider>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            {
                isEntered() === true ? <Stack.Screen name={routes[3].name} component={routes[3].page}></Stack.Screen>
                    : routes.map((el) => <Stack.Screen name={el.name} component={el.page}/>)
            }
          </Stack.Navigator>
        </ContextProvider>
    </NavigationContainer>
  )
}
