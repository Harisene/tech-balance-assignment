import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SettingsScreen } from "@screens/SettingsScreen";
import CONSTANTS from "@resources/constants";

const Stack = createNativeStackNavigator();

export default function StackNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={CONSTANTS.NAVIGATION.SETTINGS} component={SettingsScreen} />
    </Stack.Navigator>
  );
}
