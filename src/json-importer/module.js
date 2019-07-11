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
			// TODO this is not a synchronous event. Need to make it synchronous or a promise
			jsonResponse.data = JSON.parse(event.target.result);
		};
		fileReader.readAsText(validatedFileInput.file);
	} catch (error) {
		jsonResponse.error = `ERR: Could not read and parse JSON! ${error}`;
	}
	return jsonResponse;
}

module.exports = {
	importJSONFile: importJSONFile
}