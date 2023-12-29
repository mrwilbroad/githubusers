"use client";
import React from "react";

const dash = () => {
  return (
    <section className="vstack gap-1">
      <section>
        <h6 className="tetx-primary">Github Users</h6>
        <hr />
        <p>
          Explore GitHub Profiles: Discover GitHub users effortlessly. Dive into
          user profiles, repositories, and more. An intuitive tool to find and
          explore GitHub developers and their projects.
        </p>
      </section>

      <section>
          <hr />
        <p>Latest news!</p>
        <section className="hstack gap-3 p-2 ">
          <span>
            <i className="fa-brands fa-2xl fa-twitter text-primary"></i>
          </span>

          <span>
            <i className="fa-brands fa-2xl fa-instagram text-danger"></i>
          </span>

          <span>
            <i className="fa-brands fa-2xl fa-github text-dark"></i>
          </span>
        </section>
      </section>
    </section>
  );
};

export default dash;
