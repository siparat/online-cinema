import { NavItem } from '@/shared';
import MainIcon from '@/shared/assets/icons/sidebar-menu/main.svg?react';
import SearchIcon from '@/shared/assets/icons/sidebar-menu/search.svg?react';
import RecommendationsIcon from '@/shared/assets/icons/sidebar-menu/recommendations.svg?react';
import CatalogIcon from '@/shared/assets/icons/sidebar-menu/catalog.svg?react';
import CollectionsIcon from '@/shared/assets/icons/sidebar-menu/collections.svg?react';
import FilmsIcon from '@/shared/assets/icons/sidebar-menu/films.svg?react';
import CartoosIcon from '@/shared/assets/icons/sidebar-menu/cartoons.svg?react';
import TvIcon from '@/shared/assets/icons/sidebar-menu/series.svg?react';
import HistoryIcon from '@/shared/assets/icons/sidebar-menu/history.svg?react';
import FavouritesIcon from '@/shared/assets/icons/sidebar-menu/favourites.svg?react';
import ProfileIcon from '@/shared/assets/icons/sidebar-menu/profile.svg?react';
import { Routes } from '@/shared';

export const sidebarMenu: NavItem[][] = [
	[
		{
			path: Routes.MAIN,
			label: 'Смотреть',
			Icon: MainIcon
		},
		{
			path: Routes.SEARCH,
			label: 'Поиск',
			Icon: SearchIcon
		},
		{
			path: Routes.RECOMMENDATIONS,
			label: 'Рекомендации',
			Icon: RecommendationsIcon
		},
		{
			path: Routes.CATALOG,
			label: 'Каталог',
			Icon: CatalogIcon
		},
		{
			path: Routes.COLLECTIONS,
			label: 'Подборки',
			Icon: CollectionsIcon
		}
	],
	[
		{
			path: Routes.FILMS,
			label: 'Фильмы',
			Icon: FilmsIcon
		},
		{
			path: Routes.CARTOONS,
			label: 'Мультфильмы',
			Icon: CartoosIcon
		},
		{
			path: Routes.TV,
			label: 'Сериалы',
			Icon: TvIcon
		}
	],
	[
		{
			path: Routes.HISTORY,
			label: 'История',
			Icon: HistoryIcon
		},
		{
			path: Routes.FAVOURITES,
			label: 'Избранное',
			Icon: FavouritesIcon
		},
		{
			path: Routes.PROFILE,
			label: 'Профиль',
			Icon: ProfileIcon
		}
	]
];
