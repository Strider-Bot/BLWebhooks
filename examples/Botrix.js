const discord = require("discord.js");
const client = discord.Client();

const blwebhooks = require("blwebhooks");

// Attatch The Client and Port to the module.
// The client is it attaching to the client, 80 is the port it will run on
const bl = new blwebhooks.Client(client, 80);

const protection = bl.extraProtection(true);

const Botrix = bl.BotrixVoteHook("Botrix", "LOADS_OF_RANDOMNESS", true);

// This code will run after a new vote was received from Botrix
BLWEvent.on('BTR-voted', function async (userID) {
  console.log(`${userID} Voted!`)
  
  // Add role for 24 hours
  const guildD = client.guilds.cache.get("721282458708082713")
   guildD.members.fetch(req.vote.user).catch(() => null).then(member => {
     
       if (!member) return;
     
      member.roles.add("748340144897261660");
     
      setTimeout(() => member.roles.remove("748340144897261660").catch(console.error), 1000 * 60 * 60 * 24);
     
}).catch(() => {});
  
});
})
