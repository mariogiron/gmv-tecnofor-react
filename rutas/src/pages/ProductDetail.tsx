import { useLoaderData, useParams } from "react-router-dom";

interface Product {
    _id: string;
    name: string;
    description: string;
    price: number;
    category: string;
    image: string;
    active: boolean;
}

const ProductDetail = () => {

    const params = useParams();
    const product: any = useLoaderData();

    return (
        <>
            <h2>Detalle Producto</h2>
            <p>Id del producto: {params.productId}</p>
            <p>Nombre producto: {product.name}</p>
            <img src={product.image} alt="" />
            <p>{product.description}</p>
        </>
    );
}

export default ProductDetail;