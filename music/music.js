document.addEventListener("DOMContentLoaded", () => {
  const songList = document.getElementById("songList");
  const audioPlayer = document.getElementById("audioPlayer");
  const source = audioPlayer.querySelector("source");

  songList.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
      const newSrc = e.target.getAttribute("data-src");
      source.src = newSrc;
      audioPlayer.load();
      audioPlayer.play().catch(err => console.warn("پخش نشد:", err));
    }
  });
});