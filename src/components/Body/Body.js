import React from "react"
import ItemCard from "../ItemCard/ItemCard"
import './Body.css'

function Body({item}) {
    return (
        <main className='main_body'>
            <ItemCard
                item='Notebook'
            />
        </main>
    )
}

export default Body