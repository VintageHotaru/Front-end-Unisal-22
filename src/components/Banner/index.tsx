import { Button } from "components/Button/index"
import { url } from "inspector"
import { Container, ButtonContainer, Content,} from "./styles"

type IBannerProps = {
    url: string;
    imageUrl:string;
    title:string;
    description:string;
}

const Banner = ({url, imageUrl, title, description}:IBannerProps) => {
    return (
        <Container imageUrl={imageUrl}>
            <Content>
                <h1> {title}</h1>
                <span> {description} </span>

                <ButtonContainer>
                    <Button>Assistir agora</Button>
                </ButtonContainer>
            </Content>
        </Container>
    )
}

export { Banner }