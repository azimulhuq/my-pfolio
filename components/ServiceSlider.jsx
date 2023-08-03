// swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

// swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// icons
import { RxDesktop, RxRocket, RxArrowTopRight } from "react-icons/rx";
import { CgWebsite, CgPerformance } from "react-icons/cg";
import { RiShoppingBag3Fill } from "react-icons/ri";
import { BiSolidBookContent } from "react-icons/bi";
import { HiWrenchScrewdriver } from "react-icons/hi2";
import { MdOutlineSecurity, MdManageAccounts } from "react-icons/md";

// required modules
import { FreeMode, Pagination } from "swiper";

// data
export const serviceData = [
  {
    icon: <CgWebsite />,
    title: "Website Development",
    description:
      "Crafting dynamic and user-friendly websites to leave a lasting digital impression.",
  },
  {
    icon: <RxDesktop />,
    title: "Web App Development",
    description:
      "Building interactive and efficient web applications to elevate user experiences.",
  },
  {
    icon: <RiShoppingBag3Fill />,
    title: "E-commerce Solutions",
    description:
      "Creating secure and feature-rich online stores to drive business growth and sales.",
  },
  {
    icon: <BiSolidBookContent />,
    title: "CMS Customization",
    description:
      "Tailoring content management systems to streamline website management and content updates.",
  },
  {
    icon: <RxRocket />,
    title: "SEO Integration",
    description:
      "Incorporating best practices and strategies to boost website visibility and search engine rankings.",
  },
  {
    icon: <HiWrenchScrewdriver />,
    title: "Site Maintenance",
    description:
      "Sustaining website performance and functionality through regular updates and diligent care.",
  },
  {
    icon: <CgPerformance />,
    title: "Performance Optimization",
    description:
      "Enhancing website speed and efficiency for exceptional user experiences.",
  },
  {
    icon: <MdOutlineSecurity />,
    title: "Website Security",
    description:
      "Implementing robust measures to safeguard websites against potential threats and vulnerabilities.",
  },
  {
    icon: <MdManageAccounts />,
    title: "Consultation and Guidance",
    description:
      "Offering expert advice and insights to drive successful web development projects.",
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: { slidesPerView: 1, spaceBetween: 15 },
        640: { slidesPerView: 3, spaceBetween: 15 },
      }}
      freeMode={true}
      pagination={{ clickable: true }}
      modules={[FreeMode, Pagination]}
      className="h-330px] sm:h-[390px]"
    >
      {serviceData.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="bg-[rgba(89,65,169,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(105,84,177,0.15)] transition-all duration-300">
              {/** icon */}
              <div className="text-4xl text-accent mb-4">{item.icon}</div>
              {/** title & desc */}
              <div className="mb-8">
                <div className="mb-2 text-lg">{item.title}</div>
                <p className="max-w-[350px] leading-normal">
                  {item.description}
                </p>
              </div>
              {/** arrow */}
              <div className="text-3xl">
                <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300" />
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ServiceSlider;
