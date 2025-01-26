import { onCreatePost } from "../../ui/post/create";
import { authGuard } from "../../utilities/authGuard";

function initializePostCreate() {
  authGuard();

  const form = document.querySelector("#createPost");

  if (form) {
    form.addEventListener("submit", onCreatePost);
  } else {
    console.error("Create Post form not found");
  }
}

initializePostCreate();
