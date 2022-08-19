import { useState } from "react";
import axios from "../api/axios";
import { Row, Col, Card } from "react-bootstrap";
import { Button, Input } from "../components/AddComponent";
import { ModalComponent } from "../components/Modal";

export function AddClass() {
  const [classname, setClassname] = useState("");
  const [subject, setSubject] = useState({ classId: "", name: "" });
  const [chapter, setChapter] = useState({ subId: "", name: "", category: "" });
  const [topic, setTopic] = useState({ chapId: "", name: "" });
  const [subtopic, setSubtopic] = useState({ topId: "", name: "", url: "" });
  const [data, setData] = useState([]);
  const [modal, setModal] = useState({
    class: false,
    subject: false,
    chapter: false,
    topic: false,
    subtopic: false,
  });

  const addClass = async () => {
    try {
      if (classname) {
        await axios.post("/class", { Class_Name: classname });
        setClassname("");
        alert("Class successfully added");
      } else {
        alert("Give the class name");
      }
    } catch (err) {
      console.log("Error\n", err);
    }
  };

  const addSubject = async (e: any) => {
    try {
      if (subject.classId && subject.name) {
        const res = await axios.post(`/class/${subject.classId}/subject`, {
          Subject_Name: subject.name,
        });
        console.log(res);
        alert("Subject successfully added");
        setSubject({ classId: "", name: "" });
      } else {
        console.log("plese fill the required fields");
      }
    } catch (err) {
      console.log("Error\n", err);
    }
    e.preventDefault();
  };

  const addChapter = async (e: any) => {
    try {
      if (chapter.subId && chapter.name && chapter.category) {
        const res = await axios.post(`/subject/${chapter.subId}/chapter`, {
          Chapter_Name: chapter.name,
          Category_Name: chapter.category,
        });
        console.log(res);
        setChapter({ subId: "", name: "", category: "" });
        alert("Chapter successfully added");
      } else {
        console.log("plese fill the required fields");
      }
    } catch (err) {
      console.log("Error\n", err);
    }
    e.preventDefault();
  };

  const addTopic = async (e: any) => {
    try {
      if (topic.chapId && topic.name) {
        const res = await axios.post(`/chapter/${topic.chapId}/topic`, {
          Topic_Name: topic.name,
        });
        console.log(res);
        setTopic({ chapId: "", name: "" });
        alert("Topic successfully added");
      } else {
        console.log("plese fill the required fields");
      }
    } catch (err) {
      console.log("Error\n", err);
    }
    e.preventDefault();
  };

  const addSubtopic = async (e: any) => {
    try {
      if (subtopic.topId && subtopic.name && subtopic.url) {
        const res = await axios.post(`/topic/${subtopic.topId}/subtopic`, {
          Subtopic_Name: subtopic.name,
          Url: subtopic.url,
        });
        console.log(res);
        setSubtopic({ topId: "", name: "", url: "" });
      } else {
        console.log("plese fill the required fields");
      }
    } catch (err) {
      console.log("Error\n", err);
    }
    e.preventDefault();
  };

  const getClass = async () => {
    try {
      const res = await axios.get("/class");
      setData(res.data.class);
      setModal({ ...modal, class: true });
    } catch (err) {
      console.log("Something went wrong \n", err);
    }
  };

  const getSubject = async () => {
    try {
      const res = await axios.get("/subject");
      setData(res.data.subject);
      console.log(data);

      setModal({ ...modal, subject: true });
    } catch (err) {
      console.log("Something went wrong \n", err);
    }
  };

  const getChapter = async () => {
    try {
      const res = await axios.get("/chapter");
      setData(res.data.chapter);
      setModal({ ...modal, chapter: true });
    } catch (err) {
      console.log("Something went wrong \n", err);
    }
  };

  const getTopic = async () => {
    try {
      const res = await axios.get("/topic");
      setData(res.data.topic);
      setModal({ ...modal, topic: true });
    } catch (err) {
      console.log("Something went wrong \n", err);
    }
  };

  const getSubtopic = async () => {
    try {
      const res = await axios.get("/subtopic");
      setData(res.data.subtopic);
      setModal({ ...modal, subtopic: true });
    } catch (err) {
      console.log("Something went wrong \n", err);
    }
  };
  //className="d-none d-lg-block" 

  return (
    <div>
      <div>
    <Row xs={1} md={2} lg={3}>
      <Col >
        <Card bg="light" border="light" >
        <h5 className="my-2">Class</h5>
        <Input
          type="text"
          text="Class Name"
          change={(e: React.FormEvent<HTMLInputElement>) =>
            setClassname(e.currentTarget.value)
          }
          value={classname}
        />
        <div className="d-flex justify-content-end">
          <Button type="primary" text="View" click={getClass} />
          &nbsp; &nbsp;
          <Button type="success" text="Add" click={addClass} />
        </div>
        <ModalComponent
          show={modal.class}
          onHide={() => setModal({ ...modal, class: false })}
          data={data}
          t1="Class Id"
          t2="Class Name"
        />
        </Card>
      </Col>

      <Col >
      <Card bg="light" border="light" >
        <h5 className="my-2">Subject</h5>
        <Input
          type="number"
          text="Class Id"
          change={(e: React.FormEvent<HTMLInputElement>) =>
            setSubject({ ...subject, classId: e.currentTarget.value })
          }
          value={subject.classId}
        />
        <Input
          type="text"
          text="Subject Name"
          change={(e: React.FormEvent<HTMLInputElement>) =>
            setSubject({ ...subject, name: e.currentTarget.value })
          }
          value={subject.name}
        />
        <div className="d-flex justify-content-end">
          <Button type="primary" text="View" click={getSubject} />
          &nbsp; &nbsp;
          <Button type="success" text="Add" click={addSubject} />
        </div>
        <ModalComponent
          show={modal.subject}
          onHide={() => setModal({ ...modal, subject: false })}
          data={data}
          t1="Subject Id"
          t2="Subject Name"
        />
        </Card>
      </Col>

      <Col >
      <Card bg="light" border="light" >
        <h5 className="my-2">Topic</h5>
        <Input
          type="number"
          text="Chapter Id"
          change={(e: React.FormEvent<HTMLInputElement>) =>
            setTopic({ ...topic, chapId: e.currentTarget.value })
          }
          value={topic.chapId}
        />
        <Input
          type="text"
          text="Topic Name"
          change={(e: React.FormEvent<HTMLInputElement>) =>
            setTopic({ ...topic, chapId: e.currentTarget.value })
          }
          value={topic.chapId}
        />
        <div className="d-flex justify-content-end">
          <Button type="primary" text="View" click={getTopic} />
          &nbsp; &nbsp;
          <Button type="success" text="Add" click={addTopic} />
        </div>
        <ModalComponent
          show={modal.topic}
          onHide={() => setModal({ ...modal, topic: false })}
          data={data}
          t1="Topic Id"
          t2="Topic Name"
        />
        </Card>
      </Col>
      </Row>
      </div>
      <div >
      <Row xs={1} md={2} lg={3} className="mt-4">
      <Col >
      <Card bg="light" border="light" >
        <h5 className="my-2">Chapter</h5>
        <Input
          type="number"
          text="Subject Id"
          change={(e: React.FormEvent<HTMLInputElement>) =>
            setChapter({ ...chapter, subId: e.currentTarget.value })
          }
          value={chapter.subId}
        />
        <Input
          type="text"
          text="Chapter Name"
          change={(e: React.FormEvent<HTMLInputElement>) =>
            setChapter({ ...chapter, name: e.currentTarget.value })
          }
          value={chapter.name}
        />
        <Input
          type="text"
          text="Category"
          change={(e: React.FormEvent<HTMLInputElement>) =>
            setChapter({ ...chapter, category: e.currentTarget.value })
          }
          value={chapter.category}
        />
        <div className="d-flex justify-content-end">
          <Button type="primary" text="View" click={getChapter} />
          &nbsp; &nbsp;
          <Button type="success" text="Add" click={addChapter} />
        </div>
        <ModalComponent
          show={modal.chapter}
          onHide={() => setModal({ ...modal, chapter: false })}
          data={data}
          t1="Chapter Id"
          t2="Chapter Name"
        />
        </Card>
      </Col>

      <Col >
      <Card bg="light" border="light" >
        <h5 className="my-2">Subtopic</h5>
        <Input
          type="number"
          text="Topic Id"
          change={(e: React.FormEvent<HTMLInputElement>) =>
            setSubtopic({ ...subtopic, topId: e.currentTarget.value })
          }
          value={subtopic.topId}
        />
        <Input
          type="text"
          text="Subtopic Name"
          change={(e: React.FormEvent<HTMLInputElement>) =>
            setSubtopic({ ...subtopic, name: e.currentTarget.value })
          }
          value={subtopic.name}
        />
        <Input
          type="text"
          text="Url"
          change={(e: React.FormEvent<HTMLInputElement>) =>
            setSubtopic({ ...subtopic, url: e.currentTarget.value })
          }
          value={subtopic.url}
        />
        <div className="d-flex justify-content-end">
          <Button type="primary" text="View" click={getSubtopic} />
          &nbsp; &nbsp;
          <Button type="success" text="Add" click={addSubtopic} />
        </div>
        <ModalComponent
          show={modal.subtopic}
          onHide={() => setModal({ ...modal, subtopic: false })}
          data={data}
          t1="Subtopic Id"
          t2="Subtopic Name"
        />
        </Card>
      </Col>
    </Row>
    </div>
    </div>
  );
}
