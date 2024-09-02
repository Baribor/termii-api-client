import { axiosInstance, ENDPOINTS } from "../lib/constants";
import { BulkMessage, Config, Message } from "../types";

/**
 * This API allows businesses send text messages to their customers across different messaging channels.
 */
export class Messaging {
  constructor(private readonly config: Config) {}

  /**
   * Send a custom message. {@link https://developer.termii.com/messaging-api Read Documentation.}
   *
   * @example
   * await client.Messaging.send({
   * 	to: "2347880234567",
   * 	from: "talert",
   * 	sms: "Hi there, testing Termii",
   * 	type: "plain",
   * 	channel: "generic",
   * });
   */
  async send(payload: Message) {
    const data = (
      await axiosInstance.post(this.config.baseUrl + ENDPOINTS.sendMessage, {
        api_key: this.config.apiKey,
        ...payload,
      })
    ).data;
    return data;
  }

  /**
   * Send a custom bulk messages. {@link https://developer.termii.com/messaging-api Read Documentation.}
   *
   * @example
   * await client.Messaging.sendBulk({
   * 	to: ["23490555546", "23423490126999","23490555546"],
   * 	from: "talert",
   * 	sms: "Hi there, testing Termii",
   * 	type: "plain",
   * 	channel: "generic",
   * });
   */
  async sendBulk(payload: BulkMessage) {
    const data = (
      await axiosInstance.post(
        this.config.baseUrl + ENDPOINTS.sendBulkMessage,
        {
          api_key: this.config.apiKey,
          ...payload,
        },
      )
    ).data;
    return data;
  }
}
