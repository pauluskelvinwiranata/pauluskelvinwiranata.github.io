var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    var data = JSON.parse(xhttp.responseText);

    data.simpleprojects.forEach(function (e) {
      document.getElementById("simpleprojects").innerHTML += `
            <div class="card-projects">
            <img src="${e.image}" />
            <div class="desc-projects">
              <h1>${e.title}</h1>
              <div class="cta">
                <a href="${e.code}" target="_blank"><button><i class="fa-solid fa-code"></i></button></a>
                <a href="${e.demo}" target="_blank"><button><i class="fa-solid fa-eye"></i></button></a>
              </div>
            </div>
          </div>
        `;
    });

    data.complexprojects.forEach(function (e) {
      document.getElementById("complexprojects").innerHTML += `
            <div class="card-projects">
            <img src="${e.image}" />
            <div class="desc-projects">
              <h1>${e.title}</h1>
              <div class="cta">
                <button id="disabledCode"><i class="fa-solid fa-code"></i></button>
                <button id="disabledDemo"><i class="fa-solid fa-eye"></i></button>
              </div>
            </div>
          </div>
        `;
    });
    document.getElementById("countsimpleProjects").innerHTML =
      data.simpleprojects.length;
    document.getElementById("countcomplexProjects").innerHTML =
      data.complexprojects.length;
  }
};

xhttp.open("GET", "dist/js/data.json", true);
xhttp.send();
