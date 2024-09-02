import { axiosInstance, ENDPOINTS } from "../lib/constants";
import { Config, ContactCreateInput, PhoneBookCreateInput } from "../types";

export class PhoneBooks {
  constructor(private readonly config: Config) {}

  /**
   * Fetches the phonebooks available on the integration. {@link https://developer.termii.com/phonebook#fetch-phonebooks Read Documentation.}
   *
   * @example
   * await client.PhoneBooks.fetch();
   */
  async fetch() {
    const data = (
      await axiosInstance.get(
        this.config.baseUrl +
          ENDPOINTS.fetchPhoneBooks +
          new URLSearchParams({
            api_key: this.config.apiKey!,
          }),
      )
    ).data;
    return data;
  }

  /**
   * Creates a phonebook. {@link https://developer.termii.com/phonebook#create--a-phonebook Read Documentation.}
   * @example
   * await client.PhoneBooks.create({
   * 	phonebook_name:"Phone test",
   * 	description:"Phonebook for test"
   * });
   */
  async create(payload: PhoneBookCreateInput) {
    const data = (
      await axiosInstance.post(this.config.baseUrl + ENDPOINTS.phoneBooksBase, {
        api_key: this.config.apiKey,
        ...payload,
      })
    ).data;
    return data;
  }

  /**
   * Fetches contacts in a phonebook. {@link https://developer.termii.com/contacts#fetch-contacts-by-phonebook-id Read Documentation.}
   * @param {string} phoneBookID - The ID of the phonebook.
   *
   * @example
   * await client.PhoneBooks.contacts("04c3ebcc-3a7e-485a-88c1-68e731386f77");
   */
  async contacts(phoneBookID: string) {
    const data = (
      await axiosInstance.get(
        this.config.baseUrl +
          ENDPOINTS.phoneBooksBase +
          `/${phoneBookID}/contacts?` +
          new URLSearchParams({
            api_key: this.config.apiKey!,
          }),
      )
    ).data;
    return data;
  }

  /**
   *
   * @param {string} phoneBookID - The ID of the phonebook.
   * @param {ContactCreateInput} payload - data of the contact to be added.
   * @returns
   */
  async addContact(phoneBookID: string, payload: ContactCreateInput) {
    const data = (
      await axiosInstance.post(
        this.config.baseUrl +
          ENDPOINTS.phoneBooksBase +
          `/${phoneBookID}/contacts?`,
        {
          api_key: this.config.apiKey,
          ...payload,
        },
      )
    ).data;
    return data;
  }
}
