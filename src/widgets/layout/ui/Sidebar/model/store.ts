import { LocalStorageKeys } from '@/shared';
import { create, StateCreator } from 'zustand';
import { persist } from 'zustand/middleware';

interface SidebarStore {
	collapsed: boolean;
	toggle: () => void;
}

const sidebarStore: StateCreator<SidebarStore, [], [['zustand/persist', never]]> = persist(
	(set) => ({
		collapsed: false,
		toggle: () => set((state) => ({ collapsed: !state.collapsed }))
	}),
	{
		name: LocalStorageKeys.SIDEBAR
	}
);

export const useSidebarStore = create(sidebarStore);
