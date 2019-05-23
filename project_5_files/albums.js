
var isInBuilding=true;
var searchResult = "lr3";
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

function needMap() {
	 isInBuilding = true;
}

function needNoMap() {
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

function gotoL2()
{
	if (isInBuilding)
		location.href = "tech_map_lr3.html";
	else
		location.href = "route_to_tech_to_lr3.html";
}