import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr ',gap:'30px 0',marginTop:'50px',width:'90%',margin:' 50px auto 0 auto',placeItems:'center'}}>
  
        <Link href='/bukharimethood/bukhariget/revelation'>	
        Chapter 1 : THE BOOK OF REVELATION 1-7</Link>

        <Link href='/bukharimethood/bukhariget/belief'>	
        Chapter 2 : THE BOOK OF BELIEF  (FAITH) 8-58 </Link>
       
        <Link href='/bukharimethood/bukhariget/knowledge'>	
        
        Chapter 3 :  THE BOOK OF Knowledge(FAITH)  59-134 </Link>

        <Link href='/bukharimethood/bukhariget/wuddu'>	
        
        Chapter 4 :  THE BOOK Of Wuddu (FAITH) 135-247</Link>
        <Link href='/bukharimethood/bukhariget/ghusl'>	
        
        Chapter 5 :  The Book Of Ghusl (Washing Of The Whole Body) 248-293</Link>
    </div>
  )
}

export default page