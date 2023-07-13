import { Footer, Header } from "tsup-tutorial";
import { Button } from "tsup-tutorial/Button";
import { IconGithub, IconInstagram, IconLinkedin, IconMastodon } from "tsup-tutorial/Icons";
import { H1,H3 } from "tsup-tutorial/Headings";

export default function Home() {
  return (
    <>
     
      
      <H1> Home</H1>
      <H3> About the Home Page</H3>

      <div className="h-4"></div>

      <Button> <IconGithub    /> Github     </Button>

      <Button> <IconMastodon  /> Mastodon   </Button>

      <Button> <IconInstagram /> Instagram  </Button>

      <Button> <IconLinkedin  /> Linkedin   </Button>

      <div className="h-10"></div>
      
    </>
  );
}
