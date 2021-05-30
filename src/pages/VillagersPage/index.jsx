import React, { useEffect } from "react";
import useSWR from "swr";
import PageTitle from "../../components/PageTitle";
import Card from "../../components/Card";
import Loader from "../../components/Loader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleUp } from "@fortawesome/free-solid-svg-icons";

const VillagersPage = () => {
  const styles = {
    right: "5%",
    bottom: "5%",
    position: "fixed",
  };

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
        <div href="title" style={styles} onClick={() => handleTopScroll()}>
          {arrowUp}
        </div>
      </section>
    </>
  );
};

export default VillagersPage;
