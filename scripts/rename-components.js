const fs = require("fs");
const path = require("path");

const componentsDir = path.resolve(__dirname, "./dist");

fs.readdirSync(componentsDir).forEach((file) => {
  if (path.extname(file) === ".tsx") {
    const oldPath = path.join(componentsDir, file);
    const newPath = path.join(componentsDir, file.replace("Svg", "Icon"));

    // Rename file
    fs.renameSync(oldPath, newPath);

    // Replace 'Svg' with 'Icon' in file content
    const content = fs.readFileSync(newPath, "utf8");
    const newContent = content.replace(/Svg/g, "");
    fs.writeFileSync(newPath, newContent);
  }
});
