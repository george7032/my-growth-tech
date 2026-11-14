import { expect, test } from "bun:test";
import { SERVICES } from "./site-data.ts";

test("Zebnex promotes only Websites and Management Systems", () => {
  expect(SERVICES.map((service) => service.title)).toEqual([
    "Websites",
    "Management Systems",
  ]);
});