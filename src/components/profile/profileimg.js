import React, { useRef, useState, useContext, useEffect } from "react";

import { PlayerContext } from "../../utils/context/Player/PlayerState";

import styles from "../../stylesheets/profile.module.scss";
import custom from "../../stylesheets/custom-styles.module.scss";

export default function ProfileImg() {
  const { addImg, profile, profilePicture, updateProfile, getImg } = useContext(
    PlayerContext
  );

  const [inputChanged, setInputChange] = useState(false);
  const [imgToggle, setImgToggle] = useState(false);
  const [data, setData] = useState({
    inGameName: profile.inGameName,
    city: profile.city,
    castle: profile.city,
  });

  useEffect(() => {
    getImg();
  }, []);

  const uploadedImage = useRef(null);
  const imageUpLoader = useRef(null);

  function imgClick() {
    imageUpLoader.current.click();
  }

  function inputChange(e) {
    const { name, value } = e.target;
    setInputChange(true);
    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }
  function saveData() {
    updateProfile(data);
    setInputChange(false);
  }

  function handleChange(e) {
    setImgToggle(true);
    const [file] = e.target.files;
    if (file) {
      const reader = new FileReader();
      const { current } = uploadedImage;
      current.file = file;
      reader.onload = (e) => {
        current.src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    let formData = new FormData();
    formData.append("avatars", uploadedImage.current.file);
    addImg(formData, profilePicture.imgId);
    setImgToggle(false);
  }

  return (
    <div className={custom.center}>
      <div className={styles.imgs}>
        <form encType="multipart/form-data" onSubmit={handleSubmit}>
          <input
            type="file"
            name="avatars"
            onChange={handleChange}
            ref={imageUpLoader}
            style={{ display: "none" }}
          />

          <img
            src={`${process.env.REACT_APP_BASE_URL}/${
              profilePicture.path && profilePicture.path.replace("\\", "/")
            }`}
            ref={uploadedImage}
            alt={profilePicture.originalname}
            onClick={imgClick}
          />
          {imgToggle ? (
            <>
              <button type="submit" className={custom.inputSave} />
            </>
          ) : (
            ""
          )}
        </form>
      </div>
      <div className={styles.gov}>
        <div>
          <label>GOVERNOR NAME: </label>
          <input
            key={profile.inGameName}
            className={custom.input}
            defaultValue={profile.inGameName}
            name="inGameName"
            onChange={(e) => inputChange(e)}
          />
        </div>
        <div>
          <label>CITY HALL: </label>
          <input
            key={profile.city}
            className={custom.input}
            defaultValue={profile.city}
            name="city"
            onChange={(e) => inputChange(e)}
          />
        </div>
        <div>
          <label>CASTLE: </label>
          <input
            key={profile.castle}
            className={custom.input}
            defaultValue={profile.castle}
            name="castle"
            onChange={(e) => inputChange(e)}
          />
        </div>
      </div>

      {inputChanged ? (
        <div className={custom.btn} onClick={saveData}>
          <p>SAVE</p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
