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
        <div className="flex flex-col align-center space-between">
            <button onClick={prevPage}>Previous
            </button>
            <button onClick={nextPage}>Next
            </button>
        </div>
    );
};