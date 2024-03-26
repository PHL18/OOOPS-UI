
import './App.scss';
import React, { useState } from 'react';
import FileUpload from './FileUpload/FileUpload';
import FileList from './FileList/FileList';
import Chatspace from './Chatspace/Chatspace';
import Navbar from './Navbar/Navbar';
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
     {/* <Navbar/> */}
      <div className="fileupload">
      <FileUpload files={files} setFiles={setFiles} removeFile={removeFile} />
      <div className="filelist">
          <FileList files={files} removeFile={removeFile}  />
        </div>
      </div>
        <div className="chat"> <Chatspace/></div>
     
    </div>
  );
}


export default App;
