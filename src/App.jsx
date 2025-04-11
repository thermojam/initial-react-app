import {useState} from 'react'
import './App.css'

export const App = () => {
    const [count, setCount] = useState(0)
    const currentYear = new Date().getFullYear() // императивный подход

    return (
        <>
            <h1>Vite + React</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}> {/*императивный подход*/}
                    count is {count}
                </button>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
            <footer>
                <p>Current Year: {currentYear}</p> {/*декларативный подход*/}
            </footer>
        </>
    )
}


