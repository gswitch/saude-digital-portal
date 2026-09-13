import type { F as FType } from "./f.ts";

declare global {
  var F: typeof FType;
}

export {};
