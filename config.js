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

global.SESSION_ID = "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0tNWk1WckIvVkF4SG5jdjQ0MG50bnEwNDYvQ2tiL0U5bWZZamVzcTgyQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieGZ0c3JkYWU1b2hPbVptNlV4VkFiYUhZdDlaSm9sQW1XaDQ4engvR3lRWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5SHdtWmE2MTFudUFaMW9qYkRKaGQwbXJaYy9jT3YxTWtZaEhHTm5FaEg0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJOQXlhOVNZMVlOczVjOVNaK0ZrSmY1TkVPcCtHSDlDZEljd0llK1hqVEJzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFMR05IL0lwSGhidjVSZnlmSGRtemJQMDBxVGJodkNRQS93YlBCVVBZR009In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1CTVlmeHFKN3l0S0pDY2srMjgwaUFzVHhkOTVkY29TYUs5YlArTGtEaE09In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNENkTFFxZnllaUphUjZlZzVIVHdoNU5jcnRudUs0cDcwTURONElmNklGOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibVAyZ0oyZXJzR0M1SVZSQnFUcVB0ZXFwUEJ1S3E0Z0VtdGtweEswNDFYOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InBkdWpPVEtMM3VBZU9jaGUya205TWtVNGsyT3h3bmVPYlJRZm9Hc0hSZVEzOVBubXAzMWFRc21HdVFKYVA5SFd5RGVWVTg4Y2l5T05sSEswUHFldWh3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTQ2LCJhZHZTZWNyZXRLZXkiOiJ6S3BkK1N5WUNENXZiVEMyVkQwRmozekJINGl2YmRueE9qbEdRY1BSYUVrPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJFMU42YTJmYVNqYTM0eFhHNU1NRzNnIiwicGhvbmVJZCI6IjFhNTMyNGQ2LWZhYzgtNGUwYS1hYWE2LWQ0ZGZjZTdiZmEyMyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjczVCTi9BREZ2SzhoQmV1di9OTE44SXQ4RWc9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia3hTU0pxeWh5MUhDMW9FVVY3Ui9ySkdTUzdRPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkhXVldBU1NHIiwibWUiOnsiaWQiOiIyMzc2NzM4MDUyMDg6ODVAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiUHJvdGVjaC1lbHMifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ012RWdyWUJFTkRZN2JRR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Ikh3Y2h3MHVzbVNHQW9ZU051N3kvd0lRdGR6RWNycGhnNFBPZ2RMREhWZ0k9IiwiYWNjb3VudFNpZ25hdHVyZSI6IjBQeVlBNmxydHJBYUkwWG8yRUVUeU1uR05EVXM5Zzllb2Fxblh0MTNmb24zSERtQU41OXBaejZiL1c0SkNxamN6YVZXRnY3dzBxbWl5RTFiczl2WURRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJodGZFSW1YVkNWTWFoZEFJajQ3RHF5MXI1Q2ltcWc0cXpWaTdRN1RLM3BLa2pXRFk1WEd1UVI0MEFRVkVhQlpzODlhSzk4ejUzakt1OU1XUyt3RHFnUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNzY3MzgwNTIwODo4NUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJSOEhJY05MckpraGdLR0VqYnU4djhDRUxYY3hISzZZWU9Eem9IU3d4MVlDIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIxNDYxODUzLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUZwNyJ9"
  process.env.SESSION_ID ||
  ""
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".,!,#,/",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐝 𝐛𝐲 𝐏𝐫𝐨𝐓𝐞𝐜𝐡 𝐟𝐨𝐮𝐧𝐝𝐚𝐭𝐢𝐨𝐧",
  author: process.env.PACK_AUTHER || "PROTECH",
  packname: process.env.PACK_NAME || "🤝",
  botname: process.env.BOT_NAME || "Pro-Md",
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
  LANG: (process.env.THEME || "PROTECH").toUpperCase(),
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
