import { HomePage } from "../containers";
import { HomePageProps } from "../containers/home/home.page";

const Index = ({ menus }: HomePageProps) => {
  const props = {};

  return <HomePage menus={menus} />;
};

export default Index;

export const getServerSideProps = async (context) => {
  const menus = [
    {
      name: "First Menu",
      price: 10,
      imageUrl: "/images/menus/anna-pelzer-IGfIGP5ONV0-unsplash.jpg",
    },
    {
      name: "Second Menu",
      price: 20,
      imageUrl: "/images/menus/brooke-lark-HlNcigvUi4Q-unsplash.jpg",
    },
    {
      name: "Third Menu",
      price: 30,
      imageUrl: "/images/menus/brooke-lark-wMzx2nBdeng-unsplash.jpg",
    },
    {
      name: "Fourth Menu",
      price: 30,
      imageUrl: "/images/menus/dan-gold-4_jhDO54BYg-unsplash.jpg",
    },
    {
      name: "Fifth Menu",
      price: 30,
      imageUrl: "/images/menus/davide-cantelli-jpkfc5_d-DI-unsplash.jpg",
    },
  ];

  return { props: { menus } };
};
