import * as React from "react";
import { storage } from "./firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";
import "./UploadFile.css";
import { messages } from "./Lines";
import { useWindowSize } from "react-use";

import Confetti from "react-confetti";

const UploadFile = () => {
  const [sketchUpload, setSketchUpload] = React.useState(null);
  const [paintingUpload, setPaintingUpload] = React.useState(null);
  const [bestWorkUpload, setBestWorkUpload] = React.useState(null);
  const [uploadedSketches, setUploadedSketches] = React.useState([]);
  const [uploadedPaintings, setUploadedPaintings] = React.useState([]);
  const [bestUploadWorks, setBestUploadWork] = React.useState([]);
  const { width, height } = useWindowSize();
  const randomMessage = messages[Math.floor(Math.random() * messages.length)];

  const uploadSketch = () => {
    if (sketchUpload === null) return;
    const imageRef = ref(storage, `/Skecth/${sketchUpload.name + v4()}`);
    uploadBytes(imageRef, sketchUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setUploadedSketches((prev) => [...prev, url]);
      });
      <Confetti width={width} height={height} />;
      alert("Your Skecth work is Uploaded");
    });
  };

  const uploadPainting = () => {
    if (paintingUpload === null) return;
    const imageRef = ref(storage, `Painting/${paintingUpload.name + v4()}`);
    uploadBytes(imageRef, paintingUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setUploadedPaintings((prev) => [...prev, url]);
      });
      <Confetti width={width} height={height} />;
      alert("Your Painting work is Uploaded");
    });
  };
  const bestWork = () => {
    if (bestWorkUpload === null) return;
    const imageRef = ref(storage, `BestWork/${bestWorkUpload.name + v4()}`);
    uploadBytes(imageRef, bestWorkUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setBestUploadWork((prev) => [...prev, url]);
      });
      alert("Your Bestwork work is Uploaded");
    });
  };
  return (
    <div className="upload-container">
      <h1>Hi Kanchan, Welcome! Upload Your Art</h1>
      <p className="inspirational-message">{randomMessage}</p>

      <div className="upload-box">
        <input
          type="file"
          onChange={(e) => setSketchUpload(e.target.files[0])}
          className="file-input"
        />
        <button className="upload-button" onClick={uploadSketch}>
          Upload Sketch
        </button>
      </div>

      <div className="upload-box">
        <input
          type="file"
          onChange={(e) => setPaintingUpload(e.target.files[0])}
          className="file-input"
        />
        <button className="upload-button" onClick={uploadPainting}>
          Upload Painting
        </button>
      </div>
      <div className="upload-box">
        <input
          type="file"
          onChange={(e) => setBestWorkUpload(e.target.files[0])}
          className="file-input"
        />
        <button className="upload-button" onClick={bestWork}>
          My Best Work
        </button>
      </div>
    </div>
  );
};

export default UploadFile;
