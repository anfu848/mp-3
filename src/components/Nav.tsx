import {Link} from "react-router";
import styled from "styled-components";

const StyledNav = styled.nav`
    width: 20%;
    padding: 5px;
    background: navajowhite;
    @media screen and (max-width: 750px){
        width: 100%;
    }
`;

const StyledUl = styled.ul`
    display: flex;
    padding-left: 0;
    list-style: none;
    flex-direction: column;
    @media screen and (max-width: 750px){
        flex-direction: row;
    }
`;

const StyledLi = styled.li`
    text-align: center;
    margin: 35px;
    padding: 12px;
    background-color: mediumpurple;
    font-size: calc(9px + 0.7vw);
    @media screen and (max-width: 750px){
        //width: 15%;
        margin: 8px;
    }
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: floralwhite;
`;

export default function Nav() {
    return (
        <StyledNav>
            <StyledUl>
                <StyledLi>
                    <StyledLink to="/">Home</StyledLink>
                </StyledLi>
                <StyledLi>
                    <StyledLink to="/education/education.html">Education</StyledLink>
                </StyledLi>
                <StyledLi>
                    <StyledLink to="/experience/experience.html">Experience</StyledLink>
                </StyledLi>
                <StyledLi>
                    <StyledLink to="/projects/projects.html">Projects</StyledLink>
                </StyledLi>
                <StyledLi>
                    <StyledLink to="/skills/skills.html">Skills</StyledLink>
                </StyledLi>
                <StyledLi>
                    <StyledLink to="/contact/contact.html">Contact</StyledLink>
                </StyledLi>
            </StyledUl>
        </StyledNav>
    )
}