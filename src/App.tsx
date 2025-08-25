import './App.css'
import {coursesTitleArray} from "./data/titleArray.ts"
import {TittleArrayComponent} from "./components/title-array-component/TittleArrayComponent.tsx"
import {CoursesAndDurationComponent} from "./components/courses-and-duration-component/CoursesAndDurationComponent.tsx";
import {coursesAndDurationArray} from "./data/coursesAndDurationArray.ts";
import {FamilyComponent} from "./components/family-component/FamilyComponent.tsx";
import {coursesArray} from "./data/coursesArray.ts";
import {CoursesComponent} from "./components/courses-component/CoursesComponent.tsx";

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
            {
                coursesArray.map((course, index) => (
                    <CoursesComponent course={course} key={index}/>
                ))
            }
        </>
    )
}

export default App
