import { View, Text } from "react-native";
import TicketScanner from "../components/TicketScanner";

export default function Home() {
  return (
    <View className="flex-1 bg-gray-100">
      <Text className="text-3xl font-bold text-center mt-10 mb-4">
        SuperTicket
      </Text>
      <TicketScanner />
    </View>
  );
}
