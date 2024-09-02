// eslint-disable-next-line no-undef
module.exports = {
	preset: 'ts-jest',
	testEnvironment: 'node',
	testMatch: ['**/tests/**/*.test.ts'],
	moduleFileExtensions: ['ts', 'js', 'json'],
	transform: {
		'^.+\\.ts$': 'ts-jest',
	},
};
