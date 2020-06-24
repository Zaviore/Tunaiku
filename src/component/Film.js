import React from "react";
import db from "./db.json";
import "../Css/style.css";
import { Card, Button, Col, Row } from "react-bootstrap";
function Film() {
  return (
    <div>
      <div className="container">
        <Row>
          {db.films.map((data) => (
            <div key={data.id}>
              <Col sm={1} style={{ padding: "10px" }}>
                <Card style={{ width: "15rem" }}>
                  <Card.Header as="h5">{data.title}</Card.Header>
                  <Card.Img variant="top" src={data.url} />
                  <Card.Body>
                    <Card.Text>
                      <br />
                      Total Episode : {data.episode_id}
                      <br /> Director : {data.director}
                      <p>Producer : {data.producer}</p>
                      <p>Release Data : {data.release_date}</p>
                    </Card.Text>
                    <Button variant="primary">read more</Button>
                  </Card.Body>
                </Card>
              </Col>
            </div>
          ))}
        </Row>
      </div>
    </div>
  );
}

export default Film;
