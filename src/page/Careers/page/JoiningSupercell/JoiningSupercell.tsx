import classNames from "classnames/bind";
import style from "./style.module.scss";
import Header from "../../../../components/Header";
import Footer from "../../../../components/Footer";
import Panel from "../../../../components/Panel";
import Article from "../../../../components/common/Article";
import HiringProcess from "./HiringProcess";
import GameTeam from "./GameTeam";
import Tip from "./Tip";
import { Link } from "react-router-dom";
import Interested from "../../components/Interested/Interested";

type Props = {};
const cx = classNames.bind(style);
const JoiningSupercell = (props: Props) => {
  return (
    <>
      <Header />
      <div className={cx("wrapper")}>
        <Panel
          heroHeading={{
            colorTitle: "#fff",
            colorDes: "#fff",
            title: "OINING SUPERCELL",
            des: "What to expect when becoming part of our team",
            noBtn: true,
            className: cx("heading-hero-panel"),
          }}
          backgroundImage={{
            forMobile: require("../../../../access/image/careers/JoiningSupercell/joining_sc_hero.378cc188.webp"),
            forWeb: require("../../../../access/image/careers/JoiningSupercell/joining_sc_hero.378cc188.webp"),
            classNameBrMobile: cx("backGr-Img-Slider-Panel"),
            classNameBrWeb: cx("backGr-Img-Slider-Panel"),
          }}
          classNameWrapper={cx("wrapper-panel")}
        />
        <Article
          classNameContent={cx("content-joining")}
          classNameInfo={cx("content-info-joining")}
          classNameThumb={cx("thumb-joining")}
          classNameBtn={cx("content-btn-why")}
          info={{
            JSXElementDes: (
              <>
                <h2>How we hire</h2>
                <p>
                  We believe in fostering a culture of independence and trust.
                  One way that we do this at Supercell is by staying small as it
                  minimizes the amount of bureaucracy and processes while
                  maximizing room for innovation. Our teams are nimble,
                  experimenting with new features and failing smarter to
                  maximize learning. We are constantly looking for proactive
                  doers who strive in this environment to create the best games.
                </p>
                <p>
                  Our focus is on ensuring potential hires are a great fit. We
                  also want to give you a clear understanding of what it would
                  be like to work here. You’ll get to meet many people during
                  the process and get interviewed across several different
                  teams.
                </p>
                <p>
                  We truly appreciate you taking the step of, and time to, apply
                  to work at Supercell. We hope this is the right opportunity
                  for you!
                </p>
              </>
            ),
          }}
          thumb={require("../../../../access/image/careers/JoiningSupercell/HowWeHire/now_hiring.d48d4166.webp")}
        />
        <HiringProcess />
        <GameTeam />
        <Tip />
        <Article
          classNameContent={cx("content-article-joining")}
          classNameWrapper={cx("wrapper-article-joining")}
          classNameInfo={cx("reset-info-article", "info-article-joining")}
          classNameThumb={cx("reset-thumb-article", "thumb-article-joining")}
          elementInfo={
            <>
              <h2>Relocation</h2>
              <p>
                Moving your life over to a new country can be daunting, but you
                won’t be doing it yourself! Our Relocation Team is here to help
                smooth the way for you and any loved ones who will be coming
                with you – be it family members or your beloved pets.
              </p>
              <p>
                And if you do bring loved ones with you, we will also do our
                best to help them find their place in the new city as you settle
                into your new role. As well as offering language classes, yoga,
                and fun activities such as sushi-making, our spouse network is
                made up of locals and expats and is a great source of
                information and support.
              </p>
              <Link to={"/"}>READ MORE ABOUT LIVING IN HELSINKI</Link>
              <Link to={"/"}>READ MORE ABOUT LIVING IN Shanghai</Link>
            </>
          }
          elementThumb={
            <>
              <img
                src={require("../../../../access/image/careers/JoiningSupercell/builder_hall.952b3900.png")}
                alt=""
              />
            </>
          }
        />
        <Article
          classNameWrapper={cx("wrapper-article-joining", "_2")}
          classNameContent={cx("content-article-joining", "_2")}
          classNameInfo={cx("reset-info-article", "info-article-joining", "_2")}
          classNameThumb={cx(
            "reset-thumb-article",
            "thumb-article-joining",
            "_2"
          )}
          elementInfo={
            <>
              <h2>Onboarding</h2>
              <p>
                Before you start we'll send you a lite info package so you'll
                know what to expect during your first few days. You'll also be
                given a buddy (sometimes two!) who can show you the ropes and
                answer important questions, like where we eat lunch. Later,
                you'll join one of our monthly onboarding sessions where all our
                new hires from around the globe come to Helsinki to meet the
                teams. You'll have a chance to not only hear what each team
                does, but how they do it in the unique Supercell way. And before
                the week is done, we'll take your mugshot and happily add your
                photo to our Polaroid wall.
              </p>
            </>
          }
          elementThumb={
            <>
              <img
                alt=""
                src={require("../../../../access/image/careers/JoiningSupercell/goblin.b0372fcc.png")}
              />
            </>
          }
        />
        <Interested />
      </div>
      <Footer />
    </>
  );
};

export default JoiningSupercell;
