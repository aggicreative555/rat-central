import { initializePostsPage } from "../../ui/post/initliazePostTemplate";
import { initializeSearch } from "../../ui/post/initializeSearch";

export function initializePostFunctions() {
  try {
    initializeSearch();

  } catch {
    console.error('Error loading search functionality.')
  }

  try {
    initializePostsPage();

  } catch {
    console.error('Error loading posts.')
  }
};

initializePostFunctions();
