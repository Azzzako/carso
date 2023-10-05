import React, { useState } from "react";
import CourseCard from "./CourseCard";
import { TextField, FormControlLabel, Checkbox } from "@mui/material";
import Welcome from "./Welcome";

export default function Courses({ courses, email, user }) {
  const [search, setSearch] = useState("");
  const [ascendingOrder, setAscendingOrder] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [notCompleted, setNotCompleted] = useState(false);

  const totalCourses = courses?.length;
  const completedCour = courses?.filter((ele) => ele.advance === 100);
  const incompleteCour = courses?.filter((ele) => ele.advance != 100);

  const orderFilter = () => {
    setAscendingOrder(!ascendingOrder);
  };

  const completeFilter = () => {
    setCompleted(!completed);
  };

  const notCompleteFilter = () => {
    setNotCompleted(!notCompleted);
  };

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

  coursesFilter?.sort((a, b) => {
    const courseNameA = a.course.name.toLowerCase();
    const courseNameB = b.course.name.toLowerCase();
    return ascendingOrder
      ? courseNameA.localeCompare(courseNameB)
      : coursesFilter;
  });

  const completedCourses = completed
    ? coursesFilter?.filter((element) => element.advance === 100)
    : coursesFilter;

  const notCompletedCourses = notCompleted
    ? coursesFilter?.filter((element) => element.advance !== 100)
    : coursesFilter;

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

  console.log(courses);

  return (
    <section className="flex flex-col justify-center items-center pt-20">
      <Welcome
        email={email}
        user={user}
        complete={completedCour}
        incomplete={incompleteCour}
        total={totalCourses}
      />
      <div className="flex flex-col md:flex-row justify-around md:items-center w-full h-full px-24 p-10">
        <TextField
          variant="standard"
          label="Buscar Curso"
          onChange={(e) => setSearch(e.target.value)}
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={ascendingOrder}
              onChange={orderFilter}
              name="ordenar"
            />
          }
          label="A-Z"
        />
        <FormControlLabel
          control={
            <Checkbox
              name="completados"
              onChange={completeFilter}
              checked={completed}
            />
          }
          label="Completados"
        />
        <FormControlLabel
          control={<Checkbox name="todos" />}
          label="En curso"
          onChange={notCompleteFilter}
          checked={notCompleted}
        />
      </div>

      <div className="w-full border-b border-black" />

      <div className="w-full flex flex-col p-4 gap-5 sm:grid sm:grid-cols-3 lg:grid lg:grid-cols-4 xl:grid-cols-5 md:p-24">
        {coursesMap}
      </div>
    </section>
  );
}
