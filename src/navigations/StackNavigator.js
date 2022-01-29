import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
/**
 * Screens
 */
import Home from '../screens/Home/index';
import Details from '../screens/InspectorDetails/index';
import ZoneDetails from '../screens/ZoneDetails/index';
import ImageTaker from '../screens/ImageTaker/index';
import ImageDetails from '../screens/ImageDetails/index';

const Stack = createStackNavigator();

export default function MyNavigator() {
    return (<NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={Home}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="InspectorDetails"
                component={Details}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="ZoneDetails"
                component={ZoneDetails}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="ImageTaker"
                component={ImageTaker}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="ImageDetails"
                component={ImageDetails}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    </NavigationContainer>)
}