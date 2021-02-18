$(document).ready(function () {
  inicio();
  //$('#myTable').DataTable();

});


function filterParty(members, filter) {
  return members.filter(member => {
    return member.party == filter;
  });
}

function sumVotesWParty(members) {
  var totalVotes = 0;
  members.forEach(member => {
    totalVotes += Math.round(parseInt(member.votes_with_party_pct))
  });
  return Math.round(totalVotes / members.length);
}

function orderLoyalParty(members) {
  //  var result=[];
  members.sort((memberA, memberB) => {
    return memberB.missed_votes - memberA.missed_votes
  });
  //return result;
}

function orderLoyalPartyMax(membersMax) {
  //  var result=[];
  return membersMax.sort((memberA, memberB) => {
    return memberA.missed_votes - memberB.missed_votes
  });
  //return result;
}

function renderlestEngaged(data) {
  var tabla1 = document.getElementById('tabla1');
  var sumMember = (data.length) / 10;
  // console.log(data);
  //listado.forEach(member =>{
  //votos +=(member.votes_with_party_pct);
  for (let index = 0; index < sumMember; index++) {
    const element = data[index];


    tabla1.innerHTML += `
    
    <tr>
      <td scope="row">${element.first_name}</td>
      <td scope="row">${element.missed_votes}</td>
      <td>${element.missed_votes_pct}</td>
      
    </tr>

      
     `

  };
  //console.log(sumMember); 
}

function renderMostEngaged(data) {
  var tabla2 = document.getElementById('tabla2');
  var sumMember = (data.length) / 10;

  //listado.forEach(member =>{
  //votos +=(member.votes_with_party_pct);
  for (let index = 0; index < sumMember; index++) {
    const element = data[index];


    tabla2.innerHTML += `
    
    <tr>
      <td scope="row">${element.first_name}</td>
      <td scope="row">${element.missed_votes}</td>
      <td>${element.missed_votes_pct}</td>
      
    </tr>

      
     `

  };
  //console.log(data); 
}


function inicio() {

  var democratas = filterParty(data.results[0].members, "D")
  var republicans = filterParty(data.results[0].members, "R")
  var indepents = filterParty(data.results[0].members, "ID")

  var democratasVotes = sumVotesWParty(democratas)
  var republicansVotes = sumVotesWParty(republicans)
  var indepentsVotes = sumVotesWParty(indepents)

  var sumVotesParty = (democratasVotes + republicansVotes + indepentsVotes) / 3;

  var orderTop = data.results[0].members;

  orderTop.sort((oMinA,oMinB) => {
    return oMinA.missed_votes - oMinB.missed_votes
  });
  renderMostEngaged(orderTop);

  orderTop.sort((minA,minB) => {
    return minB.missed_votes - minA.missed_votes
  });
  renderlestEngaged(orderTop);

  tabla.innerHTML = `
    
    <tr>
      <td> Democrats </td>
      <td scope="row">${democratas.length}</td>
      <td>${democratasVotes}%</td>
      
    </tr>
    <tr>
      <td> Replublicans </td>
      <td scope="row">${republicans.length}</td>
      <td>${republicansVotes}%</td>
      
    </tr>
    <tr>
      <td> Independents </td>
      <td scope="row">${indepents.length}</td>
      <td>${indepentsVotes}</td>
      
    </tr>
    <tr>
      <td> Total </td>
      <td scope="row">${data.results[0].members.length}</td>
      <td>${sumVotesParty}%</td>
      
    </tr>
      
      `
 
}






//  <td>${element.party}</td>
//    <td>${element.state}</td>
//    <td>${element.seniority}</td>
//    <td>${element.votes_with_party_pct}</td>


//<tr>
//<td> </td>
//<td scope="row">${republicans.length}</td>
//<td>${republicansVotes}%</td>

//</tr>
//<tr>
//<td> Independents </td>
//<td scope="row">${indepents.length}</td>
//<td>0%</td>

//</tr>
//<tr>
//<td> Total </td>
//<td scope="row">${data.results[0].members.length}</td>
//<td>${sumVotesParty}</td>

// </tr>


  //var datos = data.results[0].members

 // datos.forEach(element => {
   // var tabla = document.getElementById('tabla');

   // tabla.innerHTML += `

  //<tr>
   // <td scope="row"><a href="${element.url}">${element.first_name} ${element.last_name}</a></td>
   // <td>${element.party}</td>
   // <td>${element.state}</td>
   // <td>${element.seniority}</td>
   // <td>${element.votes_with_party_pct}</td>
  //</tr>

  //  `
 // })



  //console.log(orderMin);
  //orderMin.sort((memberA,memberB) => {
  // return memberB.missed_votes - memberA.missed_votes
  //});
  //console.log(orderMin);
  // orderMax.sort((memberA,memberB) => {
  // return memberA.missed_votes - memberB.missed_votes
  //});

  //console.log(prueba);

//function orderLoyalPartyMax(members) {
//  var result=[];
//   return members.reverse((memberA,memberB) => {
//   return memberA.votes_with_party_pct + memberB.votes_with_party_pct
//});
//return result;
// }
//}