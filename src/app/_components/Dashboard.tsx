"use client";
import React from "react";

const Dashboard = () => {
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
        <p>Latest news!</p>
        <section className="hstack gap-3 p-2 ">
          <span>
            <i className="fa-brands fa-2xl fa-twitter"></i>
          </span>

          <span>
            <i className="fa-brands fa-2xl fa-instagram"></i>
          </span>

          <span>
            <i className="fa-brands fa-2xl fa-github"></i>
          </span>
        </section>
      </section>
    </section>
  );
};

export default Dashboard;
