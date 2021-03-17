import { HomePage } from "../containers";
import { HomePageProps } from "../containers/home/home.page";
import { DishViewModel } from "../containers/home/view-models/dish.view-model";

const Index = ({ menu }: HomePageProps) => {
  const props = {};

  return <HomePage menu={menu} />;
};

export default Index;

export const getServerSideProps = async (context) => {
  const menu: DishViewModel[] = [
    {
      id: 1,
      name: "First Menu",
      price: 10,
      imageUrl: "/images/menus/anna-pelzer-IGfIGP5ONV0-unsplash.jpg",
    },
    {
      id: 2,
      name: "Second Menu",
      price: 20,
      imageUrl: "/images/menus/brooke-lark-HlNcigvUi4Q-unsplash.jpg",
    },
    {
      id: 3,
      name: "Third Menu",
      price: 30,
      imageUrl: "/images/menus/brooke-lark-wMzx2nBdeng-unsplash.jpg",
    },
    {
      id: 4,
      name: "Fourth Menu",
      price: 30,
      imageUrl: "/images/menus/dan-gold-4_jhDO54BYg-unsplash.jpg",
    },
    {
      id: 5,
      name: "Fifth Menu",
      price: 30,
      imageUrl: "/images/menus/davide-cantelli-jpkfc5_d-DI-unsplash.jpg",
    },
  ];

  return { props: { menu } };
};
