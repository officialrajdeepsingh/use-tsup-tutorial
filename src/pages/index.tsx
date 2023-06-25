import { Footer, Header } from "tsup-tutorial";
import { Button } from "tsup-tutorial/Button";
import { IconGithub, IconInstagram, IconLinkedin, IconMastodon } from "tsup-tutorial/Icons";
import { H1,H3 } from "tsup-tutorial/Headings";

export default function Home() {
  return (
    <>
      <Header
        logo="Tsup Tutorial"
        navItem={[
          { name: "Home", url: "/" },
          { name: "About", url: "/about" },
          { name: "Contact", url: "/contact" }
        ]}
      />
      
      <H1> Home</H1>
      <H3> About the Home Page</H3>

      <div className="h-4"></div>

      <Button> <IconGithub    /> Github     </Button>

      <Button> <IconMastodon  /> Mastodon   </Button>

      <Button> <IconInstagram /> Instagram  </Button>

      <Button> <IconLinkedin  /> Linkedin   </Button>

      <div className="h-10"></div>
      
      <Footer  copyrightText={"Copy Right by Rajdeep Singh"} />
    </>
  );
}
