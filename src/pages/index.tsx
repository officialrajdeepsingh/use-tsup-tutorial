import { Button } from "tsup-tutorial/Button";
import { IconGithub, IconInstagram, IconLinkedin, IconMastodon } from "tsup-tutorial/Icons";
import { H1,H2, H3 } from "tsup-tutorial/Headings";

export default function Home() {
  return (
    <>
      <H1> Home</H1>
      <H3> About the Home Page</H3>
      <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur aliquam harum ab voluptas placeat odio quasi. Maxime itaque accusantium dolorem tenetur temporibus hic nemo sint a. Ducimus ipsa reiciendis aliquam? </p>
      <div className="h-4"></div>

      <H2>Icons</H2>
      <button className="p-2 m-3"> <IconGithub />  </button>

      <button className="p-2 m-3"> <IconMastodon />   </button>

      <button className="p-2 m-3"> <IconInstagram />   </button>

      <button className="p-2 m-3"> <IconLinkedin />    </button>

      <button className="p-2 m-3"> <IconGithub />      </button>
      
      <br />
    
      <H2>Button </H2>  

      <Button> <IconMastodon /> Mastodon   </Button>

      <Button> <IconInstagram /> Instagram  </Button>

      <Button> <IconLinkedin /> Linkedin   </Button>

      <div className="h-10"></div>

    </>
  );
}
