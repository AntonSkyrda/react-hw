import {simpsons} from "../../data/simpsons.ts";
import {CharacterComponent} from "../character-component/CharacterComponent.tsx";


export const FamilyComponent = () => {
    return (
        <div className="mx-auto max-w-sm items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
            {
                simpsons.map((value, index) => <CharacterComponent key={index} character={value}>
                    <p className="font-bold"> Вік: {value.age}</p>
                    <img src={value.photo} alt={value.name} />
                    {value.info}
                </CharacterComponent>)
            }
        </div>
    );
};