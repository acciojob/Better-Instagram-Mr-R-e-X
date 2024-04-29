let items = document.querySelectorAll(".image");
let draggedItem = null;
items.forEach((item) => {
  item.addEventListener("dragstart", dragStart);
  item.addEventListener("dragover", dragOver);
  item.addEventListener("dragenter", dragEnter);
  item.addEventListener("dragleave", dragLeave);
  item.addEventListener("drop", dragDrop);
});
function dragStart(e) {
  draggedItem = this;
}
function dragOver(e) {
  e.preventDefault();
}
function dragEnter(e) {}
function dragLeave(e) {}
function dragDrop(e) {
	e.preventDefault()
dragged item and the target
  let draggedItemImage = window.getComputedStyle(draggedItem).getPropertyValue("background-image");
  let targetImage = window.getComputedStyle(this).getPropertyValue("background-image");
  
  // Swap the images
  draggedItem.style.backgroundImage = targetImage;
  this.style.backgroundImage = draggedItemImage;;
}