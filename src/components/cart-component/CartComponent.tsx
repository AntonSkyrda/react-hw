import type {ICart} from "../../models/ICart.ts";
import type {FC} from "react";

type CartPropsType = {
    cart: ICart
}

export const CartComponent: FC<CartPropsType> = ({cart}) => {
    return (
        <div className="bg-white shadow w-100 p-2">
            <p>
                <strong>Total products: </strong>
                {
                    cart.totalProducts
                }
            </p>
            <p>
                <strong>Total quantity: </strong>
                {
                    cart.totalQuantity
                }
            </p>
            <p>
                <strong>Total price: </strong>
                {
                    cart.total
                }
            </p>

        </div>
    );
};