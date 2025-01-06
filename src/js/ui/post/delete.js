import { deletePost } from "../../api/post/delete";

/**
 * @async
 * @function onDeletePost
 * @param {Event} event - The form submission or button click event.
 * @throws {Error} If the post ID is missing or the deletion fails.
 *
 */

export async function onDeletePost(event) {
  event.preventDefault();

  const params = new URL(document.location).searchParams;

  const id = params.get("id");

  if (!id) {
    console.error("Post ID is required for deleting.");
    return;
  }

  try {
    await deletePost(id);
    alert("Post has been deleted!");
  } catch (error) {
    console.error("Error deleting post:", error);
    alert("Failed to delete post. Please try again.");
  }
}
