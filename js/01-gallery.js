import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryList = document.querySelector(".gallery");

function createGalleryItem({ preview, original, description }) {
  const listItem = document.createElement("li");
  listItem.classList.add("gallery__item");

  const link = document.createElement("a");
  link.classList.add("gallery__link");
  link.href = original;

  const image = document.createElement("img");
  image.classList.add("gallery__image");
  image.src = preview;
  image.setAttribute("data-source", original);
  image.alt = description;

  link.appendChild(image);
  listItem.appendChild(link);

  return listItem;
}

const galleryItemsMarkup = galleryItems.map(createGalleryItem);
galleryList.append(...galleryItemsMarkup);

galleryList.addEventListener("click", (event) => {
  event.preventDefault();

  const target = event.target;
  if (target.tagName !== "IMG") {
    return;
  }

  const largeImageUrl = target.dataset.source;
  openModal(largeImageUrl);
});

function openModal(url) {
  const instance = basicLightbox.create(
    `<img src="${url}" width="800" height="600">`
  );
  instance.show();
}