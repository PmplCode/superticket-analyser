import { create } from "zustand";

interface TicketState {
  ticketImage: string | null;
  extractedData: string | null;
  advice: string | null;
  setTicketImage: (image: string) => void;
  setExtractedData: (data: string) => void;
  setAdvice: (advice: string) => void;
}

export const useStore = create<TicketState>((set) => ({
  ticketImage: null,
  extractedData: null,
  advice: null,
  setTicketImage: (image) => set({ ticketImage: image }),
  setExtractedData: (data) => set({ extractedData: data }),
  setAdvice: (advice) => set({ advice: advice }),
}));
