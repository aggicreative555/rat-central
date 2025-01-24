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
  post.className = "relative w-full min-h-96 bg-background-light rounded-lg shadow-lg shadow-brown-700/20 overflow-hidden group m-4";

  
  const imageContainer = document.createElement("div");
  imageContainer.className = "w-full h-full bg-cover bg-top";
  
  // Add media if available

  const imageUrl = data.media?.url || "https://i.pinimg.com/736x/48/a1/32/48a13246cb33767982acd2530b8acb20.jpg";
  imageContainer.style.backgroundImage = `url('${imageUrl}')`;

  post.appendChild(imageContainer);

  const contentOverlay = document.createElement('div');
  contentOverlay.className = 'absolute bottom-0 left-0 right-0 bg-gradient-to-t from-brown-100 to-brown-100/0 backdrop-blur-md py-4 px-8 mt-2 group-hover:opacity-0 transition-all duration-300 ease-in-out space-y-1';

  // Add username
  const username = document.createElement('h3');
  username.className = 'text-sm text-text-dark';
  username.textContent = data.author || "anonymous";

  
  // Add title
  const title = document.createElement("h4");
  title.calssName = "text-2xl font-bold text-text-dark";
  title.textContent = data.title || "";

  // // Add comments count if available

  // const commentCount = data._count?.comments || "0";

  // const commentContainer = document.createElement("div");
  // commentContainer.className = "flex flex-row gap-2";

  // const commentContent = document.createElement("p");
  // commentContent.className = "text-text-dark text-sm";
  // commentContent.innerText = commentCount ;

  // const commentIcon = document.createElement("span");
  // commentIcon.className = "material-symbols-rounded";
  // commentIcon.innerText = 'chat_bubble';

  // commentContainer.appendChild(commentCount);
  // commentContainer.appendChild(commentIcon);
  
  // post.appendChild(commentContainer);


  contentOverlay.appendChild(username);
  contentOverlay.appendChild(title);
  post.appendChild(contentOverlay);
  
  
  const hoverOverlay = document.createElement("div");
  hoverOverlay.className = "absolute inset-0 bg-background-dark bg-opacity-80 items-center justify-center opacity-0 transition-all duration-300 ease-in-out p-8 space-y-1";

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
      window.location.href =`/post/?id=${postId || ""}`;
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
