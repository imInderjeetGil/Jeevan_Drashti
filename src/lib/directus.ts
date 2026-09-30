import {
  createDirectus,
  rest,
  authentication,
} from "@directus/sdk";

import { env } from "../config/env";
import type { DirectusSchema } from "../types/directus";

export const directus = createDirectus<DirectusSchema>(env.directusUrl)
  .with(authentication())
  .with(rest());