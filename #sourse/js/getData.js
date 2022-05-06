
async function getData() {
    const response = await fetch(url);
    if (response.ok) {
        data = await response.json();
        console.log(data);
        // console.log(data[1][0]);
        // console.log((data[1].toString()).length);
        // console.log(data[0].length);
        // console.log(data[1].length);
        // console.log(data[2].length);
        // console.log(data[3].length);
        // console.log(data[1][0].charCodeAt());
        // console.log((data[1][0].toLowerCase()).charCodeAt());
        // for (let i = 0; i < data.length; i++) {
        //   petsArrayName.push(data[i].name)
        // console.log(data[i]);

            // for (let j = 0; j < data[i].length; j++) {
            //     // console.log(data[j]);
            //     // console.log(data[i].length);
            //     // console.log(data[i][j]);
            //     // console.log(data[i][j].length);
                
            // }
        // }
        // createCards()
        // createPopup(data)
        createKeyboard(data)
        return data
    } else {
        alert('Error status ' + response.status);
      }   
  }

window.addEventListener('loadstart', getData()) 
window.addEventListener('loadstart', getDataCntr()) 

async function getDataCntr() {
    const responseCntr = await fetch(urlCntr);
    if (responseCntr.ok) {
        dataCntr = await responseCntr.json();
        // console.log(dataCntr);
        // console.log(data[1][0]);
        // console.log((data[1].toString()).length);
        // console.log(data[0].length);
        // console.log(data[1].length);
        // console.log(data[2].length);
        // console.log(data[3].length);
        // console.log(data[1][0].charCodeAt());
        // console.log((data[1][0].toLowerCase()).charCodeAt());
        // for (let i = 0; i < data.length; i++) {
        //   petsArrayName.push(data[i].name)
        // console.log(data[i]);

            // for (let j = 0; j < data[i].length; j++) {
            //     // console.log(data[j]);
            //     // console.log(data[i].length);
            //     // console.log(data[i][j]);
            //     // console.log(data[i][j].length);
                
            // }
        // }
        // createCards()
        // createPopup(data)
        // createKeyboard(data)
        return dataCntr
    } else {
        alert('Error status ' + responseCntr.status);
      }   
  }