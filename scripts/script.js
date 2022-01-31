
const shareBtn = document.getElementById("share-btn");
const shareCtn = document.getElementById("share-ctn");
const shareSvg = document.getElementById("share-svg");
const bloggerDetails = document.getElementById("blogger-details");
const profileCtn = document.getElementById("profile-ctn");

shareBtn.addEventListener("click", () => {
    shareCtn.classList.toggle("share-ctn-animate-addon");
    shareBtn.classList.toggle("share-btn-color");
    shareSvg.classList.toggle("share-svg-color-active");
    if (screen.width < 1028) profileCtn.classList.toggle("profile-container-inactive");
});