import { AiOutlineBarChart } from "react-icons/ai";
import { BiCategoryAlt } from "react-icons/bi";
import { GrAnalytics } from "react-icons/gr";
import { MdOutlineMoneyOffCsred } from "react-icons/md";
import { TbHeartRateMonitor } from "react-icons/tb";
import { Features } from "./features";

export const BudgetManagement = () => {
  return (
    <Features color="#2152ff" colorDark="33,82,255">
      <Features.Main
        title={
          <>
            ChallengeMe 
            <br />
            Multilingual Quiz Practice
          </>
        }
        // s
        imageSize="large"
        text="Our app sources quiz questions from OpenAI's extensive database, ensuring a diverse and exciting quiz experience every time you play. Prepare for the unexpected, test your knowledge, and keep your mind sharp.."
      />
      <Features.Grid
        features={[
          {
            icon: BiCategoryAlt,
            title: "Category Overview.",
            text: "Overview of difficulty level and different languages .",
          },
          {
            icon: GrAnalytics,
            title: "User Friendly.",
            text: "Analyze score  with graphical or tabular representation.",
          },
          {
            icon: MdOutlineMoneyOffCsred,
            title: "Compete and Share.",
            text: "User can compete with their friends.",
          },
         
          {
            icon: () => (
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 512 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M448 160H320V128H448v32zM48 64C21.5 64 0 85.5 0 112v64c0 26.5 21.5 48 48 48H464c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H48zM448 352v32H192V352H448zM48 288c-26.5 0-48 21.5-48 48v64c0 26.5 21.5 48 48 48H464c26.5 0 48-21.5 48-48V336c0-26.5-21.5-48-48-48H48z"></path>
              </svg>
            ),
            title: "Progress Bar.",
            text: "Visualize your progress while giving quiz.",
          },
          {
            icon: AiOutlineBarChart,
            title: "Explanation of answers",
            text: "Get instant answers with explanation.",
          },
        ]}
      />
    </Features>
  );
};