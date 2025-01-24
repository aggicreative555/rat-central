import { initializePostsPage } from "../../ui/post/initliazePostTemplate";
import { initializeSearch } from "../../ui/post/initializeSearch";
import { renderPostTemplate } from "../../ui/post/postTemplate";

export function initializePostFunctions() {

  try {
    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get("id");

    if (postId) {
      renderPostTemplate(postId);
    } else {
      initializeSearch();
      initializePostsPage();
    }

  } catch {
    console.error('Error initalizing post page.')
  }
};

initializePostFunctions();
