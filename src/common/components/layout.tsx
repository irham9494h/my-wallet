import React, { FC, ReactNode } from "react";
import NavigationMenu from "./navigation-menu";

interface Props {
  children: ReactNode;
}

export const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <main className="mx-auto mb-16 max-w-screen-sm">{children}</main>
      <NavigationMenu />
    </>
  );
};
