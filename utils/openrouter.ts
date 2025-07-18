import axios from "axios";

export const analyzeReceipt = async (
  imageUrl: string
): Promise<{
  extractedText: string;
  advice: string;
} | null> => {
  try {
    const apiKey = process.env.EXPO_PUBLIC_OPENROUTER_API_KEY;

    if (!apiKey) throw new Error("OpenRouter API key is missing");

    // As a senior product manager, let's provide a prompt that delivers actionable value:
    // - Extract all grocery items from the receipt.
    // - Categorize items (e.g., fruits, vegetables, meat, fish, dairy, snacks, beverages, etc.).
    // - Identify healthy and less healthy choices.
    // - Suggest 2-3 practical tips for healthier or more budget-friendly shopping.
    // - Summarize the overall nutritional quality and spending pattern.
    // - Output should be clear, structured, and easy to understand for everyday users.

    const response = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        model: "google/gemini-2.0-flash-exp:free",
        messages: [
          {
            role: "user",
            content: [
              {
                type: "text",
                text: `
You are a nutrition and shopping assistant. 
Given the following receipt image, please:
1. List all purchased items, grouping them into categories such as fruits, vegetables, meat, fish, dairy, grains, snacks, beverages, and others.
2. For each category, highlight any items that are particularly healthy or less healthy.
3. Provide a brief summary of the overall nutritional quality of this shopping trip.
4. Suggest 2-3 actionable tips for making future shopping trips healthier or more budget-friendly.
5. If possible, estimate the proportion of healthy vs. less healthy items.

Please present your answer in a clear, structured format with bullet points or sections for each part.
Thank you!
                `.trim(),
              },
              {
                type: "image_url",
                image_url: { url: imageUrl },
              },
            ],
          },
        ],
      },
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
      }
    );

    const content = response.data.choices[0].message.content;
    console.log(
      "AI analysis result:",
      response.data.choices[0].message.content
    );

    // Return as { extractedText, advice }
    return {
      extractedText: content,
      advice: content,
    };
  } catch (error) {
    console.error("OpenRouter API Error:", error);
    return null;
  }
};
