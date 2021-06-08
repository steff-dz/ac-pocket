import React from "react";
import { useVillagerList } from "../../utils/VillagerContext";
import Loader from "../../components/Loader";
import PageTitle from "../../components/PageTitle";
import Card from "../../components/Card";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleUp } from "@fortawesome/free-solid-svg-icons";

const VillagersPage = () => {
  const { villagerLines } = useVillagerList();
  const arrowUp = (
    <FontAwesomeIcon icon={faArrowCircleUp} size="3x" color="#c48d3f" />
  );

  function handleTopScroll() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <>
      <PageTitle text="Villagers List" />
      <section className="mt-12 mx-24 sm:mx-36 flex flex-wrap gap-3 justify-evenly">
        {villagerLines ? (
          villagerLines.map((el) => <Card key={el[0]} villData={el[1]} />)
        ) : (
          <Loader />
        )}
        <button
          href="title"
          className="fixed bottom-16 right-4 sm:right-16"
          onClick={() => handleTopScroll()}
        >
          {arrowUp}
        </button>
      </section>
    </>
  );
};

export default VillagersPage;
