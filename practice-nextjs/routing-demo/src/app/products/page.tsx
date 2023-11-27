import Link from "next/link";
export default function Products() {
  return (
    <body>
      <div>
        <Link href={"/"}>Home</Link>
        <br />
        <Link href={"/about"}>About</Link>
        <br />
        <Link href={"/contact"}>Contact</Link>
      </div>
      <div>
        <h1>Products</h1>
      </div>
      <br />
      <div>
        <Link href={"/products/1"}>Product 1</Link> <br />
        <Link href={"/products/2"}>Product 2</Link> <br />
        <Link href={"/products/3"}>Product 3</Link> <br />
      </div>
    </body>
  );
}
