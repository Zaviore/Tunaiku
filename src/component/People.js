import React from "react";
import Navv from "./navv";
import { Link } from "react-router-dom";
import db from "./db.json";
import "../Css/style.css";
import { Card, Button, Col, Row } from "react-bootstrap";
function People() {
  return (
    <div>
      <Navv />
      <div className="container">
        <Row>
          {db.people.map((data) => (
            <div key={data.id}>
              <Col sm={1} style={{ padding: "10px" }}>
                <Card style={{ width: "15rem" }}>
                  <Card.Header as="h5">{data.name}</Card.Header>

                  <Card.Body>
                    <Card.Text>
                      <Row>
                        <Col>Birth Year :</Col>
                        <Col>{data.birth_year}</Col>
                      </Row>
                      <Row>
                        <Col>Eyes Color :</Col>
                        <Col>{data.eye_color}</Col>
                      </Row>
                    </Card.Text>
                    <Link
                      to="/detail"
                      name={data.name}
                      height={data.height}
                      mass={data.mass}
                      hair_color={data.hair_color}
                      skin_color={data.skin_color}
                      eye_color={data.eye_color}
                      birth_year={data.birth_year}
                      gender={data.gender}
                    >
                      <Button variant="primary">See more</Button>
                    </Link>
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

export default People;
