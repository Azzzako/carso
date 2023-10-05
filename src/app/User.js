"user client";

import axios from "axios";
import React, { useEffect, useState } from "react";
import Courses from "./components/Info/Courses";
import Navbar from "./components/Layout/Navbar";
import Loader from "./components/loader/Loader";

export default function User() {
  const URL =
    "https://besvc.capacitateparaelempleo.org/api/inscriptions/TestReport";
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState(null);
  const [courses, setCourses] = useState(null);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    axios.get(URL).then((res) => {
      setEmail(res.data.email);
      setUser(res.data.people[0]);
      setCourses(res.data.inscriptions);
      setLoader(!loader);
    });
  }, [loader]);

  return (
    <React.Fragment>
      {loader ? (
        <section>
          <Navbar user={user} email={email} />
          <Courses courses={courses} user={user} email={email} />
        </section>
      ) : (
        <div className="w-screen h-screen">
          <Loader />
        </div>
      )}
    </React.Fragment>
  );
}
