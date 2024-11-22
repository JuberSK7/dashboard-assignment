/* eslint-disable react/prop-types */
import { FaBell } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import Profile from "../assets/profile.png";

const Header = ({ onSearch }) => {
  const handleSearchChange = (e) => {
    onSearch(e.target.value);
  };
  return (
    <header className="main_header">
      <h3 className="logo">Logo</h3>
      <div className="input-container">
        <input type="text" placeholder="Search" onChange={handleSearchChange} />
        <span>
          <BsSearch size={20} />
        </span>
      </div>
      <div className="bar">
        <FaBell size={20} />
        <img src={Profile} alt="userprofile" />
      </div>
    </header>
  );
};

export default Header;
