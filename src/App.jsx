import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

function App() {
    const [expression, setExpression] = useState("");
    const [answer, setAnswer] = useState("")
    const trimed = expression.trim()
    function isOperator(symbol) {
        return /[+\-*/%]/.test(symbol);
    }
    function buttonPress(key) {
        if (key == "C") {
            setAnswer(0)
            setExpression("")
        }
        else if (key == "-") {
            if (answer == "") return;
            setAnswer(
                answer.toString().charAt(0) === "-" ? answer.slice(1) : "-" + answer
            )
        }
        else if (key == "%") {
            if (answer === "") return;
            setAnswer((parseFloat(answer) / 100).toString());

        }
        else if (isOperator(key)) {
            setExpression(trimed + " " + key + " ")
        }
        else if (key == "=") {
            calculate();
        }
        else if (key === "0") {
            if (expression.charAt(0) !== "0") {
                setExpression(expression + key)
            }
        }
        else if (key == ".") {
           const lastNumber=expression.split(/[+\-*/%]/g).pop()
            setExpression(answer + key)

        }
    }
    function calculate() {

    }
    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-12 col-md-6 col-lg-4">

                    <div className="border p-3 rounded">
                        <div className="d-flex  justify-content-end mb-3">

                            <div className="row">
                                <span>{expression}</span>
                                <span style={{ fontSize: 40 }}>{answer}</span>
                            </div>
                        </div>
                        <div className="row g-2">
                            {[
                                ['C', '%', , '-/+', 'X'],
                                ['7', '8', '9', '-'],
                                ['4', '5', '6', '+'],
                                ['1', '2', '3', , '/',],
                                ['0', '.', , '=']
                            ].map((row, rowIndex) => (
                                <div className="row g-2" key={rowIndex}>
                                    {row.map((buttonText, buttonIndex) => (
                                        <div className={`col-${buttonText === '0' ? '6' : '3'}`} key={buttonIndex}>
                                            <button
                                                type="button"
                                                className={`btn btn-${getButtonClass(buttonText)} w-100`}
                                                onClick={() => buttonPress(buttonText)}
                                                disabled={!buttonText}
                                            >
                                                {buttonText}
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function getButtonClass(buttonText) {
    switch (buttonText) {
        case 'C':
            return 'danger';
        case '%':
        case '/':
        case 'X':
        case '+':
        case '-':
            return 'primary';
        case '=':
            return 'success';
        default:
            return 'secondary';
    }
}

export default App;
