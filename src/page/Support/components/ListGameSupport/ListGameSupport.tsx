import classNames from "classnames/bind";
import style from "./style.module.scss";

type Props = {
    title: string;
    dataJSX: JSX.Element[];
    ulTag?: string;
};
const cx = classNames.bind(style);

const ListGameSupport = ({ title, dataJSX, ulTag }: Props) => {
    return (
        <div className={cx("wrapper", "shrink_web", "shrink_mobile")}>
            <h3>{title}</h3>
            <ul className={cx(ulTag)}>{dataJSX}</ul>
        </div>
    );
};

export default ListGameSupport;
