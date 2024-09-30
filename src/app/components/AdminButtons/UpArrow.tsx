import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function UpArrowButton() {
  return (
    <button className="w-12 h-12 rounded-xl flex justify-center items-center bg-brand-pink text-white">
      <FontAwesomeIcon icon={faArrowUp} />
    </button>
  );
}
