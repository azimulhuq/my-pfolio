// next image
import Image from "next/image";

// next link
import Link from "next/link";

// font
import { Poppins } from "@next/font/google";

// components
import Socials from "../components/Socials";

// font settings
const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

const Header = () => {
  return (
    <header className="absolute z-30 w-full flex items-center px-8 xl:px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6 py-3">
          {/* logo */}
          <Link href={"/"} className="flex items-center gap-x-1">
            <Image
              src={"/logo.png"}
              width={76}
              height={80}
              alt=""
              priority={true}
            />
            <div className={`${poppins.variable} font-poppins h2 uppercase`}>
              <span className="text-accent">Azimul</span> Huq
            </div>
          </Link>
          {/* socials */}
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
