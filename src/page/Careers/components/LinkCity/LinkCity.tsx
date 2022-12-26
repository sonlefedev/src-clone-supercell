import classNames from "classnames/bind";
import style from "./style.module.scss";
import Top from "./components/Top";
import Bottom from "./components/Bottom";
import { IDataTop } from "./components/Top/Top";
import { IDataCity } from "./components/Bottom/Bottom";

type Props = {
  dataTop: IDataTop;
  dataBottom: IDataCity[];
  classNameImgTag?: string;
  classNameUlTag?: string;
};
const cx = classNames.bind(style);
const LinkCity = (props: Props) => {
  const { dataTop, dataBottom, classNameImgTag, classNameUlTag } = props;
  return (
    <div className={cx("wrapper")}>
      <div className={cx("container", "shrink_mobile", "shrink_web")}>
        <Top data={dataTop} />
        <Bottom
          data={dataBottom}
          classNameImgTag={classNameImgTag}
          classNameUlTag={classNameUlTag}
        />
      </div>
    </div>
  );
};

export default LinkCity;
