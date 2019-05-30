var isInBuilding=true;
var isBathroom=false;

function buildAlbumList1() {
	var albumList = document.getElementById("album-list");
	if (albumList != null) {
			var albumDiv = document.createElement('div');
			albumDiv.classList.add('bathroom');
			albumList.appendChild(albumDiv);
	}
}

function buildAlbumList2() {
	var albumList = document.getElementById("album-list");
	if (albumList != null) {
		var albumDiv = document.createElement('div');
		albumDiv.classList.add('lr3');
		albumList.appendChild(albumDiv);
	}
}

function buildAlbumList3() {
	var albumList = document.getElementById("album-list");
	if (albumList != null) {
		var albumDiv = document.createElement('div');
		albumDiv.classList.add('lobby_stair');
		albumList.appendChild(albumDiv);
	}
}

function buildAlbumList4() {
	var albumList = document.getElementById("album-list");
	if (albumList != null) {
		var albumDiv = document.createElement('div');
		albumDiv.classList.add('stair_F280');
		albumList.appendChild(albumDiv);
	}
}

function buildAlbumList5() {
	var albumList = document.getElementById("album-list");
	if (albumList != null) {
		var albumDiv = document.createElement('div');
		albumDiv.classList.add('lobby');
		albumList.appendChild(albumDiv);
	}
}


function needMap() {
    var need = document.getElementById("block2_1");
 	var not = document.getElementById("block2_2");
 	need.classList.add('color');
 	not.classList.remove('color');
  	isInBuilding = true;
}
function needNoMap() {
    var need = document.getElementById("block2_1");
 	var not = document.getElementById("block2_2");
 	not.classList.add('color');
 	need.classList.remove('color');
  	isInBuilding = false;
}

function showSearchRoom() {
	var bar =  document.getElementById("search");
	bar.classList.remove('search-hide');
	bar.classList.add('search-show');
}

function goToBathroom() {
	if (isInBuilding)
		location.href = "tech_map_bathroom.html";
	else
		location.href = "route_to_tech_to_bathroom.html";
}

function gotoL2() {
	var searchResult = document.getElementById("searchResult").value.toLowerCase();
	if (searchResult === "lr3") {
		if (isInBuilding)
			location.href = "tech_map_lr3.html";
		else
			location.href = "route_to_tech_to_lr3.html";
	}
	else if (searchResult === "f280")
		location.href = "tech_map_lr3_to_stair.html";
}

function notImplementYet() {
	alert("Data not currently available");
}

