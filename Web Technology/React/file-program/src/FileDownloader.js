import React from "react";
const FileDownloader = () => {
const handleDownload = () => {
const content = "This is some sample text for the file.";
const blob = new Blob([content], { type: "text/plain" });
const url = URL.createObjectURL(blob);
const link = document.createElement("a");
link.href = url;
link.download = "sample.txt";
link.click();
URL.revokeObjectURL(url);
};
return (
<div>
<h3>Download a File</h3>
<button onClick={handleDownload}>Download</button>
</div>
);
};
export default FileDownloader;