var isGoodBuilding=false;
var isBathroom=false;
var needStairway = true;
var phase = 1; 

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

function buildAlbumList6() {
	var albumList = document.getElementById("album-list");
	if (albumList != null) {
		var albumDiv = document.createElement('div');
		albumDiv.classList.add('lobby-lr3');
		albumList.appendChild(albumDiv);
	}
}

function buildAlbumList7() {
	var albumList = document.getElementById("album-list");
	if (albumList != null) {
		var albumDiv = document.createElement('div');
		albumDiv.classList.add('lr3-elevatar');
		albumList.appendChild(albumDiv);
	}
}
function buildAlbumList8() {
	var albumList = document.getElementById("album-list");
	if (albumList != null) {
		var albumDiv = document.createElement('div');
		albumDiv.classList.add('elevatar-f280');
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
	var choice = document.getElementById("mfchoice");
	choice.classList.remove('search-show');
	choice.classList.add('search-hide');
}

function goToBathroom() {
	if (isGoodBuilding)
		location.href = "tech_map_bathroom.html";
	else
		buildingNotImplementYet();
}
function needStair() {

	if (needStairway)
		needStairway = false;
	else
		needStairway = true;
}

function gotoL2() {
	var searchResult = document.getElementById("searchResult").value.toLowerCase();
	if (!isGoodBuilding)
		buildingNotImplementYet();
	else {
		if (searchResult === "lr3") {
			location.href = "route_to_tech_to_lr3.html";

		} else if (searchResult === "f280" && needStairway === true) {
			location.href = "tech_map_lr3_to_stair.html";
		} else if (searchResult === "f280" && needStairway === false) {
			location.href = "tech_map_lr3_to_elevatar.html";
		} else
			roomNotImplementYet();
	}
}

function buildingNotImplementYet() {
	alert("Building data not currently available");
	isGoodBuilding = false;
}


	function roomNotImplementYet() {
		alert("Room data not currently available");
	}

function BathroomOp() {
	var need = document.getElementById("block2_1");
	var not = document.getElementById("block2_2");
	not.classList.add('color');
	need.classList.remove('color');

	var mf =  document.getElementById("mfchoice");
	mf.classList.remove('search-hide');
	mf.classList.add('search-show');
	var bar =  document.getElementById("search");
	bar.classList.remove('search-show');
	bar.classList.add('search-hide');
	//if (isInBuilding)
	//	location.href = "tech_map_bathroom.html";
	//else
	//	location.href = "route_to_tech_to_bathroom.html";
}

function clickedTech() {
	var choice =  document.getElementById("buildORbath");
	choice.classList.remove('search-hide');
	choice.classList.add('search-show');
	isGoodBuilding = true;
}


