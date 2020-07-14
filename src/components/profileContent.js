import React from "react";
import { Formik, Form, Field } from "formik";
import { Icon } from "semantic-ui-react";

import { AuthContext } from "../utils/context/Auth/AuthState";
import { validateField, validateNumber } from "../utils/validateAuth";

import form from "../stylesheets/App.module.scss";

export default function ProfileContent() {
	const { userProfile } = useContext(AuthContext);
	function addGovernorName(name) {
		console.log("name", name);
	}
	return (
		<div>
			<div className={styles.card}>
				{userProfile && userProfile.governorName ? (
					<>
						<lavel>Governor name:</lavel>
						<p>{userProfile.governorName}</p>
						<Icon name="pencil" />
					</>
				) : (
					<Formik
						initialValues={{
							governorName: "",
							cityHall: "",
							castleLevel: "",
						}}
						onSubmit={(values, actions) => {
							addGovernorName(values);
						}}
					>
						{({ errors, touched, validateForm }) => (
							<Form className={form.form}>
								<label>Governor name:</label>
								{errors.governorName &&
									touched.governorName && (
										<div className={styles.validate}>
											{errors.governorName}
										</div>
									)}
								<Field
									type="text"
									name="governorName"
									validate={validateField}
								/>

								<label>City Hall Level:</label>
								{errors.cityHall && touched.cityHall && (
									<div className={styles.validate}>
										{errors.cityHall}
									</div>
								)}
								<Field
									type="text"
									name="cityHall"
									validate={validateNumber}
								/>
								<label>Castle Level:</label>
								{errors.castleLevel && touched.castleLevel && (
									<div className={styles.validate}>
										{errors.castleLevel}
									</div>
								)}
								<Field
									type="text"
									name="castleLevel"
									validate={validateNumber}
								/>
								<button
									type="submit"
									onClick={() => validateForm()}
								>
									Submit
								</button>
							</Form>
						)}
					</Formik>
				)}
			</div>
			<div className={styles.card}>
				{userProfile && userProfile.email}
			</div>
			<div className={styles.card}>
				{userProfile && userProfile.email}
			</div>
			<div className={styles.card}>
				{userProfile && userProfile.email}
			</div>
			<div className={styles.card}>
				{userProfile && userProfile.email}
			</div>
		</div>
	);
}
