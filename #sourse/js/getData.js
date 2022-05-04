
async function getData() {
    const response = await fetch(url);
    if (response.ok) {
        data = await response.json();
        console.log(data);
        console.log(data[1][0]);
        console.log(data[1][0].charCodeAt());
        console.log((data[1][0].toLowerCase()).charCodeAt());
        // for (let i = 0; i < data.length; i++) {
        //   petsArrayName.push(data[i].name)
        // }
        // createCards()
        // createPopup(data)
        return data
    } else {
        alert('Error status ' + response.status);
      }   
  }

window.addEventListener('loadstart', getData()) 