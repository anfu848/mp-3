
import { useState } from "react";

type Operation = | "addition" | "subtraction" | "multiplication" | "division" | "exponentiation";

export default function useCalc() {
    const [first, setFirst] = useState("");
    const [second, setSecond] = useState("");
    const [output, setOutput] = useState<string | null>(null);

    function calculate(operation: Operation) {
        const a = Number(first);
        const b = Number(second);
        let result;

        switch (operation) {
            case "addition":
                result = a + b;
                break;
            case "subtraction":
                result = a - b;
                break;
            case "multiplication":
                result = a * b;
                break;
            case "division":
                result = a / b;
                break;
            case "exponentiation":
                result = a ** b;
                break;
            default:
                return;
        }

        setOutput(String(result));
    }

    function clear() {
        setFirst("");
        setSecond("");
        setOutput(null);
    }

    return {first, setFirst, second, setSecond, output, calculate, clear};
}
