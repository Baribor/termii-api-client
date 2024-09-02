# Termii API Client

This is a TypeScript/JavaScript client library for interacting with the Termii API. It provides various methods for sending messages, managing tokens, handling sender IDs, and working with phonebooks and campaigns.

## Installation

You can install this package using npm:

```bash
npm install termii-client
```

Or with yarn:

```bash
yarn add termii-client
```

## Usage

### Importing and Initializing the Client

```typescript
import TermiiClient from 'termii-client';

const client = new TermiiClient({
  baseUrl: 'https://api.termii.com',
  apiKey: 'your-api-key',
});

```

### Messaging

#### Send a Message

```typescript
await client.Messaging.send({
  to: "2347880234567",
  from: "YourSenderID",
  sms: "Hi there, testing Termii",
  type: "plain",
  channel: "generic",
});
```

#### Send Bulk Messages

```typescript
await client.Messaging.sendBulk({
  to: ["23490555546", "23423490126999", "23490555546"],
  from: "YourSenderID",
  sms: "Hi there, testing Termii",
  type: "plain",
  channel: "generic",
});
```

### Token Management

#### Send a Token

```typescript
await client.Token.send({
  message_type: "NUMERIC",
  to: "2348109077743",
  from: "YourSenderID",
  channel: "dnd",
  pin_attempts: 10,
  pin_time_to_live: 5,
  pin_length: 6,
  pin_placeholder: "< 1234 >",
  message_text: "Your pin is < 1234 >",
  pin_type: "NUMERIC"
});
```

#### Verify a Token

```typescript
await client.Token.verify("pin_id", "195558");
```

### Sender ID Management

#### Fetch Available Sender IDs

```typescript
await client.SenderID.fetch();
```

#### Request a New Sender ID

```typescript
await client.SenderID.request({
  sender_id: "Acme",
  usecase: "Your OTP code is zxsds",
  company: "Acme Corp"
});
```

### Phonebook Management

#### Fetch Phonebooks

```typescript
await client.PhoneBooks.fetch();
```

#### Create a Phonebook

```typescript
await client.PhoneBooks.create({
  phonebook_name: "Phonebook Test",
  description: "Phonebook for testing"
});
```

#### Fetch Contacts from a Phonebook

```typescript
await client.PhoneBooks.contacts("04c3ebcc-3a7e-485a-88c1-68e731386f77");
```

#### Add a Contact to a Phonebook

```typescript
await client.PhoneBooks.addContact("04c3ebcc-3a7e-485a-88c1-68e731386f77", {
  phone_number: "2348109477743",
  country_code: "NG",
  email_address: "test@example.com",
  first_name: "John",
  last_name: "Doe"
});
```

### Campaign Management

#### Fetch Campaigns

```typescript
await client.Campaign.fetch();
```

### Insights

#### Getting Account Balance

```typescript
await client.getBalance();
```

#### Check Number Status

```typescript
await client.checkNumberStatus("2348753243651", "NG");
```

#### Search for a Number

```typescript
await client.searchNumber("2348753243651");
```

#### Get message reports

```typescript
await client.messageReports();
```

## Types

This library also exports various TypeScript types to help with type checking in your projects:

- `Config`
- `Message`
- `BulkMessage`
- `SenderIDRequest`
- `PhoneBookCreateInput`
- `ContactCreateInput`
- `SendTokenInput`
- `VoiceTokenInput`
- `VoiceCallInput`
- `EmailTokenInput`
- `InAppTokenInput`
