// utils/statusManager.js

import { ActivityType } from "discord.js";

export function startPresenceCycle(client) {
  const userCount = client.guilds.cache.reduce((acc, guild) => acc + (guild.memberCount || 0), 0);

  const presenceText = `${userCount.toLocaleString()} citizens`;

  client.user.setPresence({
    activities: [{
      name: presenceText,
      type: ActivityType.Streaming,
      url: "https://www.youtube.com/watch?v=jfKfPfyJRdk"
    }],
    status: "online",
  });
}