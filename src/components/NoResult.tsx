import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceFrown } from "@fortawesome/free-solid-svg-icons";

const NoResult = () => {
  return (
    <div className="flex flex-col items-center gap-5 text-slate-400">
      <FontAwesomeIcon icon={faFaceFrown} className="text-8xl select-none" />
      <h1 className="text-4xl text-center select-none">Result not found</h1>
    </div>
  );
};

export default NoResult;
