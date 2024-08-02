import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

function App() {
    const [expression, setExpression] = useState(0);
    const [answer, setAnswer] = useState(0)
    function buttonPress(key) {

    }

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-12 col-md-6 col-lg-4">
                    <h1 className="text-center mb-4">Calculator</h1>
                    <div className="border p-3 rounded">
                        <div className="d-flex  justify-content-end mb-3">

                            <div className="row">
                                <span>{expression}</span>
                                <span style={{fontSize:40}}>{answer}</span>
                            </div>  
                        </div>
                        <div className="row g-2">
                            {[
                                ['C', '%', '/', 'X'],
                                ['7', '8', '9', '-'],
                                ['4', '5', '6', '+'],
                                ['1', '2', '3', '='],
                                ['0', '.', ]
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
