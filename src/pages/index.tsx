import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
`;

const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;
`;
const homepage = () => {
    const str = 'Welcome to my boilerplate app';
    return (
        <Wrapper>
            <Title>{str}</Title>
        </Wrapper>
    );
};

export default homepage;
