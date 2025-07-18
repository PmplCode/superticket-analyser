import React from "react";
import { View, Text, ScrollView } from "react-native";
import { useStore } from "../store/ticketStore";

export default function AdviceDisplay() {
  const { extractedData, advice } = useStore();

  return (
    <ScrollView className="flex-1 p-4 bg-gray-100">
      <Text className="text-2xl font-bold mb-4 text-center">
        Receipt Analysis
      </Text>
      {extractedData ? (
        <View className="bg-white p-4 rounded-lg mb-4 shadow">
          <Text className="text-lg font-semibold text-gray-800">
            Extracted Text:
          </Text>
          <Text className="text-base text-gray-600">{extractedData}</Text>
        </View>
      ) : (
        <Text className="text-base text-gray-500 mb-4">
          No receipt data yet.
        </Text>
      )}
      {advice ? (
        <View className="bg-green-100 p-4 rounded-lg shadow">
          <Text className="text-lg font-semibold text-green-800">Advice:</Text>
          <Text className="text-base text-green-600">{advice}</Text>
        </View>
      ) : (
        <Text className="text-base text-gray-500">No advice available.</Text>
      )}
    </ScrollView>
  );
}
