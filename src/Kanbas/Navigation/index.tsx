import { Link, useLocation } from "react-router-dom";
import {
  FaTachometerAlt,
  FaRegUserCircle,
  FaBook,
  FaRegCalendarAlt,
  FaInbox,
  FaHistory,
  FaVideo,
  FaSignOutAlt,
  FaQuestionCircle,
} from "react-icons/fa";
import { FaN } from "react-icons/fa6";
import "./index.css";

function KanbasNavigation() {
  const links = [
    { label: "Account", icon: <FaRegUserCircle className="fs-2 fa-user" /> },
    {
      label: "Dashboard",
      icon: <FaTachometerAlt className="fs-2 wd-active" />,
    },
    { label: "Courses", icon: <FaBook className="fs-2" /> },
    { label: "Calendar", icon: <FaRegCalendarAlt className="fs-2" /> },
    { label: "Inbox", icon: <FaInbox className="fs-2" /> },
    { label: "History", icon: <FaHistory className="fs-2" /> },
    { label: "Studio", icon: <FaVideo className="fs-2" /> },
    { label: "Commons", icon: <FaSignOutAlt className="fs-2" /> },
    { label: "Help", icon: <FaQuestionCircle className="fs-2" /> },
  ];

  const { pathname } = useLocation();
  return (
    <ul className="wd-kanbas-navigation">
      <FaN className="fs-2 fa-n" />
      {links.map((link, index) => (
        <li
          key={index}
          className={pathname.includes(link.label) ? "wd-active" : ""}
        >
          <Link to={`/Kanbas/${link.label}`} className="nav-link">
            {link.icon}
            <span>{link.label}</span>{" "}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default KanbasNavigation;
