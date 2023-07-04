import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useGetStarships = (url: string) => {
  return useQuery({
    queryKey: ["starships", url],
    queryFn: () => axios.get(url).then((res) => res.data),
  });
};
