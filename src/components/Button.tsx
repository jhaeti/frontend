import Button from '@mui/material/Button';
import styled from 'styled-components';

const StyledBtn = styled(Button)`
    color: green;
`;
const Btn = () => (
    <>
        <Button variant='contained'>Unstyled</Button>
        <StyledBtn variant='outlined'>Styled</StyledBtn>
    </>
);

export default Btn;
