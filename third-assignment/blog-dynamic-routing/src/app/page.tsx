import Link from "next/link"

export default function Home() {
  return (
    <main>
        <section className="blog-post">
            <h2>HomePage</h2>
            <p>This is the home page of my blog!</p>
            <div>
              <h3><Link href={"/blog-1"}>Blog 1</Link></h3> 
              <br />
              <h3><Link href={"/blog-2"}>Blog 2</Link></h3> 
              <br />
              <h3><Link href={"/3"}>Blog 3</Link></h3> 
              <br />
              <h3><Link href={"/4"}>Blog 4</Link></h3> 
              <br />
              
            </div>
        </section>
    </main>

  )
}
