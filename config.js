const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA5VUXY+iSBT9K5t61RkBQcGkk0VE/AJFEMXNPJRQQMmnVKFgx/++oe1OzyY7s708VaqKc0+dc+59BVmOCVqiBoxeQVHiK6SoXdKmQGAExlUQoBJ0gQ8pBCMgK4k0tu2GXWv1JeHFg9Sf96Ky0K7RKrhU+Y3eO+bW6hNOfwGPLiiqU4K93wC6OwrX+/XBlZkFTwjDUelCwnSarM2Llse3sWZvmvCyU634BTxaRIhLnIVqEaEUlTBZomYDcfk1+muFJ8t0v2N02b3API7genydiZc9c8y5k58lh+OenOxNyZpfo9+vtrIyvajzW81O9rdAtBJTTbkbmQ7leiXsTzPvzLHqotqTJ32Cwwz5cx9lFNPmy7rH86OSMKJxWc77244QTjL1MA4VUW88t7d0vdoRAjtSl8pU/Bpxw7yrSkzcwR7v7M7i0OPCI1I8Tt07u2tmLCPHIasmMHfjfxDflB9Zif+P7vupa92v18mWv9I+G1obZp1LOe7FG8VEeboqJPOk3+khid2v0d8I2sRbj3PiCL2t5BzZJoj07WU9O+4SZJy5xXqiXrcHfb3ffdKHtCp/x9KsiTONxTDWVbempticqWBJ1JCmk6NHLWY+nmOHEWz2qJSicxuOnWbRW53qk4YvtzlyUJFLiqxpO8lkbK1TKfZBxvLL24ti1Mx9MGIfXVCiEBNaQorz7G2PY7sA+lcLeSWib/KCvO/2xmm9am5TeZsM4zjy58EdrgeqZDbeXpRZw74OhsMOVl9AFxRl7iFCkD/DhOZloyNCYIgIGP31owsyVNOncW25PtsFAS4J3WVVkeTQ/3D14xB6Xl5l1GoyT2kXqAQj5nMbUYqzkLQ6VhksvQhfkRJBSsAogAlBjy7w0RV7qMUD9c4xJbuAFrL0/dyUs1pn61tLOcqz55UBE3j+yRe/SeIw+MYjn/0mMRz3jRGEk88MAh5JLOgC/N4z7T+/tJAr6uPRdYs13+fTuyNz5LjAEXI16xmsp/aoRD4Y0bJCXXCCXlwVdh6j7De4i3Qr35rz/HieXBLL2iUUGfwQlYdA/An36SkYvX7OKSX3W7wNx+nOzBBBF6RvEcTtyyWuz4l9gWN4QRj1uT/J91srJCyK7xmioAsy2N4GE4R8WP4hJ7it9W5Ei+IjCnFCwAgoq0P/rKsTddmIwyGvabIYykoog0/jPjrgmTCLalvx7h9z0Woa8ypEimvgqsez45M2W91Twx7yktjxeM57+RcQMAKaH6INMnoCe2RrivuO4TqJ3Bu7Ti4OS0ld3hJm2GxmS5eTT3ZwdudpVfICk9CU8HYtKJ5uDOqMLtIhVcWT5CPlPglf2mrPAP1cTJnqdy9J1oE/7nV0dzFgosp173VqH868WXpb5ZIsz5xNzuWtNG9W5RTaIOJ6m028VLSOeiQc3qWxnFISCcGKlKGdh+GzN99mQ/I+k/Fb17y+xy3A6G3EvRvxn4Z9Jp95dH/CeB+av0jXeFdu40Dv7+FGJSRedVwznbjltWOY+zpqROG863Q2wSZbGxl4PH50QZFAGuRlCkaApCcIuiCBhMqfnWvjFBEK0wKM2CHP8QNOaMdM2shFYVFIPxoeyO03S2rw+Bu26GnFDAgAAA==',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "Ibrahim Adams",
    NUMERO_OWNER : process.env.NUMERO_OWNER || " Ibrahim Adams",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'BMW_MD',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/h2ydge.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.PM_CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'yes',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'yes',
    MENUTYPE : process.env.MENUTYPE || '',
    ANTICALL : process.env.ANTICALL || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'yes',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'yes',
                  AUTO_READ : process.env.AUTO_READ || 'yes',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'yes',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'yes',
                  AUTO_BIO : process.env.AUTO_BIO || 'yes',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'yes',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});

