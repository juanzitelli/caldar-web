import NextLink from "next/link";
import React, { PropsWithChildren } from "react";
import { Menu } from "react-feather";
import { NavbarLink as NavbarLinkType } from "../../../types/components";

interface NavbarProps {
  links: NavbarLinkType[];
}

export const Navbar = ({ links }: PropsWithChildren<NavbarProps>) => {
  return (
    <NavbarContainer>
      <Menu />
      <ul>
        {links.map(({ url, label }, index) => {
          return (
            <NavbarLink key={url} url={url}>
              {label}
            </NavbarLink>
          );
        })}
      </ul>
    </NavbarContainer>
  );
};

interface NavbarContainerProps {}

export const NavbarContainer = ({
  children,
}: PropsWithChildren<NavbarContainerProps>) => {
  return <nav>{children}</nav>;
};

interface NavbarLinkProps {
  url: string;
  className?: string;
}

export const NavbarLink = ({
  url,
  className,
  children,
}: PropsWithChildren<NavbarLinkProps>) => {
  return (
    <li className={className}>
      <NextLink href={url}>
        <a>{children}</a>
      </NextLink>
    </li>
  );
};
