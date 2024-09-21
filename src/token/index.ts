import { axiosInstance, ENDPOINTS } from "../lib/constants";
import {
  Config,
  EmailTokenInput,
  InAppTokenInput,
  SendTokenInput,
  VoiceCallInput,
  VoiceTokenInput,
} from "../types";

/**
 * Contains various methods for managing tokens.
 */
export class Token {
  constructor(private readonly config: Config) {}

  /**
   * The send token API allows businesses trigger one-time-passwords (OTP) across any available messaging channel on Termii. One-time-passwords created are generated randomly and there's an option to set an expiry time. {@link https://developer.termii.com/send-token Read Documentation.}
   * @example
   * await client.Token.send({
   * 	message_type : "NUMERIC",
   * 	to : "eg. 2348109077743",
   * 	from : "Approved Sender ID or Configuration  ID",
   * 	channel : "dnd",
   * 	pin_attempts : 10,
   * 	pin_time_to_live :  5,
   * 	pin_length : 6,
   * 	pin_placeholder : "< 1234 >",
   * 	message_text : "Your pin is < 1234 >",
   * 	pin_type : "NUMERIC"
   * });
   */
  async send(payload: SendTokenInput) {
    const data = (
      await axiosInstance.post(this.config.baseUrl + ENDPOINTS.sendToken, {
        api_key: this.config.apiKey,
        ...payload,
      })
    ).data;
    return data;
  }

  /**
   * The voice token API enables you to generate and trigger one-time passwords (OTP) through the voice channel to a phone number. OTPs are generated and sent to the phone number and can only be verified using our Verify Token API. {@link https://developer.termii.com/voice-token Read Documentation.}
   *
   * @example
   * await client.Token.voice({
   * 	phone_number : "23409800000000",
   * 	pin_attempts : 10,
   * 	pin_time_to_live :  5,
   * 	pin_length : 6
   * });
   */
  async voice(payload: VoiceTokenInput) {
    const data = (
      await axiosInstance.post(this.config.baseUrl + ENDPOINTS.voiceToken, {
        api_key: this.config.apiKey,
        ...payload,
      })
    ).data;
    return data;
  }

  /**
   * The voice call API enables you to send messages from your application through our voice channel to a phone number. Only one-time-passwords (OTP) are allowed for now and these OTPs can not be verified using our Verify Token API. {@link https://developer.termii.com/voice-call Read Documentation.}
   *
   * @example
   * await client.Token.voiceCall({
   * 	phone_number : "2349800000000",
   * 	code : 55675,
   * });
   *
   */
  async voiceCall(payload: VoiceCallInput) {
    const data = (
      await axiosInstance.post(this.config.baseUrl + ENDPOINTS.voiceCall, {
        api_key: this.config.apiKey,
        ...payload,
      })
    ).data;
    return data;
  }

  /**
   * The email token API enables you to send one-time-passwords from your application through our email channel to an email address. Only one-time-passwords (OTP) are allowed for now and these OTPs can not be verified using our Verify Token API. {@link https://developer.termii.com/email-token Read Documentation.}
   *
   * @example
   * await client.Token.email({
   * 	email_address: "shola.olu@term.ii",
   * 	code: "092471",
   * 	email_configuration_id: "0a53c416-uocj-95af-ab3c306aellc"
   * });
   *
   */
  async email(payload: EmailTokenInput) {
    const data = (
      await axiosInstance.post(this.config.baseUrl + ENDPOINTS.emailToken, {
        api_key: this.config.apiKey,
        ...payload,
      })
    ).data;
    return data;
  }

  /**
   *
   * This API returns OTP codes in JSON format which can be used within any web or mobile app. Tokens are numeric or alpha-numeric codes generated to authenticate login requests and verify customer transactions. {@link https://developer.termii.com/in-app-token Read Documentation.}
   *
   * @example
   * await client.Token.inApp({
   * 	pin_type: "NUMERIC",
   * 	phone_number: "2348109477743",
   * 	pin_attempts: 3,
   * 	pin_time_to_live: 0,
   * 	pin_length: 4
   * });
   */
  async inApp(payload: InAppTokenInput) {
    const data = (
      await axiosInstance.post(this.config.baseUrl + ENDPOINTS.inAppToken, {
        api_key: this.config.apiKey,
        ...payload,
      })
    ).data;
    return data;
  }

  /**
   * Verify token API, checks tokens sent to customers and returns a response confirming the status of the token. A token can either be confirmed as verified or expired based on the timer set for the token. {@link https://developer.termii.com/verify-token Read Documentation.}
   *
   * @param {string} pin_id ID of the PIN sent
   * @param {string} pin The PIN code
   *
   * @example
   * await client.Token.verify("c8dcd048-5e7f-4347-8c89-4470c3af0b", "195558");
   */
  async verify(pin_id: string, pin: string) {
    const data = (
      await axiosInstance.post(this.config.baseUrl + ENDPOINTS.verifyToken, {
        api_key: this.config.apiKey,
        pin_id,
        pin,
      })
    ).data;
    return data;
  }
}
