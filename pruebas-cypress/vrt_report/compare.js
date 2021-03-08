const compare = (function () {
  const folder_tree = "./pathfinder/folder-tree.json";
  const getFolderStructure = function () {
    return fetch(folder_tree)
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (data) {
        return data;
      });
  };

  const createRow = function (name) {
    const row = document.createElement("div");
    row.className = "row";
    const title = document.createElement("h3");
    const scenario_name = name.split("/")[2];
    const scenario_step = name.split("/")[4];
    const title_value = document.createTextNode(
      scenario_name + " | " + scenario_step
    );
    title.appendChild(title_value);
    row.appendChild(title);
    const container = document.querySelector("#results");
    container.appendChild(row);
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
        const row = createRow(reference);
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
