import React, { useState } from "react";
const FileUploader = () => {
const [fileContent, setFileContent] = useState("");
const handleFileUpload = (e) => {
const file = e.target.files[0];
const reader = new FileReader();
reader.onload = (event) => {
setFileContent(event.target.result);
};
if (file) reader.readAsText(file);
};
return (
<div>
<h3>Upload a File</h3>
<input type="file" onChange={handleFileUpload} />
{fileContent && (
<div>
<h4>File Content:</h4>
<textarea value={fileContent} readOnly rows="10" cols="50" />
</div>
)}
</div>
);
};
export default FileUploader;