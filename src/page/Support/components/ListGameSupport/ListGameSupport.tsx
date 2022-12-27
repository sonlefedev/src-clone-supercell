import classNames from "classnames/bind";
import style from "./style.module.scss";
import { v4 } from "uuid";

type Props = {};
const cx = classNames.bind(style);

const data: {
    id: string;
    img: any;
    link: string;
}[] = [
    {
        id: v4(),
        img: require("../../../../access/image/support/listGameSupport/brawlstars.75b190f1.webp"),
        link: "/",
    },
    {
        id: v4(),
        img: require("../../../../access/image/support/listGameSupport/clashroyale.86da1852.webp"),
        link: "/",
    },
    {
        id: v4(),
        img: require("../../../../access/image/support/listGameSupport/boombeach.0c8c5c5b.webp"),
        link: "/",
    },
    {
        id: v4(),
        img: require("../../../../access/image/support/listGameSupport/clashofclans.3c5c6024.webp"),
        link: "/",
    },
    {
        id: v4(),
        img: require("../../../../access/image/support/listGameSupport/hayday.d331157b.webp"),
        link: "/",
    },
];

const ListGameSupport = (props: Props) => {
    return (
        <div className={cx("wrapper", "shrink_web")}>
            <h3>Find support for your game</h3>
            <ul>
                {data.map((e) => (
                    <li key={e.id}>
                        <a href={e.link}>
                            <img src={e.img} alt="" />
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ListGameSupport;
