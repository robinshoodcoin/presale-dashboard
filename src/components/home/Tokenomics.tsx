"use client";

import React from "react";
import { useEffect, useState } from "react";

import dynamic from "next/dynamic";
const ApexCharts = dynamic(() => import("react-apexcharts"), { ssr: false });

const config: any = {
  series: [15, 20, 30, 25, 10],
  options: {
    chart: {
      // width: 380,
      width: 500,
      type: "pie",
    },
    labels: [
      "Presale 15%",
      "Marketing 20%",
      "Listing(CEX) 30%",
      "Listing(DEX) 25%",
      "Team 10%",
    ],
    // fill: {
    //   colors: ["#447b40", "#cc7870", "#e74ce4", "#E91E63", "#9C27B0"],
    // },
    legend: {
      labels: {
        colors: "#fff",
      },
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          // chart: {
          //   width: 200,
          // },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  },
};

const Tokenomics = () => {
  const [rendered, setRendered] = useState(false);

  useEffect(() => {
    setRendered(true);
  }, []);
  return (
    <div
      id="tokenomics"
      className="flex flex-col items-center mt-10"
      style={{ width: "90%" }}
    >
      <div className="text-center">
        <h1 className="mb-0 text-5xl not-italic font-bold text-[#3fbd82]">
          Tokenomics
        </h1>
      </div>

      <section className="w-full my-24 h-[200px] flex justify-center text-white">
        {rendered && (
          <ApexCharts
            options={config.options}
            series={config.series}
            type={config.options.chart.type}
            width={config.options.chart.width}
          />
        )}
      </section>
    </div>
  );
};

export default Tokenomics;
