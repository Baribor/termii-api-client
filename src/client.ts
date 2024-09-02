import { Campaign } from "./campaign";
import { axiosInstance, ENDPOINTS } from "./lib/constants";
import { Messaging } from "./messaging";
import { PhoneBooks } from "./phonebooks";
import { SenderID } from "./senderID";
import { Token } from "./token";
import { Config } from "./types";

export class TermiiClient {
  readonly Messaging: Messaging;
  readonly SenderID: SenderID;
  readonly PhoneBooks: PhoneBooks;
  readonly Token: Token;
  readonly Campaign: Campaign;

  constructor(private readonly config: Config) {
    this.Messaging = new Messaging(config);
    this.SenderID = new SenderID(config);
    this.PhoneBooks = new PhoneBooks(config);
    this.Token = new Token(config);
    this.Campaign = new Campaign(config);
  }

  /**
   * The Balance API returns your total balance and balance information from your wallet, such as currency. {@link https://developer.termii.com/balance Read Documentation.}
   *
   * @example
   * await client.getBalance();
   */
  async getBalance() {
    const data = (
      await axiosInstance.get(
        this.config.baseUrl +
          ENDPOINTS.getBalance +
          new URLSearchParams({
            api_key: this.config.apiKey!,
          }),
      )
    ).data;
    return data;
  }

  /**
   * The status API allows businesses to detect if a number is fake or has ported to a new network. {@link https://developer.termii.com/status Read Documentation.}
   * @param {string} phoneNumber - Represents the phone number to be verified. Phone number must be in the international format
   * @param {string} countryCode - Represents short alphabetic codes developed to represent countries.
   *
   * @example
   * await client.checkNumberStatus("2348753243651", "NG");
   */
  async checkNumberStatus(phoneNumber: string, countryCode: string) {
    const data = (
      await axiosInstance.get(
        this.config.baseUrl +
          ENDPOINTS.checkNumberStatus +
          new URLSearchParams({
            api_key: this.config.apiKey!,
            phone_number: phoneNumber,
            country_code: countryCode,
          }),
      )
    ).data;
    return data;
  }

  /**
   * The search API allows businesses verify phone numbers and automatically detect their status as well as current network. It also tells if the number has activated the do-not-disturb settings.
   * @param {string} phoneNumber - Represents the phone number to be verified. Phone number must be in the international format. {@link https://developer.termii.com/search Read Documentation.}
   *
   * @example
   * await client.searchNumber("2348753243651");
   */
  async searchNumber(phoneNumber: string) {
    const data = (
      await axiosInstance.get(
        this.config.baseUrl +
          ENDPOINTS.searchNumber +
          new URLSearchParams({
            api_key: this.config.apiKey!,
            phone_number: phoneNumber,
          }),
      )
    ).data;
    return data;
  }

  /**
   * This Inbox API returns reports for messages sent across the sms, voice & whatsapp channels. Reports can either display all messages on termii or a single message. Optionally accepts a `message_id` to query the report of a single message. {@link https://developer.termii.com/history Read Documentation.}
   *
   * @example
   * // All messages
   * await client.messageReports();
   *
   * // Single message
   * await client.messageReports("04c3ebcc-3a7e-485a-88c1-68e731386f77");
   *
   */
  async messageReports(message_id?: string) {
    const data = (
      await axiosInstance.get(
        this.config.baseUrl +
          ENDPOINTS.getMessageReports +
          new URLSearchParams({
            api_key: this.config.apiKey!,
            ...(message_id ? { message_id } : {}),
          }),
      )
    ).data;
    return data;
  }
}
