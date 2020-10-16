const development = {
  name: "development",
  db: "corner-tree-assignment",
  mongoDB: "",
};

const production = {
  name: process.env.env_name,
  db: "corner-tree-assignment",
  db_path: `mongodb+srv://jevik-zayka-user:${process.env.password}@cluster0.cmbhb.mongodb.net/corner-tree-assignment>?retryWrites=true&w=majority`,
};

module.exports =
  eval(process.env.env_name) == undefined
    ? development
    : eval(process.env.env_name);
