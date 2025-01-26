import { readPost } from "../../api/post/read";

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
  post.className =
    "relative w-full min-h-96 bg-background-light rounded-lg shadow-lg shadow-brown-700/20 overflow-hidden group m-4";

  const imageContainer = document.createElement("div");
  imageContainer.className = "w-full h-full bg-cover bg-top";

  // Add media if available

  const imageUrl =
    data.media?.url ||
    "https://i.pinimg.com/736x/48/a1/32/48a13246cb33767982acd2530b8acb20.jpg";
  imageContainer.style.backgroundImage = `url('${imageUrl}')`;

  post.appendChild(imageContainer);

  const contentOverlay = document.createElement("div");
  contentOverlay.className =
    "absolute bottom-0 left-0 right-0 bg-gradient-to-t from-brown-100 to-brown-100/0 backdrop-blur-md py-4 px-8 mt-2 group-hover:opacity-0 transition-all duration-300 ease-in-out space-y-1";

  // Add username
  const username = document.createElement("h3");
  username.className = "text-sm text-text-dark";
  username.textContent = data.author || "anonymous";

  // Add title
  const title = document.createElement("h4");
  title.calssName = "text-2xl font-bold text-text-dark";
  title.textContent = data.title || "";

  // Add comments

  const commentContainer = document.createElement("div");
  commentContainer.className = "flex flex-row gap-2";

  const commentIcon = document.createElement("span");
  commentIcon.className = "material-symbols-rounded";
  commentIcon.textContent = "chat_bubble";
  commentContainer.appendChild(commentIcon);

  const commentCount = document.createElement("span");
  commentCount.textContent = data._count?.comments || "0";
  commentContainer.appendChild(commentCount);

  // Add reaction

  const reactionContainer = document.createElement("div");
  reactionContainer.className = "flex flex-row gap-2";

  const reactionIcon = document.createElement("span");
  reactionIcon.className = "material-symbols-rounded";
  reactionIcon.textContent = "local_pizza";
  reactionContainer.appendChild(reactionIcon);

  const reactionCount = document.createElement("span");
  reactionCount.textContent = data._count?.reactions || "0";
  reactionContainer.appendChild(reactionCount);

  contentOverlay.appendChild(username);
  contentOverlay.appendChild(title);
  post.appendChild(commentContainer);
  post.appendChild(reactionContainer);
  post.appendChild(contentOverlay);

  const hoverOverlay = document.createElement("div");
  hoverOverlay.className =
    "absolute inset-0 bg-background-dark bg-opacity-80 items-center justify-center opacity-0 transition-all duration-300 ease-in-out p-8 space-y-1";

  const hoverUsername = document.createElement("h3");
  hoverUsername.className = "text-sm text-text-light";
  hoverUsername.textContent = data.author || "anonymous";

  const hoverTitle = document.createElement("h4");
  hoverTitle.className = "text-2xl font-bold text-text-light";
  hoverTitle.textContent = data.title || "";

  const description = document.createElement("div");
  description.className = "text-md text-text-light pt-4 line-clamp-4";
  description.textContent = data.body || "";

  const viewPostButton = document.createElement("button");
  viewPostButton.className = "btn-secondary absolute bottom-8";
  viewPostButton.textContent = "See full post";

  viewPostButton.addEventListener("click", () => {
    const postId = data.id;

    if (postId) {
      window.location.href = `/post/?id=${postId || ""}`;
    }
  });

  hoverOverlay.appendChild(hoverUsername);
  hoverOverlay.appendChild(hoverTitle);
  hoverOverlay.appendChild(description);
  hoverOverlay.appendChild(viewPostButton);
  post.appendChild(hoverOverlay);

  post.addEventListener("mouseenter", () => {
    contentOverlay.style.opacity = "0";
    hoverOverlay.style.opacity = "1";
  });

  post.addEventListener("mouseleave", () => {
    contentOverlay.style.opacity = "1";
    hoverOverlay.style.opacity = "0";
  });

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

  const data = postData.data || postData;

  const post = document.createElement("div");
  post.className =
    "flex flex-col w-full h-fit lg:flex-row lg:w-[1022px] cursor-default lg:gap-4";

  // Add go back function

  const backContainer = document.createElement("a");
  backContainer.className =
    "flex flex-row-reverse gap-2 w-full justify-end items-center my-10 px-8 text-text-dark text-lg font-semibold transition-all hover:text-brown-400 hover:font-bold hover:px-2";
  backContainer.textContent = "Back";

  const backIcon = document.createElement("span");
  backIcon.className = "material-symbols-rounded";
  backIcon.textContent = "arrow_back";
  backContainer.appendChild(backIcon);

  parent.appendChild(backContainer);

  const imageContainer = document.createElement("div");
  imageContainer.className =
    "w-full h-full bg-cover bg-center min-h-96 lg:max-w-96 lg:rounded-md hover:bg-blend-overlay hover:bg-brown-800/60 transition-all duration-300 ease-in-out";

  // Add media if available

  const imageUrl =
    data.media?.url ||
    "https://i.pinimg.com/736x/48/a1/32/48a13246cb33767982acd2530b8acb20.jpg";
  imageContainer.style.backgroundImage = `url('${imageUrl}')`;

  post.appendChild(imageContainer);

  const contentContainer = document.createElement("div");
  contentContainer.className = "flex flex-col gap-2 mx-8 my-4";
  post.appendChild(contentContainer);

  // Add comments

  const interactiveContainer = document.createElement("div");
  interactiveContainer.className =
    "flex flex-row-reverse justify-end gap-8 text-brown-400 font-semibold cursor-pointer";

  contentContainer.appendChild(interactiveContainer);

  const commentContainer = document.createElement("div");
  commentContainer.className =
    "flex flex-row gap-2 group hover:text-text-dark transition-all";

  const commentIcon = document.createElement("span");
  commentIcon.className = "material-symbols-rounded group-hover:animate-pulse";
  commentIcon.textContent = "chat_bubble";
  commentContainer.appendChild(commentIcon);

  const commentCount = document.createElement("span");
  commentCount.textContent = data._count?.comments || "0";
  commentContainer.appendChild(commentCount);

  interactiveContainer.appendChild(commentContainer);

  // Add reaction

  const reactionContainer = document.createElement("div");
  reactionContainer.className =
    "flex flex-row gap-2 group hover:text-text-dark transition-all";

  const reactionIcon = document.createElement("span");
  reactionIcon.className = "material-symbols-rounded group-hover:animate-pulse";
  reactionIcon.textContent = "local_pizza";
  reactionContainer.appendChild(reactionIcon);

  const reactionCount = document.createElement("span");
  reactionCount.textContent = data._count?.reactions || "0";
  reactionContainer.appendChild(reactionCount);

  interactiveContainer.appendChild(reactionContainer);

  // Add title
  const title = document.createElement("h1");
  title.className = "text-3xl lg:text-5xl font-bold text-text-dark pt-4";
  title.textContent = data.title || "";

  contentContainer.appendChild(title);

  // Add author
  const username = document.createElement("h2");
  username.className =
    "text-sm text-brown-900/60 hover:font-medium cursor-pointer";
  username.textContent = `${data.author || "anonymous"}`;
  contentContainer.appendChild(username);

  // Add description

  const description = document.createElement("p");
  description.className = "text-md text-text-dark py-4";
  description.textContent = data.body || "";
  contentContainer.appendChild(description);

  // Add tags

  const tags = document.createElement("p");
  tags.className =
    "text-brown-900/60 text-sm italic lg:mt-auto hover:underline hover:font-medium cursor-pointer";
  tags.innerText = `${data.tags.map((tag) => `#${tag}`).join(", ")}`;
  contentContainer.appendChild(tags);

  parent.appendChild(post);
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

export async function renderSinglePost(postId, postsContainer) {
  try {
    const post = await readPost(postId);
    renderPostTemplate(post, postsContainer);
  } catch (error) {
    console.error("Error loading a single post:", error);
    postsContainer.innerHTML = `<p>Failed to load post. Please reload the page or try again later.</p>`;
  }
}

// // Add tags if available
// if (data.tags?.length > 0) {
//   const tags = document.createElement("p");
//   tags.innerText = `Tags: ${data.tags.join(",")}`;
//   post.appendChild(tags);
// }

// // Add reaction count if available
// if (data._count?.reactions !== undefined) {
//   const reactionCount = document.createElement("p");
//   reactionCount.innerText = `Reactions: ${data._count?.reactions}`;
//   post.appendChild(reactionCount);
// }
