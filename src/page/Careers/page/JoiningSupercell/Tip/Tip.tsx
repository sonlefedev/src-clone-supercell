import classNames from "classnames/bind";
import style from "./style.module.scss";
import { v4 } from "uuid";
import { useState } from "react";
type Props = {};
const cx = classNames.bind(style);
const data = [
  {
    id: v4(),
    question: `HOW DO I KNOW WHEN IS THE LAST DAY TO APPLY FOR AN OPEN POSITION ON THE WEBSITE?`,
    answer: `You don’t and neither do we! Positions are open for as long as it takes to find the best person to fill the role. So if you see it here, it shouldn’t be too late to apply.`,
  },
  {
    id: v4(),
    question: `CAN I SEND AN OPEN APPLICATION?`,
    answer: `We’ve decided to remove the possibility to send open applications through the website. We are doing our best to stay focused and doing so by keeping the teams small and growing the company steadily. Rest assured that the open positions on our website have been thoroughly considered before opening, and these are the roles we are looking to fill at this time. Keep coming back to our careers page to find a role that fits you! Or follow us on Linkedin on any news on open positions.`,
  },
  {
    id: v4(),
    question: `WHAT KIND OF PORTFOLIO DO YOU WANT TO SEE?`,
    answer: `We want to see a variety of examples and game assets: characters, buildings, props, icons, UI, your personal work and own concepts. We’re interested in seeing different art styles and especially something that is close to the art styles of our games. While final assets are cool, we definitely love gazing our eyes on WIP stuff, sketches and anything that shows your process!`,
  },
  {
    id: v4(),
    question: `WHAT IF I DON’T HAVE AN ONLINE PORTFOLIO?`,
    answer: `We do our best to provide as much information as possible, both here on the website and in the job description. Once you’ve sent your application and received a confirmation email, hang tight! You’ll hear back from our recruiter soon. If you made it to the next step, they are happy to answer your questions.`,
  },
  {
    id: v4(),
    question: `I DON’T LIVE IN THE COUNTRY WHERE THIS POSITION IS BASED. CAN I STILL APPLY?`,
    answer: `Yes, of course! We arrange travels for interviews to meet you in person and give the opportunity to visit the office and city you might find yourself living in. If you get hired and want to join Supercell, we’ll help with getting you and your family here.`,
  },
  {
    id: v4(),
    question: `WHAT IF I HAVE QUESTIONS ABOUT THE POSITION? WHO CAN I CONTACT?`,
    answer: `We do our best to provide as much information as possible, both here on the website and in the job description. Once you’ve sent your application and received a confirmation email, hang tight! You’ll hear back from our recruiter soon. If you made it to the next step, they are happy to answer your questions.`,
  },
  {
    id: v4(),
    question: `DO YOU PROVIDE INTERNSHIPS?`,
    answer: `We do – every now and then! Keep your eyes open, and for the time being check out atalent.fi. You might also fancy reading about the Level Up program.`,
  },
];
const Tip = (props: Props) => {
  const [idActive, setIdActive] = useState<string>("");

  return (
    <div className={cx("wrapper")}>
      <div className={cx("container", "shrink_mobile", "shrink_web")}>
        <h2>Anonymous tips from our recruiters</h2>
        <div className={cx("accordion")}>
          <ul>
            {data.map((i) => (
              <li
                key={i.id}
                className={cx(idActive === i.id ? "active" : "")}
                onClick={() =>
                  setIdActive((prev) => {
                    if (prev === i.id) {
                      return "";
                    }
                    return i.id;
                  })
                }
              >
                <div className={cx("content")}>
                  <h4>{i.question}</h4>
                  <p>{i.answer}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Tip;
