// import "./Header.css";
export const openMenu = () => {
  const extendedNav = document.getElementById("extended-nav") as HTMLElement;
  const down = document.getElementById("down") as HTMLElement;
  const up = document.getElementById("up") as HTMLElement;
  if (extendedNav.style.display === "none" ||
    extendedNav.style.display === "") {
    extendedNav.style.display = "block";
    document.body.style.overflow = "hidden";
    down.style.display = "none";
    up.style.display = "block";
  } else {
    extendedNav.style.display = "none";
    document.body.style.overflow = "auto";
    down.style.display = "block";
    up.style.display = "none";
  }
};
