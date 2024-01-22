"use client"
import Link from "next/link"

const Bukharimethood=()=>{
    return(
        <div style={{display:'flex',justifyContent:'center',gap:'20px',marginTop:'20px'}}>
        <Link href='bukharimethood/bukharipost' style={{textDecoration:'none'}}>BUkhari ADD</Link>
        <Link href='bukharimethood/bukhariget' style={{textDecoration:'none'}}>BUkhari All hadith</Link>
     
        </div>
    )
}
export default Bukharimethood