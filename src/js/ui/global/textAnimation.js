let index = 0;

const content = ['rat', 'pizza', 'cheese'];

const imageSets = [
  [
    'bg-[url("https://i.pinimg.com/736x/48/a1/32/48a13246cb33767982acd2530b8acb20.jpg")]',
    'bg-[url("https://i.pinimg.com/736x/b7/4c/79/b74c79f0a3d0a77a9d986da40092a69e.jpg")]',
    'bg-[url("https://i.pinimg.com/736x/3c/b0/fb/3cb0fbde8380f2159296073b5b995ad5.jpg")]',
  ],
  [
    'bg-[url("https://i.pinimg.com/736x/c4/0b/c0/c40bc068315ad81005e5b7eb3e9622b9.jpg")]',
    'bg-[url("https://i.cbc.ca/1.3237852.1442878202!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_780/pizza-rat.jpg")]',
    'bg-[url("https://i.pinimg.com/736x/48/a1/32/48a13246cb33767982acd2530b8acb20.jpg")]',
  ],
  [
    'bg-[url("https://i.pinimg.com/736x/15/94/59/159459c9a9ca43b48f63597c646a0d5c.jpg")]',
    'bg-[url("https://i.pinimg.com/736x/75/09/58/7509580b4f15686544ec2575afb29acf.jpg")]',
    'bg-[url("https://i.pinimg.com/736x/e3/2b/6d/e32b6d5cadcc7616bc0859d237d9d1a3.jpg")]',
  ],
];

export function textAnimation() {
  try {
    if (content.length === 0 || imageSets.length === 0) {
      throw new Error('Text or image sets are empty.');
    }

    const minLength = Math.min(content.length, imageSets.length);

    // Update text
    const heading = document.getElementById('textAnimation');
    if (heading) {
      heading.textContent = content[index % minLength];
    } else {
      console.error('textAnimation element not found');
    }

    // Update post images
    const post1 = document.getElementById('post1');
    const post2 = document.getElementById('post2');
    const post3 = document.getElementById('post3');

    if (post1 && post2 && post3) {
      const currentImageSet = imageSets[index % minLength];

      // Remove existing background classes and add new ones
      const posts = [post1, post2, post3];
      posts.forEach((post, i) => {
        const innerDiv = post.querySelector('div');
        // Remove all existing background image classes
        innerDiv.classList.forEach((className) => {
          if (className.startsWith('bg-[url("')) {
            innerDiv.classList.remove(className);
          }
        });
        // Add the new background image class
        innerDiv.classList.add(currentImageSet[i]);
      });

    } else {
      console.error('One or more posts not found.');
    }

    // Cycle to the next set
    index = (index + 1) % minLength;
  } catch (error) {
    console.error('Error applying animation to text', error);
  }
}

export function initiateTextAnimation() {
  setInterval(textAnimation, 3998);
}