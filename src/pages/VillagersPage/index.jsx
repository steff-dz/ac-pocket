import React, { useState, useEffect } from "react";
import PageTitle from "../../components/PageTitle";
import { fetchCall } from "../../utils/helpers";
import Card from "../../components/Card";

const VillagersPage = () => {
  const [villagerData, setVillagerData] = useState([]);
  useEffect(() => {
    fetchCall("http://acnhapi.com/v1/villagers/", setVillagerData);
  }, []);

  return (
    <>
      <PageTitle text="Villagers List" />
      <section className="mt-3 flex flex-wrap gap-2 justify-evenly">
        {villagerData &&
          villagerData.map((el) => <Card key={el[0]} villData={el[1]} />)}
      </section>
    </>
  );
};

export default VillagersPage;
