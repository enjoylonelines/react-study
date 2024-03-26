import { useParams } from "react-router-dom";

function Detail() {
  const params = useParams();

  return <div>{params.id}</div>;
}

export default Detail;
