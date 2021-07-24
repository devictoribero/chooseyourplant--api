const { capitalize } = require("./capitalize");

module.exports = {
  unlugify: function unlugify(string) {
    return string ? string.split("-").map(capitalize).join(" ") : "";
  },
};
