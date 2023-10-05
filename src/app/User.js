"user client";

import axios from "axios";
import React, { useEffect, useState } from "react";
import Courses from "./components/Info/Courses";
import Navbar from "./components/Layout/Navbar";

export default function User() {
  const URL =
    "https://besvc.capacitateparaelempleo.org/api/inscriptions/TestReport";
  const [userData, setUserData] = useState([]);
  const [user, setUser] = useState(null)
  const [email, setEmail] = useState(null)
  const [courses, setCourses] = useState(null)

  useEffect(() => {
    axios.get(URL).then((res) => {
      setUserData(res.data);
      setEmail(res.data.email)
      setUser(res.data.people[0])
      setCourses(res.data.inscriptions)
    });
  }, []);

  return (
  <React.Fragment>

  <section>
  <Navbar/>
  <Courses
  courses={courses}
  />
  </section>

  </React.Fragment>
  )
}
