import classNames from "classnames/bind";
import style from "./style.module.scss";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Panel from "../../components/Panel";
import ListGameSupport from "./components/ListGameSupport";

type Props = {};
const cx = classNames.bind(style);
const Support = (props: Props) => {
    return (
        <>
            <Header />
            <div className={cx("wrapper")}>
                <Panel
                    backgroundImage={{
                        forMobile: require('../../access/image/support/support_hero.4a0d6d1b.webp'),
                        forWeb: require('../../access/image/support/support_hero.4a0d6d1b.webp'),
                    }}
                    heroHeading={{
                        noBtn: true,
                        colorDes: '#FFFFFF',
                        colorTitle: '#FFFFFF',
                        title: `SUPPORT`,
                        des: `Links to troubleshooting tips, error message help, downloads and updates.`,
                        className: cx('panel-hero-heading')
                    }}
                />
                <ListGameSupport />
            </div>
            <Footer />
        </>
    );
};

export default Support;
