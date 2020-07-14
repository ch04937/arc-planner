import React, { useRef, useState, useContext } from "react";

import { ArkContext } from "../utils/context/Ark/ArkState";

import styles from "../stylesheets/profile.module.scss";

export default function ProfileImg() {
	const { addImg } = useContext(ArkContext);
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
	return (
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
			{toggle === true ? (
				<div className={styles.btn} onClick={saveFile}>
					<p>SAVE</p>
				</div>
			) : (
				<div className={styles.btn} onClick={changeUpload}>
					<p>Edit</p>
				</div>
			)}
		</div>
	);
}
