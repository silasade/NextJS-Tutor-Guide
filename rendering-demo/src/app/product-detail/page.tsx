import { Suspense } from "react"
import { Product } from "@/component/product"
import { Reviews } from "@/component/reviews"
export default function ProductDetailPage(){
    return(
        <div>
            <h1>Product detail page</h1>
            <Suspense fallback={<p>Loading Product details...</p>}>
                <Product/>
                <Reviews/>
            </Suspense>

        </div>
    )
}