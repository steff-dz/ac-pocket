import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

const DetailsModal = ({
  setToggleModal,
  name,
  birthday,
  gender,
  hobby,
  catchphrase,
  id,
}) => {
  const xIcon = <FontAwesomeIcon icon={faTimesCircle} size="lg" />;
  return (
    <article
      style={{ zIndex: "100" }}
      className="absolute w-full h-full bg-brown z-10"
    >
      This will be a details modal for the villager
      <button onClick={() => setToggleModal(false)}>{xIcon}</button>
    </article>
  );
};

export default DetailsModal;
