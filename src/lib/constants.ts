import axios from "axios";

export enum ENDPOINTS {
  // Messaging
  sendMessage = "/api/sms/send",
  sendBulkMessage = "/api/sms/send/bulk",

  // Insights
  getBalance = "/api/get-balance?",
  checkNumberStatus = "/api/insight/number/query?",
  searchNumber = "/api/check/dnd?",
  getMessageReports = "/api/sms/inbox?",

  // Sende ID
  fetchSenderIDs = "/api/sender-id?",
  requestSenderID = "/api/sender-id/request",

  // Campaign
  fetchPhoneBooks = "/api/phonebooks?",
  phoneBooksBase = "/api/phonebooks",
  fetchCampaigns = "/api/sms/campaigns?",

  // Token
  sendToken = "/api/sms/otp/send",
  voiceToken = "/api/sms/otp/send/voice",
  voiceCall = "/api/sms/otp/call",
  emailToken = "/api/email/otp/send",
  verifyToken = "/api/sms/otp/verify",
  inAppToken = "/api/sms/otp/generate",
}

export const axiosInstance = axios.create({
  validateStatus: () => true,
});
