//your code here
let items = document.querySelectorAll(".image");
let draggedItem = null;
items.forEach((item) => {
  item.addEventListener("dragstart", dragStart);
  item.addEventListener("dragover", dragOver);
  item.addEventListener("drop", dragDrop);
});
function dragStart(e) {
  draggedItem = this;
}
function dragOver(e) {
  e.preventDefault();
}

function dragDrop(e) {
  let parentItem = this.parentNode;
  const temp = document.createElement("div");
  parentItem.insertBefore(temp, draggedItem);
  parentItem.insertBefore(draggedItem, this);
  parentItem.insertBefore(this, temp);
  parentItem.removeChild(temp);
}