import { useContext } from "react";
import { useParams } from "react-router";
import { ForumContext } from "../main";

export const Answer = () => {
  const { questionId } = useParams();
  const { forumdata } = useContext(ForumContext);
  console.log(forumdata, "yes");

  const filteredData = forumdata.find((ques) => {
    return questionId === ques.id.toString();
  });

  console.log(filteredData, "no");
  return (
    <div>
      <h1>Answer : </h1>
      <p>{filteredData?.answer}</p>
    </div>
  );
};
