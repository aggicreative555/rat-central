import { API_AUTH_KEY } from "../constants";
import { load } from "../../utilities/authGuard";
import { save } from "../../utilities/authGuard";
import { getHeaders } from "../headers";

/**
 *
 * @param {string} [name="apiKey"] - The name for the API Key.
 * @returns {Promise<string>} A promise that resolves to the API key.
 * @throws {Error} If the access token is missing or API key creation fails.
 *
 * @example
 * const apiKey = await getApiKey();
 * console.log(ApiKey); // Outputs API Key
 */

export async function getApiKey(name = "apiKey") {
  try {
    const storedApiKey = localStorage.getItem("apiKey");
    if (storedApiKey) {
      return storedApiKey;
    }

    console.log(storedApiKey);

    const accessToken = load("accessToken");

    if (!accessToken) {
      throw new Error(
        "Access token not found. Please log in to create an API key.",
      );
    }

    const body = { name };

    const response = await getHeaders(API_AUTH_KEY, {
      method: "POST",
      body: JSON.stringify(body),
    });

    if (response.status === 201) {
      const { data } = await response.json();
      const apiKey = data.key;

      save("apiKey", apiKey);
      return apiKey;
    } else {
      throw new Error(`Failed to create API key`);
    }
  } catch (error) {
    console.error(`Error creating the API key: ${error.message}`);
    throw error;
  }
}
