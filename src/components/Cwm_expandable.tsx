import { useState } from "react";

interface Props {
  children: string;
  maxCharacters: number;
}

function Cwm_expandable({ children, maxCharacters }: Props) {
  const [showMore, setShowMore] = useState(false);
  function handleClick() {
    console.log("handleClick " + showMore + " ");
    setShowMore(!showMore);
    return showMore;
  }

  if (showMore)
    return (
      <>
        <p>{children}</p>
        <button onClick={handleClick}>
          {showMore ? "Show less" : "Show more..."}
        </button>
      </>
    );

  const text = children.substring(0, maxCharacters);

  return (
    <>
      <p>{text}...</p>
      <button onClick={handleClick}>
        {showMore ? "Show less" : "Show more..."}
      </button>
    </>
  );
}

export default Cwm_expandable;
