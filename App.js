import Main from "./src/screens/Mainscreen";
import Sleep from "./src/screens/Sleepscreen";
import Splash from "./src/screens/splash";
import Speak from "./src/screens/Speakscreen";
import Login from "./src/screens/Loginscreen";
import Signup from "./src/screens/Signupscreen";
import Setting from "./src/screens/Settingscreen";
import Call from "./src/screens/Callscreen";
import Camera from "./src/screens/Camerascreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{ headerShown: false }}
      >
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="Main" component={Main} />
          <Stack.Screen name="Sleep" component={Sleep} />
          <Stack.Screen name="Splash" component={Splash} />
          <Stack.Screen name="Speak" component={Speak} />
          <Stack.Screen name="Setting" component={Setting} />
          <Stack.Screen name="Call" component={Call} />
          <Stack.Screen name="Camera" component={Camera} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
