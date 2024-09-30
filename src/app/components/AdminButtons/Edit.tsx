import { faPen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function EditButton() {
  return (
    <button className="w-12 h-12 rounded-xl flex justify-center items-center bg-brand-pink text-white">
      <FontAwesomeIcon icon={faPen} />
    </button>
  );
}
