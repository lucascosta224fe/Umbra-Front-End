import { create } from "zustand";

type State = {
  query: string;
}

type Action = {
  updateQuery: (query: State['query']) => void;
}

export const useDrillDownStore = create<State & Action>((set) => ({
  query: "",
  updateQuery: (query) => set(() => ({query: query}))
}))