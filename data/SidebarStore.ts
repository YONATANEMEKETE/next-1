import { create } from 'zustand';

type SidebarState = {
  isOpen: boolean;
  openSidebar: () => void;
  closeSidebar: () => void;
};

export const useSidebar = create<SidebarState>((set) => ({
  isOpen: false,
  openSidebar: () => set((state) => ({ isOpen: true })),
  closeSidebar: () => set((state) => ({ isOpen: false })),
}));
