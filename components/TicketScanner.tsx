import React, { useState, useCallback } from "react";
import { View, Text, Pressable, Image, Platform } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useStore } from "../store/ticketStore";
import { uploadToImgBB } from "../utils/imgbb";
import { analyzeReceipt } from "../utils/openrouter";
import { router } from "expo-router";

export default function TicketScanner() {
  const [image, setImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const { setTicketImage, setExtractedData, setAdvice } = useStore();

  // Ensure permissions are requested on mount for iOS
  React.useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        await ImagePicker.requestCameraPermissionsAsync();
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      }
    })();
  }, []);

  const pickImage = useCallback(async () => {
    try {
      const permission = await ImagePicker.getMediaLibraryPermissionsAsync();
      if (!permission.granted) {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
          return;
        }
      }

      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 1,
      });

      if (!result.canceled && result.assets && result.assets.length > 0) {
        setImage(result.assets[0].uri);
        setTicketImage(result.assets[0].uri);
      }
    } catch (e) {
      alert("Error picking image: " + e);
    }
  }, [setTicketImage]);

  const takePhoto = useCallback(async () => {
    try {
      const permission = await ImagePicker.getCameraPermissionsAsync();
      if (!permission.granted) {
        const { status } = await ImagePicker.requestCameraPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera permissions to make this work!");
          return;
        }
      }

      const result = await ImagePicker.launchCameraAsync({
        quality: 1,
      });

      if (!result.canceled && result.assets && result.assets.length > 0) {
        setImage(result.assets[0].uri);
        setTicketImage(result.assets[0].uri);
      }
    } catch (e) {
      alert("Error taking photo: " + e);
    }
  }, [setTicketImage]);

  const processImage = useCallback(async () => {
    if (!image) return;
    setLoading(true);

    try {
      // Upload to ImgBB
      const imageUrl = await uploadToImgBB(image);
      if (!imageUrl) {
        alert("Failed to upload image to ImgBB");
        setLoading(false);
        return;
      }

      // Analyze with OpenRouter
      const result = await analyzeReceipt(imageUrl);
      if (result) {
        setExtractedData(result.extractedText);
        setAdvice(result.advice);
        // Navigate to /advice using Expo Router
        // (make sure to import and use useRouter at the top of your component)
        router.push("/advice");
      } else {
        alert("Failed to analyze receipt");
      }
    } catch (e) {
      alert("Error processing image: " + e);
    } finally {
      setLoading(false);
    }
  }, [image, setExtractedData, setAdvice]);

  return (
    <View className="flex-1 justify-center items-center p-4">
      <Text className="text-2xl font-bold mb-4">Scan Your Receipt</Text>
      {image && (
        <Image source={{ uri: image }} className="w-64 h-64 mb-4 rounded" />
      )}
      <Pressable
        className="bg-blue-500 p-4 rounded-lg mb-2"
        onPress={takePhoto}
        disabled={loading}
        android_ripple={{ color: "#2563eb" }}
        accessibilityRole="button"
      >
        <Text className="text-white text-center">Take Photo</Text>
      </Pressable>
      <Pressable
        className="bg-green-500 p-4 rounded-lg mb-2"
        onPress={pickImage}
        disabled={loading}
        android_ripple={{ color: "#22c55e" }}
        accessibilityRole="button"
      >
        <Text className="text-white text-center">Upload from Gallery</Text>
      </Pressable>
      {image && (
        <Pressable
          className={`bg-purple-500 p-4 rounded-lg ${
            loading ? "opacity-50" : ""
          }`}
          onPress={processImage}
          disabled={loading}
          android_ripple={{ color: "#a21caf" }}
          accessibilityRole="button"
        >
          <Text className="text-white text-center">
            {loading ? "Processing..." : "Process Receipt"}
          </Text>
        </Pressable>
      )}
    </View>
  );
}
