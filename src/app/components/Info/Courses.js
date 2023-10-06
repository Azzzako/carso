import React, { useState } from "react";
import CourseCard from "./CourseCard";
import Welcome from "./Welcome";
import Filters from "./Filters";

export default function Courses({ courses, email, user }) {
  const [search, setSearch] = useState("");
  const [completed, setCompleted] = useState(false);
  const [notCompleted, setNotCompleted] = useState(false);
  const [ascendingOrder, setAscendingOrder] = useState(false);

  const coursesFilter =
    search.length > 1
      ? courses.filter((element) => {
          const courseName = element?.course.name.toLowerCase();
          const sectorName = element?.course.sector.name.toLowerCase();
          const searchLower = search.toLowerCase();
          return (
            courseName.includes(searchLower) || sectorName.includes(searchLower)
          );
        })
      : courses;

  const sortedFilter = coursesFilter?.toSorted((a, b) => {
    const courseNameA = a.course.name.toLowerCase();
    const courseNameB = b.course.name.toLowerCase();
    return ascendingOrder
      ? courseNameA.localeCompare(courseNameB)
      : coursesFilter;
  });

  const completedCourses = completed
    ? sortedFilter?.filter((element) => element.advance === 100)
    : sortedFilter;

  const notCompletedCourses = notCompleted
    ? sortedFilter?.filter((element) => element.advance !== 100)
    : sortedFilter;

  const totalCourses = courses?.length;
  const completedCour = courses?.filter((ele) => ele.advance === 100);
  const incompleteCour = courses?.filter((ele) => ele.advance != 100);
  const selectedCourses = notCompleted ? notCompletedCourses : completedCourses;

  const coursesMap = selectedCourses?.map((ele) => {
    return (
      <section key={ele.courseId}>
        <CourseCard
          course={ele.course.name}
          theme={ele.course.sector.colorTheme}
          sector={ele.course.sector.name}
          advance={ele.advance}
          img={ele.course.imageUrl}
          certificationDate={ele.certificationDate}
          inscriptionDate={ele.inscripcionDate}
          score={ele.scoreCourse}
        />
      </section>
    );
  });

  return (
    <section className="flex flex-col justify-center items-center pt-20">
      <Welcome
        email={email}
        user={user}
        complete={completedCour}
        incomplete={incompleteCour}
        total={totalCourses}
      />

      <div className="w-full h-full flex justify-center md:ml-1">
        <Filters
        setSearch={setSearch}
        ascendingOrder={ascendingOrder}
        setAscendingOrder={setAscendingOrder}
        setCompleted={setCompleted}
        completed={completed}
        setNotCompleted={setNotCompleted}
        notCompleted={notCompleted}/>
      </div>

      <div className="w-[80%] border-b border-black" />

      <div className="w-full flex flex-col p-4 gap-5 sm:grid sm:grid-cols-3 lg:grid lg:grid-cols-4 xl:grid-cols-5 md:p-24 py-11">
        {coursesMap}
      </div>
    </section>
  );
}
