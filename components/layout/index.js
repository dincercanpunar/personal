import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import {
  Home as IconHome,
  Mail as IconMail,
  Code as IconCode,
  Linkedin as IconLinkedin,
  Github as IconGithub,
} from "../icons";
import cls from "classnames";
const routes = [
  {
    title: "Home",
    href: "/",
    icon: () => <IconHome />,
  },
  {
    title: "Projects",
    href: "/projects",
    icon: () => <IconCode />,
  },
];

const links = [
  {
    title: "Github",
    href: "https://github.com/dincercanpunar",
    icon: () => <IconGithub />,
  },
  {
    title: "Linkedin",
    href: "https://www.linkedin.com/in/dincerc/",
    icon: () => <IconLinkedin />,
  },
  {
    title: "Mail",
    href: "mailto:dincercanpunar@hotmail.com",
    icon: () => <IconMail />,
  },
];

function Layout({ children, title }) {
  const router = useRouter();

  const handleClick = (e, href) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <main>
      <Head>
        <html lang={"en-us"} />
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="title"
          property="title"
          content="Dinçer Canpunar | Website"
          key="title"
        />
        <meta
          name="description"
          property="description"
          content="I’m a senior software developer with experience in developing front-end
        and back-end systems."
          key="description"
        />
        <meta
          name="og:title"
          property="og:title"
          content="Dinçer Canpunar | Website"
          key="og:title"
        />
        <meta
          name="og:description"
          property="og:description"
          content="I’m a senior software developer with experience in developing front-end
        and back-end systems."
          key="og:description"
        />
      </Head>

      <div className="container">
        <div className="card">
          <aside>
            <nav>
              {routes.map(({ title, href, icon }, index) => (
                <a
                  href={href}
                  aria-label={title}
                  onClick={(e) => handleClick(e, href)}
                >
                  <div
                    className={cls(
                      "nav-link",
                      href === router.pathname && "active"
                    )}
                  >
                    {icon()}
                  </div>
                </a>
              ))}
            </nav>
            <div class="social-media">
              {links.map(({ title, href, icon }, index) => (
                <a
                  href={href}
                  target="_blank"
                  aria-label={title}
                  className="social-media-item"
                  rel="noopener"
                >
                  {icon()}
                </a>
              ))}
            </div>
          </aside>

          <div className="content">{children}</div>
        </div>
      </div>
    </main>
  );
}

export default Layout;
