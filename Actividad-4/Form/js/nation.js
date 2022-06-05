document.addEventListener('DOMContentLoaded', () => {

    const selectDrop = document.querySelector('#countries1');
    // const selectDrop = document.getElementById('countries');
  
  
    fetch('https://restcountries.com/v2/all').then(res => {
      return res.json();
    }).then(data => {
      let output = "";
      data.forEach(country1 => {
        output += `
        
        <option value="${country1.name}">${country1.name}</option>`;
      })
  
      selectDrop.innerHTML = output;
    }).catch(err => {
      console.log(err);
    })
  
  
});