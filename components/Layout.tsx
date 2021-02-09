import React, { PropsWithChildren } from "react";
import { Container } from "semantic-ui-react";
import Footer from "./Footer";
import Navbar from "./Navbar/Navbar";

type LayoutProps = {
  children?: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => (
  <>
    <Navbar />
    <Container as="main" text>
      {children}
    </Container>
    <Footer />
  </>
);

export default Layout;
