import { renderPostTemplate } from "../../ui/post/postTemplate";
import { readPost } from "../../api/post/read";
import { readMultiplePosts } from "../../api/post/read";
import { renderMultiplePosts } from "../../ui/post/postTemplate";

/**
 * Initializes the posts page by rendering a single post or multiple posts based on the query parameters.
 *
 * @async
 * @function initializePostsPage
 * @throws {Error} If fetching a single post or multiple posts fails.
 *
 */

export async function initializePostsPage() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");

  const postsContainer = document.querySelector("#postsContainer");

  if (id) {
    try {
      const post = await readPost(id);
      renderPostTemplate(post, postsContainer);
    } catch (error) {
      console.error("Error fetching post:", error);
      postsContainer.innerHTML = `<p>Failed to load the post. Please try again later or refresh the page.</p>`;
    }
  } else {
    try {
      const { data: posts } = await readMultiplePosts(12, 1);

      renderMultiplePosts(posts, postsContainer);
    } catch (error) {
      console.error("Error fetching multiple posts:", error);
      postsContainer.innerHTML = `<p>Failed to load posts. Please try again later or refresh the page.</p>`;
    }
  }
}
