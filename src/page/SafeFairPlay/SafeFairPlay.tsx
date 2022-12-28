import classNames from "classnames/bind";
import style from "./style.module.scss";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Panel from "../../components/Panel";
import OurResources from "../components/ListGameSupport";
import { v4 } from "uuid";
import SafeguardYourGame from "../components/SafeguardYourGame";
import FromOurPartners from "./FromOurPartners";

type Props = {};

const dataListGameSupport: {
  id: string;
  img: string;
  link: string;
  category: string;
  title: string;
}[] = [
  {
    id: v4(),
    img: require("../../access/image/safeFairPlay/archer.1247f903.webp"),
    link: "/",
    category: `guide`,
    title: `FOR PARENTS`,
  },
  {
    id: v4(),
    link: "/",
    img: require("../../access/image/safeFairPlay/spike.2b60fc6e.webp"),
    category: `policy`,
    title: `SAFE AND FAIR PLAY`,
  },
  {
    id: v4(),
    img: require("../../access/image/safeFairPlay/admiral.3a336a0d.webp"),
    link: "/",
    category: `policy`,
    title: `PRIVACY
        `,
  },
];

const cx = classNames.bind(style);
const SafeFairPlay = (props: Props) => {
  return (
    <>
      <Header />
      <div className={cx("wrapper")}>
        <Panel
          heroHeading={{
            title: `BE SAFE & PLAY FAIR`,
            des: `Links to resources to keep yourself or your children safe while enjoying our games.`,
            noBtn: true,
            colorDes: `#fff`,
            colorTitle: `#fff`,
            className: cx("hero-heading-safeFairPlay"),
          }}
          backgroundImage={{
            forMobile: require("../../access/image/safeFairPlay/safefairplay_hero.321e9c2f.webp"),
            forWeb: require("../../access/image/safeFairPlay/safefairplay_hero.321e9c2f.webp"),
            classNameBrWeb: cx("br-panel"),
            classNameBrMobile: cx("br-panel"),
          }}
        />
        <OurResources
          title="Our Resources"
          dataJSX={dataListGameSupport.map((e) => (
            <li key={e.id}>
              <a href={e.link}>
                <div className={cx("content-OurResources")}>
                  <span>{e.category}</span>
                  <h4>{e.title}</h4>
                </div>
                <img src={e.img} alt="" />
              </a>
            </li>
          ))}
          ulTag={cx("ulOurResources")}
        />

        <SafeguardYourGame
          brImg={require("../../access/image/safeFairPlay/king_sheep_phone.4965ffce.webp")}
        />

        <FromOurPartners />
      </div>
      <Footer />
    </>
  );
};

export default SafeFairPlay;
