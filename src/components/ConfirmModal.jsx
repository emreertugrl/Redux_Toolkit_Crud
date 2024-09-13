import { Button, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteTask } from "../redux/slices/crudSlice";

const ConfirmModal = ({ handleClose, isOpen, id }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    // silmek istediğimizi reducer'a bildiriyoruz.
    dispatch(deleteTask(id));
    // modal kapat
    handleClose();
  };
  return (
    <Modal show={isOpen} onHide={handleClose} centered className="text-black">
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <h6> Bu görevi silmek istediğinizden emin misiniz?</h6>
        <p className="text-secondary">Onaylarsanız tekrardan geri dönülemez.</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          İptal
        </Button>
        <Button variant="danger" onClick={handleDelete}>
          Sil
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ConfirmModal;
