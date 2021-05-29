import React, { useEffect } from "react";
import useSWR from "swr";
import PageTitle from "../../components/PageTitle";
import Card from "../../components/Card";
import Loader from "../../components/Loader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleUp } from "@fortawesome/free-solid-svg-icons";

const VillagersPage = () => {
  let villArray = [];
  const styles = {
    // width: "50px",
    // height: "50px",
    // backgroundColor: "red",
    // borderRadius: "100%",
    right: "5%",
    bottom: "5%",
    position: "fixed",
  };

  const arrowUp = (
    <FontAwesomeIcon icon={faArrowCircleUp} size="3x" color="#c48d3f" />
  );

  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error } = useSWR("http://acnhapi.com/v1/villagers/", fetcher);

  if (villArray.length === 0) {
    villArray = Object.entries(data);
  }

  if (error) return <div>Failed to Load </div>;
  if (!data) return <Loader />;

  return (
    <>
      <PageTitle text="Villagers List" />
      <section className="mt-12 mx-24 sm:mx-36 flex flex-wrap gap-3 justify-evenly">
        {villArray.map((el) => (
          <Card key={el[0]} villData={el[1]} />
        ))}
        <div style={styles}>{arrowUp}</div>
      </section>
    </>
  );
};

export default VillagersPage;
