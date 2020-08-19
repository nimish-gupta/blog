---
template: post
title: Whois - know your slack mate.
slug: who-is-slack-bot
draft: true
date: 2020-08-15T11:14:03.697Z
description: A slack bot which helps in knowing your slack mate a litte more.
category:
  - Slack-Bot
  - Serverless
tags:
  - Serverless
  - Slack-bot
  - react
  - typescript
  - graphql
---
Hola friends hope you doing well during this pandemic.

So i am a part of a remote community and getting lot of knowledge from the company. I want to give back to the community. There is a #idea-bank channel where all the requirements which user finds missing in the community just put it out there. So i thought it will be a good idea to just pick something from that and build something out of it.

There is [this](https://remoteindian.nolt.io/7) one issue which I thought will be fun to build and i will get to learn about the slack bots and slack apps.

In the issue we have to build a bot which will show the details of the user. So suppose if we type `/whois @nimish` it will give you the info about the user. It solves the issue with slack free plan in which only your recent 10,000 messages are shown. 

To build this bot, one of the member of the community take the dump of the entire intro channel and store the data in the following format and store that into [hasura](https://hasura.io/).
```javascript
{
    data: [{
        text: "A brief introduction of the user",
        ts: "The timestamp at which user created the post",
        user_id: "The user id of the user"
    }]
}
```

Now i just have to query the hasura hosted database it will give me the details of the user. 

For this I created an application using [serverless](https://www.serverless.com) and [typescript](https://typescriptlang.org). Serverless framework will host my functions on the [aws-lambda](https://aws.amazon.com/lambda/). 