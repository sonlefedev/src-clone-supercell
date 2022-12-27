import classNames from "classnames/bind";
import { useCallback, useMemo, useRef} from "react";
import { v4 } from "uuid";
import style from "./style.module.scss";

type Props = {};
const cx = classNames.bind(style);
const HorizontalScrollingImage = (props: Props) => {
    const wpRef = useRef<HTMLDivElement>(null);

    const dataImg = useMemo(
        () =>
            [
                {
                    id: v4(),
                    src: require("../../../../../../access/image/careers/ourOffice/helsinki/1.jpg"),
                },
                {
                    id: v4(),
                    src: require("../../../../../../access/image/careers/ourOffice/helsinki/2.jpg"),
                },
                {
                    id: v4(),
                    src: require("../../../../../../access/image/careers/ourOffice/helsinki/3.jpg"),
                },
                {
                    id: v4(),
                    src: require("../../../../../../access/image/careers/ourOffice/helsinki/4.jpg"),
                },
                {
                    id: v4(),
                    src: require("../../../../../../access/image/careers/ourOffice/helsinki/5.jpg"),
                },
            ] as { id: string; src: string }[],
        []
    );

    const renderLiTag = useCallback(
        () =>
            dataImg.map((data) => (
                <li key={data.id}>
                    <img src={data.src} alt="" />
                </li>
            )),
        [dataImg]
    );

    return (
        <div className={cx("wrapper")} ref={wpRef}>
            <div className={cx("container", "shrink_web", "shrink_mobile")}>
                <ul>{renderLiTag()}</ul>
            </div>
        </div>
    );
};

export default HorizontalScrollingImage;
