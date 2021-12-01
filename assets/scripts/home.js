
//pop up for markers
function unhidePopup(popupID) {
	document.getElementById('popup-overlay').classList.remove('hidden');
	document.getElementById(popupID).classList.remove("hidden");
}

function unhide1() {
	unhidePopup("redwoodPop");
}

redwood = document.getElementById("redwood");
redwood.onclick = unhide1;

//close popup
function closePopup(popupID) {
	document.getElementById('popup-overlay').classList.add('hidden');
	document.getElementById(popupID).classList.add("hidden");
}

function closeAllPopup() {
	var popupElements = document.getElementsByClassName('popup');

  for (var i = 0; i < popupElements.length; i++) {
		var id = popupElements[i].id;
		closePopup(id);
	}
}

document.getElementById("popup-overlay").onclick = closeAllPopup;
