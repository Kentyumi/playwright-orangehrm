import * as fs from "fs";
import * as path from "path";

export function getUser(userKey: string) {
  const filePath = path.join(__dirname, "../test-data/users.json");
  const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));
  return data[userKey];
}
