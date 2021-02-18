const collapsibleChevron = document.querySelector(".collapsible__chevron");
const collapsible = document.querySelector(".collapsible");
collapsibleChevron.addEventListener("click", () =>
  collapsible.classList.toggle("collapsible--expanded")
);
