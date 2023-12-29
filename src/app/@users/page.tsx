"use client";
import React, { Suspense, useEffect, useState } from "react";
import { Octokit } from "octokit";
import UserPage from "../_components/UserPage";
import Loader from "../_components/Loader";
import { Spinner, Alert } from "react-bootstrap";
import {
  Formik,
  Field,
  ErrorMessage,
  Form,
  FormikValues,
  FormikHelpers,
} from "formik";
import * as Yup from "yup";


const octokitInstance = new Octokit({
  auth: process.env.GITHUB_AUTH_TOKEN!,
})
const FetchUsers = async (username: string) => {
  const res = await octokitInstance.request("GET /users/{username}", {
    username: username,
    headers: {
      accept: "application/vnd.github+json",
    },
  });
  if (res.status == 200) {
    return res.data;
  }
  throw new Error("something went wrong ...");
};


const SearchUser = () => {
  const [User, setUser] = useState<Awaited<
    ReturnType<typeof FetchUsers>
  > | null>(null);

  const Initialvalues = {
    username: "",
  };
  const validationscheme = Yup.object({
    username: Yup.string().required("Username is required!"),
  });


  const [show, setShow] = useState<{
    show: boolean;
    message: string;
  }>({
    show: false,
    message: "",
  });

  const HandleSearch = (
    values: FormikValues,
    otherprops: FormikHelpers<typeof Initialvalues>
  ) => {
    setShow({
      show: false,
      message: "",
    });

    FetchUsers(values.username)
      .then((res) => {
        setUser(res);
      })
      .catch(() => {
        setUser(null);
        setShow({
          show: true,
          message: `username ${values.username} not found!`,
        });
      })
      .finally(() => {
        otherprops.setSubmitting(false);
      });
  };

  useEffect(() => {}, [User]);

  return (
    <section className="vstack gap-3">
      <Formik
        validationSchema={validationscheme}
        onSubmit={HandleSearch}
        initialValues={Initialvalues}
      >
        {(formik) => {
          return (
            <Form className="vstack gap-1">
              <section className="input-group">
                <Field
                  type="search"
                  name="username"
                  placeholder="search by username"
                  className="form-control"
                />

                <button
                  disabled={formik.isSubmitting}
                  className="btn btn-success"
                  type="submit"
                >
                  {formik.isSubmitting ? "please wait ..." : "search"}
                  {formik.isSubmitting && (
                    <Spinner
                      className="mx-1"
                      animation="border"
                      variant="light"
                      role="status"
                      size="sm"
                    />
                  )}
                </button>
              </section>

              <section>
                <ErrorMessage
                  name="username"
                  component={"small"}
                  className="text-danger"
                />
              </section>
            </Form>
          );
        }}
      </Formik>

      <section>
        <Alert
          variant="danger"
          show={show.show}
          dismissible
          onClose={() =>
            setShow({
              ...show,
              show: false,
              message: "",
            })
          }
        >
          <p>{show.message}</p>
        </Alert>

        {User && (
          <Suspense fallback={<Loader />}>
            <UserPage User={User} />
          </Suspense>
        )}
      </section>
    </section>
  );
};

export default SearchUser;
