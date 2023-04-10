import Head from "next/head";
import GlobalStyle from "../globalStyles";
import StyledWrapper from "./../pageStyles/indexStyles";
import Badge from "./../components/Badge";
import { DESCRIPTION } from "../data/descriptions";

export default function Home() {
  return (
    <>
      <Head>
        <title>Shashank Kashyap</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={DESCRIPTION.HOME} />
        <meta property="og:title" content="Shashank Kashyap" />
        <meta property="og:description" content={DESCRIPTION.HOME} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="www.shashankkashyap.com" />
      </Head>

      <GlobalStyle />

      <StyledWrapper className="container">
        <section className="about-page container-main">
          <h1>Hi, I'm Shashank ✨</h1>
          <p className="theme-text about-item">
            A diligent frontend developer with <Badge>2.5+</Badge> years of
            professional experience and equipped with good hands-on knowledge of
            full web stack. I have worked in domains related to Web3, AI,
            Healthcare, and Consumer-Facing products. Bootstrapped and took
            end-to-end ownership of <Badge>2</Badge> startup projects and
            contributed to <Badge>3+</Badge> large-scale projects.
          </p>
          <p className="theme-text about-item">
            Loves writing <Badge>tech articles</Badge> to share knowledge and
            give back to the amazing dev community. I love hanging around with
            quality open-source code in leisure.
          </p>
          <p className="theme-text about-item">
            If you wish to whisper something😉, here's my mail -{" "}
            <a className="email-link" href="mailto: abc@example.com">
              <Badge>theshashank6870@gmail.com</Badge>
            </a>
          </p>
        </section>
      </StyledWrapper>
    </>
  );
}
