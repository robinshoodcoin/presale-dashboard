import React from "react";
import Image from "next/image";

// styles
import styles from "@/styles/card-flip.module.css";

// data
import { advisors, team } from "@/data";

const OurTeam = () => {
  return (
    <>
      <div
        id="our-team"
        className="flex flex-col items-center my-40 w-full bg-[#1F1F1F] rounded-3xl py-10 max-w-screen-2xl"
      >
        <div className="w-[250px] text-center">
          <h1 className="mb-0 text-5xl not-italic font-bold text-[#3fbd82]">
            Our Team
          </h1>
        </div>

        <div className="grid grid-cols-1 gap-2 px-2 py-0 mt-20 gap-y-5 sm:gap-5 sm:px-11 sm:grid-cols-2 lg:grid-cols-3 place-items-center place-content-center">
          {team?.map((item, index) => (
            <Member key={item.id} item={item} />
          ))}
        </div>

        <div className="grid grid-cols-1 gap-2 px-2 py-0 mt-20 gap-y-5 sm:gap-5 sm:px-11 sm:grid-cols-2 lg:grid-cols-3 place-items-center place-content-center">
          {advisors?.map((advisor, index) => (
            <Member key={advisor.id} item={advisor} />
          ))}
        </div>
      </div>
    </>
  );
};

const Member = ({ item }: { item: any }) => {
  return (
    <div className={styles.card}>
      <div className={styles.content}>
        {/* Front */}
        <div className={styles.front}>
          <div className="h-[75%] mb-[10px] xl:mb-5">
            <Image
              src={item.img}
              alt={`person${item.id}`}
              fill
              className="max-w-[250px] max-h-[280px] rounded-t-[10px]"
            />
          </div>
          <div className="h-[20%] px-[10px]">
            <h3 className="m-0 text-xl not-italic font-semibold text-primary">
              {item.name}
            </h3>
            <p className="not-italic font-normal text-sm text-primary mt-[7px] m-0">
              {item.designation}
            </p>
          </div>
        </div>

        {/* Back */}
        <div className={styles.back} style={{overflow:"hidden"}}>
          <div className="h-[75%] xl:h-[78%] p-[10px]">
            <p className="m-0 text-sm not-italic font-light leading-6 text-center text-primary">
              {item.details}
            </p>
          </div>
          <hr className="m-0 mb-[3%] h-[1%] bg-white" />
          <div className="h-[20%] px-[5px]">
            <h3 className="m-0 text-sm not-italic font-semibold text-primary">
              {item.name}
            </h3>
            <p className="not-italic font-normal text-sm text-primary mt-[3px] m-0">
              {item.designation}
            </p>
            <a href={item.telegram} target="_blank" className="italic font-bold text-sm text-primary mt-[3px] m-0">
              Contact
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
