export type Config = {
  baseUrl: string;
  apiKey: string;
};

export type MessageMedia = {
  url: string;
  caption: string;
};

type MessageBase = {
  from: string;
  sms?: string;
  type: string;
  channel: "generic" | "dnd" | "whatsapp";
};

export type Message = MessageBase & {
  to: string | string[];
  media?: Message;
};

export type BulkMessage = MessageBase & {
  to: string[];
};

export type SenderIDRequest = {
  sender_id: string;
  usecase: string;
  company: string;
};

export type PhoneBookCreateInput = {
  phonebook_name: string;
  description?: string;
};

export type ContactCreateInput = {
  phone_number: string;
  country_code: string;
  email_address: string;
  first_name: string;
  last_name?: string;
  company?: string;
};

type PinConfig = {
  pin_attempts: number;
  pin_time_to_live: number;
  pin_length: number;
};

export type SendTokenInput = PinConfig & {
  message_type: "NUMERIC" | "ALPHANUMERIC";
  to: string;
  from: string;
  channel: "whatsapp" | "dnd" | "generic";
  pin_placeholder: string;
  message_text: string;
};

export type VoiceTokenInput = PinConfig & {
  phone_number: string;
};

export type VoiceCallInput = {
  phone_number: string;
  code: string;
};

/**
 * @property {string} email_address - Represents the email address you are sending to.
 * @property {string} code - Represents the OTP sent to the email address.
 * @property {string} email_configuration_id - This represents the email configuration you have added on your Termii dashboard. It can be found on your {@link https://accounts.termii.com/#/email-otp-config Termii dashboard}.
 */
export type EmailTokenInput = {
  email_address: string;
  code: string;
  email_configuration_id: string;
};

export type InAppTokenInput = PinConfig & {
  pin_type: "NUMERIC" | "ALPHANUMERIC";
  phone_number: string;
};
