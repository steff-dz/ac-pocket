import React, { useState, useEffect } from "react";
import PageTitle from "../../components/PageTitle";
import { fetchCall } from "../../utils/helpers";
import Card from "../../components/Card";
import Loader from "../../components/Loader";

const VillagersPage = () => {
  const [villagerData, setVillagerData] = useState([]);
  useEffect(() => {
    fetchCall("http://acnhapi.com/v1/villagers/", setVillagerData);
  }, []);

  return (
    <>
      <PageTitle text="Villagers List" />
      <section className="mt-3 mx-24 sm:mx-36 flex flex-wrap gap-4 justify-evenly">
        {villagerData.length === 0 ? (
          <Loader />
        ) : (
          villagerData.map((el) => <Card key={el[0]} villData={el[1]} />)
        )}
      </section>
    </>
  );
};

export default VillagersPage;
