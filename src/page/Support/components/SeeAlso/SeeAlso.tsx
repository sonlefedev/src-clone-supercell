import classNames from "classnames/bind";
import style from "./style.module.scss";
import ListGameSupport from "../ListGameSupport";
import { v4 } from "uuid";
type Props = {};

const dataSeeAlso: {
    id: string;
    category: string;
    link: string;
    title: string;
    brColor?: string;
}[] = [
    {
        id: v4(),
        category: `page`,
        link: "/",
        title: `Be Safe & Play Fair`,
        brColor: `rgb(45 133 243)`,
    },
    {
        id: v4(),
        category: `guide`,
        link: "/",
        title: `For Parents`,
        brColor: `#000`,
    },
    {
        id: v4(),
        category: `policy`,
        link: "/",
        title: `Fan content`,
        brColor: `rgb(251 75 157)`,
    },
    {
        id: v4(),
        category: `guide`,
        link: "/",
        title: `Tournaments`,
        brColor: `rgb(33 196 159)`,
    },
];

const cx = classNames.bind(style);
const SeeAlso = (props: Props) => {
    return (
        <ListGameSupport
            title="Find support for your game"
            dataJSX={dataSeeAlso.map((e) => (
                <li key={e.id} style={{backgroundColor: e.brColor}}>
                    <a href={e.link}>
                      <span>{e.category}</span>
                      <h4>{e.title}</h4>
                    </a>
                </li>
            ))}
            ulTag={cx('ulTag')}
        />
    );
};

export default SeeAlso;
