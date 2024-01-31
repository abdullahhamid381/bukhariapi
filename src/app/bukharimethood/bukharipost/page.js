'use client'
import Link from "next/link"
import { useState } from "react"

const Muslimpost = () => {
    const [Baab, setbaab] = useState('')
    const [Book, setbook] = useState('')
    const [Chapter, setchapter] = useState('')
    const [Status, setstatus] = useState('')
    const [Hadithnum, sethadithnum] = useState('')
   
    const [Hadith, sethadith] = useState('')
   
    const addhadees = async () => {
      
        let result = await fetch("http://localhost:3000/api/bukhari", {
            method:'POST',
            body: JSON.stringify({ Baab, Book, Chapter, Status, Hadithnum, Hadith })
        });
        result = await result.json()
        if (result.success) {
            alert('hadees added')
        }
    }
    return (
        <div>
            <h1>Bukhari Hadees Add here</h1>
            <h3>Chapter Name</h3>
            <input type="text" mvalue={Chapter} onChange={(e) => setchapter(e.target.value)} placeholder="enter your book chapter" />
            <h3>Book Name</h3>
            <input type="text" value={Book} onChange={(e) => setbook(e.target.value)} placeholder="enter your book name" />
            <h3>Hadees No</h3>
            <input type="text" value={Hadithnum} onChange={(e) => sethadithnum(e.target.value)} placeholder="enter your hadees no" />
            <h3>Bab Name</h3>
            <input type="text" value={Baab} onChange={(e) => setbaab(e.target.value)} placeholder="enter your baab" />
            <h3>hadees status</h3>
            <input type="text" value={Status} onChange={(e) => setstatus(e.target.value)} placeholder="enter your hadees status" />
            <h3>Hadees text</h3>
            <input type="text" value={Hadith} onChange={(e) => sethadith(e.target.value)} placeholder="enter your hadees text" />
            <br /><br />
            <button onClick={addhadees} style={{padding:'80px',cursor:'pointer'}}>ADD HADEES</button>
        </div>
    )
}
export default Muslimpost