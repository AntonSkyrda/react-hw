import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {services} from "../../services/api.service.ts";
import type {ICart} from "../../models/ICart.ts";
import {CartComponent} from "../cart-component/CartComponent.tsx";

export const CartsComponent = () => {
    const {id} = useParams()
    const [carts, setCarts] = useState<ICart[]>([])

    useEffect(() => {
        services.getCartsByUserId(+id!).then(usersCarts => {
            setCarts(usersCarts)
        })
    }, [id]);

    return (
        <div className="flex flex-col items-center justify-center gap-4">
            {
                carts.map((cart: ICart) => <CartComponent key={cart.id} cart={cart} />)
            }
        </div>
    );
};