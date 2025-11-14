import { API_SOCIAL_POSTS } from "../constants";
import { getHeaders } from "../headers";
// import { populateUpdateForm } from "../../ui/post/populateUpdateForm";

/**
 * Creates a new post by sending the data to the API.
 *
 * @param {Object} data - The post parameters.
 * @param {string} data.title - The title of the post (required).
 * @param {string} [data.body] - The body of the post (optional).
 * @param {string[]} [data.tags] - Array of tags associated with the post (optional).
 * @param {Object} [data.media] - Media object containing URL and alt text (optional).
 * @param {string} [data.media.url] - The URL of the media (optional).
 * @param {string} [data.media.alt] - Alt text for the media (optional).
 * @returns {Promise<Object>} The created post data from the API.
 * @throws {Error} If the API request fails or server returns an error.
 *
 * @example
 * const post = {
 * title = "My post",
 * body = "short description"
 * tags = ["social", "media"],
 * media = {
 * url: "https://example.com/image.jpg",
 * alt: "Example Image" };
 * const response = await createPost(post);
 * console.log(response) // Outputs successfully created post media.
 *
 *
 */

export async function createPost(title, body, tags, media) {
  const response = await getHeaders(API_SOCIAL_POSTS, {
    method: "POST",
    body: JSON.stringify({
      title: title,
      body: body || "",
      tags: tags || [],
      media:
      media && media.url ? {
          url: media.url.trim(),
          alt: media.alt?.trim() || "Post image",
        } : undefined,
      }),
  });

  const post = await response.json();
  console.log('post:',post);

  if (response.ok) {
    const postId = post.data.id;
    alert("Post successfully created!");

    if (postId) {
      window.location.replace(`/post/edit/?id=${postId}`);
    }
  } else {
    console.error("Error creating post:", post);
  }

  return post;
}
