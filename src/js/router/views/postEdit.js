import { onUpdatePost } from "../../ui/post/update";
import { authGuard } from "../../utilities/authGuard";
import { getEditPostData } from "../../api/post/update";
import { onDeletePost } from "../../ui/post/delete";

/**
 * Initializes event listeners for editing a post and deleting a post.
 * This function is executed once the DOM has fully loaded.
 *
 * @function DOMContentLoaded
 * @fires authGuard - Checks if the user is authenticated before proceeding.
 * @fires getEditPostData - Retrieves post data for editing if a post ID is available.
 * @fires onUpdatePost - Handles form submission to update a post.
 * @fires onDeletePost - Handles the deletion of a post.
 *
 */

function initializePostEdit () {

  authGuard();

  const params = new URL(document.location).searchParams;
  const id = params.get("id");

  if (id) {
    getEditPostData(id);
  } else {
    console.error("Post id not found.");
  }

  const form = document.querySelector("#updatePost");
  const deleteButton = document.querySelector("#deleteButton");

  if (form) {
    form.addEventListener("submit", onUpdatePost);
  } else {
    console.error(
      "Update Post form not found. Verify the `id` attribute and ensure it is loaded in the DOM.",
    );
  }

  if (deleteButton) {
    deleteButton.addEventListener("click", (event) => {
      event.preventDefault();
      onDeletePost(event);
    });
  } else {
    console.error(
      "Delete button not found. Verify the `id` attribute and ensure it is loaded in the DOM.",
    );
  }

}

initializePostEdit();
