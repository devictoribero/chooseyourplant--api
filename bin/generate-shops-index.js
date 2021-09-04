const fs = require("fs");
const { createFile } = require("./utils/create-file");

const shopsJSON = getShopsJSON();
const indexFileContent = JSON.stringify(shopsJSON, null, 2);

createFile("public/shops.json", indexFileContent);

// Given a list of files, we get a big JSON with all the shops
function getShopsJSON() {
  let shops = {};

  // We add the information of each plant into an array that we will use later
  const fileContent = fs.readFileSync(`server/shops/index.json`);
  const fileContentJSON = JSON.parse(fileContent);
  const shopsArr = Object.values(fileContentJSON);

  shopsArr.forEach((shop) => {
    const { name } = shop;
    const shopAlias = createAliasForShop(name);
    shops = { ...shops, [shopAlias]: shop };
  });

  return shops;
}

function createAliasForShop(shopName) {
  return shopName.replace(/,|'|&|-/, "_");
}
