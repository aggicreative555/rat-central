import { createPost } from "../../api/post/create";
/**
 * Handles the creation of a new post by submitting user input to the API.
 *
 * @async
 * @function onCreatePost
 * @param {Event} event - The form submission event.
 * @throws {Error} If post creation fails or the response does not contain a valid post ID.
 *
 */

export async function onCreatePost(event) {
  event.preventDefault();

  const form = event.target;
  const formData = new FormData(form);
  const postData = Object.fromEntries(formData.entries());

  const title = postData.title?.trim() || "";
  const body = postData.content?.trim() || "";
  const tags = postData.tags
    ? postData.tags.split(",").map((tag) => tag.trim())
    : [];

  const media = {
    url: postData.mediaUrl?.trim() || "",
    alt: postData.mediaAlt?.trim() || "Post image",
  };

  console.log(media);

  try {
    const newPost = await createPost(title, body, tags, media);

    if (newPost && newPost.data && newPost.data.id) {
      alert("Post successfully created!");
      // Redirect to the single post view with the new post ID
      window.location.href = `/post/?id=${newPost.data.id}`;
    } else {
      throw new Error("Post creation succeeded but no ID was returned.");
    }
  } catch (error) {
    console.error("Error creating post:", error);
    alert("Failed to update post. Please try again.");
  }
}
