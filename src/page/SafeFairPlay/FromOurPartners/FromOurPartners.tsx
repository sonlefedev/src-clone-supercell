import style from "./style.module.scss";
import Partners from "../../components/ListGameSupport";
import classNames from "classnames/bind";
import { v4 } from "uuid";
import ICssProperty from "../../../style/style";

type Props = {};

interface IDataPartners {
  id: string;
  img: string;
  link: string;
  title: string;
  desc: string;
  br_color_thumb: string;
}
const data: IDataPartners[] = [
  {
    id: v4(),
    br_color_thumb: "rgb(0 204 0)",
    desc: `Internet Matters is a not-for-profit organisation that has a simple purpose – to empower parents and carers to keep children safe in the digital world.`,
    link: "/",
    title: `INTERNET MATTERS`,
    img: require("../../../access/image/safeFairPlay/partners/internet_matters.a8a94d4a.webp"),
  },
  {
    id: v4(),
    br_color_thumb: "rgb(84 193 233)",
    desc: `A forum for gaming professionals and companies to work together to develop and share best practices in encouraging healthy communities and awesome player interactions in online gaming. Supercell is a Steering Committee member of the Fair Play Alliance.`,
    link: "/",
    title: `THE FAIR PLAY ALLIANCE`,
    img: require("../../../access/image/safeFairPlay/partners/fair_play.e87e4055.webp"),
  },
  {
    id: v4(),
    br_color_thumb: "#000",
    desc: `Finnish based, not-for-profit, HundrED, discovers, researches and shares inspiring innovations in K12 education. Their goal is to help improve education and foster a movement through encouraging valuable, impactful & scalable innovations to spread across the world.`,
    link: "/",
    title: `HUNDRED.ORG`,
    img: require("../../../access/image/safeFairPlay/partners/hundred.ef1e259c.webp"),
  },
  {
    id: v4(),
    br_color_thumb: "rgb(65, 176, 152)",
    desc: `In partnership with The Diana Award, a respected and trusted youth charity, we aim to help young people, parents and teachers understand the impact that online communications through gaming platforms can have on themselves and others.`,
    link: "/",
    title: `SUPERCELL YOUTH BOARD`,
    img: require("../../../access/image/safeFairPlay/partners/hundred.ef1e259c.webp"),
  },
];

const cx = classNames.bind(style);

const FromOurPartners = (props: Props) => {
  return (
    <Partners
      title="Our Resources"
      dataJSX={data.map((e) => (
        <li key={e.id}>
          <div
            className={cx("thumb")}
            style={
              {
                "--br-color-thumb": e.br_color_thumb,
              } as ICssProperty
            }
          >
            <img src={e.img} alt="" />
          </div>
          <div className={cx("info")}>
            <a href={e.link} className={cx("title")}>
              {e.title}
            </a>
            <p>{e.desc}</p>
          </div>
        </li>
      ))}
      ulTag={cx("partners")}
    />
  );
};

export default FromOurPartners;
