export function addHoverEffect() {
  if (typeof window === 'undefined') return;

  window.addEventListener("load", function () {
    const nav = document.querySelector(".navbar-nav");
    if (!nav) return;

    const links = nav.querySelectorAll(".nav-link");
    const underline = document.createElement("div");
    underline.className = "underline";

    nav.appendChild(underline);

    links.forEach(link => {
      link.addEventListener("mouseenter", function () {
        const linkRect = link.getBoundingClientRect();
        const navRect = nav.getBoundingClientRect();

        const left = linkRect.left - navRect.left;
        const width = linkRect.width;

        underline.style.left = `${left}px`;
        underline.style.width = `${width}px`;
      });
    });

    nav.addEventListener("mouseleave", function () {
      underline.style.width = "0";
    });
  });
}
