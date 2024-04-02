import { type ActionName } from "@/components/organisms/Profile/models/Luffy.model";
import { create } from "zustand";

type LuffyStore = {
  action: ActionName;
  setAction: (action: ActionName) => void;
};

export const useLuffy = create<LuffyStore>((set) => ({
  action: "standing",
  setAction: (action) => set({ action }),
}));
