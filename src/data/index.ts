export const routes = [
  {
    id: "1",
    name: "Buy",
    href: "#hero-section",
  },
  {
    id: "2",
    name: "How To Buy",
    href: "#how-to-buy",
  },
  {
    id: "3",
    name: "Team",
    href: "#our-team",
  },
  {
    id: "4",
    name: "Whitepaper",
    href: "https://files.gitbook.com/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FSrNafJVEQDU0oPFzjACf%2Fuploads%2FjaiyBOv3Qbw2YI5Pli6E%2FRobinsHood%20Coin.pdf?alt=media&token=177370bf-b739-4acb-bbff-e49b4bdd03fd",
  },
  {
    id: "5",
    name: "Roadmap",
    href: "#roadmap",
  },
  {
    id: "6",
    name: "Community",
    href: "#community",
  },
];

export const team = [
  {
    id: "1.1",
    name: "Thijme",
    designation: "Founder and CEO of RHC",
    img: "/assets/person/person1.jpg",
    telegram: "https://t.me/realrobinshood",
    details:
      "Thijme, also known as RobinsHood, was one of the early birds who got into Ethereum when it was just starting out. He's actually the person behind one of the biggest websites in the Netherlands with millions of visitors every month.",
  },
  {
    id: "1.2",
    name: "0xJeremy",
    designation: "CTO of RHC",
    img: "/assets/person/person2.jpg",
    telegram: "https://t.me/cooljeremy00",
    details:
      "Jeremy, also known as 0xJeremy, has led 10+ Defi projects from the ground to great success. He's very experienced in winde ranges of cutting-edge technologies and ready to make a huge wave with us. Let's run!",
  },
  {
    id: "1.3",
    name: "Sleepy Penguin",
    designation: "COO",
    img: "/assets/person/person3.jpg",
    telegram: "https://t.me/SleepyPenguiin",
    details:
      "Sleepy Penguin is passionate crypto evangelist with a proven knack for translating complex crypo concepts into compelling narratives. His mission is to propel our project to the forefront of the crypto sphere, fostering widespread adoption through innovative marketing strategies.",
  },
];

export const advisors = [
  {
    id: "2.1",
    name: "Swan Moon",
    designation: "Business Strategy",
    img: "/assets/person/person4.jpg",
    telegram: "https://t.me/SwaniePrincesa",
    details:
      "Swan, also known as helloKitty, is a data-driven enthusiast with a deep understanding of blockchain trends and market behavior, she specializes in transforming complex crypto data into actionable insights. Her expertise lies in identifying patterns, predicting market movements.",
  },
  {
    id: "2.2",
    name: "Zachary Noe",
    designation: "Advisor",
    img: "/assets/person/person5.jpg",
    telegram: "https://t.me/ZacharyNoe",
    details:
      "With 8 years of hands-on experience in the crypto space, offers expert guidance on blockchain technology and investment strategies. His holistic approach combines technical knowledge with a keen understanding of market dynamics, empowering clients to navigate the crypto landscape.",
  },
  {
    id: "2.3",
    name: "Omenrain",
    designation: "PR and Advisor",
    img: "/assets/person/person6.jpg",
    telegram: "https://t.me/theotherguyoverthere",
    details:
      "He has over 4 years of hands-on experience in the blockchain industry. He's well versed in marketing, laws, 18 years in sales and 8 management with a business administration degree.",
  },
];

export const roadmaps = [
  {
    id: "1",
    img: "/assets/roadmap/roadmap1.png",
    color: "#44C4FF",
    title: "Q3 2023",
    content: [
      "Community Build",
      "(ongoing Rains)",
      "Token Presale"
    ],
  },
  {
    id: "2",
    img: "/assets/roadmap/roadmap3.png",
    color: "#5044FF",
    title: "Q4 2023",
    content: [
      "Wallet development",
      "(mobile/desktop/browser plugin)",
      "Bot development",
      "CMC and coingecko listings",
      "DEX listing"
    ],
  },
  {
    id: "3",
    img: "/assets/roadmap/roadmap2.png",
    color: "#852DEE",
    title: "Q1 2024",
    content: [
      "Smart contract audit",
      "Tipping system development",
      "Partnerships"
    ],
  },
  {
    id: "4",
    img: "/assets/roadmap/roadmap4.png",
    color: "#FF44A0",
    title: "Q2 2024",
    content: [
      "ERC20 & native bridges",
      "CEX listing",
    ],
  },
  {
    id: "5",
    img: "/assets/roadmap/roadmap5.png",
    color: "#FF445B",
    title: "Q3 2024",
    content: [
      "ERC20 & native bridges",
      "Smart contracts revamp / clean up",
    ],
  },
  {
    id: "6",
    img: "/assets/roadmap/roadmap1.png",
    color: "#852DEE",
    title: "Q4 2024",
    content: [
      "Governance system",
      "Treasury grant system",
      "More listings(ongoing)",
      "Partnerships(ongoing)"
    ],
  },
];

export const pieChartOptions = {
  labels: ["Your files", "System", "Empty"],
  colors: ["#4318FF", "#6AD2FF", "#EFF4FB"],
  chart: {
    width: "50px"
  },
  states: {
    hover: {
      filter: {
        type: "none"
      }
    }
  },
  legend: {
    show: false
  },
  dataLabels: {
    enabled: false
  },
  hover: { mode: null },
  plotOptions: {
    donut: {
      expandOnClick: false,
      donut: {
        labels: {
          show: false
        }
      }
    }
  },
  fill: {
    colors: ["#4318FF", "#6AD2FF", "#EFF4FB"]
  },
  tooltip: {
    enabled: true,
    theme: "dark"
  }
};

export const pieChartData = [63, 25, 12];