$(document).ready( function () {
  $('#myTable').DataTable();
} );

var datos = data.results[0].members

datos.forEach(element => {
  var tabla = document.getElementById('tabla');

  tabla.innerHTML += `

<tr>
  <td scope="row"><a href="${element.url}">${element.first_name} ${element.last_name}</a></td>
  <td>${element.party}</td>
  <td>${element.state}</td>
  <td>${element.seniority}</td>
  <td>${element.votes_with_party_pct}</td>
</tr>
  
  `
});



function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}



