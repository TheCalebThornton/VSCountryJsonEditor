let jsonData = {},
	elements = {};

document.addEventListener("DOMContentLoaded", function(event) { 
	//onload stuff
	elements.jsonUpload = document.querySelector('input#jsonUploadInput');
	elements.jsonUpload.addEventListener('change', importJSON);

	elements.jsonExport = document.querySelector('input#jsonExportInput');
	elements.jsonExport.addEventListener('click', exportJSON);
});

function isValidFile (file) {
	// TODO validate file type and size
	return true;
}

function importJSON (event) {
	const file = event.target.files.length ? event.target.files[0] : false;

	// TODO consider proper retrieval and validation
	if (!isValidFile(file)) {
		console.log("ERR: file is invalid!");
		return;
	}

	try {
		let fileReader = new FileReader();
		fileReader.onload = function(event) {
			jsonData = JSON.parse(event.target.result);
		};
		fileReader.readAsText(file);
	} catch (error) {
		elements.jsonUploadEle.value = null;
		console.log(`ERR: Could not read and parse JSON! ${error}`)
	}
}

function exportJSON () {
	console.log(`JSON Data: ${JSON.stringify(jsonData)}`);
	// TODO trigger client download for the value above.
}