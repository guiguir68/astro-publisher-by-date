import fs from "fs";
import path from "path";
import { parse } from "node-html-parser";
import type { AstroIntegration } from "astro";
import needToRemove from "./lib/utils.js";

function fromDir(startPath: string, filter: string) {
  if (!fs.existsSync(startPath)) {
    console.log("no dir ", startPath);
    return;
  }

  let output: string[] = [];

  let files = fs.readdirSync(startPath);
  for (const file of files) {
    let filename = path.join(startPath, file);
    let stat = fs.lstatSync(filename);

    if (stat.isDirectory()) {
      const result = fromDir(filename, filter);
      if (result) {
        output = output.concat(result);
      }
    } else if (filename.endsWith(filter)) {
      output.push(filename);
    }
  }

  return output;
}

export default function publisherByDate(): AstroIntegration {
  return {
    name: "publisher-by-date",
    hooks: {
      "astro:build:done": async ({ dir }) => {
        const htmlFiles = fromDir(dir.pathname, ".html");

        if (!htmlFiles) return;

        for (const file of htmlFiles) {
          const html = fs.readFileSync(file, "utf-8");
          const root = parse(html);
          if (needToRemove(root)) {
            fs.unlink(file, (err) => {
              if (err) throw err;
              console.log(`${file} was deleted`);
            });          
          }
        }
      },
    },
  };
}
