import type {IProductDummyJson} from "../../models/IProductsDummyJson.ts";
import type {FC} from "react";

type ProductPropsType = {
    product: IProductDummyJson
}

export const ProductDummyJsonComponent: FC<ProductPropsType> = ({product}) => {
    return (
        <div className="mx-auto max-w-sm items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
            <h2 className="text-center font-bold">{product.title}</h2>
            <div>
                {
                    product.images.map((img, index) => <img key={index} src={img} alt={product.title}/>)
                }
            </div>
            <p>Price: {product.price}</p>
            <p>Rating: {product.rating}</p>
            <p>{product.description}</p>
        </div>
    );
};