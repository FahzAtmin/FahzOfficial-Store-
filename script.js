function showPhotos() {
  const gallery = document.getElementById("photo-gallery");
  gallery.classList.remove("hidden");
  gallery.innerHTML = "";

  const photos = [];
  for (let i = 1; i <= 34; i++) {
    photos.push(`foto${i}.jpg`);
  }

  photos.forEach((foto, i) => {
    const img = document.createElement("img");
    img.src = `assets/${foto}`;
    img.alt = `Foto ${i + 1}`;
    img.classList.add("love-photo");
    gallery.appendChild(img);
  });
}
