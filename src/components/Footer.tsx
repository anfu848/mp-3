import {Link} from "react-router";
import styled from "styled-components";

const StyledFooter = styled.footer`
    background: whitesmoke;
    color: #1f2028;
`;

export default function Footer(){
    return(
        <StyledFooter>
            <p>All Rights Reserved by Ash Fu. <Link to="">Credits</Link></p>
        </StyledFooter>
    );
}