---
template: post
title: Shell Magic Link Authentication
slug: shell-password-less-authentication
draft: false
date: 2020-04-05T13:05:19.103Z
description: >-
  This blog is a tutorial which will help in creating the password less
  authentication using shell/bash.
category:
  - Tools
tags:
  - Authentication
  - Shell
---
This IT industry is changing so rapidly that more and more companies want to make the user experience seamless. Companies are tweaking all the traditional ways of doing the thing and trying to come up with a new way. 

One such functionality is authentication I think most of the companies are using to get the user into their world. Companies are adding new ways of authentication so frequently to make it easier for the user to use and for developer easy to create. Now they have stripped down to magic link authentication (used by [Slack](https://slack.com)) in which just have to enter the email address and you will be authenticated by clicking the "magic link" sent to your email. Now the user doesn't have to remember the email address and for developer, they don't have to validate the email address. 

There is a new way of authentication, I found while logging though [now](https://zeit.co/now) cli. Below is the gif for that

![Zeit Demo](/media/zeit.gif)

It's too good that you don't have to remember the password.

So the below tutorial is about implementing the above functionality.

## Get started

To setup Shell Magic Link Authentication, we have to set up two services, one API to handle all the authentication endpoints and the cli part for making all the requests. 

### Pre- requisite

This tutorial makes use of the following language/framework/services:-

* [Node](https://nodejs.org/en/)
* [Sendgrid](https://sendgrid.com/)
* [JSON web token](https://www.npmjs.com/package/jsonwebtoken)

### API side

We have to create three routes which are defined below : 

1. `\login` -> POST route for receiving the request with email as body param. This route is used for creating token and sending mail to the user.

   ```javascript
   router.post('/login', function (req, res) {
   	const email = req.body.email;
   	const id = users[email] ? users[email].id : uuid();
   	// token expires in 10 min
   	const token = jwt.sign({ email, id }, JWT_TOKEN, {
   		expiresIn: 60 * 1000 * 10,
   	});

       await sendMail({ email, body:`
         Here is the link to authenticate. Please click the below link
         for authenticating.
         ${token}
       ` })

   	users[email] = { id };

   	res.json({ token });
   });
   ```
2. `\login\verify\mail` -> GET route used for verifying the token using the email. This route will be called when we click on the link sent in the email. This function will verify that the email has the valid token and if yes then change the user's verified property to true.

   ```javascript
   router.get('/login/verify/mail', (req, res) => {
   	const user = userFromToken({ token: req.query.token });

   	if (user) {
   		user.verified = true;
   		res.json({ success: true });
   	} else {
   		res.json({ success: false });
   	}
   });
   ```


3. `\login\verify\cli` -> POST route for indicating whether the token is verified or not. Cli used to poll this route every second to know whether the token is verified or not.

   ```javascript
   router.post('/verify/cli', (req, res) => {
   	const user = userFromToken({ token: req.body.token });

   	if (user && user.verified) {
   		res.json({ success: true });
   	} else {
   		res.json({ success: false });
   	}
   });
   ```

   > Note: In all the code base, error handling is not done. Please add appropriate error handling for all the routes and the edge cases :)

### CLI side

For this part first, we have to create a cli app using node. For this, you can take help of [this](https://developer.okta.com/blog/2019/06/18/command-line-app-with-nodejs) tutorial. Listed tutorial created a bare minimum app which is good for bootstrapping.

The main function which I export for my cli script to run is below.

```javascript
export async function cli() {
	const email = await promptEmail({ start: `Enter your email: ` });
	console.log();
	const spinner = ora().start();
	console.log(
		chalk.yellow(`Sending you an email for verification for ${email}...`)
	);

	const { token } = await fetch({ route: 'login', params: { email }});

	spinner.stop();

	let verified;
	spinner.start(chalk.yellow('Waiting for email verification...'));

	while (!verified) {
		console.log();
		await sleep({ sec: 2 });
		const { success } = await fetch({ route: 'login/verify/cli', params: { token }});
		verified = success;
	}

	spinner.stop();
	console.log(`${chalk.green('You are successfully login')}`);
	console.log();
}
```

The above function does the following things:-
- Get an email from the user using [this](https://www.npmjs.com/package/email-prompt) package.
- Create a fetch request for getting the token from the server. This token is created against the email address which we have gotten from the user.
- We started polling the server after every 2 sec to check whether the user has verified token from the email by clicking on the link provided.
- After we receive that user has successfully verified, we exit the code by returning `You are successfully login`.

Above code first gets the email from the user using [this](https://www.npmjs.com/package/email-prompt) package. After getting email, just 

## Working Demo

![Demo Working Image](/media/demo.gif "working-demo")

All code for the above tutorial is present [here](https://github.com/nimish-gupta/shell-passwordless-login/tree/master). 

> Above code is the very basic template for implementing the shell password less authentication. You can add tons of feature in this like storing users in DB, instead of global array, error handling, multiple cli login, more complex logic for verification, store the authentication token on the client-side for persistence authentication and much more. 

Happy Coding :)