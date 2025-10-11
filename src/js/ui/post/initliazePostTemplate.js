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

export async function initializePostsPage(postsContainer) {
  try {
    const { data: posts } = await readMultiplePosts(12, 1);
    renderMultiplePosts(posts, postsContainer);
    
  } catch (error) {
    console.error("Error fetching multiple posts:", error);
    postsContainer.innerHTML = `<p>Failed to load posts. Please try again later or refresh the page.</p>`;
  }

}