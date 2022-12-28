import classNames from "classnames/bind";
import style from "./style.module.scss";
import { Link } from "react-router-dom";
import ICssProperty from "../../../style/style";

type Props = {
  brImg: string;
};
const cx = classNames.bind(style);
const SafeguardYourGame = ({ brImg }: Props) => {
  return (
    <div
      className={cx("wrapper")}
      style={{ "--br-img": `url(${brImg})` } as ICssProperty}
    >
      <Link to={"/"}></Link>
    </div>
  );
};

export default SafeguardYourGame;
