import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SettingsScreen from "src/screens/SettingsScreen";
import useTheme from "@hooks/useTheme";
import typography from "@themes/typography";
import strings from "@resources/strings";
import BackButton from "@components/Buttons/BackButton";
import { useNavigation } from "@react-navigation/native";
import HelpScreen from "@screens/HelpScreen";

export type RootStackParamList = {
  Settings: undefined;
  Help: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function StackNavigation() {
  const { colors } = useTheme();
  const navigation = useNavigation();

  return (
    <Stack.Navigator
      screenOptions={{
        headerLeft: (props) =>
          props.canGoBack && (
            <BackButton onPress={handleBackPress} />
          ),
        contentStyle: { backgroundColor: colors.shades.bg },
        headerStyle: { backgroundColor: colors.shades.bg },
        headerShadowVisible: false,
        headerTitleStyle: {
          ...typography.paragraphSemiTwo,
          color: colors.shades.black,
        },
        headerBackTitleVisible: false,
      }}
    >
      <Stack.Screen name={"Settings"} component={SettingsScreen} />
      <Stack.Screen name={"Help"} component={HelpScreen} options={{headerTitle: strings.help_support}} />
    </Stack.Navigator>
  );

  function handleBackPress() {
    navigation.goBack();
  }
}
