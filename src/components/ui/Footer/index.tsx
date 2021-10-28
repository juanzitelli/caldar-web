import React, { PropsWithChildren } from "react";
import Link from "next/link";

interface FooterProps {}

export const Footer = ({ children }: PropsWithChildren<FooterProps>) => {
  return <footer>{children}</footer>;
};

interface FooterLinkProps {
  url: string;
}

export const FooterLink = ({
  url,
  children,
}: PropsWithChildren<FooterLinkProps>) => {
  return (
    <Link href={url}>
      <a>{children}</a>
    </Link>
  );
};
