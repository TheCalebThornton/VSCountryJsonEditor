const jsonImporter = require("./json-importer/module.js");

let jsonData = {},
	elements = {};

document.addEventListener("DOMContentLoaded", function(event) { 
	//onload stuff
	elements.jsonUpload = document.querySelector('input#jsonUploadInput');
	elements.jsonUpload.addEventListener('change', importJSON);

	elements.jsonExport = document.querySelector('input#jsonExportInput');
	elements.jsonExport.addEventListener('click', exportJSON);
});

function importJSON (event) {
	response = jsonImporter.importJSONFile(event.target.files);
	if (response.error) {
		// something bad happened; reset input
		// TODO use jsonResponse.error.message to display UI error
		console.error(response.error);
		elements.jsonUploadEle.value = null;
		return;
	}

	jsonData = response.data;
}

function exportJSON () {
	console.log(`JSON Data: ${JSON.stringify(jsonData)}`);
	// TODO trigger client download for the value above.
}