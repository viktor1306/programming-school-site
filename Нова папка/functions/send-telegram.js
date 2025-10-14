// netlify/functions/send-telegram.js
exports.handler = async (event) => {
  const { name, phone, course } = JSON.parse(event.body);
  const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
  const CHAT_ID = process.env.TELEGRAM_CHAT_ID;

  if (!BOT_TOKEN || !CHAT_ID) {
    return { statusCode: 500, body: 'Змінні середовища не налаштовані!' };
  }

  const message = [
    `🔔 *Нова заявка на пробний урок!* 🔔`,
    `--------------------------------------`,
    `*Ім'я:* ${name}`,
    `*Телефон:* ${phone}`,
    `*Курс:* ${course}`,
    `--------------------------------------`
  ].join('\n');

  const url = `https://api.telegram.org/bot${8339018446:AAGtN9Eu2jTY3UFf7-GGiunD-n7LEc2c2tI}/sendMessage`;

  try {
    await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: message,
        parse_mode: 'Markdown'
      })
    });

    return { statusCode: 200, body: JSON.stringify({ message: "Success" }) };
  } catch (error) {
    return { statusCode: 500, body: error.toString() };
  }
};