import { Metadata } from "next"
import { resolve } from "path"
type Props={
    params: {
        productId:string
    }
}
export const generateMetadata=async ({params}:Props):Promise<Metadata>=>{
    const title=await new Promise(resolve=>{
        setTimeout(()=>{
            resolve(`iPhone ${params.productId}`)
        },1000)
    })
    return{
        title: `Product ${title}`
    }
}

export default function ProductDetails({params}:Props){
    return <h1>Details about products {params.productId}</h1>
}