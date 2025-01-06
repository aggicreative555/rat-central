import { API_SOCIAL_POSTS } from "../constants";
import { getHeaders } from "../headers";

/**
 * Fetches the post data for a specific post by ID and populates the edit form with the current values.
 *
 * @async
 * @function getEditPostData
 * @param {string} id - The unique ID of the post to edit.
 * @throws Will throw an error if the fetch request fails.
 * @returns {Promise<void>} Populates the edit form fields with the current post data.
 * @throws {Error} If the API call fails or form not found.
 *
 * @example
 * await getEditPostData("123");
 * // Populates the form with post data for editing.
 */

export async function getEditPostData(id) {
  try {
    const response = await getHeaders(`${API_SOCIAL_POSTS}/${id}`, {
      method: "GET",
    });

    if (!response.ok) throw new Error(`HTTP error: ${response.status}`);

    const data = await response.json();
    const postData = data.data;

    const editPostForm = document.forms.updatePost;

    if (!editPostForm) {
      throw new Error("Form not found in DOM.");
    }

    const titleInput = editPostForm.querySelector("#title");
    const bodyInput = editPostForm.querySelector("#body");
    const urlInput = editPostForm.querySelector("#mediaUrl");
    const altInput = editPostForm.querySelector("#mediaAlt");

    titleInput.value = postData.title || "";
    bodyInput.value = postData.body || "";
    urlInput.value = postData.media?.url || "";
    altInput.value = postData.media?.alt || "";
  } catch (error) {
    console.error(
      "Can't edit this post. Try again later. Error: ",
      error.message,
    );
    throw error;
  }
}

/**
 * Updates an existing post by sending updated data to the API.
 *
 * @async
 * @function updatePost
 * @param {string|number} id - The ID of the post to update.
 * @param {Object} params - The updated post parameters.
 * @param {string} [params.title] - The updated title of the post.(optional)
 * @param {string} [params.body] - The updated body of the post.(optional)
 * @param {string[]} [params.tags] - Array of updated tags associated with the post.(optional)
 * @param {Object} [params.media] - Updated media object containing URL and alt text.(optional)
 * @param {string} [params.media.url] - The updated URL of the media.
 * @param {string} [params.media.alt] - Updated alt text for the media.
 * @returns {Promise<Object>} The updated post data from the API.
 * @throws {Error} If the API request fails or post ID is invalid.
 *
 * @example
 * const updatedPost = await updatePost(123, {
 *   title: "Updated Title",
 *   body: "Updated body content",
 *   tags: ["new", "tag"],
 *   media: {
 * url: "https://example.com/image.jpg",
 * alt: "Updated Image" }
 * });
 * console.log(updatedPost); // Outputs the updated post data.
 */

export async function updatePost(id, title, body, tags, media) {
  if (!id) {
    throw new Error("Post ID is required for updating.");
  }

  const response = await getHeaders(`${API_SOCIAL_POSTS}/${id}`, {
    method: "PUT",
    body: JSON.stringify({
      title: title,
      body: body || "",
      tags: tags || [],
      media: media || null,
    }),
  });

  const post = await response.json();

  return post;
}
