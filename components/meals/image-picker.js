"use client";

import classes from "./image-picker.module.css";
import { useRef, useState } from "react";
import Image from "next/image";

export default function ImagePicker({ label, name }) {
  const inputRef = useRef();
  const [uploadedImage, setUploadedImage] = useState();

  function handleClickInput() {
    inputRef.current.click();
  }

  function handleImageChange(event) {
    const file = event.target.files[0];
    if (!file) {
      setUploadedImage(null); //resets preview if user didn't pick a file
      return;
    }

    //need to create a data URL, which is how we output the image
    //therefore, we need the FileReader JS object
    const fileReader = new FileReader();

    //readAsDataURL works in a weird way. It doesn't return anything.
    //We get ahold of the URL by assigning a value to fileReader's onLoad prop (it takes a function)
    fileReader.onload = () => {
      //this function will execute once readAsDataURL() is done executing
      //fileReader.result is the URL of the image we just picked
      setUploadedImage(fileReader.result);
    };

    fileReader.readAsDataURL(file);
  }

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <input
          required
          className={classes.input}
          id={name}
          type="file"
          accept="/image/png, /image/jpeg, /image/jpg"
          name={name}
          ref={inputRef}
          onChange={handleImageChange}
        />
        <button
          className={classes.button}
          type="button"
          onClick={handleClickInput}
        >
          Pick an Image
        </button>
      </div>
      <div className={classes.preview}>
        {uploadedImage ? (
          <Image
            src={uploadedImage}
            alt="The image selected by the user"
            fill
          />
        ) : (
          <p>No image picked yet.</p>
        )}
      </div>
    </div>
  );
}
