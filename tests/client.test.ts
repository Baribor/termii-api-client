import { TermiiClient } from '../src/client';
import { axiosInstance, ENDPOINTS } from '../src/lib/constants';
import { Config } from '../src/types';
import MockAdapter from 'axios-mock-adapter';

const mock = new MockAdapter(axiosInstance);

const config: Config = {
	baseUrl: 'https://api.termii.com',
	apiKey: 'mock-api-key',
};

describe('Termii API Client', () => {
	let client: TermiiClient;

	beforeEach(() => {
		client = new TermiiClient(config);
	});

	afterEach(() => {
		mock.reset();
	});

	it('should fetch balance', async () => {
		mock.onGet(`${config.baseUrl}${ENDPOINTS.getBalance}${new URLSearchParams({
			api_key: config.apiKey!,
		})}`).reply(200, { balance: 100 });

		const response = await client.getBalance();
		expect(response.balance).toBe(100);
	});

	it('should send a message', async () => {
		mock.onPost(`${config.baseUrl}${ENDPOINTS.sendMessage}`).reply(200, { success: true });

		const response = await client.Messaging.send({
			to: '2347880234567',
			from: 'TestSenderID',
			sms: 'Hello World',
			type: 'plain',
			channel: 'generic',
		});
		expect(response.success).toBe(true);
	});

	// Add more tests for other methods
});
