import { useState, useEffect } from "react";
import { useGetInfoQuery } from "../redux/api/pokemonApi";

interface Type {
  type: {
    name: string;
  };
}

export const useFetchInfo = (id: number) => {
  const [detailInfo, setDetailInfo] = useState({
    weight: 0,
    height: 0,
    types: [],
  });

  const { data: info, error, isLoading } = useGetInfoQuery(id);
  // useEffect..
  useEffect(() => {
    if (info) {
      const { weight, height, types: tmpTypes } = info;
      const types = tmpTypes.map((type: Type) => type.type.name);

      setDetailInfo({ weight, height, types });
    }
  }, [info]);

  return { detailInfo, error, isLoading };
};
