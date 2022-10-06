import { useNavigate } from "react-router";
import { MdChevronRight } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";

import {Container,Cover,ListContainer,TitleContainer} from "./styles"

import "swiper/css";

export type IContentListProps = {
  data: {
    name: string;
    id: string;
    path: string | null;
    list: ContentList[];
  };
};

type ContentList = {
  id: number;
  title: string;
  cover: string;
  normalize: string;
};


const ContentList = ({ data }: IContentListProps) => {
  const navigate = useNavigate();

  return (
    <Container>
      <TitleContainer>
        <span>{data.name}</span>
        <MdChevronRight size={24} />
      </TitleContainer>

      <ListContainer>
        <Swiper
          spaceBetween={16}
          slidesPerView={"auto"}
          navigation
          loop
        >
          {data.list.map((item) => (
            <SwiperSlide key={item.id}>
              <Cover
                src={item.cover}
                alt={item.title}
                onClick={() => navigate(`/watch/${item.normalize}`)}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </ListContainer>
    </Container>
  );
};

export {ContentList}