import { initializePostsPage } from "../../ui/post/initliazePostTemplate";
import { initializeSearch } from "../../ui/post/initializeSearch";


export function initializeHomePage() {
  try {
    initializePostsPage();
  } catch {
    console.error('Error loading post template.')
  }

  try {
    initializeSearch();
  } catch {
    console.error('Error loading search functionality.')
  }
};

initializeHomePage();
