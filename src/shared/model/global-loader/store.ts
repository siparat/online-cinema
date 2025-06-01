import { create, StateCreator } from 'zustand';

interface GlobalLoaderStoreState {
	isLoading: boolean;
}

interface GlobalLoaderStoreActions {
	startGlobalLoader: () => void;
	stopGlobalLoader: () => void;
}

const globalLoaderStoreInitialState: GlobalLoaderStoreState = {
	isLoading: false
};

const globalLoaderStore: StateCreator<GlobalLoaderStoreState & GlobalLoaderStoreActions, [], []> = (set) => ({
	...globalLoaderStoreInitialState,
	startGlobalLoader: (): void => {
		set({ isLoading: true });
		document.body.classList.add('scroll-block');
	},
	stopGlobalLoader: (): void => {
		set({ isLoading: false });
		document.body.classList.remove('scroll-block');
	}
});

export const useGlobalLoaderStore = create<GlobalLoaderStoreState & GlobalLoaderStoreActions>(globalLoaderStore);
