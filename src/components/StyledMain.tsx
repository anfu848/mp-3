import styled from 'styled-components';

export const StyledMain = styled.div`
    background-color: whitesmoke;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    text-align: left;
    //align-items: center;
    padding: 18px 36px;
    //margin: 8px;
    font-size: calc(8px + 0.8vw);
    color: #1f2028;

    @media screen and (max-width: 750px){
        width: 90%;
    }
    
    h1, h2 {
        font-family: Georgia, serif;
        text-align: center;
        font-weight: bold;
        color: #1f2028;
    }
    h3, h4 {
        margin: 20px 0 1px 0;
    }
    
    img {
        border: 2px solid mediumpurple;
        //max-width: 20%;
    }
    
    .small {
        color: #1f2028;
    }
    
    input {
        background-color: ghostwhite;
        width: 100px;
        height: 30px;
        padding: 8px;
        border: 2px solid midnightblue;
        border-radius: 8px;
        color: #1f2028;
    }
    
    button {
        width: 80px;
        height: 60px;
        background-color: darkslategray;
        padding: 8px;
        border-radius: 8px;
    }
`;
