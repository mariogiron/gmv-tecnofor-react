import { useEffect } from "react";
import { useServiceContext } from "../services/ServicesProvider";

const ProductsList = () => {

    const { ProductService } = useServiceContext();

    useEffect(() => {
        ProductService.getAll()
            .then(products => console.log(products));
    }, []);

    // useEffect(() => {
    //     ProductService.create()
    //         .then(product => console.log(product));
    // }, [])

    return (
        <div>
            <h2>Lista de productos</h2>
        </div>
    )

}

export default ProductsList;