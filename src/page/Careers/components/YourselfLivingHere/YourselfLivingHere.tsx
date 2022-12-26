import classNames from "classnames/bind";
import style from "./style.module.scss";
import useLazyLoadImage from "../../../../components/lazyLoad/ForImage";
import { useRef } from "react";

type Props = {
  data: IDataYourselfLivingHere[];
};
const cx = classNames.bind(style);
export interface IDataYourselfLivingHere {
  id: string;
  img: string;
  title: string;
  des: string;
  textVertical: string;
}

interface IItemProps {
  data: IDataYourselfLivingHere;
}

const Item = (props: IItemProps) => {
  const imgRef = useRef<HTMLImageElement>(null);
  const { data } = props;
  useLazyLoadImage(imgRef, data.img);
  return (
    <div className={cx("item")} key={data.id}>
      <img ref={imgRef} src="" alt="" />
      <div className={cx("content")}>
        <div className={cx("margin")}>
          <span>{data.textVertical}</span>
          <h2>{data.title}</h2>
          <p>{data.des}</p>
        </div>
      </div>
    </div>
  );
};

const YourselfLivingHere = (props: Props) => {
  const { data } = props;
  return (
    <div className={cx("wrapper")}>
      <div className={cx("container", "shrink_web", "shrink_mobile")}>
        {data.map((elem) => (
          <Item data={elem} key={elem.id} />
        ))}
      </div>
    </div>
  );
};

export default YourselfLivingHere;
