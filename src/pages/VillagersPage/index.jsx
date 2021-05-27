import React, { useState, useEffect } from "react";
import useSWR from "swr";
import PageTitle from "../../components/PageTitle";
//import { fetchCall } from "../../utils/helpers";
import Card from "../../components/Card";
import Loader from "../../components/Loader";
//("http://acnhapi.com/v1/villagers/", setVillagerData);

const VillagersPage = () => {
  const [villagerData, setVillagerData] = useState([]);

  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, error } = useSWR("http://acnhapi.com/v1/villagers/", fetcher);

  if (error) return <div>Failed to Load </div>;
  if (!data) return <Loader />;

  renderVillagers();
  function renderVillagers() {
    console.log("inside render villagers function");
    console.log(data);
    Object.entries(data).map((el) => {
      console.log(el[1].name["name-USen"]);
    });
  }

  // useEffect(() => {
  //   console.log(villagerData, villagerData.length);
  //   if (villagerData.length === 0) {
  //     fetch("http://acnhapi.com/v1/villagers/")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setVillagerData(Object.entries(data));
  //       })
  //       .catch((err) => console.log(err));
  //   } else {
  //     return;
  //   }
  // }, [villagerData]);

  return (
    <>
      <div>"hola"</div>
      {/* <PageTitle text="Villagers List" />
      <section className=" mt-3 mx-24 sm:mx-36 flex flex-wrap gap-3 justify-evenly">
        {villagerData.map((el) => (
          <Card key={el[0]} villData={el[1]} />
        ))}
      </section> */}
    </>
  );
};

export default VillagersPage;

//className="mt-3 mx-24 pb-10 sm:mx-36 flex flex-wrap gap-4 justify-evenly"
