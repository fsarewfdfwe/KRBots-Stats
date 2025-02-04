/**
 * Copyright (C) 2021 despenser08
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published
 * by the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

import { Listener } from "discord-akairo";
import scheduleFetch from "../../lib/scheduleTask";

export default class extends Listener {
  constructor() {
    super("ready", { emitter: "client", event: "ready" });
  }

  public async exec() {
    scheduleFetch(this.client);

    this.client.user.setPresence({
      status: "idle",
      activity: {
        name: `${this.client.commandHandler.prefix[0]}도움말`,
        type: "PLAYING"
      }
    });

    this.client.logger.info(`${this.client.user.tag} is ready.`);
  }
}
