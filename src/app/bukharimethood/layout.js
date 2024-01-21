import Link from "next/link"


const Layout=({children})=>{
    return(
        <div>
            <Link href='/'>Home</Link>
            <Link href='/bukharimethood'>Bukhari</Link>
            {children}
        </div>
    )
}
export default Layout