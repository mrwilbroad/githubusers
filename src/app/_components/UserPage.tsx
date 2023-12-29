  import React from "react";
  import type { UserProps } from "./SearchUser";
  import Link from "next/link";

  const UserPage = (props: { User: UserProps }) => {
    return (
      <section className="card mt-3">
        <section className="card-body">
          <section className="d-flex gap-2">
            {/* <img
              style={{
                height: "56px",
                width: "56px",
              }}
              className="profile-pic rounded-circle"
              src={props.User.avatar_url}
              alt={props.User.login}
            /> */}

            <section className="vstack gap-0">
              <h6 className="card-title m-0">{props.User.name}</h6>
              <p className="text-muted m-0">{props.User.company}</p>
            </section>
          </section>

          <p>{props.User.bio}</p>

          <Link
            target="_blank"
            rel="noopener noreferrer"
            href={`https://github.com/${props.User.login}`}
          >
            <blockquote className="blockquote mb-0 mt-2">
              <footer className="blockquote-footer">
                Someone famous in{" "}
                <cite title="Source Title">{props.User.location}</cite>
              </footer>
            </blockquote>
          </Link>
        </section>
      </section>
    );
  };

  export default UserPage;
