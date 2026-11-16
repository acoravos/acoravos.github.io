// The theme's bib layout renders each paper title as plain text. Wrap it in the
// entry's own link (preferring the publisher HTML link over the DOI) so titles
// are clickable, matching /writing/. Used by the home page and /publications/.
// Styling lives in assets/css/main.scss.
document.querySelectorAll(".publications ol.bibliography > li").forEach(function (entry) {
  const title = entry.querySelector(".title");
  if (!title || title.querySelector("a")) return;

  const links = Array.from(entry.querySelectorAll(".links a[href]"));
  const target = links.find((a) => a.textContent.trim() === "HTML") || links[0];
  if (!target) return;

  const anchor = document.createElement("a");
  anchor.href = target.href;
  anchor.target = "_blank";
  anchor.rel = "external nofollow noopener";
  anchor.textContent = title.textContent;
  title.textContent = "";
  title.appendChild(anchor);
});
