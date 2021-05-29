import React from "react";
import useSWR from "swr";
import PageTitle from "../../components/PageTitle";
import Card from "../../components/Card";
import Loader from "../../components/Loader";

const VillagersPage = () => {
  let villArray = [];

  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error } = useSWR("http://acnhapi.com/v1/villagers/", fetcher);

  if (error) return <div>Failed to Load </div>;
  if (!data) return <Loader />;

  villArray = Object.entries(data);

  return (
    <>
      <PageTitle text="Villagers List" />
      <section className=" mt-3 mx-24 sm:mx-36 flex flex-wrap gap-3 justify-evenly">
        {villArray.map((el) => (
          <Card key={el[0]} villData={el[1]} />
        ))}
      </section>
    </>
  );
};

export default VillagersPage;
