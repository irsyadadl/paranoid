const fs = require("fs");
const path = require("path");

const iconsDir = path.join(__dirname, "../src");
const outputDir = path.join(__dirname, "../dist");
const outputFile = path.join(outputDir, "index.d.ts");

fs.readdir(iconsDir, (err, files) => {
  if (err) {
    console.error("Error reading icons directory:", err);
    return;
  }

  const exports = files
    .filter((file) => file.endsWith(".js"))
    .map((file) => {
      const iconName = path.basename(file, ".js");
      return `export declare const ${iconName}: React.FC<React.SVGProps<SVGSVGElement>>;`;
    });

  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const content = ["import React from 'react';", ...exports].join("\n");

  fs.writeFileSync(outputFile, content, "utf8");
  console.log(`Generated TypeScript declarations in ${outputFile}`);
});
