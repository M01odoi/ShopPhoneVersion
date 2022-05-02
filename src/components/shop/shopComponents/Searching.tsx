import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { ChangeEvent, useState } from "react";

const Searching: React.FC = (): JSX.Element => {
  const [searchingName, setSearchingName] = useState("");

  const sendSearchData: React.MouseEventHandler<HTMLButtonElement> = (
    e
  ): void => {
    e.preventDefault();
    console.log(searchingName);
  };

  return (
    <form className="searching">
      <input
        type={"text"}
        value={searchingName}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setSearchingName(e.target.value)
        }
        placeholder="Search"
      />
      <button onClick={(e) => sendSearchData(e)} className="button-search">
        <FontAwesomeIcon icon="search" />
      </button>
    </form>
  );
};

export default Searching;
