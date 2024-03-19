import React, { useState } from "react";
import { Link } from "react-router-dom";
import db from "../Database";
function Dashboard({
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
}: {
  courses: any[];
  course: any;
  setCourse: (course: any) => void;
  addNewCourse: () => void;
  deleteCourse: (course: any) => void;
  updateCourse: () => void;
}) {
  return (
    <div className="p-4">
      <h5>Course</h5>
      <input
        value={course.name}
        className="form-control"
        onChange={(e) => setCourse({ ...course, name: e.target.value })}
      />
      <input
        value={course.number}
        className="form-control"
        onChange={(e) => setCourse({ ...course, number: e.target.value })}
      />
      <input
        value={course.subtitle}
        className="form-control"
        onChange={(e) => setCourse({ ...course, subtitle: e.target.value })}
      />
      <input
        value={course.term}
        className="form-control"
        onChange={(e) => setCourse({ ...course, term: e.target.value })}
      />
      <button onClick={addNewCourse}>Add</button>
      <button onClick={updateCourse}>Update</button>
      <h2>Published Courses ({courses.length})</h2> <hr />
      <div className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {courses.map((course) => (
            <div key={course._id} className="col" style={{ width: "300px" }}>
              <button
                onClick={(event) => {
                  event.preventDefault();
                  setCourse({
                    ...course,
                    image: course.image || "defaultImagePath.jpg",
                  });
                }}
              >
                Edit
              </button>
              <button
                onClick={(event) => {
                  event.preventDefault();
                  deleteCourse(course._id);
                }}
              >
                Delete
              </button>

              <div className="card" style={{ height: "275px" }}>
                <img
                  src={`/images/${course.image}`}
                  className="card-img-top"
                  alt={course.name}
                  style={{ maxHeight: "150px" }}
                />
                <div className="card-body">
                  <Link
                    to={`/Kanbas/Courses/${course._id}/Home`}
                    className="card-title"
                    style={{
                      textDecoration: "none",
                      color: "navy",
                      fontWeight: "bold",
                    }}
                  >
                    {course.name}
                  </Link>

                  <div className="card-text">
                    {course.subtitle}
                    <br />
                    <small>{course.number}</small> <small>{course.term}</small>
                  </div>
                  <Link
                    to={`/Kanbas/Courses/${course._id}/Home`}
                    className="btn btn-primary"
                  >
                    Go
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
