import Link from "next/link"
export default function AboutUs(){
    return(
        <body>
            <div>
        <Link href={"/"}>Home</Link>
        <br />
        <Link href={"/about"}>About</Link>
        <br />
        <Link href={"/contact"}>Contact</Link>
      </div>
      <h1>About Us</h1>
    
        </body>)
        
}