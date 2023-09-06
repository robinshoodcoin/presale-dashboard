import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Dialog, Popover } from "@headlessui/react";

// icons
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { FaTelegram, FaTwitter } from "react-icons/fa";
import { ConnectButton } from "@rainbow-me/rainbowkit";
// data
import { routes } from "@/data";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [stickyClass, setStickyClass] = useState("relative");
  const [target, setTarget] = useState("#hero-section");
  // const [windowHeight, setWindowHeight] = useState(0);

  const smoothScroll = (e: any) => {
    try {
      e.preventDefault();
      const target = e.target.getAttribute("href");
      setTarget(target);
      const location = document.querySelector(target)?.offsetTop;
      window.scrollTo({
        top: location,
        behavior: "smooth",
      });
    } catch (error) {
      // console.log(error);
    }
  };

  const stickNavbar = () => {
    if (window !== undefined) {
      const windowHeight = window.scrollY;
      // setWindowHeight(windowHeight);
      windowHeight > 87
        ? setStickyClass("top-0 left-0 z-50 bg-white bg-navGradient shadow-sm")
        : setStickyClass("relative");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);

    return () => {
      window.removeEventListener("scroll", stickNavbar);
    };
  }, []);

  return (
    <header
      className={`bg-[#121619] border-b-[2px] border-[#2c3e5033] w-full fixed ${stickyClass}`}
    >
      <nav className="flex items-center justify-between h-[97px] mx-auto max-w-[90rem] px-2 md:px-4 2xl:px-0">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Logo</span>
            <Image
              src="/assets/logo.png"
              alt="logo"
              width={40}
              height={40}
              className="w-auto h-10"
            />
          </Link>
        </div>

        <div className="flex xl:hidden">
          <div className="pr-5">
            <ConnectButton
              label="Connect Wallet"
              accountStatus="address"
              showBalance={{ largeScreen: false, smallScreen: false }}
            />
          </div>
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>

            <Bars3Icon
              className="w-6 h-6 text-primary hover:text-white"
              aria-hidden="true"
            />
          </button>
        </div>
        <Popover.Group
          // className="hidden xl:flex"
          className="items-center hidden h-full xl:flex"
        >
          {routes
            ?.filter((_route) => _route.href !== "#community")
            ?.map((route, index) =>
              index === 1 ? (
                <Link
                  key={route.id}
                  href={
                    "https://robins-organization-9.gitbook.io/guide/overview/how-to-buy/how-to-buy-usdrhc"
                  }
                  className={`text-[14px] leading-6 flex flex-col relative tracking-[0.3em] px-6 items-center justify-center h-full ${
                    target === route.href
                      ? "font-bold text-white"
                      : "font-semibold text-primary hover:text-white"
                  }`}
                  target="_blank"
                >
                  {route.name}
                  <span
                    className={`bg-[#2872fa] h-[2px] w-full absolute -bottom-[2px] ${
                      target === route.href ? "opacity-100" : "opacity-0 hidden"
                    }`}
                  />
                </Link>
              ) : index === 3 ? (
                <Link
                  key={route.id}
                  href={
                    "https://4165820710-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FSrNafJVEQDU0oPFzjACf%2Fuploads%2FjaiyBOv3Qbw2YI5Pli6E%2FRobinsHood%20Coin.pdf?alt=media&token=177370bf-b739-4acb-bbff-e49b4bdd03fd"
                  }
                  className={`text-[14px] leading-6 flex flex-col relative tracking-[0.3em] px-6 items-center justify-center h-full ${
                    target === route.href
                      ? "font-bold text-white"
                      : "font-semibold text-primary hover:text-white"
                  }`}
                  target="_blank"
                >
                  {route.name}
                  <span
                    className={`bg-[#2872fa] h-[2px] w-full absolute -bottom-[2px] ${
                      target === route.href ? "opacity-100" : "opacity-0 hidden"
                    }`}
                  />
                </Link>
              ) : (
                <Link
                  key={route.id}
                  href={route.href}
                  onClick={smoothScroll}
                  className={`text-[14px] leading-6 flex flex-col relative tracking-[0.3em] px-6 items-center justify-center h-full ${
                    target === route.href
                      ? "font-bold text-white"
                      : "font-semibold text-primary hover:text-white"
                  }`}
                >
                  {route.name}
                  <span
                    className={`bg-[#2872fa] h-[2px] w-full absolute -bottom-[2px] ${
                      target === route.href ? "opacity-100" : "opacity-0 hidden"
                    }`}
                  />
                </Link>
              )
            )}

          <div className="relative flex items-center h-full cursor-pointer group">
            <section className="flex items-center justify-between px-6">
              <Link
                href="#"
                onClick={smoothScroll}
                className={`text-[14px] leading-6 flex flex-col relative tracking-[0.3em] items-center font-semibold text-primary hover:text-white`}
              >
                {routes[5]?.name}
                <span className="bg-[#2872fa] h-[2px] w-full absolute -bottom-[38px] opacity-0" />
              </Link>
              <span className="pl-4">
                <svg width="8" height="8" viewBox="0 0 15 15" fill="white">
                  <path d="M2.1,3.2l5.4,5.4l5.4-5.4L15,4.3l-7.5,7.5L0,4.3L2.1,3.2z"></path>
                </svg>
              </span>
            </section>

            <section className="absolute top-[99px] z-50 flex flex-col invisible w-full px-4 py-2 bg-[#192b3e] shadow-xl group-hover:visible gap-2">
              <Link
                href="http://t.me/robinshood_chat"
                target="_blank"
                className="flex items-center gap-2 text-primary hover:text-white"
              >
                <FaTelegram />
                Telegram
              </Link>
              <Link
                href="https://twitter.com/RobinsHoodoff"
                target="_blank"
                className="flex items-center gap-2 text-primary hover:text-white"
              >
                <FaTwitter />
                Twitter
              </Link>
            </section>
          </div>
        </Popover.Group>
        <div className="hidden xl:flex xl:flex-1 xl:justify-end">
          <div className="pr-5">
            <ConnectButton
              label="Connect Wallet"
              accountStatus="address"
              showBalance={{ largeScreen: false, smallScreen: false }}
            />
          </div>
        </div>
      </nav>

      <Dialog
        as="div"
        className="xl:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-[#121619] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Logo</span>
              <Image
                src="/assets/logo.png"
                alt="logo"
                width={40}
                height={40}
                className="w-auto h-10"
              />
            </Link>

            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon
                className="w-6 h-6 text-primary hover:text-white"
                aria-hidden="true"
              />
            </button>
          </div>
          <div className="flow-root mt-6">
            <div className="-my-6 divide-y divide-[#2c3e5033]">
              <div className="flex flex-col items-start justify-start py-6 space-y-2">
                {routes?.map((route) => (
                  <Link
                    key={route.id}
                    href={route.href}
                    className="relative flex flex-col px-3 py-2 -mx-3 text-base font-semibold leading-7 rounded-lg text-primary hover:text-white hover:bg-gray-50"
                  >
                    {route.name}
                    <span
                      className={`bg-[#2872fa] h-[2px] w-[80%] absolute bottom-[8px] ${
                        target === route.href
                          ? "opacity-100"
                          : "opacity-0 hidden"
                      }`}
                    />
                  </Link>
                ))}
              </div>
              <div className="py-6">
                {/* <button
                  type="button"
                  className="text-[#00BD82] hover:text-[#fff] hover:bg-[#FFBD59] flex items-center justify-center border-2 border-[#00BD82] hover:border-[#FFBD59] bg-transparent py-[3px] px-5 min-h-[42px] rounded-[3px] transition-colors delay-75"
                  // className="text-[#00BD82] flex items-center justify-center border-2 border-[#00BD82] bg-transparent py-[3px] px-5 min-h-[42px] rounded-[3px] transition-colors delay-75"
                  disabled={true}
                  style={{ background: "#7d6f6f" }}
                >
                  We are Live!
                </button> */}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};

export default Navbar;
