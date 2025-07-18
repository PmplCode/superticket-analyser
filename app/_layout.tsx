import '../global.css'
import { Tabs } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";

export default function Layout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Scan",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="camera" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="advice"
        options={{
          title: "Advice",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="lightbulb-o" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
