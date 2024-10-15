import React, { useState } from "react";
// import { useRouter } from "next/router";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import Link from "next/link"; // Importing Next.js Link component
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faFile,
//   faMagnifyingGlassChart,
//   faFilePen,
//   faCircleCheck,
//   faCircleXmark,
//   faUsers,
// } from "@fortawesome/free-solid-svg-icons"; // Importing FontAwesome icons

function Services() {
  const [cards] = useState([
    {
      // NEW PROPOSALS
      title: "Managed Detection and Response (MDR)",
      imgicon: "ICON",
      color: "linear-gradient(40deg, #2193b0, #6dd5ed)",
      info: "Detect and respond to threats in real-time with our AI-driven threat hunting services, powered by our advanced cybersecurity mesh architecture.",
      link: "/newProposal",
    },
    {
      // PENDING
      title: "Endpoint Security",
      imgicon: "",
      color: "linear-gradient(40deg, #2193b0, #6dd5ed)",
      info: "Protect your endpoints from malware, ransomware, and other advanced threats with our comprehensive endpoint security solutions bolstered by our cybersecurity mesh's predictive analytics and autonomous response capabilities.",
      link: "/pending",
    },
    {
      // REVISION
      title: "Network Security",
      imgicon: "",
      color: "linear-gradient(40deg, #2193b0, #6dd5ed)",
      info: "Safeguard your network infrastructure from intrusions and unauthorized access with our robust network security offerings.",
      link: "/revision",
    },
    {
      // APPROVED
      title: "Managed Security Awareness",
      imgicon: "",
      color: "linear-gradient(40deg, #2193b0, #6dd5ed)",
      info: "Educate and train your employees to become the strongest layer of defense by recognizing and reporting social engineering attacks.",
      link: "/approved",
    },
    {
      // DISAPPROVED
      title: "Incident Response",
      imgicon: "",
      color: "linear-gradient(40deg, #2193b0, #6dd5ed)",
      info: "Minimize the impact of security incidents with our rapid response and mitigation strategies.",
      link: "/disapproved",
    },
    {
      // DISAPPROVED
      title: "Bug Bounty",
      imgicon: "",
      color: "linear-gradient(40deg, #2193b0, #6dd5ed)",
      info: "Harness the power of ethical hackers and security researchers to identify vulnerabilities in your systems before cybercriminals exploit them. Our Bug Bounty program encourages collaboration between white-hat hackers and your organization to strengthen your defenses and protect your data.",
      link: "/disapproved",
    },
  ]);

  return (
    <div>
      <section
        className="d-flex flex-column align-items-center"
        style={{ padding: "5rem 2rem" }} // Big padding around the section
      >
        <Row
          className="g-3 justify-content-center w-100"
          style={{ maxWidth: "1200px" }}
        >
          {cards.map((card, i) => (
            <Col
              key={i}
              xs={12}
              md={6}
              lg={4} // 3 cards per row on large screens
              className="d-flex justify-content-center"
            >
              <Card
                className="border-0 text-light d-flex flex-column p-3"
                style={{
                  background: card.color,
                  width: "32rem", // Control width for compactness
                  height: "20rem",
                  minHeight: "16rem", // Moderate height for cards
                }}
              >
                <Card.Title className="fs-5 text-dark mb-3 fw-bolder ">
                  {card.imgicon}
                  <br/>
                  <span style={{ marginTop: "25px", display: "inline-block" }}>
                    {card.title}
                  </span>
                </Card.Title>
                <Card.Body className="d-flex flex-column justify-content-center mt-auto">
                  <h6 className="text-dark">{card.info}</h6>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </section>
    </div>
  );
}

export default Services;
