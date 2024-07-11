//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "princenjiprospper@gmail.com";
global.location = "Buea,Cameroon.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Dar es salaam";
global.github = process.env.GITHUB || "https://github.com/Toputech/Topu-ai";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaEW2eE3WHTU7fTQht19";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaEW2eE3WHTU7fTQht19";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/13f1bb945857eb9b1eca6.jpg";
global.devs = "237673805208";
global.sudo = process.env.SUDO || "237673805208";
global.owner = process.env.OWNER_NUMBER || "237673805208";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "true";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://rb.gy/nl69nj";

global.SESSION_ID = "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicUZsU0xTeDFXRkd4VzAwcW1pdlF6THFsb0hwMlZTUkc4aFh1UjRTM3kyRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0VvblI3K2IrT0JIb0lUVGNrN2xSNThUOU9CL1gyeU9Mc2RxZWxBWmMzVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0SUQ0UE1IV2FlZzdibEJtMjVsWGd2Y0Zqa1JKQ3M5ZHpxcUhUNFlUNjJjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ2dGMveTN5V25wa05tYSthSWNJQVVhMWJVK3BPVzdGRlQ3YmdhWHR2TnlNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdGM1l4TUQwYlBzSnpxdktGczhlWmxJbnFpTGdoOGl4ZVJwUStuM3hXM0U9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkxXRWVEOW5KNjVRZDJ1a1lwem1ZcGc1V2VzTXlLNTlEQlZla2ZYRGNWU1U9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTUN0a05paEpkREpYTlpVdk9RSVI4c1V6Q3MzMnVPSVVGN2JHRE10R0tHVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNWpmRGUvNlBHZFcrcmh1VXJIYTMvdHRYa1dTOVFVdlU2SjU2VkEyV3VSRT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlZHelBHOWNTejVKUlJYc1dXaTdXK3VMamk2Qk9BMHpScjhvRFlQVTBoakdmTjRVYlRoK3IyNDI3Tm1EWmFjWml1emZhZWEvaVR0dmtidmgycFc3emlRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTUsImFkdlNlY3JldEtleSI6IllDcE1NUHNta0VhVHJIVjNzS3hraDYvdE92b1RvUENvdkhwcFZOejJFVkk9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IldZZ1Zhd0NMUkk2N0lscklNRlRpY1EiLCJwaG9uZUlkIjoiYTNkM2FiNGYtNzdhOS00MTMzLThiYTMtOTdmZjY3NDFkOGNhIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjI2ck14Qi9BeEpaRDAxQXhqajROSndzajlvWT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJGL2xJUERyU3pHT2xoeXN1SzZNQ3FqK2dRZ289In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiRExGUFFQOTQiLCJtZSI6eyJpZCI6IjIzNzY3MzgwNTIwODo4NEBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJQcm90ZWNoIHJlbW92ZWQgeW91Li4uIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNJSGQxUE1IRUxudXRiUUdHQUlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiI5dGN0cDNWSDUxeXM1bXl4NFVLWjFoYVRtTTBxN1BueU5DR3drZEJWaDA0PSIsImFjY291bnRTaWduYXR1cmUiOiJma3pTTFpLMW1XRjkxMnFXOHdsTS9rY2RCNVRjZ2ZudldWMjh0Z1ovMW1PRmU3TEw5SzBWZ003SVllQkhBOHpIa1JOSVp3MUZ1VzZsT1pMQyt5VDFCdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiUzdTUnNZdjkyRUJ2UEpPZ1picUdDNVR4ZUtOSTBtM0RCNVM2MXZLNnd1MEJkOG81ZDdIeldvdUJaS0YxVm9UR1NnaWV2TUluN3FodlB6WHV2OUNzaHc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzc2NzM4MDUyMDg6ODRAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZmJYTGFkMVIrZGNyT1pzc2VGQ21kWVdrNWpOS3V6NThqUWhzSkhRVllkTyJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMDU0NzE0MywibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFBVWoifQ="
  process.env.SESSION_ID ||
  ""
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐝 𝐛𝐲 𝐏𝐫𝐨𝐓𝐞𝐜𝐡 𝐟𝐨𝐮𝐧𝐝𝐚𝐭𝐢𝐨𝐧",
  author: process.env.PACK_AUTHER || "PROTECH",
  packname: process.env.PACK_NAME || "🤝",
  botname: process.env.BOT_NAME || "TOP-Md",
  ownername: process.env.OWNER_NAME || "PROTECH",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "Us2pP4zzoiWjzaWQnoEkUq3Q",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "0385228b961473710eff4e7daed873e8",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "TOPU").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
