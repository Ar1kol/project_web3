import { BsShieldFillCheck } from "react-icons/bs";
import { ImSearch } from "react-icons/im";
import { RiHeart2Fill } from "react-icons/ri";
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <div className="flex flex-col md:flex-row w-full justify-center items-center gradient-bg-services">
      <div className="flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4">
        <div className="fle-1 flex flex-col items-start justify-start">
          <h1 className="text-white text-3xl sm:text-5xl py-2 text-gradient">
            Services that we
            <br />
            continue to improve
          </h1>
        </div>
      </div>
      <div className="flex-1 flex flex-col justify-start items-center">
        <ServiceCard
          color="bg-[#2952E3]"
          title="Security Guaranteed"
          icon={<BsShieldFillCheck fontSize={21} className="text-white" />}
          subtitle="Security is guaranteed. We always maintaing privacy and mainting the quality of our products."
        />
        <ServiceCard
          color="bg-[#9845F8]"
          title="Best Exchange Rates"
          icon={<ImSearch fontSize={21} className="text-white" />}
          subtitle="Security is guaranteed. We always maintaing privacy and mainting the quality of our products."
        />
        <ServiceCard
          color="bg-[#F84550]"
          title="Fastest Transactions"
          icon={<RiHeart2Fill fontSize={21} className="text-white" />}
          subtitle="Security is guaranteed. We always maintaing privacy and mainting the quality of our products."
        />
      </div>
    </div>
  );
};

export default Services;
