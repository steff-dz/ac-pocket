import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";
import DetailsModal from "../DetailsModal";

const Card = ({ villData }) => {
  const [toggleModal, setToggleModal] = useState(false);
  const leafIcon = <FontAwesomeIcon icon={faLeaf} color="#3ba14e" size="lg" />;
  return (
    <>
      <article className="relative shadow-lg rounded-lg w-80 h-64">
        {toggleModal && (
          <DetailsModal
            setToggleModal={setToggleModal}
            name={villData.name["name-USen"]}
            birthday={villData["birthday-string"]}
            gender={villData.gender}
            hobby={villData.hobby}
            catchPhrase={villData["catch-phrase"]}
            id={villData.id}
          />
        )}
        <span
          className="container inline-flex h-1/3 opacity-60 "
          style={{ backgroundColor: villData["bubble-color"] }}
        ></span>

        <img
          className="h-1/2 absolute top-3"
          style={{ left: "30%" }}
          src={villData.icon_uri}
          alt="icon of villager"
        />

        <div className="mt-9 flex flex-col px-4 ">
          <h2 className="text-2xl text-center font-bold text-black">
            {villData.name["name-USen"]}
          </h2>
          <div
            className="flex gap-2 justify-center 
        "
          >
            <p className="font-normal">{villData.personality} </p>
            <span></span>
            <p className="font-normal">{villData.species}</p>
          </div>
          <p className="font-light text-center">"{villData.saying}"</p>
        </div>
        <button
          onClick={() => setToggleModal(true)}
          className="absolute right-2 bottom-2"
        >
          {leafIcon}
        </button>
      </article>
    </>
  );
};

export default Card;
