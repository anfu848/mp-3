import { StyledMain } from '../StyledMain'
import useCalculator from "../UseCalc";
import styled from "styled-components";

const StyledCalc = styled.div`
    text-align: center;
    border: 4px solid mediumpurple;
    width: 30%;
    padding: 16px;
    background: antiquewhite;
    border-radius: 18px;
    margin: 0 auto;
`;

export default function Projects() {
    const {
        first,
        setFirst,
        second,
        setSecond,
        output,
        calculate,
        clear
    } = useCalculator();

    return (
        <StyledMain>
            <h2>Calculator</h2>
            <StyledCalc>
                <input id="first" value={first} onChange={(e) => setFirst(e.target.value)}/>
                <input id="second" value={second} onChange={(e) => setSecond(e.target.value)}/>
                <br/><br/>
                <div className ="operations">
                    <button onClick={() => calculate("addition")}>+</button>
                    <button onClick={() => calculate("subtraction")}>-</button>
                    <button onClick={() => calculate("multiplication")}>×</button>
                    <br/>
                    <button onClick={() => calculate("division")}>÷</button>
                    <button onClick={() => calculate("exponentiation")}>**</button>
                    <button onClick={clear}>Clear</button>
                </div>
            </StyledCalc>
            <br/>
            <h2 id="output" style={{ color: Number(output) < 0 ? "red" : "black"}}>{output}</h2>
        </StyledMain>
    )
}
