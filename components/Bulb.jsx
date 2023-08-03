import Image from "next/image";

const Bulb = () => {
  return (
    <div className="absolute -left-24 -bottom-12 rotate-12 mix-blend-color-dodge animate-pulse duration-75 z-10 w-[130px] xl:w-[180px]">
      <Image
        src={"/bulb.png"}
        width={180}
        height={160}
        className="w-full h-full"
        alt=""
      />
    </div>
  );
};

export default Bulb;
