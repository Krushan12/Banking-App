import { Sidebar } from "../../components/Sidebar"
import React from "react"

const Home = () =>{
    return (
        <main>
            {children}
            <Sidebar />
        </main>
    )
}

export default Home