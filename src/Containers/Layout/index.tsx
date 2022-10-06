import { Navbar } from "components/Navbar";
import {Container , Content } from "./styles"
import { ILayoutProps } from "./interface";

export const Layout = ({ children }: ILayoutProps) => {
  return (
    <Container>
      <Navbar />
      <Content>{children}</Content>
    </Container>
  );
};