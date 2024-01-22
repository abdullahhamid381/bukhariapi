'use client'
import Link from "next/link"
import { useEffect, useState } from "react"

const Bukharipost = () => {

// STATE =============================================

    const [Baab, setbaab] = useState('')
    const [Book, setbook] = useState('')
    const [Chapter, setchapter] = useState('')
    const [Status, setstatus] = useState('')
    const [Hadithnum, sethadithnum] = useState('')
    const [Hadith, sethadith] = useState('')
   
useEffect(()=>{
    gethadithdetail()
},[]);
const gethadithdetail=async()=>{

let hadithdata = await fetch('http://localhost:3000/bukharimethood/65ae0559dc9ed126e373c7b1');
hadithdata = await hadithdata.json();
if(hadithdata.success){
    let result = hadithdata.result;
    setbaab(result.Baab)
}
console.log(hadithdata)
}
    return (
        <div>
            <h1>Bukhari Hadees Update here</h1>
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
            <button>ADD HADEES</button>
        </div>
    )
}
export default Bukharipost