import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {ContextProvider} from "./src/core/Context";
import {routes} from "./src/constants/routes";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <ContextProvider>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            {routes.map((el) => (
                <Stack.Screen name={el.name} component={el.page}/>
            ))}
          </Stack.Navigator>
        </ContextProvider>
    </NavigationContainer>
  )
}
