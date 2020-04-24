# RingCentral TypeScript SDK

This SDK is modelled after the [RingCentral.NET](https://github.com/ringcentral/ringcentral.net) SDK which is the most popular RingCentral SDK for static compiled languages.


## Installation

```
yarn add ringcentral-typescript
```


## Sample code

#### [Sample code for all the endpoints](./samples.md)

You can also find lots of useful code snippets from the [test cases](./test).

Since this library is model after the [RingCentral.NET](https://github.com/ringcentral/ringcentral.net) SDK, you can also reference the samples in C#. It should be straightforward to translate C# code into TypeScript or JavaScript since this two SDKs are very similar.


## Binary content downloading

Some [sample code](./samples.md) for binary content downloading may not work.

Because RingCentral is gradually migrating binary content to CDN such as `media.ringcentral.com`.

For example, to download the attachment of a fax:

```ts
// `message` is the fax message object
const content = await rc.get(message.attachments[0].uri, undefined, { responseType: 'arraybuffer' })
```

The following does **NOT** work:

```ts
// `message` is the fax message object
const content = await rc.restapi().account().extension().messageStore(message.id).content(message.attachments[0].id).get()
```

### Rule of thumb

But not all binary content has been migrated to CDN.
If the resource to download provides you with a CDN uri, use that CDN uri.
If there is no CDN uri provided, contruct the uri as the [sample code](./samples.md) shows.


## For maintainers

### Regenerate code using latest swagger spec

Get the latest swagger spec [here](https://github.com/ringcentral/RingCentral.Net/blob/master/code-generator/rc-platform-adjusted.yml) and run:

```
yarn generate
```


### Compile

```
yarn tsc
```


### Test

```
yarn test
```


### Todo

- sdk version in user agent. adjust project structure before publishing
- Generate API reference
    - go to dotnet SDK
- check other tsconfig options as well
- Travis
- Replace axios with @ringcentral/sdk ?
- Make it an RingCentral official project
- PubNub
    - if use @ringcentral/sdk, then no need to implement
- Support events
    - if use @ringcentral/sdk, then no need to implement
