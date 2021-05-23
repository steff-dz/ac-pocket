const Card = ({ villData }) => {
  return (
    <article className="relative shadow-lg rounded-lg w-80 h-60 ">
      <span
        className="container inline-flex h-1/3 opacity-60"
        style={{ backgroundColor: villData["bubble-color"] }}
      ></span>
      <img
        className="h-1/2 absolute inset-x-1/3 top-4"
        src={villData.icon_uri}
        alt="icon of villager"
      />
      <div className="mt-9 flex flex-col px-4">
        <h2 className="text-2xl text-center font-bold">
          {villData.name["name-USen"]}
        </h2>
        <div className="flex gap-2 justify-center">
          <p className="font-normal">{villData.personality} </p>
          <span></span>
          <p className="font-normal">{villData.species}</p>
        </div>
        <p className="font-light text-center">"{villData.saying}"</p>
      </div>
    </article>
  );
};

export default Card;
