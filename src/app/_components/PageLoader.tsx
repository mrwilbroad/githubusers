
import React from "react";
import { Spinner } from "react-bootstrap";

const PageLoader = () => {
  return (
    <div
      style={{
        zIndex: "100",
      }}
      className="vh-100 vw-100 d-flex justify-content-center position-absolute bg-ino"
    >
      <section className="text-center d-flex my-auto border border-success p-2">
        <p className="my-auto">Please wait for a seconds...</p>
        <Spinner animation="border" className="mx-2" variant="success" role="status" />
      </section>
    </div>
  );
};

export default PageLoader;
