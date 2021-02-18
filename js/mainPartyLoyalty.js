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

function renderlestEngaged(data) {
  var tabla1 = document.getElementById('tabla1');
  var sumMember = (data.length) / 10;


  for (let index = 0; index < sumMember; index++) {
    const element = data[index];
    tabla1.innerHTML += `
       <tr>
        <td scope="row">${element.first_name}</td>
        <td scope="row">${element.total_votes - element.missed_votes}</td>
        <td scope="row">${element.votes_with_party_pct}%</td>
      </tr>
       `
  };
}

function renderMostEngaged(data) {
  var sumMember = (data.length) / 10;
  for (let index = 0; index < sumMember; index++) {
    const element = data[index];

    document.getElementById('tabla2').innerHTML += `
      
      <tr>
        <td scope="row">${element.first_name}</td>
        <td scope="row">${element.total_votes - element.missed_votes}</td>
        <td>${element.votes_with_party_pct}%</td>
      </tr>
       `

  };
  // console.log(data); 
}


function inicio() {

  var democratas = filterParty(data.results[0].members, "D")
  var republicans = filterParty(data.results[0].members, "R")
  var indepents = filterParty(data.results[0].members, "I")

  var democratasVotes = sumVotesWParty(democratas)
  var republicansVotes = sumVotesWParty(republicans)
  var indepentsVotes = sumVotesWParty(indepents)

  var sumVotesParty = (democratasVotes + republicansVotes) / 2;

  var orderTop = data.results[0].members;

  orderTop.sort((oMinA, oMinB) => {
    return oMinA.votes_with_party_pct - oMinB.votes_with_party_pct
  });
  renderMostEngaged(orderTop);

  orderTop.sort((minA, minB) => {
    return minB.votes_with_party_pct - minA.votes_with_party_pct
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
        <td>0%</td>
        
      </tr>
      <tr>
        <td> Total </td>
        <td scope="row">${data.results[0].members.length}</td>
        <td>${sumVotesParty}%</td>
        
      </tr>
        
        `

}

  // function orderLoyalParty(members) {
  //   //  var result=[];
  //   members.sort((memberA, memberB) => {
  //     return memberB.missed_votes - memberA.missed_votes
  //   });
  //   //return result;
  // }

  // function orderLoyalPartyMax(membersMax) {
  //   //  var result=[];
  //   return membersMax.sort((memberA, memberB) => {
  //     return memberA.missed_votes - memberB.missed_votes
  //   });
  //   //return result;
  // }

  //function orderLoyalPartyMax(members) {
  //  var result=[];
  //   return members.reverse((memberA,memberB) => {
  //   return memberA.votes_with_party_pct + memberB.votes_with_party_pct
  //});
  //return result;
  // }
  //}

    //listado.forEach(member =>{
    //votos +=(member.votes_with_party_pct);
    // tabla2.innerHTML += `