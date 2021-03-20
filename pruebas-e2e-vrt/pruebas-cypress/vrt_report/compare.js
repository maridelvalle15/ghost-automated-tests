const compare = (function () {
  const folder_tree = "./pathfinder/folder-tree.json";
  const getFolderStructure = function () {
    return fetch(folder_tree)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        return data;
      });
  };

  const createGroup = function (name) {
    const scenario_name = name.split("/")[2];
    const id = scenario_name.split(".")[0];
    let group = document.querySelector("#" + id);
    if (group) {
      return group;
    }
    group = document.createElement("div");
    group.className = "group";
    group.id = id;
    const title = document.createElement("h2");
    const title_value = document.createTextNode(scenario_name);
    title.appendChild(title_value);
    group.appendChild(title);
    const container = document.querySelector("#results");
    container.appendChild(group);
    return group;
  };

  const createRow = function (name, group) {
    const row = document.createElement("div");
    row.className = "row";
    const title = document.createElement("h3");
    const scenario_step = name.split("/")[4];
    const title_value = document.createTextNode(scenario_step);
    title.appendChild(title_value);
    row.appendChild(title);
    group.appendChild(row);
    return row;
  };

  const createImage = function (src, row) {
    const img = document.createElement("img");
    img.src = src;
    row.appendChild(img);
  };

  const compare = function (reference, test) {
    resemble(reference)
      .compareTo(test)
      .onComplete(function (data) {
        const group = createGroup(reference);
        const row = createRow(reference, group);
        createImage(reference, row);
        createImage(test, row);
        createImage(data.getImageDataUrl(), row);
      });
  };

  const init = function () {
    getFolderStructure().then(function (tree) {
      const scenarios = Object.keys(tree);
      scenarios.forEach(scenario => {
        const screen_folder = Object.keys(tree[scenario]);
        tree[scenario][screen_folder[0]].forEach(image => {
          const reference =
            "vrt_screenshots/examples/" +
            scenario +
            "/" +
            screen_folder[0] +
            "/" +
            image;
          const test =
            "vrt_screenshots/examples/" +
            scenario +
            "/" +
            screen_folder[1] +
            "/" +
            image;
          compare(reference, test);
        });
      });
    });
  };

  return {
    init: init
  };
})();
