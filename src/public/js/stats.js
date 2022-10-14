const filter = document.getElementById("filter");
const listRepetition = document.getElementById("list-repetition");

filter.addEventListener("keyup", (e) => {
  const text = e.target.value.toLowerCase();
  const rows = listRepetition.querySelectorAll("tr");

  rows.forEach((row) => {
    const name = row.querySelector("td").textContent;
    if (name.toLowerCase().indexOf(text) !== -1) {
      row.style.display = "table-row";
    } else {
      row.style.display = "none";
    }
  });
});

console.log("hello");
