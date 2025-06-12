export function addHoverEffect() {
  if (typeof window === "undefined") return;

  window.addEventListener("load", () => {
    const nav = document.querySelector(".navbar-nav");
    if (!nav) return;

    const links = nav.querySelectorAll(".nav-link");
    const underline = document.createElement("div");
    underline.className = "underline";

    // Append underline
    nav.appendChild(underline);

    links.forEach((link) => {
      link.addEventListener("mouseenter", () => {
        const linkOffsetLeft = link.offsetLeft;
        const linkWidth = link.offsetWidth;

        underline.style.left = `${linkOffsetLeft}px`;
        underline.style.width = `${linkWidth}px`;
        underline.style.opacity = "1";
      });
    });

    nav.addEventListener("mouseleave", () => {
      underline.style.width = "0";
      underline.style.opacity = "0";
    });
  });
}
