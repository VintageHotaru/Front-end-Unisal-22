import { Navbar } from "components/Navbar"
import { Container, Content } from "./styles"

type IlayoutProps = {
   children:React.ReactNode;

}

const Layout = ({ children }: IlayoutProps) => {
     return <Container>
          <Navbar/>

          <Content>
            {children}
          </Content>
          </Container>
}

export {Layout}