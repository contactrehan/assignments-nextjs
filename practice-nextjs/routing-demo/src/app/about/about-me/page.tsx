import Link from "next/link"
export default function AboutMe(){
    return(
        <body>
            <div>
        <Link href={"/"}>Home</Link>
        <br />
        <Link href={"/about"}>About</Link>
        <br />
        <Link href={"/contact"}>Contact</Link>
      </div>
      <h1>About Me</h1>
    
        </body>)
        
}