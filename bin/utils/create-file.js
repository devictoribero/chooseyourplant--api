const fs = require("fs");

const createFile = (filePath, fileContent) => {
  fs.writeFile(filePath, fileContent, (error) => {
    if (error) {
      console.error("Ann error occurred: ", error);
    } else {
      console.log("Your file has been created!");
    }
  });
};

module.exports = { createFile };
