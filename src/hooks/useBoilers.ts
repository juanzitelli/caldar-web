import useSWR from "swr";
import { fetcher } from "../utilities/fetcher";

export const useBoilers = () => {
  const { data, error } = useSWR("/api/boilers", fetcher);

  return { boilers: data?.boilers, error };
};
