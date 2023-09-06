import React from "react";
import Image from "next/image";

// data
import { roadmaps } from "@/data";

const Roadmap = () => {
  return (
    <div id="roadmap" className="flex flex-col items-center mt-10" style={{ width: "90%" }}>
      <div className="w-[250px] text-center">
        <h1 className="mb-0 text-5xl not-italic font-bold text-[#3fbd82]">
          Roadmap
        </h1>
      </div>

      <section className="grid w-full grid-cols-1 gap-5 my-24 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
        {roadmaps.map((roadmap) => (
          <Item key={roadmap.id} roadmap={roadmap} />
        ))}
      </section>
    </div>
  );
};

type ItemProps = {
  roadmap: {
    id: string;
    img: string;
    color: string;
    title: string;
    content: string[];
  };
};

const Item = ({ roadmap }: ItemProps) => {
  return (
    <div className="flex flex-col items-center mt-20">
      <Image
        src={roadmap.img}
        alt={`roadmap${roadmap.id}`}
        width={222}
        height={199}
        className="w-[222px] h-[199px]"
      />
      <p
        className="not-italic font-bold text-xl text-[25px] leading-[30px] text-white w-full md:w-[220px] text-center mb-3"
        style={{ color: roadmap.color }}
      >
        {roadmap.title}
      </p>

      <ul>
        {roadmap.content.map((content, index) => (
          <li
            key={index}
            className="not-italic font-normal text-[13px] md:text-[15px] leading-4 md:leading-[18px] text-center text-white w-full md:w-[220px] mb-3"
          >
            {content}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Roadmap;
