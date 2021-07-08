const nodemailer = require('nodemailer');
const dotenv = require('dotenv').config()
const fs = require('fs');


async function main(filepath) {
	let transporter = nodemailer.createTransport({
		service: 'gmail',
		auth: {
			user: process.env.username,
			pass: process.env.password,
		},
	});
	fs.readFile(filepath, 'utf8', async function (err,data) {
		if (err) {
		  return console.log(err);
		}
		try {
			let info = await transporter.sendMail({
				sender: 'fresh.dairycakes@gmail.com',
				to: 'vinayak.delta@gmail.com',
				subject: 'Hello ✔',
				// html: '<h1>UwU Senpai</h1>',
				html: data,
			}, function(){console.log(data)});
			console.log('Message sent: %s', info.messageId);
			console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
		} catch (err) {
			console.log(err);
		}
	  });
	
}

// module.exports = main;
main('tempelate.html')
