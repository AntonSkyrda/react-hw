import type {ICar} from "../../models/ICar.ts";
import type {FC} from "react";

type CarPropsType = {
    car: ICar
}

export const CarComponent:FC<CarPropsType> = ({car}) => {
    return (
        <div className="shadow w-100 p-2">
            <p>
                Car ID: {car.id}
            </p>
            <p>
                Brand: {car.brand}
            </p>
            <p>
                Price: {car.price}
            </p>
            <p>
                Manufactured year: {car.year}
            </p>
        </div>
    );
};