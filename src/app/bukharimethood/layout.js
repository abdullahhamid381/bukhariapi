"use client"
import Link from "next/link"

const layout=({children})=>{
    return(
        <div style={{}}>
        <Link href='bukharimethood/bukharipost' style={{textDecoration:'none',margin:'0 20px'}}>BUkhari ADD</Link>
        <Link href='/bukharimethood/bukhariget'  style={{textDecoration:'none',margin:'0 20px'}}>BUkhari All hadith</Link>
     {children}
        </div>
    )
}
export default layout