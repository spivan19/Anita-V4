require('dotenv').config();


// Helper function to convert "true"/"false" strings to real booleans
const toBool = (value) => value === "true";

// Owner & Bot Details
global.owner = process.env.OWNER_NUMBER;
global.anitav4 = process.env.BOT_NAME || "Kami-Bot";
global.ownername = process.env.OWNER_NAME || "Kami Sama";
global.packname = process.env.PACK_NAME || "Everyone loves Kami";
global.author = process.env.AUTHOR || "𝐀𝐈𝐈-KAMI";
global.channelname = process.env.CHANNEL_NAME || "null";
global.channeljid = process.env.CHANNEL_JID || "null";

// Auto-Features
global.autoTyping = toBool(process.env.AUTO_TYPING);
global.autoRecord = toBool(process.env.AUTO_RECORD);
global.autoViewStatus = toBool(process.env.AUTO_VIEW_STATUS);
global.AUTO_STATUS_REACT = toBool(process.env.AUTO_STATUS_REACT);
global.autoLikeEmoji = process.env.AUTO_LIKE_EMOJI || "💚";
global.LEVELUP = toBool(process.env.LEVELUP);
global.ANTIVIEWONCE = toBool(process.env.ANTIVIEWONCE);

global.public = process.env.PUBLIC === 'true';
// Group & Security Settings

global.ANTIDELETE = toBool(process.env.ANTIDELETE);
global.unavailable = toBool(process.env.UNAVAILABLE);
global.available = toBool(process.env.AVAILABLE);
global.autoreadmessages = toBool(process.env.AUTO_READ_MESSAGES);
global.chatbot = toBool(process.env.CHATBOT);
global.autoreact = toBool(process.env.AUTO_REACT);
global.WELCOME = toBool(process.env.WELCOME);

// Prefix & Other Settings
global.prefix = process.env.PREFIX || '/';
global.autobio = toBool(process.env.AUTO_BIO);
global.ANTI_TEMU = toBool(process.env.ANTI_TEMU);
global.ANTI_TAG = toBool(process.env.ANTI_TAG);
global.ANTICALL = toBool(process.env.ANTICALL);
global.antilink = toBool(process.env.ANTILINK);
global.antilinkkick = toBool(process.env.ANTILINK_KICK);
global.antilinkwarn = toBool(process.env.ANTILINK_WARN);

// Messages
global.mess = {
    success: process.env.MESSAGE_SUCCESS || '𝙳𝚘𝚗𝚎',
    admin: process.env.MESSAGE_ADMIN || '_*❗JUSTE POUR LES ADMINS !*_',
    botAdmin: process.env.MESSAGE_BOT_ADMIN || '_*❗JE DOIS ETRE ADMIN !*_',
    OnlyOwner: process.env.MESSAGE_OWNER || '_*❗SEUL KAMI PEUT UTILISER CETTE COMMANDE !*_',
    OnlyGrup: process.env.MESSAGE_GROUP || '_*❗COMMANDE UTILISABLE UNIQUEMENT DANS UN GROUPE !*_',
    private: process.env.MESSAGE_PRIVATE || '_*❗UNIQUEMENT EN DM MAIS NE VEINS PAS !*_',
    wait: process.env.MESSAGE_WAIT || '_*PATIENTES IDIOT*_',
    notregist: process.env.MESSAGE_NOT_REGIST || '_*You are not registered in the Bot Database. Please register first*_',
    premium: process.env.MESSAGE_PREMIUM || '_*Premium only" VEUX-TU DEVENIR PREMIUIM? ECRIS A KAMI*_',
    endLimit: process.env.MESSAGE_END_LIMIT || '_*Your Daily Limit Has Been Used Up, The Limit Will Be Reset Every 00:00 AM_*.',
};


let fs = require('fs')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update ${__filename}`)
delete require.cache[file]
require(file)
})
