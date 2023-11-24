import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ManageTodoView from "./screens/ManageTodoView";
import CalendarTodoListView from "./screens/CalendarTodoListView";
import ScheduleView from "./screens/ScheduleView";
import { Ionicons } from "@expo/vector-icons";
import IconButton from "./components/IconButton";
import { useEffect, useState } from "react";
import InitialView from "./screens/InitialView";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function TimeWiseMainView({ navigation }) {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Calendar"
        component={CalendarTodoListView}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="calendar" color={color} size={size} />
          ),
          headerRight: ({ tintColor }) => (
            <IconButton
              icon="add"
              size={30}
              color={tintColor}
              onPress={() => {
                navigation.navigate("Manage");
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Schedule"
        component={ScheduleView}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="time" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  const [showMainScreen, setShowMainScreen] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowMainScreen(true);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  if (!showMainScreen) {
    return <InitialView />;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="TimeWiseMainView"
          component={TimeWiseMainView}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Manage" component={ManageTodoView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
