import { axiosInstance, ENDPOINTS } from "../lib/constants";
import { Config, SenderIDRequest } from "../types";

export class SenderID {
  constructor(private readonly config: Config) {}

  /**
   * Fetches the sender IDs available on an integration. {@link https://developer.termii.com/sender-id#fetch-sender-id Read Documentation.}
   *
   * @example
   * await client.SenderID.fetch();
   *
   */
  async fetch() {
    const data = (
      await axiosInstance.get(
        this.config.baseUrl +
          ENDPOINTS.fetchSenderIDs +
          new URLSearchParams({
            api_key: this.config.apiKey!,
          }),
      )
    ).data;
    return data;
  }

  /**
   * Request for a sender ID. {@link https://developer.termii.com/sender-id#request-sender-id Read Documentation.}
   *
   * @example
   * await client.SenderID.request({
   * 	sender_id: "Acme",
   * 	usecase: "Your OTP code is zxsds",
   * 	company: "Acme Corp"
   * });
   *
   */
  async request(payload: SenderIDRequest) {
    const data = (
      await axiosInstance.post(
        this.config.baseUrl + ENDPOINTS.requestSenderID,
        {
          api_key: this.config.apiKey,
          ...payload,
        },
      )
    ).data;
    return data;
  }
}
