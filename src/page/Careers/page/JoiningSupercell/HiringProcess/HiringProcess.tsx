import { useRef } from "react";
import classNames from "classnames/bind";
import style from "./style.module.scss";
import { v4 } from "uuid";
import useLazyLoadImage from "../../../../../components/lazyLoad/ForImage";

type Props = {};
const cx = classNames.bind(style);

type IData = {
  id: string;
  thumb: string;
  number: string;
  title: string;
  des: string;
};

const data: IData[] = [
  {
    id: v4(),
    thumb: require("../../../../../access/image/careers/JoiningSupercell/HiringProcess/step1.jpg"),
    number: "1",
    title: `THANKS FOR APPLYING`,
    des: `We look forward to learning more about you, your work experience and your interest in working at Supercell. Once you’ve hit the submit button, sit back and relax. We’ll get back to you within the next two weeks.`,
  },
  {
    id: v4(),
    thumb: require("../../../../../access/image/careers/JoiningSupercell/HiringProcess/step2.jpg"),
    number: "2",
    title: `INITIAL SCREEN OR INTERVIEW`,
    des: `If we think there is potential for you to be a good fit, we’ll set up a call with you. During our chat, we’ll provide more information about the role and the interview process, as well as learn more about you!`,
  },
  {
    id: v4(),
    thumb: require("../../../../../access/image/careers/JoiningSupercell/HiringProcess/step3.jpg"),
    number: "3",
    title: `INTERVIEWS`,
    des: `We’ll get to know you as a person, learn about your skills and how you prefer to work. This is your chance to show us what you bring to the table, and get a better idea whether or not you would enjoy working here! You’ll meet people from different teams, with different backgrounds and get a closer look at daily life in a Supercell office.`,
  },
  {
    id: v4(),
    thumb: require("../../../../../access/image/careers/JoiningSupercell/HiringProcess/step4.jpg"),
    number: "4",
    title: `TEST`,
    des: `Depending on what role you apply for, we’ll likely provide you a test to show us your skills. We want to set you up for success and give you the opportunity to impress us.`,
  },
  {
    id: v4(),
    thumb: require("../../../../../access/image/careers/JoiningSupercell/HiringProcess/step5.webp"),
    number: "5",
    title: `FINAL INTERVIEW`,
    des: `This is where you’ll meet someone from our leadership team. They are especially big on culture, how we organize ourselves and work with one another. The stage is yours!`,
  },
];

interface IItemProps {
  data: IData;
}

const Item = (props: IItemProps) => {
  const imgRef = useRef<HTMLImageElement>(null);
  const { data } = props;

  useLazyLoadImage(imgRef, data.thumb);

  return (
    <li key={data.id}>
      <div className={cx("thumb")}>
        <img ref={imgRef} src={data.thumb} alt="" />
      </div>
      <div className={cx("info")}>
        <div className={cx("title")}>
          <div className={cx("number")}>{data.number}</div>
          <span>{data.title}</span>
        </div>
        <p>{data.des}</p>
      </div>
    </li>
  );
};

const HiringProcess = (props: Props) => {
  return (
    <div className={cx("wrapper")}>
      <h2 className={cx("heading")}>Hiring Process</h2>
      <div className={cx("list")}>
        <ul>
          {data.map((e) => (
            <Item key={e.des} data={e} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HiringProcess;
