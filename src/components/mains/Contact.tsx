import { StyledMain } from '../StyledMain'
import contactPhoto from "../../assets/contactphoto.jpg";
import styled from "styled-components";

const StyledImg = styled.img`
    width: 30%;
`;

export default function Contact() {
    return(
        <StyledMain>
            <h2>Contact</h2>
            <div className="home-content">
                <div className="contacttext">
                    <p><b>Email:</b> anfu848@gmail.com</p>
                    <p><b>Phone:</b> 646-764-4965</p>
                    <br/>
                    <p>Or alternatively, reach out to me at my BU email:</p>
                    <p><b>BU Email:</b> anfu@bu.edu</p>
                    <br/>
                    <p><b>LinkedIn:</b> https://www.linkedin.com/in/ash-fu/</p>
                    <p><b>GitHub:</b> https://github.com/anfu848</p>
                    <br/><br/>
                    <p>Email for Inquiry, Resume, CV, or other.</p>
                    <br/>
                </div>
                <StyledImg src={contactPhoto} alt="Ash Fu and friend at Beach"/>
            </div>
        </StyledMain>
    )
}