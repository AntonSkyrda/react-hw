import {useForm} from "react-hook-form";
import type {ICar} from "../../models/ICar.ts";
import {addCar} from "../../services/api.service.ts";
import {joiResolver} from "@hookform/resolvers/joi";
import {carValidator} from "../../validators/carValidator.ts";


export const CarFormComponent = () => {
    const {register, handleSubmit, formState: {errors, isValid}} = useForm<ICar>(
        {
            mode: "all",
            resolver: joiResolver(carValidator)
        }
    )

    const createHandler = (data: ICar) => {
        addCar(data);
    }

    return (
        <div className="max-w-md mx-auto p-6 bg-white rounded-2xl shadow-md">
            <form onSubmit={handleSubmit(createHandler)} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        <input type="text" {...register("brand")} className="w-full rounded-lg border border-gray-300 p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"/>
                        <div className="text-red-500 text-sm mt-1">{errors.brand?.message}</div>
                    </label>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        <input type="number" {...register("price")} className="w-full rounded-lg border border-gray-300 p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"/>
                        <div className="text-red-500 text-sm mt-1">{errors.price?.message}</div>
                    </label>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        <input type="number" {...register("year")} className="w-full rounded-lg border border-gray-300 p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"/>
                        <div className="text-red-500 text-sm mt-1">{errors.year?.message}</div>
                    </label>
                </div>
                <button disabled={isValid} className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition">Save Car</button>
            </form>
        </div>
    );
};