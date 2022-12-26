import classNames from "classnames/bind";
import style from "./style.module.scss";
import Header from "../../../../components/Header";
import Footer from "../../../../components/Footer";
import Panel from "../../../../components/Panel";
import YourselfLivingHere from "../../components/YourselfLivingHere";
import Interested from "../../components/Interested/Interested";
import Slider from "../../../../components/common/Slider";
import { v4 } from "uuid";
import Text from "../../components/Text";
import LinkCity from "../../components/LinkCity";
import { IDataYourselfLivingHere } from "../../components/YourselfLivingHere/YourselfLivingHere";
import { Link } from "react-router-dom";
import { IDataCity } from "../../components/LinkCity/components/Bottom/Bottom";

type Props = {};
const cx = classNames.bind(style);

const dataYourselfLivingHere: IDataYourselfLivingHere[] = [
  {
    id: v4(),
    img: require("../../../../access/image/careers/livingInShanghai/yourselfLivingHere/history.28cb16c5.webp"),
    title: `HISTORY`,
    des: `China’s largest city is a modern metropolis with a historical heritage as stunning as its evening skyline.`,
    textVertical: ``,
  },
  {
    id: v4(),
    img: require("../../../../access/image/careers/livingInShanghai/yourselfLivingHere/gaming.d5b0cd90.webp"),
    title: `GAMING HUB`,
    des: `With top game development talent, companies and infrastructure, Shanghai is defining the next chapter of gaming.`,
    textVertical: ``,
  },
  {
    id: v4(),
    img: require("../../../../access/image/careers/livingInShanghai/yourselfLivingHere/culture.6aa142a5.webp"),
    title: `CULTURE`,
    des: `From esports stadiums to community park karaoke, mesmerizing markets, relaxing gardens and food from around the world – Shanghai as it all.`,
    textVertical: ``,
  },
  {
    id: v4(),
    img: require("../../../../access/image/careers/livingInShanghai/yourselfLivingHere/convenience.1422fe85.webp"),
    title: `CONVENIENCE`,
    des: `Order whatever and whenever, and have it delivered to wherever you are.`,
    textVertical: `Photo: Julia Kivelä / Helsinki Marketing`,
  },
  {
    id: v4(),
    img: require("../../../../access/image/careers/livingInShanghai/yourselfLivingHere/exploration.2e4169c6.webp"),
    title: `EXPLORATION`,
    des: `Secret parks between skyscrapers and quirky restaurants in hidden alleys make Shanghai a joy to get lost in.`,
    textVertical: ``,
  },
  {
    id: v4(),
    img: require("../../../../access/image/careers/livingInShanghai/yourselfLivingHere/opportunities.162d4dd7.webp"),
    title: `OPPORTUNITIES`,
    des: `From so much to choose from, life in Shanghai can be whatever you make it to be.`,
    textVertical: ``,
  },
];

const dataBottomLinkCities: IDataCity[] = [
  {
    id: v4(),
    title: "MEET IN SHANGHAI",
    des: "The ultimate guide to Shanghai",
    textLink: "READ MORE",
    link: "/",
    img: require("../../../../access/image/careers/livingInShanghai/linkCity/logo/link_meet_in_shanghai.d4703f87.webp"),
    brColor: "",
  },
  {
    id: v4(),
    title: "SMART SHANGHAI",
    des: "Local events and tips",
    textLink: "READ MORE",
    link: "/",
    img: require("../../../../access/image/careers/livingInShanghai/linkCity/logo/link_smart_shanghai.6c519ab8.webp"),
    brColor: "",
  },
  {
    id: v4(),
    title: "CHINA CULTURE",
    des: "Learn more about Chinese culture",
    textLink: "READ MORE",
    link: "/",
    img: require("../../../../access/image/careers/livingInShanghai/linkCity/logo/link_china_culture.43bf182b.webp"),
    brColor: "",
  },
  {
    id: v4(),
    title: "NUMBEO",
    des: "Resources to calculate costs of living",
    textLink: "READ MORE",
    link: "/",
    img: require("../../../../access/image/careers/livingInShanghai/linkCity/logo/link_numbeo.e911191a.webp"),
    brColor: "",
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
            classNameBrWeb: cx("panel-img-br"),
            classNameBrMobile: cx("panel-img-br"),
            forWeb: require("../../../../access/image/careers/livingInShanghai/living_in_shanghai_hero.e6dfd8f4.webp"),
            forMobile: require("../../../../access/image/careers/livingInShanghai/living_in_shanghai_hero.e6dfd8f4.webp"),
          }}
          heroHeading={{
            title: "LIVING IN SHANGHAI",
            des: "Welcome to the capital of games.",
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
              Are you ready for the jump of a lifetime? Shanghai’s energy is
              infectious and its endless opportunities will dazzle you. Behind
              the bustle of business and world-class bars you will also find a
              safe, convenient and very livable city. If you’re moving from
              another city or country, we are here to help you with all things
              related to <Link to={"/"}>relocation</Link>.
            </p>
          }
        />
        <LinkCity
          dataTop={{
            title: `Want to know more? start here`,
            img: require("../../../../access/image/careers/livingInShanghai/linkCity/character_barbarian.bb4052ba.webp"),
          }}
          dataBottom={dataBottomLinkCities}
          classNameImgTag={cx("link-cities-img")}
          classNameUlTag={cx("link-cities-ul")}
        />
        <Slider
          hideControl={true}
          data={[
            [
              {
                id: v4(),
                thumbSrc: require("../../../../access/image/careers/livingInShanghai/member/andrew_gordon.b63f28a8.webp"),
                title: "DREW HAYCOCK",
                subTitle: [`Community Manager`, `EX-Londoner`],
                des: `"My commute is a 10-minute walk in the bright sun and clean Helsinki air – which beats sniffing someone's armpit for 45 minutes on a train!"`,
              },
              {
                id: v4(),
                thumbSrc: require("../../../../access/image/careers/livingInShanghai/member/fan_fang_color.13d7ac5d.webp"),
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
