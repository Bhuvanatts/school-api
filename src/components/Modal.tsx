import { Button, Modal, Table } from "react-bootstrap";

export function ModalComponent(props: any) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Class</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>{props.t1}</th>
              <th>{props.t2}</th>
            </tr>
          </thead>
          {props.data.map((item: any, index: any) => {
            return (
              <tbody key={index}>
                <tr>
                  <td>
                    {item.class_id}
                    {item.chapter_id ? item.chapter_id : item.subject_id}
                    {item.topic_id}
                    {item.subtopic_id}
                  </td>
                  <td>
                    {item.class_name}
                    {item.chapter_name}
                    {item.subject_name}
                    {item.topic_name}
                    {item.subtopic_name}
                  </td>
                </tr>
              </tbody>
            );
          })}
        </Table>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
