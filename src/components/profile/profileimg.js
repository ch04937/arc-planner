import React, { useRef, useState, useContext } from "react";

import { ArkContext } from "../../utils/context/Ark/ArkState";

import styles from "../../stylesheets/profile.module.scss";
import custom from "../../stylesheets/custom-styles.module.scss";

export default function ProfileImg() {
	const { addImg, profile, updateProfile } = useContext(ArkContext);

	const [toggle, setToggle] = useState(false);
	const [inputChanged, setInputChange] = useState(false);
	const [data, setData] = useState({
		inGameName: profile.inGameName,
		city: profile.city,
		castle: profile.city,
	});

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
	}

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
				// <div className={custom.btn} onClick={changeUpload}>
				// 	<p>Edit</p>
				// </div>
			)}
		</div>
	);
}
