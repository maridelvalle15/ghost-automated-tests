const screenshots_folder = "../../vrt_screenshots/examples/";
const json_folder = "./folder-tree.json";

const fs = require("fs");

const storeData = data => {
  try {
    fs.writeFileSync(json_folder, JSON.stringify(data));
  } catch (err) {
    console.error(err);
  }
};
console.log()
fs.readdir(screenshots_folder, (err, files) => {
  const tree = {};
  const blacklist = [".DS_Store"];
  files.forEach((file, index) => {
    if (!blacklist.includes(file)) {
      tree[file] = {};
      fs.readdir(screenshots_folder + file, (err, files) => {
        files.forEach((file_child, index) => {
          if (!blacklist.includes(file_child)) {
            tree[file][file_child] = [];
            fs.readdir(
              screenshots_folder + file + "/" + file_child,
              (err, files) => {
                files.forEach((file_last_child, index) => {
                  tree[file][file_child] = [
                    ...tree[file][file_child],
                    file_last_child
                  ];
                });
              }
            );
          }
        });
      });
    }
  });
  setTimeout(() => {
    console.log(tree);
    storeData(tree);
  }, 1000);
});
