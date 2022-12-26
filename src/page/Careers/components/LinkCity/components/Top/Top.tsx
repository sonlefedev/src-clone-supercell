import { useRef } from "react";
import classNames from "classnames/bind";
import style from "./style.module.scss";
import useLazyLoadImage from "../../../../../../components/lazyLoad/ForImage";

export interface IDataTop {
  img: string;
  title: string;
}

type Props = {
  data: IDataTop;
};
const cx = classNames.bind(style);
const Top = (props: Props) => {
  const { data } = props;
  const imgRef = useRef<HTMLImageElement>(null);
  useLazyLoadImage(imgRef, data.img);
  return (
    <div className={cx("wrapper")}>
      <div className={cx("left")}>
        <h2>{data.title}</h2>
      </div>
      {/* <div className={cx("right")}> */}
      <img ref={imgRef} alt="" /> {/* </div> */}
    </div>
  );
};

export default Top;
