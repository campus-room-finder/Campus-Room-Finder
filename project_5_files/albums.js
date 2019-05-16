// CS 330 - Homework 3 starter code

// This is the JSON (JavaScript Object Notation) object that stores all of our 
// album information. 
var albums = [
 
  {
    title : "Detailed Mapping",
    artist : "Second Floor",
    cover : "images/tech-map-second-floor-large.png",
  },
  
  
];


// Fill in this function to dyamically construct the HTML elements for the album list
function buildAlbumList() {
  var albumList = document.getElementById("album-list");
  if (albumList != null) {
for (var i=0; i<albums.length; i++){
var albumDiv = document.createElement('div');
albumDiv.classList.add('albums-album-wrapper');
var multline = 
`<image class="albums-album-art" src="${albums[i].cover}">`;
albumDiv.innerHTML = multline;
albumList.appendChild(albumDiv);
}
}
}