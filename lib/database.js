function getDatabaseUri() {
  const dbUriPlaceholder =
    "DB_URI=mongodb+srv://<db_user>:<db_password>@chooseyourplant-db.j0jhc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
  const dbUri = dbUriPlaceholder
    .replace("<db_user>", process.env.DB_USER)
    .replace("<db_password>", process.env.DB_PASSWORD);

  return dbUri;
}

module.exports = { getDatabaseUri };
