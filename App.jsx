import OnBoarding from "./ui/pages/OnBoarding";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {LoginPage} from "./ui/pages/LoginPage";
import RegisterPage from "./ui/pages/RegisterPage";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="OnBoarding" component={OnBoarding}/>
        <Stack.Screen name="Login" component={LoginPage}/>
        <Stack.Screen name="Register" component={RegisterPage}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
