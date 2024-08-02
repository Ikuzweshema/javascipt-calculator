import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
    function buttonPress() {

    }
    return <div className='container-fluid'><div className='content'>
        <h1>Expression</h1>
        <div className='dispaly'>

            <div className='expression'></div>
            <div className='answer' id='answer'></div>
        </div>
        
        <button type='button' id='clear' onClick={() => buttonPress()} className='btn btn-secondary'>C</button>
        <button type='button' id='clear' onClick={() => buttonPress()} className='btn btn-secondary'>C</button>
        <button type='button' id='clear' onClick={() => buttonPress()} className='btn btn-secondary'>C</button>
        <button type='button' id='clear' onClick={() => buttonPress()} className='btn btn-secondary'>C</button>
        <button type='button' id='clear' onClick={() => buttonPress()} className='btn btn-secondary'>C</button>
        <button type='button' id='clear' onClick={() => buttonPress()} className='btn btn-secondary'>C</button>
        <button type='button' id='clear' onClick={() => buttonPress()} className='btn btn-secondary'>C</button>
        <button type='button' id='clear' onClick={() => buttonPress()} className='btn btn-secondary'>C</button>
        <button type='button' id='clear' onClick={() => buttonPress()} className='btn btn-secondary'>C</button>
        <button type='button' id='clear' onClick={() => buttonPress()} className='btn btn-secondary'>C</button>
    </div></div>

}

export default App
