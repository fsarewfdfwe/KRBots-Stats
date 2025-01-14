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

import {
  getModelForClass,
  modelOptions,
  prop,
  Severity
} from "@typegoose/typegoose";
import { RawStatus } from "../../types";

class BotStats {
  @prop({ required: true })
  public updated!: Date;

  @prop({ required: true })
  public votes!: number;

  @prop()
  public servers?: number;

  @prop({ required: true })
  public status!: RawStatus;
}

@modelOptions({ options: { allowMixed: Severity.ALLOW } })
class Bot {
  @prop({ required: true, unique: true })
  public id!: string;

  @prop({ required: true, default: false })
  public track!: boolean;

  @prop({ default: [] })
  public stats: BotStats[];

  @prop({
    type: () => Number,
    required: true,
    default: new Map<string, number>()
  })
  public keywords!: Map<string, number>;
}

export default getModelForClass(Bot);
