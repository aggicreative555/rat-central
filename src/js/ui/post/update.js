import { updatePost } from "../../api/post/update";

/**
 * Updates an existing post by submitting user-modified data to the API.
 *
 * @async
 * @function onUpdatePost
 * @param {Event} event - The form submission event.
 * @throws {Error} If the post ID is missing or the update operation fails.
 *
 */

export async function onUpdatePost(event) {
  event.preventDefault();

  const form = event.target;
  const formData = new FormData(form);
  const postData = Object.fromEntries(formData.entries());

  const params = new URL(document.location).searchParams;
  const id = params.get("id");

  if (!id) {
    console.error("Post ID is required for updating.");
    return;
  }

  const title = postData.title || "";
  const body = postData.body || "";
  const tags = postData.tags
    ? postData.tags.split(",").map((tag) => tag.trim())
    : [];
  const media = postData.mediaUrl
    ? { url: postData.mediaUrl, alt: postData.mediaAlt || "" }
    : null;

  try {
    await updatePost(id, title, body, tags, media);

    alert("Post successfully updated!");

    window.location.href = `/post/?id=${id}`;
  } catch (error) {
    console.error("Error updating post:", error);
    alert("Failed to update post. Please try again.");
  }
}
