import Link from "next/link";
export default function Contact() {
  return (
   <body>
     <div>
      <Link href={"/"}>Home</Link>
      <br />
      <Link href={"about"}>About</Link>
      <br />
      <Link href={"contact"}>Contact</Link>
     
    </div>
    <div> <h1>Contact Page</h1></div>
   </body>
  );
}
