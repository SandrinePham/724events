// src/hooks/useLastEvent.js
import { useData } from "../contexts/DataContext";

const useLastEvent = () => {
  const { data } = useData();

  if (!data?.events?.length) return null;

  return data.events[data.events.length - 1];
};

export default useLastEvent;
