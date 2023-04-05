import Image from "next/image";
import StyledWrapper from "./StyledWrapper";
import { useTheme } from "../../providers/ThemeProvider/";
import themeToggleIcon from "../../../public/icons/theme-toggle-light.svg";
import logoIcon from "../../../public/icons/logo.svg";

const Navbar = () => {
  const toggleTheme = useTheme();

  return (
    <StyledWrapper>
      <div className="container nav">
        <div className="logo">
          <Image src={logoIcon} alt="Brand Logo" />
        </div>
        <ul className="nav-items">
          <li className="nav-item">About</li>
          <li className="nav-item">Projects</li>
          <li className="nav-item">Blog</li>
          <li className="nav-item">
            <button className="theme-toggle-button" onClick={toggleTheme}>
              <Image src={themeToggleIcon} alt="Theme Toggle Icon" />
            </button>
          </li>
        </ul>
      </div>
    </StyledWrapper>
  );
};

export default Navbar;
