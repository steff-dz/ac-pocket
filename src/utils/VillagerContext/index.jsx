import React, { createContext, useContext, useState } from "react";
import useSWR from "swr";

const VillagerListContext = createContext({
  villagerLines: [],
  //addVillagerLine: () => {},
});

export const VillagerList = ({ children }) => {
  const [villagerLines, setVillagerLines] = useState([]);
  // const addVillagerLine = (villager) => {
  //   setVillagerLines([...villagerLines, villager]);
  // };

  const fetcher = (...args) =>
    fetch(...args).then((res) =>
      res.json().then((data) => setVillagerLines(Object.entries(data)))
    );

  const { data, error } = useSWR(`http://acnhapi.com/v1/villagers/`, fetcher);
  if (error) {
    setVillagerLines(error);
  }

  return (
    <VillagerListContext.Provider value={{ villagerLines, setVillagerLines }}>
      {children}
    </VillagerListContext.Provider>
  );
};

export const useVillagerList = () => {
  return useContext(VillagerListContext);
};
