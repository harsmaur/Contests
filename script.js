let url = "https://kontests.net/api/v1/all"
let response = fetch(url)
response.then((v) => {
  return v.json()
}).then((contests) => {
  console.log(contests)
  ihtml = ""
  for (item in contests) {
    ihtml += `
   <div class=" d1 d2 card mb-3" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyu8oGFqQuhKzkHdolTxv9dbwdsLEqL1mACg&usqp=CAU" class="imgapi img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h2 class="card-title">${contests[item].name}</h2>
    <p class="card-text">${contests[item].site}</p>
    <p class="card-text"> Start Time :${contests[item].start_time}</p>
    <p class="card-text"> End Time: ${contests[item].end_time}</p>
    
     <a href="${contests[item].url}" class=" btn btn-outline-primary col-6 mx-auto">Visit</a>
      </div>
    </div>
  </div>
</div>

    `
  }
  cardContainer.innerHTML = ihtml;
})
