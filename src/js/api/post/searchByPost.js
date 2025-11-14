import { renderMultiplePosts } from "../../ui/post/postTemplate";
import { API_BASE } from "../constants";
import { getHeaders } from "../headers";

/**
 * Searches for posts based on title, body text or a tag.
 *
 * @async
 * @function searchByPost
 * @param {string|number} query - The search query can be a string or a number.
 * @param {string} searchType - Can be a title, body text or a tag
 * @param {HTMLElement} postsContainer -  Container to render results.
 * @param {number} [options.page=1] - Page number for pagination.
 * @param {number} [options.limit=12] - Number of posts per page.
 *
 * @returns {Promise<void>} Resolves when posts are successfully rendered into the `postsContainer`.
 * @throws {Error} If the search query is invalid or there is a server side error.
 *
 * @example
 * // Example usage:
 * const query = "JavaScript";
 * const searchType = "title";
 * const postsContainer = document.querySelector("#postsContainer");
 * await searchByPost({ query, searchType, postsContainer });
 */

export async function searchByPost({
  query,
  searchType,
  postsContainer,
  page = 1,
  limit = 12,
}) {
  if (!query) {
    throw new Error("Search query cannot be empty.");
  }

  let apiUrl = "";

  try {
    if (searchType === "title") {
      apiUrl = `${API_BASE}/social/posts/search?q=${encodeURIComponent(query)}&limit=${limit}&page=${page}`;
    } else if (searchType === "tag") {
      apiUrl = `${API_BASE}/social/posts?_tag=${encodeURIComponent(query)}&limit=${limit}&page=${page}`;
    } else {
      throw new Error("Invalid search type.");
    }

    const response = await getHeaders(apiUrl, {
      method: "GET",
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch posts: ${response.statusText}`);
    }

    const result = await response.json();

    if (!result || !result.data) {
      throw new Error("No posts found for the given query.");
    }

    const posts = result.data;

    const filteredPosts = posts.filter((post) => {
      const title = post.title.toLowerCase();
      const body = post.body.toLowerCase();
      const tags = post.tags ? post.tags.map((tag) => tag.toLowerCase()) : [];
      return (
        title.includes(query.toLowerCase()) ||
        body.includes(query.toLowerCase()) ||
        tags.some((tag) => tag.includes(query.toLowerCase()))
      );
    });

    renderMultiplePosts(filteredPosts, postsContainer);
  } catch (error) {
    console.error("Search not found", error);
    postsContainer.innerHTML = `<p>Cannot find search query. Please try another search query or reload the page.</p>`;
  }
}