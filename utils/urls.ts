import * as fs from "fs";
import * as path from "path";

const filePath = path.join(__dirname, "../test-data/urls.json");
const urls = JSON.parse(fs.readFileSync(filePath, "utf-8"));

export function getUrl(env: string): string {
  return urls[env];
}
