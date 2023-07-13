import Link from "next/link";

// icons
import {
  RiLinkedinBoxFill,
  RiGithubFill,
  RiFacebookBoxFill,
  RiTwitterLine,
  RiYoutubeLine,
} from "react-icons/ri";

const Socials = () => {
  return (
    <div className="flex text-center gap-x-5 text-xl xl:text-2xl">
      <Link
        href={"https://www.linkedin.com/in/azimulhuq/"}
        className="hover:text-accent transition-all duration-300"
        target="_blank"
      >
        <RiLinkedinBoxFill />
      </Link>
      <Link
        href={"https://github.com/azimulhuq"}
        className="hover:text-accent transition-all duration-300"
        target="_blank"
      >
        <RiGithubFill />
      </Link>
      <Link
        href={"https://www.facebook.com/azimulhuqbd/"}
        className="hover:text-accent transition-all duration-300"
        target="_blank"
      >
        <RiFacebookBoxFill />
      </Link>
      <Link
        href={"https://twitter.com/azimulhuqbd/"}
        className="hover:text-accent transition-all duration-300"
        target="_blank"
      >
        <RiTwitterLine />
      </Link>
      <Link
        href={"https://www.youtube.com/@azimulhuqbd/"}
        className="hover:text-accent transition-all duration-300"
        target="_blank"
      >
        <RiYoutubeLine />
      </Link>
    </div>
  );
};

export default Socials;
