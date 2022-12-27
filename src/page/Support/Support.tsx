import classNames from "classnames/bind";
import style from "./style.module.scss";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Panel from "../../components/Panel";
import ListGameSupport from "./components/ListGameSupport";
import SafeguardYourGame from "./components/SafeguardYourGame";
import SeeAlso from "./components/SeeAlso";
import { v4 } from "uuid";

const dataListGameSupport: {
    id: string;
    img: any;
    link: string;
}[] = [
    {
        id: v4(),
        img: require("../../access/image/support/listGameSupport/brawlstars.75b190f1.webp"),
        link: "/",
    },
    {
        id: v4(),
        img: require("../../access/image/support/listGameSupport/clashroyale.86da1852.webp"),
        link: "/",
    },
    {
        id: v4(),
        img: require("../../access/image/support/listGameSupport/boombeach.0c8c5c5b.webp"),
        link: "/",
    },
    {
        id: v4(),
        img: require("../../access/image/support/listGameSupport/clashofclans.3c5c6024.webp"),
        link: "/",
    },
    {
        id: v4(),
        img: require("../../access/image/support/listGameSupport/hayday.d331157b.webp"),
        link: "/",
    },
];

type Props = {};
const cx = classNames.bind(style);
const Support = (props: Props) => {
    return (
        <>
            <Header />
            <div className={cx("wrapper")}>
                <Panel
                    backgroundImage={{
                        forMobile: require("../../access/image/support/support_hero.4a0d6d1b.webp"),
                        forWeb: require("../../access/image/support/support_hero.4a0d6d1b.webp"),
                    }}
                    heroHeading={{
                        noBtn: true,
                        colorDes: "#FFFFFF",
                        colorTitle: "#FFFFFF",
                        title: `SUPPORT`,
                        des: `Links to troubleshooting tips, error message help, downloads and updates.`,
                        className: cx("panel-hero-heading"),
                    }}
                />
                <ListGameSupport
                    title="Find support for your game"
                    dataJSX={dataListGameSupport.map((e) => (
                        <li key={e.id}>
                            <a href={e.link}>
                                <img src={e.img} alt="" />
                            </a>
                        </li>
                    ))}
                    ulTag={cx('ulSupportGames')}
                />
                <SafeguardYourGame />
                <SeeAlso />
            </div>
            <Footer />
        </>
    );
};

export default Support;
