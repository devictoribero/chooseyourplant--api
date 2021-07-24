const fs = require("fs");
const { unlugify } = require("./utils/unlugify");
const { createFile } = require("./utils/create-file");
const config = require("../config");

// List of plant file names that shouldn't be
// include when generating the index.json
const blackList = config.blackList;

const plantsCurrentlyPublished = getPlantFilesWhiteList();
const plantsJSON = getPlantsJSON(plantsCurrentlyPublished);
const indexFileContent = JSON.stringify(plantsJSON, null, 2);

createFile("public/plants.json", indexFileContent);

// Since we can omit plants to be included in the index.JSON,
// we want to get only the plants that are not included in the blackList
function getPlantFilesWhiteList() {
  const fileNamesToIncludeInIndexFile = [];
  fs.readdirSync("server/plants").forEach((fileName) => {
    if (fileName.includes(".json")) {
      // For each file, we remove the .json and we unligifyt
      const fileWithoutExtension = fileName.split(".json")[0];
      const filePlantName = unlugify(fileWithoutExtension);
      // blackList is a file that includes all the plant.json
      // we don't want to include
      const isIncludedInBlackList = blackList.includes(filePlantName);
      if (!isIncludedInBlackList) {
        fileNamesToIncludeInIndexFile.push(fileName);
      }
    }
  });

  return fileNamesToIncludeInIndexFile;
}

// Given a list of files, we get a big JSON with all the plants
function getPlantsJSON(plantFiles) {
  let plants = {};
  // We add the information of each plant into an array that we will use later
  plantFiles.forEach((file) => {
    const fileContent = fs.readFileSync(`server/plants/${file}`);
    const fileContentJSON = JSON.parse(fileContent);
    const { slug } = fileContentJSON;

    plants = { ...plants, [slug]: fileContentJSON };
  });

  return plants;
}
