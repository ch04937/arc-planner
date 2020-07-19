import React, { useRef, useState, useContext } from "react";

import { ArkContext } from "../../utils/context/Ark/ArkState";

import styles from "../../stylesheets/profile.module.scss";
import custom from "../../stylesheets/custom-styles.module.scss";

export default function ProfileImg() {
	const { addImg, profile } = useContext(ArkContext);
	const [toggle, setToggle] = useState(false);

	const uploadedImage = useRef(null);
	const imageUpLoader = useRef(null);

	function fileSelect(e) {
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
	function saveFile() {
		addImg(uploadedImage.current.file);
		setToggle(false);
	}
	function changeUpload() {
		imageUpLoader.current.click();
		setToggle(true);
	}
	// function submitFile() {
	// 	// img === null ? console.log("img is null", img) : console.log(img);
	// // }
	return (
		<div className={custom.wrapper}>
			<div className={styles.imgs}>
				<input
					type="file"
					accept="image/*"
					multiple={false}
					onChange={fileSelect}
					ref={imageUpLoader}
					style={{ display: "none" }}
				/>
				<img ref={uploadedImage} alt="" />
			</div>
			<div className={styles.gov}>
				<p>GOVERNOR NAME: {profile && profile.inGameName}</p>
				<p>CITY HALL: {profile && profile.city}</p>
				<p>CASTLE: {profile && profile.castle}</p>
			</div>

			{toggle === true ? (
				<div className={custom.btn} onClick={saveFile}>
					<p>SAVE</p>
				</div>
			) : (
				<div className={custom.btn} onClick={changeUpload}>
					<p>Edit</p>
				</div>
			)}
		</div>
	);
}
