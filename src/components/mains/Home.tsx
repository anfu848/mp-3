// import styled from "styled-components";
import { StyledMain } from '../StyledMain'
import selfPhoto from "../../assets/selfphoto.jpg";
import styled from "styled-components";

const StyledDiv = styled.div`
    display: flex;
    flex-direction: row;
    .image-content {
        width: 40%;
        padding: 0 20px 0 0;
    }
    img {
        width: 100%;
    }
`;

export default function Home(){
    return (
        <StyledMain>
            <h2>Home</h2>
            <StyledDiv>
                <div className="image-content">
                    <img src={selfPhoto} alt="Linked-In Self Portrait Photo"/>
                    <p className="small">Me, May 2026</p>
                </div>
                <p>
                    Hello! I'm Ash Fu, a current senior at Boston University pursuing a double degree in Astronomy and Physics & CS.
                    I am seeking opportunities in fields pertaining to observational astronomy, analyzing data pertaining to planetary studies, and development via Python.
                    <br/><br/>
                        Through my coursework and research experiences, I've cultivated a love for Earth Sciences, and Astrobiology, and Data Analysis. I am detail oriented, and have experience with conducting scientific research and building in Python.
                        <br/><br/>
                            Feel free to connect with me or reach me at anfu848@gmail.com
                </p>
            </StyledDiv>
        </StyledMain>
    );
}