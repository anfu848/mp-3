import styled from "styled-components";

const StyledHeader = styled.header`
    width: 100%;
    background: rebeccapurple;
    color: whitesmoke;
    padding: 10px;
    text-decoration: none;
    text-align: left;
    font-family: Georgia, serif;
    h1, h2{
        margin: 8px 0 8px 0;
        color: whitesmoke;
        font-family: Georgia, serif;
    }
`;

export default function Header(){
    return(
        <StyledHeader>
            <h2><strong>Ash Shen Fu</strong></h2>
            <p>My Online Resume</p>
        </StyledHeader>
    );
}