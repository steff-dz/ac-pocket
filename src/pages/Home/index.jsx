import PageTitle from "../../components/PageTitle";

const Home = () => {
  return (
    <main className="h-full">
      <PageTitle text="Pocket Crossing" />
      <img
        className="mx-auto w-80 md:w-96"
        src="https://i.pinimg.com/originals/b5/a4/ac/b5a4ac58f104717aece18454d59af3a1.png"
        alt="Icon of smiling Tom Nook"
      />
      <p className="mx-auto bg-green w-4/5 sm:w-1/2 text-white text-3xl text-center p-8 rounded-md shadow-lg">
        A helpful little app to checkout all of the villagers and other items in
        the great game of Animal Crossing.
      </p>
    </main>
  );
};

export default Home;
