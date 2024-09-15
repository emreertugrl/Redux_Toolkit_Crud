import { FaTrashAlt } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { Button, Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useState } from "react";
import ConfirmModal from "./ConfirmModal";
import FormModal from "./FormModal";

const TaskTable = () => {
  const [isDelOpen, setIsDelOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null); // Düzenlenecek görevi tutacak state
  const { tasks } = useSelector((store) => store.crudReducer);

  // Düzenleme butonuna tıklanınca çağrılacak fonksiyon
  const handleEditClick = (task) => {
    setSelectedTask(task); // Düzenlenecek görevi state'e ata
    setIsEditOpen(true); // Modal'ı aç
  };

  return (
    <Table variant="dark" responsive striped hover bordered>
      <thead>
        <tr>
          <th>#</th>
          <th>Görev</th>
          <th>Yazan</th>
          <th>Atanan</th>
          <th>Tarih</th>
          <th>İşlemler</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task, i) => (
          <tr key={i}>
            <td>{i + 1}</td>
            <td>{task.title}</td>
            <td>{task.author}</td>
            <td>{task.assigned}</td>
            <td>{task.end_date}</td>
            <td>
              <Button size="sm" onClick={() => handleEditClick(task)}>
                <MdEdit />
              </Button>
              <Button
                className="ms-2"
                onClick={() => setIsDelOpen(true)}
                size="sm"
                variant="danger"
              >
                <FaTrashAlt />
              </Button>
            </td>
          </tr>
        ))}

        {/* FormModal sadece bir kez render ediliyor */}
        {isEditOpen && (
          <FormModal
            task={selectedTask} // Düzenlenecek görevi prop olarak gönder
            isOpen={isEditOpen}
            close={() => setIsEditOpen(false)}
          />
        )}

        {/* ConfirmModal sadece bir kez render ediliyor */}
        <ConfirmModal
          isOpen={isDelOpen}
          handleClose={() => setIsDelOpen(false)}
          id={selectedTask?.id} // Seçilen görevin id'sini silme işlemine aktar
        />
      </tbody>
    </Table>
  );
};

export default TaskTable;
