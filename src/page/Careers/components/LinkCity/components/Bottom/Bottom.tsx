import classNames from "classnames/bind";
import style from "./style.module.scss";
import { Link } from "react-router-dom";
import { useRef } from "react";
import useLazyLoadImage from "../../../../../../components/lazyLoad/ForImage";

interface ICityItemProps {
  data: IDataCity;
  classNameImgTag?: string;
}
export interface IDataCity {
  id: string;
  img: any;
  title: string;
  des: string;
  textLink: string;
  link: string;
  brColor: string;
}
type Props = {
  data: IDataCity[];
  classNameImgTag?: string;
  classNameUlTag?: string;
};

const cx = classNames.bind(style);

const CityItem = (props: ICityItemProps) => {
  const imgRef = useRef<HTMLImageElement>(null);
  const { data, classNameImgTag } = props;

  useLazyLoadImage(imgRef, data.img);

  return (
    <li className={cx("item")}>
      <div className={cx("thumb")} style={{ backgroundColor: data.brColor }}>
        <img className={cx(classNameImgTag)} ref={imgRef} alt="" />
      </div>
      <div className={cx("info")}>
        <h3>{data.title}</h3>
        <p>{data.des}</p>
        <Link to={data.link}>{data.textLink}</Link>
      </div>
    </li>
  );
};
const Bottom = (props: Props) => {
  const { data, classNameImgTag, classNameUlTag } = props;
  return (
    <div className={cx("wrapper")}>
      <ul className={cx("cities", classNameUlTag)}>
        {data.map((city) => (
          <CityItem
            data={city}
            classNameImgTag={classNameImgTag}
            key={city.id}
          />
        ))}
      </ul>
    </div>
  );
};

export default Bottom;
