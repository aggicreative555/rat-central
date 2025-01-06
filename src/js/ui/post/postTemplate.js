/**
 * Generates a DOM element representing a post based on the provided data.
 *
 * @function postTemplate
 * @param {Object} postData - The data for the post.
 * @param {string} postData.title - The title of the post.
 * @param {string} postData.body - The body of the post.
 * @param {Object} [postData.media] - An optional media object.
 * @param {string} [postData.media.url] - The URL of the media (image) associated with the post.
 * @param {string} [postData.media.alt] - The alt text for the media (image).
 * @param {string[]} [postData.tags] - An optional array of tags associated with the post.
 * @param {Object} [postData._count] - An optional object containing counts of comments and reactions.
 * @param {number} [postData._count.comments] - The number of comments on the post.
 * @param {number} [postData._count.reactions] - The number of reactions on the post.
 * @returns {HTMLElement} A DOM element representing the post.
 *
 * @example
 * const postData = {
 *   title: "My Post",
 *   body: "This is the body of the post.",
 *   media: { url: "image.jpg", alt: "A sample image" },
 *   tags: ["tag1", "tag2"],
 *   _count: { comments: 5, reactions: 10 }
 * };
 *
 * const postElement = postTemplate(postData);
 * document.body.appendChild(postElement);
 */

export function postTemplate(postData) {
  const data = postData.data || postData;

  const post = document.createElement("div");
  post.classList.add("post");

  // Add title
  const title = document.createElement("h2");
  title.innerText = data.title;
  post.appendChild(title);

  // Add body
  const body = document.createElement("p");
  body.innerText = data.body;
  post.appendChild(body);

  // Add media if available
  if (data.media?.url) {
    const media = document.createElement("img");
    media.src = data.media.url;
    media.alt = data.media.alt || "Post image";
    post.appendChild(media);
  }

  // Add tags if available
  if (data.tags?.length > 0) {
    const tags = document.createElement("p");
    tags.innerText = `Tags: ${data.tags.join(",")}`;
    post.appendChild(tags);
  }

  // Add comments count if available
  if (data._count?.comments !== undefined) {
    const commentCount = document.createElement("p");
    commentCount.innerText = `Comments: ${data._count?.comments}`;
    post.appendChild(commentCount);
  }

  // Add reaction count if available
  if (data._count?.reactions !== undefined) {
    const reactionCount = document.createElement("p");
    reactionCount.innerText = `Reactions: ${data._count?.reactions}`;
    post.appendChild(reactionCount);
  }

  return post;
}

/**
 * Renders a single post into a parent element.
 *
 * @function renderPostTemplate
 * @param {Object} postData - Data for the post
 * @param {HTMLElement} parent - Parent element where the post will be rendered.
 */

export function renderPostTemplate(postData, parent) {
  parent.innerHTML = "";
  parent.append(postTemplate(postData));
  console.log(postData);
}

export function renderMultiplePosts(posts, parent) {
  parent.innerHTML = ""; // Clear previous posts

  if (Array.isArray(posts)) {
    posts.forEach((post) => {
      parent.append(postTemplate(post)); // Append each post
    });
  } else {
    console.error("No posts to render.");
  }
}
