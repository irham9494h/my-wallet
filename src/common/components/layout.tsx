import React, { ReactNode } from "react";
import NavigationMenu from "./navigation-menu";

interface Props {
  children: ReactNode;
}

export const Layout: React.FC<Props> = ({ children }) => {
  return (
    <main className="mx-auto max-w-screen-sm">
      {children}
      <NavigationMenu />
    </main>
  );
};
