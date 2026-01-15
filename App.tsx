import HomeScreen from "./screens/HomeScreen";
import {RouteStackParams} from "./types/RouteStackParm";
import {NavigationContainer} from "@react-navigation/native";
import DetailsScreen from "./screens/DetailsScreen";
import {createNativeStackNavigator } from '@react-navigation/native-stack';
import FavoritesScreen from "./screens/FavoritesScreen";



export default function App() {
const Stack=createNativeStackNavigator <RouteStackParams>();
  return (
      <NavigationContainer>
          <Stack.Navigator  screenOptions={{
              headerShown: false,
          }}>
              <Stack.Screen name={"Home"} component={HomeScreen} />
              <Stack.Screen name={"Details"} component={DetailsScreen} />
              <Stack.Screen name={"fav"} component={FavoritesScreen} />
          </Stack.Navigator>
      </NavigationContainer>
  );
}


