const line = document.getElementById("progressbar");
window.addEventListener("scroll", progressBar);
function progressBar(e) {
  const windowScroll =
    document.body.scrollTop || document.documentElement.scrollTop;
  const windowHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  const width_progress_line = (windowScroll / windowHeight) * 100;
  line.style.width = width_progress_line + "%";
}

document
  .getElementById("downloadButton")
  .addEventListener("click", function () {
    var resumeURL = "./CV/Artem Syvohlaz FrontEnd Developer.pdf";
    window.open(resumeURL, "_blank");
  });
