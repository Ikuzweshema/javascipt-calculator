import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
    function buttonPress() {

    }
    return <div className='container-fluid d-flex justify-content-center '><div className='contentaier '>
        <h1>Expression</h1>
        <div className=' d-flex flex-column border p-2 gap-1' >
            <div className=" d-flex gap-1">
                <button type='button' id='clear' onClick={() => buttonPress()} className='btn btn-danger px-3'>Clear</button>
                <button type='button' id='clear' onClick={() => buttonPress()} className='btn btn-secondary px-4'>%</button>
                <button type='button' id='clear' onClick={() => buttonPress()} className='btn btn-primary px-4'>/</button>
            </div>
            <div className=' d-flex gap-1'>
                <button type='button' id='clear' onClick={() => buttonPress()} className='btn btn-secondary px-3'>7</button>
                <button type='button' id='clear' onClick={() => buttonPress()} className='btn btn-secondary px-3' >8</button>
                <button type='button' id='clear' onClick={() => buttonPress()} className='btn btn-secondary px-3'>9</button>
                <button type='button' id='clear' onClick={() => buttonPress()} className='btn btn-info px-4'>X</button>
            </div>
            <div className=' d-flex gap-1'>
                <button type='button' id='clear' onClick={() => buttonPress()} className='btn btn-secondary px-3'>4</button>
                <button type='button' id='clear' onClick={() => buttonPress()} className='btn btn-secondary px-3' >5</button>
                <button type='button' id='clear' onClick={() => buttonPress()} className='btn btn-secondary px-3'>6</button>
                <button type='button' id='clear' onClick={() => buttonPress()} className='btn btn-warning px-4'>-</button>
            </div>
            <div className=' d-flex gap-1'>
                <button type='button' id='clear' onClick={() => buttonPress()} className='btn btn-secondary px-3'>1</button>
                <button type='button' id='clear' onClick={() => buttonPress()} className='btn btn-secondary px-3' >2</button>
                <button type='button' id='clear' onClick={() => buttonPress()} className='btn btn-secondary px-3'>3</button>
                <button type='button' id='clear' onClick={() => buttonPress()} className='btn btn-info px-4'>+</button>
            </div>
            <div className=' d-flex gap-1'>
                <button type='button' id='clear' onClick={() => buttonPress()} className='btn btn-secondary px-3'>7</button>
                <button type='button' id='clear' onClick={() => buttonPress()} className='btn btn-secondary px-3' >8</button>
                <button type='button' id='clear' onClick={() => buttonPress()} className='btn btn-secondary px-3'>9</button>
                <button type='button' id='clear' onClick={() => buttonPress()} className='btn btn-info px-4'>X</button>
            </div>
        </div>

    </div></div>

}

export default App
