import Link from "next/link";
import Image from "next/image";
import StyledWrapper from "./StyledWrapper";
import { useTheme } from "../../providers/ThemeProvider/";
import githubLight from "../../../public/icons/logo-github-light.svg";
import githubDark from "../../../public/icons/logo-github-dark.svg";
import twitterLight from "../../../public/icons/logo-twitter-light.svg";
import twitterDark from "../../../public/icons/logo-twitter-dark.svg";
import instaLight from "../../../public/icons/logo-insta-light.svg";
import instaDark from "../../../public/icons/logo-insta-dark.svg";

const Footer = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <StyledWrapper className="container">
      <div className="container-main logo-container">
        <div className="logo-item">
          <Link href="/">
            {theme === "light" ? (
              <Image src={githubLight} alt="Brand Logo Light" />
            ) : (
              <Image src={githubDark} alt="Brand Logo Dark" />
            )}
          </Link>
        </div>
        <div className="logo-item">
          <Link href="/">
            {theme === "light" ? (
              <Image src={twitterLight} alt="Brand Logo Light" />
            ) : (
              <Image src={twitterDark} alt="Brand Logo Dark" />
            )}
          </Link>
        </div>
        <div className="logo-item">
          <Link href="/">
            {theme === "light" ? (
              <Image src={instaLight} alt="Brand Logo Light" />
            ) : (
              <Image src={instaDark} alt="Brand Logo Dark" />
            )}
          </Link>
        </div>
      </div>
    </StyledWrapper>
  );
};

export default Footer;
