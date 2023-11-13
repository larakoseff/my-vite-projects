import React from "react"
import Header from "./Header.jsx"
import Body from "./Body.jsx"

export default function App() {
    const [user, setUser] = React.useState("Lara")
    
    return (
        <main>
            <Header user={user} />
            <Body user={user} />
        </main>
    )
}
