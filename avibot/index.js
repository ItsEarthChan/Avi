let config = require("./config").config;
const { ShardingManager } = require('discord.js');
const manager = new ShardingManager('./bot.js', { token: config.DISCORD_API_TOKEN });
manager.spawn();
manager.on('launch', shard => console.log(`Launched shard ${shard.id}`));
