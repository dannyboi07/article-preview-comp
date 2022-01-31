
const shareBtn = document.getElementById("share-btn");
const shareCtn = document.getElementById("share-ctn");
const shareSvg = document.getElementById("share-svg");
const bloggerDetails = document.getElementById("blogger-details");
const profileCtn = document.getElementById("profile-ctn");
const icon = document.querySelectorAll("#icon-pop");

shareBtn.addEventListener("click", () => {
    shareCtn.classList.toggle("share-ctn-animate-addon");
    shareBtn.classList.toggle("share-btn-color");
    shareSvg.classList.toggle("share-svg-color-active");
    if (window.innerWidth < 1280) profileCtn.classList.toggle("profile-container-inactive");
    if (window.innerWidth > 1280) {
        // console.log(icon);
        Array.from(icon).forEach(ic => ic.classList.toggle("icon-pop-anim"));
    } else {
        Array.from(icon).forEach(ic => ic.classList.toggle("icon-pop-anim-mob"));

    }
});