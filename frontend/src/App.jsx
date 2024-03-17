
import './App.scss';
import React, { useState } from 'react';
import FileUpload from './FileUpload/FileUpload';
import FileList from './FileList/FileList';
function App() {
  const [files, setFiles] = useState(

    [
      {
        // name: 'myFile.pdf'
      }
    ]
  )

  const removeFile = (filename) => {
    setFiles(files.filter(file => file.name !== filename))
  }
  console.log(files)
  return (
    <div className="App">
      <p className='title'>Upload file</p>
      <FileUpload files={files} setFiles={setFiles} removeFile={removeFile} />
      <FileList files={files} removeFile={removeFile} />
    </div>
  );
}

export default App;
