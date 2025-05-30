import { BadgeColor } from '@/shared';

const limitBadgeColorValues = [
	{ min: 8, max: 10, color: BadgeColor.RED },
	{ min: 6, max: 8, color: BadgeColor.GREEN },
	{ min: 0, max: 6, color: BadgeColor.BLUE }
];

export const getBadgeColorByRating = (rating: number): BadgeColor => {
	rating = Math.max(0, Math.min(10, rating));
	return limitBadgeColorValues.find((config) => config.max >= rating && config.min <= rating)?.color || BadgeColor.GREEN;
};
