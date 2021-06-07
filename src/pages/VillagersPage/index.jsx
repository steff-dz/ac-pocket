import React, { useState, useEffect, useRef } from "react";
import useSWR from "swr";
import Loader from "../../components/Loader";
import PageTitle from "../../components/PageTitle";
import Card from "../../components/Card";
import Search from "../../components/Search";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleUp } from "@fortawesome/free-solid-svg-icons";

const VillagersPage = () => {
  const [query, setQuery] = useState(null);

  useEffect(() => {
    if (query) {
      console.log("from the use Effect:", query);
      //const thisOne = villArray.find((el) => el[1].name["name-USen"] === query);
      //console.log(thisOne);
    } else {
      console.log("its empty or null");
    }
  }, [query]);

  const arrowUp = (
    <FontAwesomeIcon icon={faArrowCircleUp} size="3x" color="#c48d3f" />
  );

  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error } = useSWR(`http://acnhapi.com/v1/villagers/`, fetcher);
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
