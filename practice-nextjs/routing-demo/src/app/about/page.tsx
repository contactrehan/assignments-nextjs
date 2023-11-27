import Link from "next/link";
export default function About() {
  return (
    <body>
      {" "}
      <div>
        <Link href={"/"}>Home</Link>
        <br />
        <Link href={"/about"}>About</Link>
        <br />
        <Link href={"/contact"}>Contact</Link>
      </div>
      <div>
        <h1>About Page</h1>
        <Link href={"/about/about-me"}>about me</Link> <br />
        <Link href={"/about/about-us"}>about us</Link>
      </div>
    </body>
  );
}
