import { useState } from "react";
import { Button, Container, Stack } from "react-bootstrap";
import FormModal from "../components/FormModal";
import TaskTable from "../components/TaskTable";

const Crud = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="vh-100">
      <Container>
        {/*Flex yapısı Stack*/}
        <Stack className="align-items-end py-5">
          <Button onClick={() => setIsOpen(true)}>Yeni Görev Ekle</Button>
        </Stack>

        <TaskTable />
      </Container>
      <FormModal isOpen={isOpen} close={() => setIsOpen(false)} />
    </div>
  );
};

export default Crud;
