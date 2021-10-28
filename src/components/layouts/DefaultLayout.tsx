import { PropsWithChildren } from "react";
import { NavbarLink } from "../../types/components";
import { Footer, Navbar } from "../ui";

interface DefaultLayoutProps {}

const getDefaultNavbarLinks = (): NavbarLink[] => [
  {
    url: "/",
    label: "Home",
  },
  {
    url: "/boilers",
    label: "Boilers",
  },
  {
    url: "/technicians",
    label: "Technicians",
  },
];

export const DefaultLayout = ({
  children,
}: PropsWithChildren<DefaultLayoutProps>) => {
  return (
    <>
      <Navbar links={getDefaultNavbarLinks()} />
      <main>{children}</main>
      <Footer>Caldar 2021© | MIT License</Footer>
    </>
  );
};
