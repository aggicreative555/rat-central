export function renderProfilePic() {
  try {
    const profilePic = document.getElementById("profilePic");
    const imageUrl =
      "https://i.pinimg.com/736x/48/a1/32/48a13246cb33767982acd2530b8acb20.jpg";
    profilePic.style.backgroundImage = `url('${imageUrl}')`;
  } catch (error) {
    console.error("Error loading profile picture", error);
  }
}
