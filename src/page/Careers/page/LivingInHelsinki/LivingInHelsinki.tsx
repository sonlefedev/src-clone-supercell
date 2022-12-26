import classNames from "classnames/bind";
import style from "./style.module.scss";
import Header from "../../../../components/Header";
import Footer from "../../../../components/Footer";
import Panel from "../../../../components/Panel";
import YourselfLivingHere from "../../components/YourselfLivingHere";
import Text from "../../components/Text";
import Interested from "../../components/Interested/Interested";
import Slider from "../../../../components/common/Slider";
import { v4 } from "uuid";
import LinkCity from "../../components/LinkCity";
import { IDataYourselfLivingHere } from "../../components/YourselfLivingHere/YourselfLivingHere";
import { Link } from "react-router-dom";
import { IDataCity } from "../../components/LinkCity/components/Bottom/Bottom";

type Props = {};
const cx = classNames.bind(style);

const dataYourselfLivingHere: IDataYourselfLivingHere[] = [
  {
    id: v4(),
    img: require("../../../../access/image/careers/livingHelsinki/yourselfLivingHere/walkable.96c73f3b.webp"),
    title: `WALKABLE`,
    des: `Getting around is enjoyable and easy. You can walk the width of downtown in half an hour, and easily hop on a bicycle for longer distances. Parks and the sea are never far.`,
    textVertical: `Photo: Kuvatoimisto Kuvio Oy / Helsinki Marketing`,
  },
  {
    id: v4(),
    img: require("../../../../access/image/careers/livingHelsinki/yourselfLivingHere/food.23fdceb2.webp"),
    title: `FOOD`,
    des: `“Finnish cuisine” may be an oxymoron, but the notion is outdated – the local food scene is on the up and up. Exciting new spots keep popping up, and markets are full of quality produce.`,
    textVertical: ``,
  },
  {
    id: v4(),
    img: require("../../../../access/image/careers/livingHelsinki/yourselfLivingHere/ease.b0d439fe.webp"),
    title: `EASE OF LIVING`,
    des: `Short commutes and a well-functioning society means you won’t be wasting your downtime in traffic or running pointless errands.`,
    textVertical: `Photo: Eetu Ahanen / Helsinki Marketing`,
  },
  {
    id: v4(),
    img: require("../../../../access/image/careers/livingHelsinki/yourselfLivingHere/nature.7dd68705.webp"),
    title: `NATURE`,
    des: `While offering all the urban elements of a big city, Helsinki is surrounded by abundant nature and accessible coastline with outdoor activities available all year round.`,
    textVertical: `Photo: Julia Kivelä / Helsinki Marketing`,
  },
  {
    id: v4(),
    img: require("../../../../access/image/careers/livingHelsinki/yourselfLivingHere/seasonality.3b49a2c0.webp"),
    title: `SEASONALITY`,
    des: `The winters are long, but nothing beats the feeling of the Spring sunshine warmth. With four distinct seasons you can revisit your favourite places and experience them in a new way.`,
    textVertical: `Photo: Jussi Hellsten / Helsinki Marketing`,
  },
  {
    id: v4(),
    img: require("../../../../access/image/careers/livingHelsinki/yourselfLivingHere/gamedev2.ff68365e.webp"),
    title: `GAMEDEV CULTURE`,
    des: `Finland has a rich tech and game development history. No wonder we’re home to a vibrant community of gamers and gaming events characterized by cooperation and camaraderie.`,
    textVertical: `Photo: Silja Minkkinen`,
  },
];

const dataCity: IDataCity[] = [
  {
    id: v4(),
    img: require("../../../../access/image/careers/livingHelsinki/linkCity/logoCity/visitfinland_logo.7447e511.webp"),
    title: `VISIT FINLAND`,
    des: `Inspiring destinations to explore and fall in love with all over our beautiful country.`,
    textLink: `Read more`,
    link: "/",
    brColor: "#fff",
  },
  {
    id: v4(),
    img: require("../../../../access/image/careers/livingHelsinki/linkCity/logoCity/helsinki.8b12f4da.webp"),
    title: `MY HELSINKI`,
    des: `Latest trends, events and restaurants in the city, as well as tips from local residents.`,
    textLink: `Read more`,
    link: "/",
    brColor: "#275f98",
  },
  {
    id: v4(),
    img: require("../../../../access/image/careers/livingHelsinki/linkCity/logoCity/helsinki.8b12f4da.webp"),
    title: `WELCOME.HELSINKI`,
    des: `Practical information and useful tips on moving and living in Helsinki.`,
    textLink: `Read more`,
    link: "/",
    brColor: "#275f98",
  },
  {
    id: v4(),
    img: require("../../../../access/image/careers/livingHelsinki/linkCity/logoCity/helloworld.00ed6c4e.webp"),
    title: `BLOOMBERG HELLO WORLD`,
    des: `Video series of Finland’s new economy and a visit to Supercell’s office.`,
    textLink: `Read more`,
    link: "/",
    brColor: "#fff",
  },
];

const LivingInHelsinki = (props: Props) => {
  return (
    <>
      <Header />
      <div className={cx("wrapper")}>
        <Panel
          classNameWrapper={cx("wrapper-panel")}
          backgroundImage={{
            forWeb: require("../../../../access/image/careers/livingHelsinki/tapio_haaja_living_helsinki_hero.1cb9db7c.png"),
            forMobile: require("../../../../access/image/careers/livingHelsinki/tapio_haaja_living_helsinki_hero.1cb9db7c.png"),
          }}
          heroHeading={{
            title: "LIVING IN HELSINKI",
            des: "From architecture to archipelago, there’s much to explore.",
            colorTitle: "#fff",
            colorDes: "#fff",
            noBtn: true,
            className: cx("heading-hero-panel"),
          }}
        />
        <YourselfLivingHere data={dataYourselfLivingHere} />
        <Text
          JSXContent={
            <p>
              If you like the idea of living in one of the{" "}
              <Link to={"/"}>cleanest and safest</Link> places on Earth with
              free world-class education, Finland might just be for you. Oh, and
              people are really <Link to={"/"}>happy</Link>, too. While Finnish
              is notoriously one of the most difficult languages in the world,
              worry not as pretty much everyone speaks English.
            </p>
          }
        />
        <LinkCity
          dataTop={{
            img: require("../../../../access/image/careers/livingHelsinki/linkCity/icegolem.bf8ce22c.webp"),
            title: `Want to know more? start here`,
          }}
          dataBottom={dataCity}
        />
        <Slider
          hideControl={true}
          data={[
            [
              {
                id: v4(),
                thumbSrc: require("../../../../access/image/careers/livingHelsinki/member/drew.39a0e443.webp"),
                title: "DREW HAYCOCK",
                subTitle: [`Community Manager`, `EX-Londoner`],
                des: `"My commute is a 10-minute walk in the bright sun and clean Helsinki air – which beats sniffing someone's armpit for 45 minutes on a train!"`,
              },
              {
                id: v4(),
                thumbSrc: require("../../../../access/image/careers/livingHelsinki/member/john.f43772cb.webp"),
                title: "JOHN CIPRIANI",
                subTitle: [`Game Artist`, `Originally from the US`],
                des: `"I love how easy everything is and how everything works as it's supposed to. It’s quiet and clean with very little to complain about. Helsinki has a bunch of cool “secret” local things that you kinda need to discover for yourself."`,
              },
            ],
          ]}
        />
        <Interested />
      </div>
      <Footer />
    </>
  );
};

export default LivingInHelsinki;
