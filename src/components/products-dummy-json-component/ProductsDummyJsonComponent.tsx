import {useEffect, useState} from "react";
import type {IProductDummyJson} from "../../models/IProductsDummyJson.ts";
import {getAllProductsDummyJson} from "../../services/api.service.ts";
import {ProductDummyJsonComponent} from "../product-dummy-json-component/ProductDummyJsonComponent.tsx";

export const ProductsDummyJsonComponent = () => {
    const [products, setProducts] = useState<IProductDummyJson[]>([]);
    useEffect(() => {
        getAllProductsDummyJson()
            .then((response) => {
                setProducts(response)
            })

    }, [])

    return (
        <div className="mx-auto max-w-sm items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
            {
                products.map(product => <ProductDummyJsonComponent key={product.id} product={product} />)
            }
        </div>
    );
};