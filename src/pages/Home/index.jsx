import PageTitle from "../../components/PageTitle";

const Home = () => {
  return (
    <>
      <PageTitle text="Pocket Crossing" />
      <p className="text-2xl text-center mt-3 px-1.5">
        A helpful little app to checkout all of the villagers and other items in
        the great game of Animal Crossing.
      </p>
      <img
        className="mx-auto"
        src="https://i.pinimg.com/originals/b5/a4/ac/b5a4ac58f104717aece18454d59af3a1.png"
        alt="Icon of smiling Tom Nook"
      />
    </>
  );
};

export default Home;
