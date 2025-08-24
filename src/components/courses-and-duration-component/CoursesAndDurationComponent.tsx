import type {FC} from "react";
import type {ICoursesAndDuration} from "../../models/CoursesAndDuration.ts";

type CoursesAndDurationComponentPropsType = {
    courseDetails: ICoursesAndDuration
}

export const CoursesAndDurationComponent: FC<CoursesAndDurationComponentPropsType> = ({courseDetails}) => {
    return (
        <div className="mx-auto flex max-w-sm items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
            <h2 className="text-center">{courseDetails.title}</h2>
            <p>Duration: {courseDetails.monthDuration}</p>
        </div>
    );
};