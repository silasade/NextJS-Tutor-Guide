import Link from "next/link"
function Home(){
    return(
        <>
       
        <h1>Welcome Home love!</h1>
        <Link href="/blog">Blog</Link>
        <Link href="/products">Products</Link>

        </>
    )
}
export default Home