import { Link, useParams, Navigate } from "react-router-dom";

type RoomParams = {
  roomId: string;
};

export function Room() {
  const params = useParams<RoomParams>();

  if (!params.roomId) {
    return <Navigate replace to="/" />;
  }

  return (
    <div>
      <h1>Sala 1: {params.roomId}</h1>
      <Link to="/">Ir para sala</Link>
    </div>
  );
}
