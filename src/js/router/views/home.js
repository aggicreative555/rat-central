import { initializePostsPage } from "../../ui/post/initliazePostTemplate";
import { initializeSearch } from "../../ui/post/initializeSearch";
import { initiateTextAnimation } from "../../ui/global/textAnimation";

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

  try {
    initiateTextAnimation();
  } catch {
    console.error('Error Initiating text animation.')
  }
};

initializeHomePage();
