import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FormEvent, useState } from "react";

interface Props {
  setIsShowModal: Function;
}

const Searching: React.FC<Props> = ({ setIsShowModal }): JSX.Element => {
  const [searchingName, setSearchingName] = useState("");

  const sendSearchData: React.MouseEventHandler<
    HTMLButtonElement
  > = (): void => {
    console.log(searchingName);
  };

  return (
    <section className="search">
      <form
        onSubmit={(e: FormEvent<HTMLElement>) => e.preventDefault()}
        className="searching"
      >
        <input
          type={"text"}
          value={searchingName}
          onChange={(e) => setSearchingName(e.target.value)}
          placeholder="Search"
        />
        <button onClick={sendSearchData} className="buttonSearch">
          <FontAwesomeIcon icon="search" />
        </button>
      </form>
      <button className="buttonSliders" onClick={() => setIsShowModal(true)}>
        <FontAwesomeIcon icon="sliders-h" className="fa-xl" />
      </button>
    </section>
  );
};

export default Searching;
