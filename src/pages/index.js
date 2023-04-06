import Head from "next/head";
import GlobalStyle from "../globalStyles";
import StyledWrapper from "./../pageStyles/indexStyles";
import Badge from "./../components/utils/Badge";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <GlobalStyle />

      <StyledWrapper className="container">
        <section className="about-page container-main">
          <h1>Hi, I'm Shashank ✨</h1>
          <p className="theme-text about-item">
            A diligent frontend developer with <Badge>2.5+</Badge> years of
            professional experience. Also have good hand-on knowledge of full
            web stack. Have worked in Web3, AI, Healthcare, and Consumer-Facing
            products. Bootstrapped and took end-to-end ownership of{" "}
            <Badge>2</Badge> projects and contributed to <Badge>3+</Badge>{" "}
            large-scale projects.
          </p>
          <p className="theme-text about-item">
            Loves writing <Badge>tech articles</Badge> to share knowledge in the
            dev community & read quality open-source code in leisure.
          </p>
          <p className="theme-text about-item">
            If you wish to wishper something😉, here's my mail -{" "}
            <Badge>theshashank6870@gmail.com</Badge>
          </p>
        </section>
      </StyledWrapper>
    </>
  );
}
