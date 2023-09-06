import Image from "next/image";

type OptionButtonProps = {
  selected: boolean;
  setSelectedBtn: React.Dispatch<React.SetStateAction<any>>;
  icon: string;
  text: string;
  iconHeight?: number;
  iconWidth?: number;
};

const OptionButton = ({
  selected,
  setSelectedBtn,
  icon,
  text,
  iconHeight = 50,
  iconWidth = 50,
}: OptionButtonProps) => (
  <button
    type="button"
    className={`max-w-[132px] w-full h-10 p-1 rounded-md leading-none font-medium text-sm uppercase flex items-center justify-center bg-[#F1F4F6] hover:bg-[#cdcfd1] text-black border hover:border-[#c1c3c5] ${
      selected ? "border-black text-black" : "border-[#F1F4F6] text-[#535353]"
    }`}
    onClick={setSelectedBtn}
  >
    <Image
      height={iconHeight}
      width={iconWidth}
      alt={text}
      src={icon}
      className="h-[22px] w-[22px]"
    />
    <span className="pl-2 text-sm">{text}</span>
  </button>
);

export default OptionButton;
