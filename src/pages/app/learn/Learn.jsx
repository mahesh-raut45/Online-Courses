import React from "react";
import style from "./Learn.module.css";
import coursesData from "../../../data/courses.json";
import { Link, NavLink, Outlet, useParams } from "react-router-dom";
// Task4: Import all the required elements from the react-router-dom

function Learn() {
  const { coursId } = useParams();
  console.log("Course id: ", coursId);

  const course = coursesData.find((course) => course.id === coursId);
  console.log("Course: ", course);

  return (
    <div className={style.courses_container}>
      <div className={style.top_head}>
        {/* Task4: Create Link to go back to the Courses page */}
        <NavLink to="/courses" >
          <h2 className={style.back}>{"<<"}</h2>
        </NavLink>

        {/* Task4: Title of the Course */}
        <h1 className={style.heading}>{course.title}</h1>
      </div>
      <div className={style.chapter_box}>
        <div className={style.chapters}>
          <h1>Chapters</h1>
          <hr />
          {/*Task4: List of Chapters must be rendered here  */}
          <ul>
            {course.chapters.map((chapter, index) => {
              return (
                <div className={style.coursId} key={index}>
                  <NavLink to={`/learn/${course.id}/chapter/${chapter.chapter}`} style={({ isActive }) => (isActive ? { color: "red" } : {})}>
                    {chapter.title}
                  </NavLink>
                </div>
              )
            })} 
          </ul>
        </div>

        <div className={style.courses}>
          {/**Task5:  Chapter Details Must be rendered here */}
          <ul>
            {/* {course.chapters.map((chapter) => (
              <li>{chapter.details}</li>
            ))} */}
            <Outlet context={course} />
            {/* Because chapter is the child of learn component */}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Learn;
