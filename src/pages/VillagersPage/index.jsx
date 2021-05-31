import React from "react";
import useSWR from "swr";
import PageTitle from "../../components/PageTitle";
import Card from "../../components/Card";
import Loader from "../../components/Loader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleUp } from "@fortawesome/free-solid-svg-icons";

const VillagersPage = () => {
  const arrowUp = (
    <FontAwesomeIcon icon={faArrowCircleUp} size="3x" color="#c48d3f" />
  );

  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error } = useSWR("http://acnhapi.com/v1/villagers/", fetcher);
  if (!data) return <Loader />;
  if (error) return <div>Failed to Load </div>;

  const villArray = Object.entries(data);

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
        {villArray.map((el) => (
          <Card key={el[0]} villData={el[1]} />
        ))}
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
