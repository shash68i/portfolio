import Link from "next/link";
import Image from "next/image";
import StyledWrapper from "./StyledWrapper";
import { useTheme } from "../../providers/ThemeProvider/";
import themeToggleLight from "../../../public/icons/theme-toggle-light.svg";
import themeToggleDark from "../../../public/icons/theme-toggle-dark.svg";
import logoLight from "../../../public/icons/logo-light.svg";
import logoDark from "../../../public/icons/logo-dark.svg";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <StyledWrapper>
      <div className="container nav">
        <div className="logo">
          <Link href="/">
            {theme === "light" ? (
              <Image src={logoLight} alt="Brand Logo Light" />
            ) : (
              <Image src={logoDark} alt="Brand Logo Dark" />
            )}
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
              {theme === "light" ? (
                <Image src={themeToggleLight} alt="Theme Toggle Icon Light" />
              ) : (
                <Image src={themeToggleDark} alt="Theme Toggle Icon Dark" />
              )}
            </button>
          </li>
        </ul>
      </div>
    </StyledWrapper>
  );
};

export default Navbar;
