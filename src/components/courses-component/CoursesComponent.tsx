import type { FC } from 'react';
import type {ICourse} from "../../models/Course.ts";

type CoursesComponentPropsType = {
    course: ICourse;
}

export const CoursesComponent: FC<CoursesComponentPropsType> = ({course}) => {
    return (
        <div className="mx-auto max-w-sm items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
            <h2 className="text-center font-bold">{course.title}</h2>
            <p>Duration: {course.monthDuration} month / {course.hourDuration} hours</p>
            <ul className="text-center font-bold list-disc">Topics:
                {
                    course.modules.map((value, index) => (
                        <li className="text-left font-normal padin ml-4" key={index}>{value}</li>
                    ))
                }
            </ul>

        </div>
    );
};