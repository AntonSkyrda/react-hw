import {useSearchParams} from "react-router-dom";
import {type FC} from "react";
import {itemsPerPage} from "../../constants/constants.ts";

type PaginationPropsType = {
    total: number;
}

export const PaginationComponent: FC<PaginationPropsType> = ({total}) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const currentPage = !searchParams.get("page")
        ? 1
        : Number(searchParams.get("page"));

    const pages = Math.floor(total / itemsPerPage);

    function prevPage() {
        const prev = currentPage === 1 ? currentPage : currentPage - 1;

        searchParams.set("page", String(prev));
        setSearchParams(searchParams);
    }

    function nextPage() {
        const next = currentPage === pages ? currentPage : currentPage + 1;

        searchParams.set("page", String(next));
        setSearchParams(searchParams);
    }

    return (
        <div className="flex space-x-68">
            <button onClick={prevPage} className="
              px-4 py-2
              rounded-lg
              bg-blue-600
              text-white
              font-medium
              shadow
              hover:bg-blue-700
              active:bg-blue-800
              focus:outline-none
              focus:ring-2
              focus:ring-blue-400
              transition
            ">Previous
            </button>
            <button onClick={nextPage} className="
              px-4 py-2
              rounded-lg
              bg-blue-600
              text-white
              font-medium
              shadow
              hover:bg-blue-700
              active:bg-blue-800
              focus:outline-none
              focus:ring-2
              focus:ring-blue-400
              transition
            ">Next
            </button>
        </div>
    );
};