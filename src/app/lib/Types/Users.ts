import { FetchUsers } from "@/app/api/users/route";

export type UsersProps = Awaited<ReturnType<typeof FetchUsers>>;