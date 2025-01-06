import { searchByPost } from "../../api/post/searchByPost";

/**
 * Initializes the search functionality by adding an event listener to the search button.
 *
 * @async
 * @function initializeSearch
 * @throws {Error} If the search query is empty or if an error occurs during the search.
 *
 */

export async function initializeSearch() {
  const searchButton = document.querySelector("#searchButton");
  const postsContainer = document.querySelector("#postsContainer");

  if (!searchButton || !postsContainer) {
    console.warn("Search button or posts container not found.");
    return;
  }

  searchButton.addEventListener("click", async () => {
    const searchType = document.querySelector("#searchType").value;

    const searchQuery = document.querySelector("#searchQuery").value;

    if (!searchQuery.trim()) {
      alert("Please enter a search query.");
      return;
    }

    try {
      await searchByPost({
        query: searchQuery,
        searchType: searchType,
        postsContainer: postsContainer,
      });
    } catch (error) {
      console.error("Error performing search:", error);
      postsContainer.innerHTML = `<p>Failed to load posts by search. Please try again or reload the page.</p>`;
    }
  });
}
