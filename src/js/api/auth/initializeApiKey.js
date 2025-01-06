import { getApiKey } from "./getKey";

/**
 * Intilizes the retrieval of an API Key.
 * Ensures the API Key is stored for other operations.
 *
 * @async
 * @function initalizeApiKey
 * @returns {Promise<void>} Resolves when the API key is successfully retrieved.
 * @throws {Error} If retieving API key fails.
 */

export async function initalizeApiKey() {
  try {
    await getApiKey();
  } catch (error) {
    console.error("Failed to initalize API key:", error);
    throw error;
  }
}
