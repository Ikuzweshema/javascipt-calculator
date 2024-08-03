import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';

export default function App() {
  const [expression, setExpression] = useState("");
  const [answer, setAnswer] = useState("0");

  const trimed = expression.trim();

  useEffect(() => {
    function handlePress(e) {
      if (e.key === "Enter") {
        calculate();
      } else {
        buttonPress(e.key);
      }
    }
    window.addEventListener("keyup", handlePress);
    return () => {
      window.removeEventListener("keyup", handlePress);
    };
  }, [expression, answer]); // Dependency array includes state

  function buttonPress(key) {
    if (key === "C") {
      setAnswer("0");
      setExpression("");
    } else if (key === "=") {
      calculate();
    } else if (isOperator(key)) {
      if (trimed === "" || isOperator(trimed.charAt(trimed.length - 1))) return;
      setExpression(trimed + " " + key + " ");
    } else if (key === ".") {
      const lastNumber = trimed.split(/[+\-*/%]/g).pop();
      if (lastNumber.includes(".")) return;
      setExpression(expression + key);
    } else {
      setExpression(expression + key);
    }
  }

  function calculate() {
    try {
      const result = eval(trimed.replace(/%/g, "/100")); // Replace % with division
      setAnswer(result.toString());
      setExpression(result.toString());
    } catch (error) {
      setAnswer("Error");
    }
  }

  function isOperator(symbol) {
    return /[+\-*/%]/.test(symbol);
  }

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-6 col-lg-4">
          <div className="border p-3 rounded">
            <div className="d-flex justify-content-end mb-3">
              <div className="row">
                <span>{expression}</span>
                <span style={{ fontSize: 40 }}>{answer}</span>
              </div>
            </div>
            <div className="row g-2">
              {[
                ['C', '%', '/', '*'],
                ['7', '8', '9', '-'],
                ['4', '5', '6', '+'],
                ['1', '2', '3', '='],
                ['0', '.']
              ].map((row, rowIndex) => (
                <div className="row g-2" key={rowIndex}>
                  {row.map((buttonText, buttonIndex) => (
                    <div className={`col-${buttonText === '0' ? '6' : '3'}`} key={buttonIndex}>
                      <button
                        type="button"
                        className={`btn btn-${getButtonClass(buttonText)} w-100`}
                        onClick={() => buttonPress(buttonText)}
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
    case '*':
    case '+':
    case '-':
      return 'primary';
    case '=':
      return 'success';
    default:
      return 'secondary';
  }
}
