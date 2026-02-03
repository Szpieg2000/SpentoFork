// Toggle mini page visibility with smooth height transition
function toggleMiniPage(header) {
  const miniPage = header.parentElement;
  const content = header.nextElementSibling;

  if (miniPage.classList.contains("expanded")) {
    miniPage.classList.remove("expanded");
    content.style.height = "0px"; // Collapse smoothly
  } else {
    miniPage.classList.add("expanded");
    content.style.height = content.scrollHeight + "px"; // Expand smoothly to fit content
  }
}