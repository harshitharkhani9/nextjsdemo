export default function ProductDetails({ params }: {
    params: { productId: string }
}) {
    return (
        <>
            <div className="main py-60">
                <div className="container-fluid">
                    <h1>Product Details: { params.productId }</h1>  
                </div>
            </div>
        </>
    ) 
}