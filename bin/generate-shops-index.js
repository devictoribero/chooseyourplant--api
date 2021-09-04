const fs = require("fs");
const { createFile } = require("./utils/create-file");
const { shops } = require("../server/shops");

shops.forEach((shop) => console.log(shop.name));
const shopsJSON = getShopsJSON();
const indexFileContent = JSON.stringify(shopsJSON, null, 2);

createFile("public/shops.json", indexFileContent);

// Given a list of files, we get a big JSON with all the shops
function getShopsJSON() {
  let shopsJSON = {};

  // We add the information of each plant into an array that we will use later
  shops.forEach((shop) => {
    const { name } = shop;
    const shopAlias = createAliasForShop(name);
    shopsJSON = { ...shopsJSON, [shopAlias]: shop };
  });

  return shopsJSON;
}

function createAliasForShop(shopName) {
  return shopName.toLowerCase().replace(/,|'|&|-|" "/g, "_");
}
