const profileCard = document.getElementById("profile-card-popup");
const profileCardCloseButton = document.getElementById("profile-card-close");
const gridItems = document.getElementsByClassName("grid-item");

profileCardCloseButton.onclick = function () {
  profileCard.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == profileCard) {
    profileCard.style.display = "none";
  }
};

for (let i = 0; i < gridItems.length; i++) {
  gridItems[i].onclick = function () {
    profileCard.style.display = "flex";
  };
}
