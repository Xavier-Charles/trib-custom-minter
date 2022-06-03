// FileUpload Component : Uploads the selcted File and returns the URL after uploading the file .
import React from "react";
import { FileUpload } from "react-ipfs-uploader";

const FileUploader = ({ fileUrl, setFileUrl }) => {
  return (
    <div>
      <FileUpload setUrl={setFileUrl} />
      FileUrl :{" "}
      <a
        href={fileUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        {fileUrl}
      </a>
    </div>
  );
};

export default FileUploader;
