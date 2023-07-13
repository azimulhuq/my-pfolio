// next image
import Image from "next/image";

// next link
import Link from "next/link";

// icons
import { HiArrowDown } from "react-icons/hi2";

const ProjectsBtn = () => {
  return (
    <div>
      <Link
        href={"/work"}
        className="relative w-[145px] h-[145px] flex justify-center items-center bg-circleStar bg-cover bg-center br-no-repeat group"
      >
        <Image
          src={"/rounded-text.png"}
          width={111}
          height={118}
          alt=""
          className="animate-spin-slow w-full h-full max-w-[111px] max-h-[118px]"
        />
        <div className="absolute w-[85px] h-[85px] flex justify-center items-center bg-circleStar bg-cover bg-center br-no-repeat"></div>
        <HiArrowDown className="absolute text-4xl group-hover:translate-y-2 transition-all duration-300" />
      </Link>
    </div>
  );
};

export default ProjectsBtn;
