import React, { useRef, useState } from "react";

import styles from "../stylesheets/profile.module.scss";

export default function ProfileImg() {
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
			<img ref={uploadedImage} />
			<div
				className={styles.btn}
				onClick={() => {
					imageUpLoader.current.click();
					setToggle(!toggle);
				}}
			>
				{toggle === true ? "SAVE" : "EDIT"}
			</div>
		</div>
	);
}
