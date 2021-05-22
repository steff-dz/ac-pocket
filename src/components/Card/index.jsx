const Card = ({ villData }) => {
  //console.log(villData);
  return (
    <article className="shadow-lg  rounded-lg w-80 h-60">
      <img
        className="mx-auto"
        src={villData[1].icon_uri}
        alt="icon of villager"
      />
      <h2 className="text-2xl text-center">{villData[1].name["name-USen"]}</h2>
    </article>
  );
};

export default Card;
