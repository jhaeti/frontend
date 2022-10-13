import {Formik, Field, useField, Form, ErrorMessage} from "formik";
import {useRouter} from "next/router";
import * as Yup from "yup";
import MyCheckbox from "./MyCheckbox";
import MySelect from "./MySelect";
import MyTextInput from "./MyTextInput";

import Button from "@mui/material/Button";
import styled from "@emotion/styled";

const StyledButton = styled(Button)`
	border: 2px solid cyan;
`;

const index = () => {
	const router = useRouter();

	return (
		<Formik
			initialValues={{
				email: "",
				firstName: "",
				lastName: "",
			}}
			validationSchema={Yup.object({
				firstName: Yup.string()
					.max(15, "Must be 15 characters or less")
					.required("Required"),
				lastName: Yup.string()
					.max(20, "Must be 20 characters or less")
					.required("Required"),
				email: Yup.string()
					.email("Invalid email address")
					.required("Required"),
				acceptedTerms: Yup.boolean()
					.required("Required")
					.oneOf([true], "You must accept the terms and conditions."),
				jobType: Yup.string()
					.oneOf(
						["designer", "development", "product", "other"],
						"Invalid Job Type"
					)
					.required("Required"),
			})}
			onSubmit={(values) => {
				alert(JSON.stringify(values, null, 2));
				console.log(values);
				router.push("/");
			}}
		>
			{({isSubmitting}) => (
				<Form>
					<MyTextInput 
                    variant="standard"
						label="First Name"
						name="firstName"
						type="text"
						placeholder="Jane"
					/>

					<MyTextInput 
                    variant="standard"
						label="Last Name"
						name="lastName"
						type="text"
						placeholder="Doe"
					/>

					<MyTextInput 
                    variant="standard"
						label="Email Address"
						name="email"
						type="email"
						placeholder="jane@formik.com"
					/>

					<MySelect label="Job Type" name="jobType">
						<option value="">Select a job type</option>
						<option value="designer">Designer</option>
						<option value="development">Developer</option>
						<option value="product">Product Manager</option>
						<option value="other">Other</option>
					</MySelect>

					<MyCheckbox name="acceptedTerms">
						I accept the terms and conditions
					</MyCheckbox>

					<StyledButton
						variant="contained"
						type="submit"
						disabled={isSubmitting}
					>
						Submit
					</StyledButton>
				</Form>
			)}
		</Formik>
	);
};

export default index;
