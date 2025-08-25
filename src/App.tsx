import './App.css'
import {coursesTitleArray} from "./data/titleArray.ts"
import {TittleArrayComponent} from "./components/title-array-component/TittleArrayComponent.tsx"
import {CoursesAndDurationComponent} from "./components/courses-and-duration-component/CoursesAndDurationComponent.tsx";
import {coursesAndDurationArray} from "./data/coursesAndDurationArray.ts";
import {FamilyComponent} from "./components/family-component/FamilyComponent.tsx";

const App = () => {

    return (
        <>
            {
                coursesTitleArray.map((course, index) => (
                    <TittleArrayComponent key={index} course={course} />
                ))
            }
            {
                coursesAndDurationArray.map((course, index) => (
                    <CoursesAndDurationComponent key={index} courseDetails={course} />
                ))
            }
            {
                FamilyComponent()
            }
        </>
    )
}

export default App
