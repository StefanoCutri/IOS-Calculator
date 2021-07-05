import { useRef, useState } from "react";

enum Operators {

    add, rest, multiply, divide

}


export const useCalculator = () => {

    const [result, setResult] = useState('0');
    const [smallResult, setSmallResult] = useState('0');

    const lastOperation = useRef<Operators>()

    const cleanResult = () => {

        
        setResult('0')
        setSmallResult('0')
    }

    const createNumber = (numberText: string) => {
            
        if (result.includes('.') && numberText === '.') return;

        if (result.startsWith('0') || result.startsWith('-0')) {
            
            if (numberText === '.') {

                setResult(result + numberText)    
            

            // Check if its a 0 and has a dot
            } else if (numberText === '0' && result.includes('.')) {
                setResult(result + numberText)


            // Check if is different from 0  and it has a dot
            }else if (numberText !== '0' && !result.includes('.')) {
                setResult(numberText)
            

            // Avoid 0000.0
            }else if (numberText === '0' && !result.includes('.')) {

                setResult(result)

            } else {
                setResult(result + numberText)
            }

        } else {
            
            setResult(result + numberText)
        }

        
    }

    const posistiveNegative = (numberText: string) => {

        if (result.includes('-')) {
            setResult(result.replace('-', ''))
        }else{
            setResult('-'+result)
        }
        
    }

    const btnDelete = () => {

        if (result.length === 1 || (result.length === 2 && result.includes("-"))) {
            
            setResult('0')
            
        } else{
            setResult(result.slice(0, -1))
            
        }
        

    }

    const changePreviousNum = () => {
        if (result.endsWith('.')) {
            setSmallResult(result.slice(0, -1))
            
        } else{
            setSmallResult(result)
        }

        setResult('0')
    }

    const btnDivide = () => {
        changePreviousNum();
        
        lastOperation.current = Operators.divide;
    }
    const btnMultiply = () => {
        changePreviousNum();
        lastOperation.current = Operators.multiply;
    }

    const btnAdd = () => {
        changePreviousNum();
        lastOperation.current = Operators.add;
    }

    const btnRest = () => {
        changePreviousNum();
        lastOperation.current = Operators.rest;
    }

    const calculate = () => {
        
        const num1 = Number(result);
        const num2 = Number(smallResult);

        if (num1 === 0 && num2 === 0 ) return;

        switch (lastOperation.current) {

            case Operators.add:
                setResult(`${num1 + num2}`)
                break;

            case Operators.rest:
                setResult(`${num2 - num1}`)
                break;

            case Operators.multiply:
                setResult(`${num1 * num2}`)
                break;

            case Operators.divide:
                setResult(`${num2 / num1}`)
                break;
        
      
        }
        setSmallResult('0')
    }

    return {
        result,
        smallResult,
        cleanResult,
        createNumber,
        btnAdd,
        btnRest,
        btnDelete,
        btnMultiply,
        btnDivide,
        calculate, 
        posistiveNegative
    }

}
