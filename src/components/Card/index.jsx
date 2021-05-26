import React, { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import DetailsModal from "../DetailsModal";

const Card = ({ villData }) => {
  const [toggleModal, setToggleModal] = useState(false);
  const leafIcon = <FontAwesomeIcon icon={faLeaf} color="#3ba14e" size="lg" />;
  const xIcon = <FontAwesomeIcon icon={faTimesCircle} size="2x" />;

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <>
      <DetailsModal trigger={toggleModal} setTrigger={setToggleModal}>
        <div className=" flex flex-col sm:flex-row items-center mt-7 sm:mt-48 bg-white shadow-xl">
          <img
            className="h-72"
            src={villData.image_uri}
            alt="full photo of villager"
          />

          <ul className="list-disc list-inside p-8  text-xl tracking-wider h-72">
            <h1 className="text-4xl">{villData.name["name-USen"]}</h1>
            <li>ID: {villData.id}</li>
            <li>Gender: {villData.gender}</li>
            <li>Birthday: {villData["birthday-string"]}</li>
            <li>Hobby: {villData.hobby}</li>
            <li>Catch Phrase: "{villData["catch-phrase"]}"</li>
          </ul>
          <button
            className="self-end p-2"
            onClick={() => setToggleModal(false)}
          >
            {xIcon}
          </button>
        </div>
      </DetailsModal>
      <article data-aos="fade-right" className="relative shadow-lg w-80 h-64">
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
