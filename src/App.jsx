import { createElement, useState } from 'react'
import './App.css'

function CurrentYear() {
    const currentYear = new Date().getFullYear(); // императивный подход
    return createElement('p', null, `Current Year: ${currentYear}`); // декларативный подход
}

export const App = () => {
    const [count, setCount] = useState(0);

    return createElement(
        'div',
        null,
        createElement('h1', null, 'Vite + React'),
        createElement(
            'div',
            { className: 'card' },
            createElement(
                'button',
                { onClick: () => setCount((count) => count + 1) }, // императивный подход
                `count is ${count}`
            )
        ),
        createElement(
            'p',
            { className: 'read-the-docs' },
            'Click on the Vite and React logos to learn more'
        ),
        createElement(CurrentYear)
    )
}

