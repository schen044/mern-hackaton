import { useState, useEffect } from 'react'

export default function NewOrderPage() {
    const [ menuItems, setMenuItems ] = useState([])

    // this will make our useEffect run for every render
    useEffect(function() {
        console.log('NewOrderPage rendered')
    })

    // the useEffect will fire after the initial render
    useEffect(function() {
        console.log('useEffect runs only after first render')
    }, [])

    useEffect(function() {
        console.log('useEffect runs when menuItems changes')
    }, [menuItems])

    // - Fetch the menuItems from the server via AJAX
    // - When the data comes back, call setMenuItems to save in state



    return (
        <>
            <h1>NewOrderPage</h1>
            <button onClick={() => setMenuItems(Date.now())}>Trigger Rerender</button>
        </>
    )
}