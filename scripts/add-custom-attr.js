const fs = require("fs");
const path = require("path");

const dir = path.join(__dirname, "../src"); // Path to your generated components

fs.readdir(dir, (err, files) => {
  if (err) {
    console.error("Error reading directory:", err);
    return;
  }

  files.forEach(file => {
    const filePath = path.join(dir, file);
    if (file.endsWith(".js")) {
      fs.readFile(filePath, "utf8", (err, data) => {
        if (err) {
          console.error("Error reading file:", err);
          return;
        }

        // Add className and strokeWidth to the svg element, with conditional default classNames
        let updatedData = data.replace(
          /<svg([^>]+)>/,
          `<svg$1 className={\`paranoid-ic \${props.className ? props.className : "size-4"}\`} data-slot="icon" aria-hidden="true">`
        );

        fs.writeFile(filePath, updatedData, "utf8", err => {
          if (err) {
            console.error("Error writing file:", err);
          } else {
            console.log(`Updated ${file}`);
          }
        });
      });
    }
  });
});
