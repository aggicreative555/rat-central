import { getHeaders } from "../headers";
import { API_KEY, API_SOCIAL_POSTS } from "../constants";

/**
 * Reads a single post by its ID.
 *
 * @async
 * @function readPost
 * @param {string|number} id - The ID of the post to read.
 * @returns {Promise<object>} The response data.
 * @throws {Error} If the API request fails or the id is absent.
 *
 * @example
 * const post = await readPost(123);
 * console.log(post) // Outputs specific id post data.
 */

export async function readPost(id, options = {}) {
  if (!id) {
    throw new Error("Post ID is required.");
  }

  const { author = false, comments = false, reactions = false } = options;

  const queryParams = new URLSearchParams({
    ...(author && { _author: "true" }),
    ...(comments && { _comments: "true" }),
    ...(reactions && { _reactions: "true" }),
  });

  const url = `${API_SOCIAL_POSTS}/${id}${
    queryParams.toString() ? `?${queryParams.toString()}` : ""
  }`;

  const response = await getHeaders(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "X-Noroff-API-Key": API_KEY,
    },
  });

  if (!response.ok) {
    throw new Error(
      `Failed to read post with ID ${id}: ${response.statusText}`,
    );
  }

  const readPost = await response.json();
  return readPost;
}

/**
 * Reads multiple posts with optional pagination and tagging.
 *
 * @async
 * @function readMultiplePosts
 * @param {number} [limit=12] - The maximum number of posts to return.
 * @param {number} [page=1] - The page number for pagination.
 * @param {string} [tag] - An optional tag to filter posts.
 * @returns {Promise<Object>} An object containing an array of posts in the `data` field, and information in a `meta` field.
 * @throws {Error} If the API request fails.
 *
 * @example
 * const { data, meta } = await readMultiplePosts(10, 2, "tech");
 * console.log(data); // Outputs an array of posts tagged "tech".
 * console.log(meta); // Outputs pagination metadata.
 */

export async function readMultiplePosts(limit = 12, page = 1, tag = "") {
  try {
    let apiUrl = `${API_SOCIAL_POSTS}?limit=${limit}&page=${page}`;
    if (tag) apiUrl += `&tag=${encodeURIComponent(tag)}`;

    const response = await getHeaders(apiUrl, {
      method: "GET",
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch posts: ${response.statusText}`);
    }

    const multiplePosts = await response.json();

    return multiplePosts;
  } catch (error) {
    console.error("Failed to retrieve posts.");
    throw error;
  }
}