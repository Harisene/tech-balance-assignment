import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SettingsScreen } from "@screens/SettingsScreen";
import CONSTANTS from "@resources/constants";
import useTheme from "@hooks/useTheme";
import typography from "@themes/typography";

const Stack = createNativeStackNavigator();

export default function StackNavigation() {
  const { colors } = useTheme();

  return (
    <Stack.Navigator
      screenOptions={{
        contentStyle: { backgroundColor: colors.shades.bg },
        headerStyle: { backgroundColor: colors.shades.bg },
        headerShadowVisible: false,
        headerTitleStyle: {
          ...typography.paragraphSemiThree,
          color: colors.shades.black,
        },
      }}
    >
      <Stack.Screen
        name={CONSTANTS.NAVIGATION.SETTINGS}
        component={SettingsScreen}
      />
    </Stack.Navigator>
  );
}
