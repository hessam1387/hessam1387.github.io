document.addEventListener("DOMContentLoaded", () => {
  const videoList = document.getElementById("videoList");
  const videoPlayer = document.getElementById("videoPlayer");
  const source = videoPlayer.querySelector("source");

  videoList.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
      const newSrc = e.target.getAttribute("data-src");
      source.src = newSrc;
      videoPlayer.load();
      videoPlayer.play();
    }
  });
});
