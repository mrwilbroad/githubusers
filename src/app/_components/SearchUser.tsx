"use client";
import { Octokit } from "octokit";


export const octokitInstance = new Octokit({
  auth: process.env.GITHUB_AUTH_TOKEN!,
});

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

export type UserProps = Awaited<ReturnType<typeof FetchUsers>>;

