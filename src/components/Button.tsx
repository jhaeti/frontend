import Button from "@mui/material/Button";
import styled from "styled-components";

const Btn = () => {
	return (
		<>
			<Button variant="contained">Unstyled</Button>
			<StyledBtn variant="outlined">Styled</StyledBtn>
		</>
	);
};

const StyledBtn = styled(Button)`
	color: green;
`;

export default Btn;
