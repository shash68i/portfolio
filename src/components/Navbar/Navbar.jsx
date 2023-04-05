import Image from "next/image";
import StyledWrapper from "./StyledWrapper";
import { useTheme } from "../../providers/ThemeProvider/";
import themeToggleIcon from "../../../public/icons/theme-toggle-light.svg";
import logoIcon from "../../../public/icons/logo.svg";
import Link from "next/link";

const Navbar = () => {
  const toggleTheme = useTheme();

  return (
    <StyledWrapper>
      <div className="container nav">
        <div className="logo">
          <Link href="/">
            <Image src={logoIcon} alt="Brand Logo" />
          </Link>
        </div>
        <ul className="nav-items">
          <li className="nav-item">
            <Link href="/">About</Link>
          </li>
          <li className="nav-item">
            <Link href="/blogs">Blogs</Link>
          </li>
          <li className="nav-item">
            <Link href="/projects">Projects</Link>
          </li>
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
