import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './FileUpload.scss';
import axios from 'axios';
import removeFile from '../App.jsx';
const FileUpload = ({ files, setFiles, removeFile }) => {
    const uploadHandler = (event) => {
        const file = event.target.files[0];
        if (!file) return;
        file.isUploading = true;
        setFiles([file]); // Set files to an array containing only the selected file

        // upload file
        const formData = new FormData();
        formData.append(
            "newFile",
            file,
            file.name
        );
        axios.post('http://localhost:8080/upload', formData)
            .then((res) => {
                file.isUploading = false;
                setFiles([file]); // Update files array with the uploaded file
            })
            .catch((err) => {
                // inform the user
                console.error(err);
                removeFile(file.name);
            });
    };

    return (
        <div className="file-card">
            <div className="file-inputs">
                {/* Set multiple attribute to false to only allow one file */}
                <input type="file" onChange={uploadHandler} accept="application/pdf" multiple={false} />
                <button>
                    <i>
                        <FontAwesomeIcon icon={faPlus} />
                    </i>
                    Upload
                </button>
            </div>
            <p className="main">Supported files</p>
            <p className="info">PDF's ONLY</p>
        </div>
    );
};

export default FileUpload;
