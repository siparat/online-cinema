import ky from 'ky';

export const baseApiClient = ky.create({
	timeout: 60000,
	throwHttpErrors: false
});
