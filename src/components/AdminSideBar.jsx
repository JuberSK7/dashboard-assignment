/* eslint-disable react/prop-types */
import { Link, useLocation } from "react-router-dom";
import { RiDashboardFill } from "react-icons/ri";
import { GrArticle } from "react-icons/gr";
import { TbFileReport } from "react-icons/tb";
import { FaBuildingColumns } from "react-icons/fa6";
import { TbFilePencil } from "react-icons/tb";
import { RiSettings2Fill } from "react-icons/ri";
import { RiLogoutCircleLine } from "react-icons/ri";

const AdminSideBar = () => {
  const location = useLocation();
  return (
    <aside>
      <div className="main_side_bar">
        <ul>
          <Li
            url="/"
            text="Dashboard"
            Icon={RiDashboardFill}
            location={location}
          />
          <Li
            url="/article"
            text="Articles"
            Icon={GrArticle}
            location={location}
          />
          <Li
            url="/report"
            text="Report"
            Icon={TbFileReport}
            location={location}
          />
          <Li
            url="/institution"
            text="Institution"
            Icon={FaBuildingColumns}
            location={location}
          />
          <Li
            url="/profile"
            text="Profile"
            Icon={TbFilePencil}
            location={location}
          />
          <Li
            url="/setting"
            text="Settings"
            Icon={RiSettings2Fill}
            location={location}
          />
          <Li
            url="/logout"
            text="Logout"
            Icon={RiLogoutCircleLine}
            location={location}
          />
        </ul>
      </div>
    </aside>
  );
};

const Li = ({ url, location, text, Icon }) => {
  const isActive =
    url === "/" ? location.pathname === "/" : location.pathname.startsWith(url);

  return (
    <li
      style={{
        backgroundColor: isActive ? "#3e0097" : "white",
      }}
    >
      <Link
        to={url}
        style={{
          color: isActive ? "white" : "black",
        }}
      >
        <Icon className="sidebar-icon" />
        <span className="sidebar-text">{text}</span>
      </Link>
    </li>
  );
};

export default AdminSideBar;
