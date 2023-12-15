import { ReactNode, createContext, useContext } from "react";
import ProductService from "./ProductService";

type ServiceContextType = { ProductService: ProductService }
const services: ServiceContextType = {
    ProductService: new ProductService(),
}

// Contexto
const ServiceContext = createContext<ServiceContextType>(services);
export const useServiceContext = () => {
    return useContext(ServiceContext);
}

type ServiceProviderProps = { children: ReactNode };

const ServicesProvider = ({ children }: ServiceProviderProps) => {

    return (
        <ServiceContext.Provider value={services}>
            {children}
        </ServiceContext.Provider>
    )

}

export default ServicesProvider;