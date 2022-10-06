import { useEffect, useCallback, useState } from "react"
import axios from "axios";
import { Banner } from "../../components/Banner"
import { Swiper, SwiperSlide } from "swiper/react"
import { Container, Content } from "./styles"
import "swiper/css"
import { ContentList } from "components/ContentList";
import { Navbar } from "components/Navbar";
import {Layout} from "Containers";


const Home = () => {
  const [banners, setBanners] = useState<any[]>([])
  const [contents, setContents] = useState<any[]>([])

  const getBanners = useCallback(async () => {
    const { data } = await axios.get("https://api-uniflix.vercel.app/api/banners")
    setBanners(data)
  }, [])

  const getContents = useCallback(async () => {
    const { data } = await axios.get("https://api-uniflix.vercel.app/api/contents")
    setContents(data)
  }, [])

  useEffect(() => {
    getContents()
    getBanners()
  }, [])

  return <Layout>
  <Container>
    <Navbar/>
    <Swiper loop={true}>
      {banners.map(banner =>
        <SwiperSlide key={banner.id}>
          <Banner
            imageUrl={banner.cover}
            description={banner.sinopse}
            title={banner.title}
            url={banner.normalize} />
        </SwiperSlide>)}
    </Swiper>
    <Content>
      {contents.map(content => <ContentList data={content} key={content.id} />)}
    </Content></Container>
    </Layout>;


};

export { Home };