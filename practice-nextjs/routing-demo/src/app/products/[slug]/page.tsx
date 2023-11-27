import Link from "next/link";
export default function ProductsId({ params }: { params: { slug: string } }) {
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
        <h1>Product Detail{params.slug}</h1>
      </div> 
    </body>
  );
}
