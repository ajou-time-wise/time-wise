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
import ManageScheduleView from "./screens/ManageScheduleView";
import { ScheduleContext, ScheduleProvider } from "./hooks/ScheduleProvider";
import { TodoProvider, useTodoContext } from "./hooks/TodoProvider";
import { Colors } from "./constant/colors";
import * as Notifications from "expo-notifications";

Notifications.setNotificationHandler({
  handleNotification: async () => {
    return {
      shouldPlaySound: false,
      shouldSetBadge: false,
      shouldShowAlert: true,
    };
  },
});

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function TimeWiseMainView({ navigation }) {
  return (
    <Tab.Navigator
      screenOptions={({ navigation }) => ({
        headerTitle: "Time Wise",
        headerStyle: { backgroundColor: Colors.tabColor },
        headerTintColor: "white",
        tabBarStyle: {
          backgroundColor: Colors.tabColor,
        },
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: Colors.tabTintColor,
      })}
    >
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
          headerRight: ({ tintColor }) => (
            <IconButton
              icon="add"
              size={30}
              color={tintColor}
              onPress={() => {
                navigation.navigate("ManageSchedule");
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  const [showMainScreen, setShowMainScreen] = useState(false);
  const scheduleNotification = async (content, trigger) => {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "Time Wise",
        body: content,
      },
      trigger,
    });
  };

  useEffect(() => {
    const morningTrigger = { hour: 9, minute: 0, repeats: true };
    const afternoonTrigger1 = { hour: 12, minute: 0, repeats: true };
    const afternoonTrigger2 = { hour: 15, minute: 0, repeats: true };
    const eveningTrigger1 = { hour: 18, minute: 0, repeats: true };
    const eveningTrigger2 = { hour: 21, minute: 0, repeats: true };

    scheduleNotification("Let's Do It", morningTrigger);
    scheduleNotification("Let's Do It", afternoonTrigger1);
    scheduleNotification("Let's Do It", afternoonTrigger2);
    scheduleNotification("Let's Do It", eveningTrigger1);
    scheduleNotification("Let's Do It", eveningTrigger2);
  }, []);

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
    <ScheduleProvider>
      <TodoProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerTitle: "Time Wise",
              headerStyle: { backgroundColor: Colors.tabColor },
              headerTintColor: "white",
            }}
          >
            <Stack.Screen
              name="TimeWiseMainView"
              component={TimeWiseMainView}
              options={{ headerShown: false }}
            />
            <Stack.Screen name="Manage" component={ManageTodoView} />
            <Stack.Screen
              name="ManageSchedule"
              component={ManageScheduleView}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </TodoProvider>
    </ScheduleProvider>
  );
}
