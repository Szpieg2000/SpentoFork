// Toggle mini page visibility with smooth height transition
function toggleMiniPage(header) {
  const miniPage = header.parentElement;
  const content = header.nextElementSibling;

  if (miniPage.classList.contains("expanded")) {
    miniPage.classList.remove("expanded");
    content.style.height = "0px"; // Collapse smoothly
  } else {
    miniPage.classList.add("expanded");
    content.style.height = "auto"; // Expand smoothly to fit content
  }
}

	for (const miniPage of CONFIG.miniPages) {


    let item = '';
  if (miniPage.list) {
		item = `<div class="miniPage"><div class="miniPage-header" onclick="toggleMiniPage(this)">${miniPage.name}</div>`;
    
    item += `<div class="miniPage-content">
      <ul class="miniPage-links" style="list-style-type: none;">`;
    for (const link of miniPage.links) {
      item += `<li><a class="miniPage-link" href="${link.link}" target="${CONFIG.openInNewTab ? '_blank' : ''}">${link.name}</a></li>`;
    };
    item += `</ul>`;

    item += `</div>`;
  } else {
    item = `<div class="miniPage"><div class="miniPage-headerlink"><a href="${miniPage.link}" target="${CONFIG.openInNewTab ? '_blank' : ''}">${miniPage.name}</a></div></div>`;
  }
		const position = 'beforeend';

		sideContainerRight.insertAdjacentHTML(position, item);
	}