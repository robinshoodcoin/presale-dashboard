import React from "react";
import Link from "next/link";

// data
import { routes } from "@/data";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();

  return (
    <footer id="footer" className="bg-[#111518] flex justify-center px-4">
      <main className="max-w-[1290px] w-full">
        {/* TOP */}
        <section className="grid grid-cols-1 gap-4 py-24 sm:grid-cols-2 lg:grid-cols-4">
          {/* first items */}
          <aside className="mb-8 sm:mb-0">
            <h2 className="text-base text-primary mb-[15px]">
              About RobinsHood
            </h2>
            <p className="max-w-[270px] mb-6 text-base text-secondary">
              RobinsHood is a popular streamer recognized for his expertise in
              crypto casinos. His engaging and informative streams guide a
              diverse community through the nuances of cryptocurrency gambling.
              Distinguished by his transparency and in-depth gameplay insights,
            </p>
            <p className="max-w-[270px] text-base text-secondary">
              RobinsHood’s streams serve as an invaluable resource, combining
              education and entertainment for both casual players and those
              aiming for profit.
            </p>
          </aside>

          {/* second items */}
          <aside className="mb-8 sm:mb-0">
            <h2 className="text-base text-primary mb-[15px]">Useful Links</h2>
            <ul>
              <LinkItem href="http://t.me/robinshood_chat" text="Telegram Channel" />
              <LinkItem href="https://www.instagram.com/realrobinshood/" text="Instagram" />
              <LinkItem href="https://kick.com/robinshoodofficial" text="Live Stream – Kick" />
              <LinkItem href="https://twitter.com/RobinsHoodoff" text="Twitter" />
            </ul>
          </aside>

          {/* third items */}
          <aside className="mb-8 sm:mb-0">
            <h2 className="text-base text-primary mb-[15px]">Useful Links</h2>
            <ul>
              <LinkItem href="https://robinshood.me/crypto-casinos-with-faucet/" text="Faucet Casinos" />
              <LinkItem href="https://robinshood.me/dice-calculator/" text="Dice Calculator" />
              <LinkItem href="https://robinshood.me/robins-faucet/" text="Robins Faucet" />
            </ul>
          </aside>

          {/* fourth items */}
          <aside>
            <h2 className="text-base text-primary mb-[15px]">Contact Info</h2>
            <ul>
              <SocialItem
                icon={
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="white">
                    <path d="M12.8 2.2C11.4.8 9.5 0 7.5 0S3.6.8 2.2 2.2C.8 3.6 0 5.5 0 7.5 0 11.6 3.4 15 7.5 15c1.6 0 3.3-.5 4.6-1.5.3-.2.4-.7.1-1-.2-.3-.7-.4-1-.1-1.1.8-2.4 1.3-3.7 1.3-3.4 0-6.1-2.8-6.1-6.1 0-1.6.6-3.2 1.8-4.3C4.3 2 5.9 1.4 7.5 1.4c1.6 0 3.2.6 4.3 1.8 1.2 1.2 1.8 2.7 1.8 4.3v.7c0 .8-.6 1.4-1.4 1.4s-1.4-.6-1.4-1.4V4.8c0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7-.4-.4-1.1-.7-1.9-.7-1.9 0-3.4 1.5-3.4 3.4s1.5 3.4 3.4 3.4c1 0 1.9-.5 2.5-1.2.5.7 1.3 1.2 2.2 1.2 1.5 0 2.7-1.2 2.7-2.7v-.7c.1-2-.7-3.9-2.1-5.3zM7.5 9.5c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"></path>
                  </svg>
                }
                title="Email"
                text="contact@robinshood.me"
                url="mailto:contact@robinshood.me"
                mb
              />
              <SocialItem
                icon={
                  <svg
                    width="20"
                    height="20"
                    viewBox="0,0,496,512"
                    fill="white"
                  >
                    <path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm121.8 169.9l-40.7 191.8c-3 13.6-11.1 16.9-22.4 10.5l-62-45.7-29.9 28.8c-3.3 3.3-6.1 6.1-12.5 6.1l4.4-63.1 114.9-103.8c5-4.4-1.1-6.9-7.7-2.5l-142 89.4-61.2-19.1c-13.3-4.2-13.6-13.3 2.8-19.7l239.1-92.2c11.1-4 20.8 2.7 17.2 19.5z"></path>
                  </svg>
                }
                title="Message"
                text="RobinsHood Telegram"
                url="http://t.me/robinshood_chat"
              />
            </ul>
          </aside>
        </section>

        {/* MIDDLE */}
        <section className="py-[25px] grid sm:flex gap-2 sm:gap-y-0 sm:gap-x-10 sm:items-center border-y-[1px] border-[#ffffff1a] grid-cols-3 place-items-center place-content-center sm:place-content-start">
          {routes.map((route, index) => {
            if(index === 1) {
              return <Link
                key={route.id}
                href={"https://robins-organization-9.gitbook.io/guide/overview/how-to-buy/how-to-buy-usdrhc"}
                className="text-secondary hover:text-primary"
                target="_blank"
              >
                {route.name}
              </Link>
            }
            if(index === 3) {
              return <Link
                key={route.id}
                href={"https://4165820710-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FSrNafJVEQDU0oPFzjACf%2Fuploads%2FjaiyBOv3Qbw2YI5Pli6E%2FRobinsHood%20Coin.pdf?alt=media&token=177370bf-b739-4acb-bbff-e49b4bdd03fd"}
                className="text-secondary hover:text-primary"
                target="_blank"
              >
                {route.name}
              </Link>
            }
            return <Link
              key={route.id}
              href={route.href}
              className="text-secondary hover:text-primary"
            >
              {route.name}
            </Link>
          })}
        </section>

        {/* BOTTOM */}
        <section>
          <p className="py-6 text-secondary">
            Copyright © {year} RobinsHood&nbsp;
          </p>
        </section>
      </main>
    </footer>
  );
};

type LinkItemProps = {
  href: string;
  text: string;
};

const LinkItem = ({ href, text }: LinkItemProps) => {
  return (
    <li>
      <Link
        href={href}
        className="text-base leading-7 underline text-secondary"
        target="_blank"
      >
        {text}
      </Link>
    </li>
  );
};

type SocialItemProps = {
  icon: any;
  title: string;
  text: string;
  url: string;
  mb?: boolean;
};

const SocialItem = ({ icon, title, text, url, mb }: SocialItemProps) => {
  return (
    <li className={`flex items-center gap-[15px] ${mb && "mb-[15px]"}`}>
      <div
        className="w-[50px] h-[50px] flex items-center justify-center border-[1px] border-[#dadee44d] rounded-[50%]"
        style={{
          transition:
            "background .12s cubic-bezier(0.455, 0.03, 0.515, 0.955),border-color .12s cubic-bezier(0.455, 0.03, 0.515, 0.955)",
        }}
      >
        {icon}
      </div>
      <div>
        <p className="text-[15px] text-secondary">{title}:</p>
        <Link href={url} target="_blank" className="text-[15px] text-secondary">
          {text}
        </Link>
      </div>
    </li>
  );
};

export default Footer;
