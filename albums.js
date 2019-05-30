// CS 330 - Homework 3 starter code

// This is the JSON (JavaScript Object Notation) object that stores all of our 
// album information. 

// Fill in this function to dyamically construct the HTML elements for the album list
function buildAlbumList() {
	var albumList = document.getElementById("album-list");
	if (albumList != null) {
			var albumDiv = document.createElement('div');
			albumDiv.classList.add('albums-album-wrapper');
			albumList.appendChild(albumDiv);
	}
}
