import { axiosInstance, ENDPOINTS } from "../lib/constants";
import { Config } from "../types";

export class Campaign {
  constructor(private readonly config: Config) {}

  /**
   * Returns available campaigns on the integration.
   * @returns
   */
  async fetch() {
    const data = (
      await axiosInstance.get(
        this.config.baseUrl +
          ENDPOINTS.fetchCampaigns +
          new URLSearchParams({
            api_key: this.config.apiKey!,
          }),
      )
    ).data;
    return data;
  }
}
