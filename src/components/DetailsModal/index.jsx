import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

const DetailsModal = (props) => {
  // const xIcon = <FontAwesomeIcon icon={faTimesCircle} size="lg" />
  return props.trigger ? (
    <section className="fixed bg-gray-300 bg-opacity-50 w-full h-screen top-0 z-50 flex flex-col items-center">
      {props.children}
    </section>
  ) : (
    ""
  );
};

export default DetailsModal;
