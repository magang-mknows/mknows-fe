import type { FC, PropsWithChildren, ReactElement } from "react";
import { NextAuthProvider, ReactQueryProvider } from "./provider";
import "tailwindcss/tailwind.css";

export const metadata = {
  title: "Sample App",
  description: "Generated by create-nx-workspace",
};

const RootLayout: FC<PropsWithChildren> = ({ children }): ReactElement => {
  return (
    <html lang="en">
      <NextAuthProvider>
        <ReactQueryProvider>
          <body>{children}</body>
        </ReactQueryProvider>
      </NextAuthProvider>
    </html>
  );
};

export default RootLayout;
