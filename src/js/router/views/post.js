import { initializePostsPage } from "../../ui/post/initliazePostTemplate";
import { initializeSearch } from "../../ui/post/initializeSearch";
import { renderSinglePost } from "../../ui/post/postTemplate";

export async function initializePostFunctions() {

  try {
    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get("id");
    const postsContainer = document.querySelector('#postsContainer');

    if (!postId) {
      console.log(window.location.pathname);
      initializeSearch();
      await initializePostsPage(postsContainer);

    } else if (postId) {
      const multiplePostsContent = document.getElementById('mutiplePostsContent');

      const postsContainer = document.getElementById('postsContainer');
      
      multiplePostsContent.classList.remove('block');
      multiplePostsContent.classList.add('hidden');

      postsContainer.classList.replace('posts-container', 'single-post');


      await renderSinglePost(postId, postsContainer);
    }

  } catch (error) {
    console.error('Error initalizing post page.', error);
  }
};

initializePostFunctions();