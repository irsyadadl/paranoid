const fs = require("fs");
const path = require("path");

const iconsDir = path.join(__dirname, "src"); // Path to your icons
const outputDir = path.join(__dirname, "dist"); // Output directory
const outputFile = path.join(outputDir, "index.d.ts");

fs.readdir(iconsDir, (err, files) => {
  if (err) {
    console.error("Error reading icons directory:", err);
    return;
  }

  const exports = files
    .filter((file) => file.endsWith(".js")) // Adjust the extension if needed
    .map((file) => {
      const iconName = path.basename(file, ".js"); // Remove file extension
      return `export declare const ${iconName}: React.FC<React.SVGProps<SVGSVGElement>>;`;
    });

  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir);
  }

  const content = ["import React from 'react';", ...exports].join("\n");

  fs.writeFileSync(outputFile, content, "utf8");
  console.log(`Generated TypeScript declarations in ${outputFile}`);
});
