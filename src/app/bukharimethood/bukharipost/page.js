'use client'
import Link from "next/link"
import { useState } from "react"

const Bukharipost = () => {
    const [baab, setbaab] = useState('')
    const [book, setbook] = useState('')
    const [chapter, setchapter] = useState('')
    const [status, setstatus] = useState('')
    const [hadeesno, sethadeesno] = useState('')
    const [hadeestext, sethadeestext] = useState('')
    const addhadees = async () => {
        console.log(baab, book, chapter, status, hadeesno, hadeestext);
        let result = await fetch("http://localhost:3000/api/bukhari", {
            method: 'POST',
            body: JSON.stringify({ baab, book, chapter, status, hadeesno, hadeestext })
        });
        resultadd = await result.json()
        if (resultadd.success) {
            alert('hadees added')
        }
    }
    return (
        <div>
            <h1>Bukhari Hadees Add here</h1>
            <input type="text" value={baab} onChange={(e) => setbaab(e.target.value)} placeholder="enter your baab" />
            <input type="text" value={book} onChange={(e) => setbook(e.target.value)} placeholder="enter your book name" />
            <input type="text" mvalue={chapter} onChange={(e) => chapter(e.target.value)} placeholder="enter your book chapter" />
            <input type="text" value={status} onChange={(e) => setstatus(e.target.value)} placeholder="enter your hadees status" />
            <input type="text" value={hadeesno} onChange={(e) => sethadeesno(e.target.value)} placeholder="enter your hadees no" />
            <input type="text" value={hadeestext} onChange={(e) => sethadeestext(e.target.value)} placeholder="enter your hadees text" />
            <br /><br />
            <button onClick={addhadees}>ADD HADEES</button>
        </div>
    )
}
export default Bukharipost