import { Link, useLocation } from "react-router-dom";
import "./index.css"; // Make sure this path is correct and contains the CSS you provided

function CourseNavigation() {
  const links = [
    { name: "Home", path: "/Kanbas/Courses/Home/screen.html", external: false },
    {
      name: "Modules",
      path: "/Kanbas/Courses/Modules/screen.html",
      external: false,
    },
    { name: "Piazza", path: "#", external: true },
    { name: "Zoom", path: "#", external: true },
    {
      name: "Assignments",
      path: "/Kanbas/Courses/Assignments/screen.html",
      external: false,
    },
    { name: "Quizzes", path: "#", external: true },
    {
      name: "Grades",
      path: "/Kanbas/Courses/Grades/screen.html",
      external: false,
    },
    { name: "People", path: "#", external: true },
  ];
  const { pathname } = useLocation();

  return (
    <ul className="wd-navigation">
      {links.map((link, index) => {
        const isActive = pathname.includes(link.path);
        const linkElement = link.external ? (
          <a href={link.path} target="_blank" rel="noopener noreferrer">
            {link.name}
          </a>
        ) : (
          <Link to={link.path}>{link.name}</Link>
        );

        return (
          <li key={index} className={isActive ? "wd-active" : ""}>
            {linkElement}
          </li>
        );
      })}
    </ul>
  );
}

export default CourseNavigation;
