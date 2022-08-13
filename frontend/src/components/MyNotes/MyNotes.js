import React from "react";
import { Accordion, Badge, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import MainScreen from "../MainScreen";
import Notes from "../../data/notes";
const MyNotes = () => {
  const deleteHandler = (id) => {
    if (id) {
      if (window.confirm("Are you sure")) {
        alert("Deleted" + " " + id);
      }
    }
  };
  return (
    <MainScreen title={"Welcome back Divya Prakash"}>
      <Link to="createnote">
        <Button style={{ margin: 10, marginBottom: 10 }} size="lg">
          Create new Note
        </Button>
      </Link>

      {Notes.map((note) => (
        <Accordion defaultActiveKey={["0"]} flush>
          <Accordion.Item eventkey="0">
            <Card style={{ margin: 10 }}>
              <Accordion.Header style={{ display: "flex" }}>
                <span
                  style={{
                    color: "black",
                    textDecoration: "none",
                    flex: 1,
                    cursor: "pointer",
                    alignSelf: "center",
                    fontSize: 18,
                  }}
                >
                  <Accordion.Button as={Card.Text} variant="link">
                    {note.title}
                  </Accordion.Button>
                </span>
                <div>
                  <Button href={`/note/${note.id}`}>Edit</Button>
                  <Button
                    variant="danger"
                    className="mx-2"
                    onClick={() => deleteHandler(note._id)}
                  >
                    Delete
                  </Button>
                </div>
              </Accordion.Header>
              <Accordion.Collapse eventkey="0">
                <Card.Body>
                  <Badge pill bg="success">
                    Category - {note.category}
                  </Badge>
                  <blockquote className="blockquote mb-0">
                    <p>{note.content}</p>
                    <footer className="blockquote-footer">
                      Created on -date
                    </footer>
                  </blockquote>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion.Item>
        </Accordion>
      ))}
    </MainScreen>
  );
};

export default MyNotes;
