import React, { useState, useEffect } from "react";
import PageTitle from "../../components/PageTitle";
import { fetchCall } from "../../utils/helpers";

const VillagersPage = () => {
  const [villagerData, setVillagerData] = useState(null);
  useEffect(() => {
    fetchCall("http://acnhapi.com/v1/villagers/", setVillagerData);
  }, []);

  return (
    <>
      <PageTitle text="Villagers List" />
    </>
  );
};

export default VillagersPage;
