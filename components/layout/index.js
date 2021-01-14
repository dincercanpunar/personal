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
    href: "/",
    icon: () => <IconHome />,
  },
  {
    href: "/projects",
    icon: () => <IconCode />,
  },
];

const links = [
  {
    href: "https://github.com/dincercanpunar",
    icon: () => <IconGithub />,
  },
  {
    href: "https://www.linkedin.com/in/dincerc/",
    icon: () => <IconLinkedin />,
  },
  {
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
              {routes.map(({ href, icon }, index) => (
                <a href={href} onClick={(e) => handleClick(e, href)}>
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
              {links.map(({ href, icon }, index) => (
                <a
                  href={href}
                  target="_blank"
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
