import { Octokit } from "octokit";
import type { UsersProps } from "@/app/lib/Types/Users";


const octokitInstance = new Octokit({
  auth: "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",
});

export const FetchUsers = async () => {
  const res = await octokitInstance.request("GET /users/", {
    headers: {
      "X-Github-Api-Version": "2022-11-28",
      accept: "application/vnd.github+json",
    },
  });

  if (res.status === 200) {
    return res.data;
  } else {
    throw new Error("Something went wrong ..");
  }
};

export const GET = async (request: Request) => {
  try {
    const Users: UsersProps = await FetchUsers();
    return Response.json({ data: Users });
  } catch (error) {
    return Response.json({ data: error });
  }
};
