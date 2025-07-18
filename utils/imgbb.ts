import axios from "axios";
import * as FileSystem from "expo-file-system";

export const uploadToImgBB = async (
  imageUri: string
): Promise<string | null> => {
  try {
    const apiKey = process.env.EXPO_PUBLIC_IMGBB_API_KEY;
    if (!apiKey) throw new Error("ImgBB API key is missing");

    // Read image as base64
    const base64Image = await FileSystem.readAsStringAsync(imageUri, {
      encoding: FileSystem.EncodingType.Base64,
    });

    const formData = new FormData();
    formData.append("image", base64Image);
    formData.append("key", apiKey);

    const response = await axios.post(
      `https://api.imgbb.com/1/upload?expiration=60`,
      formData,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );

    if (response.data.success) {
      console.log(response.data);
      return response.data.data.url;
    }
    return null;
  } catch (error) {
    console.error("ImgBB Upload Error:", error);
    return null;
  }
};
