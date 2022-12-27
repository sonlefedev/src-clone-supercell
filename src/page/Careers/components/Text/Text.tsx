import classNames from "classnames/bind";
import style from "./style.module.scss";

type Props = {
  JSXContent: JSX.Element;
};

const cx = classNames.bind(style);
const Text = (props: Props) => {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("container", "shrink_mobile", "shrink_web")}>
        {props.JSXContent}
      </div>
    </div>
  );
};

export default Text;
