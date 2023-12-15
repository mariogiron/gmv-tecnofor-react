import axios from "axios";
import { Product } from "../interfaces/Product";

class ProductService {

    private baseUrl: string = 'https://peticiones.online/api/products';

    async getAll(): Promise<Product[]> {
        const response = await axios.get(this.baseUrl);
        return response.data.results;
    }

    async create(body: Product): Promise<Product> {
        const response = await axios.post(this.baseUrl, body);
        return response.data;
    }

}

export default ProductService;