import classNames from "classnames/bind";
import style from "./style.module.scss";
import Control from "./components/Control";
import Content from "./components/Content";
type Props = {};
const cx = classNames.bind(style);
const ForWeb = (props: Props) => {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("container", "shrink_web", "shrink_mobile")}>
        <Control />
        <Content />
      </div>
    </div>
  );
};

export default ForWeb;
