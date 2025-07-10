import { useQuery } from "@tanstack/react-query";
import type { GetRoomQuestionsResponse } from "./types/get-room-questions-response";

export function useRoomQuestions(roomsId: string) {
  return useQuery({
    queryKey: ["get-questions", roomsId],
    queryFn: async () => {
      const response = await fetch(
        `http://localhost:3333/rooms/${roomsId}/questions`
      );
      const result: GetRoomQuestionsResponse = await response.json();

      return result;
    },
  });
}
