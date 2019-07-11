(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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
},{"./json-importer/module.js":2}],2:[function(require,module,exports){
function retrieveAndValidateFile (files) {
	if (!files.length) {
		return {error: "No files uploaded"};
	}
	const file = files[0];
	
	if (!file.type === "application/json") {
		return { error: "File type must be JSON"}
	}

	return {error: false, file: file};
}


function importJSONFile (fileList) {
	const validatedFileInput = retrieveAndValidateFile(fileList);
	const jsonResponse = {data: null, error: false};

	if (validatedFileInput.error) {
		jsonResponse.error = validatedFileInput.error;
		return jsonResponse;
	}

	try {
		let fileReader = new FileReader();
		fileReader.onload = function(event) {
			jsonResponse.data = JSON.parse(event.target.result);
			return jsonResponse;
		};
		fileReader.readAsText(validatedFileInput.file);
	} catch (error) {
		jsonResponse.error = `ERR: Could not read and parse JSON! ${error}`;
	}
}

module.exports = {
	importJSONFile: importJSONFile
}
},{}]},{},[1]);
