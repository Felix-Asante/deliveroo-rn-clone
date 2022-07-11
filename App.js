import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TailwindProvider } from "tailwindcss-react-native";

import HomeScreen from "./screens/HomeScreen";
const Stack = createNativeStackNavigator();

export default function App() {
	const screenOptions = {
		headerShown: false,
	};
	return (
		<NavigationContainer>
			<TailwindProvider>
				<Stack.Navigator>
					<Stack.Screen
						name="home"
						component={HomeScreen}
						options={screenOptions}
					/>
				</Stack.Navigator>
			</TailwindProvider>
		</NavigationContainer>
	);
}
