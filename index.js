const buses = [
  {
    route: 1,
    type: "Standard bus",
    stations: [
      "Railway Station",
      "Ek Moriya",
      "Nawaz Sharif Hospital",
      "Kashmiri Gate",
      "Lari Adda",
      "Azadi Chowk",
      "Texali Chowk",
      "Bhatti Chowk",
    ],
  },
  {
    route: 2,
    type: "Standard bus",
    stations: [
      "Samanabad Morr",
      "Corporation Chowk",
      "Taj Company",
      "Sanda",
      "Double Sarkan",
      "Moon Market",
      "Ganda Nala",
      "Bhatti Chowk",
    ],
  },
  {
    route: 3,
    type: "Standard bus",
    stations: [
      "Railway Station",
      "Ek Moriya",
      "Nawaz Sharif Hospital",
      "Kashmiri Gate",
      "Lari Adda",
      "Azadi Chowk",
      "Timber Market",
      "METRO",
      "Niazi Chowk",
      "Shahdara Metro Station",
      "Shahdara Lari Adda",
    ],
  },
  {
    route: 4,
    type: "Standard bus",
    stations: [
      "R.A Bazar",
      "Nadeem Chowk",
      "Defence Morr",
      "Shareef Market",
      "Walton",
      "Qainchi",
      "Ghazi Chowk",
      "Chungi Amar Sidhu",
    ],
  },
  {
    route: 5,
    type: "Mini bus",
    stations: [
      "Shad Bagh Underpass",
      "Rajput Park",
      "Madina Chowk",
      "Lohay Wali Pulley",
      "Badami Bagh",
      "Lari Adda Gol Chakar",
      "Azadi Chowk",
      "Taxali Chowk",
      "Bhatti Chowk",
    ],
  },
  {
    route: 6,
    type: "Mini bus",
    stations: [
      "Babu Sabu",
      "Niazi Adda",
      "City Bus Stand",
      "Chowk Yateem Khana",
      "Bhala Stop",
      "Samanabad Morr",
      "Chauburji",
      "Riwaz Garden",
      "M.A.O College",
      "Firdous Cinema",
      "Raj Garh Chowk",
    ],
  },
  {
    route: 7,
    type: "Standard bus",
    stations: [
      "Bagrian",
      "Depot Chowk",
      "Minhaj University",
      "Hamdard Chowk",
      "Rehmat Eye Hospital",
      "Pindi Stop",
      "Peco Morr",
      "Kot Lakhpat Railway Station",
      "Phatak Mandi",
      "Qainchi",
      "Ghazi Chowk",
      "Chungi Amar Sidhu",
    ],
  },
  {
    route: 8,
    type: "Standard bus",
    stations: [
      "Doctor Hospital",
      "Wafaqi Colony",
      "IBA Stop",
      "Hailey College",
      "Campus Pull",
      "Barkat Market",
      "Kalma Chowk",
      "Qaddafi Stadium",
      "Canal",
    ],
  },
  {
    route: 9,
    type: "Mini bus",
    stations: [
      "Railway Station",
      "Haji Camp",
      "Shimla Pahari",
      "Lahore Zoo",
      "Chairing Cross",
      "Ganga Ram Hospital",
      "Qartaba Chowk",
      "Chauburji",
      "Sham Nagar",
    ],
  },
  {
    route: 10,
    type: "Standard bus",
    stations: [
      "Multan Chungi",
      "Mustafa Town",
      "Karim Block Market",
      "PU Examination Center",
      "Bhekewal Morr",
      "Wahdat Colony",
      "Naqsha Stop",
      "Canal",
      "Ichra",
      "Shama",
      "Qartaba Chowk",
    ],
  },
  {
    route: 11,
    type: "Standard bus",
    stations: [
      "Babu Sabu",
      "Niazi Adda",
      "City Bus Stand",
      "Chowk Yateem Khana",
      "Scheme Morr",
      "Flat Stop",
      "Dubai Chowk",
      "Bhekewal Morr",
      "Sheikh Zaid Hospital",
      "Campus Pull",
      "Barkat Market",
      "Kalma Chowk",
      "Liberty Chowk",
      "Hafeez Center",
      "Mini Market",
      "Main Market, Gulberg",
    ],
  },
  {
    route: 12,
    type: "Standard bus",
    stations: [
      "R.A Bazar",
      "PAF Market",
      "Girja Chowk",
      "Afshan Chowk",
      "Fortress Stadium",
      "Gymkhana",
      "Aitchison College",
      "PC Hotel",
      "Lahore Zoo",
      "Chairing Cross",
      "GPO",
      "Anarkali",
      "Civil Secretariat",
    ],
  },
  {
    route: 13,
    type: "Standard bus",
    stations: [
      "Bagrian",
      "Ghazi Chowk",
      "UMT Stop",
      "Khokhar Chowk",
      "Akbar Chowk",
      "Pindi Stop",
      "Peco Morr",
      "Phatak Mandi",
      "Ittefaq Hospital",
      "Model Town",
      "Kalma Chowk",
    ],
  },
  {
    route: 14,
    type: "Standard bus",
    stations: [
      "R.A Bazar",
      "Fauji Foundation",
      "Ali View Garden",
      "Bhatta Chowk",
      "DHA Nursery",
      "LESCO",
      "Chota Ishara Stop",
      "Naka Stop",
      "Ghazi Chowk",
      "Chungi Amar Sidhu",
    ],
  },
  {
    route: 15,
    type: "Mini bus",
    stations: [
      "Qartba Chowk",
      "Hakeem M. Ajmal Khan Road",
      "Gulshan Ravi Road",
      "Kacha Ferozepur Road",
      "Babu Sabu",
    ],
  },
  {
    route: 16,
    type: "Mini bus",
    stations: [
      "Railway Station",
      "Circular Road",
      "Ek Moriya",
      "Bhatti Chowk",
    ],
  },
  {
    route: 17,
    type: "Standard bus",
    stations: [
      "Canal",
      "Main Boulevard Shadman",
      "Davis Road",
      "Shimla Pahari",
      "Haji Camp",
      "Railway Station",
    ],
  },
  {
    route: 18,
    type: "Mini bus",
    stations: [
      "Bhatti Chowk",
      "Circular Road",
      "Nisbat Road",
      "Abbot Road",
      "Shimla Pahari",
    ],
  },
  {
    route: 19,
    type: "Mini bus",
    stations: [
      "Main Market",
      "Jail Road",
      "Lytton Road",
      "Crust Road",
      "Lower Mall Road",
      "Bhatti Chowk",
    ],
  },
  {
    route: 20,
    type: "Mini bus",
    stations: [
      "Jain Mandar",
      "Al-Mumtaz Road",
      "Poonch Road",
      "Lake Road",
      "Chowk Yateem Khana",
    ],
  },
  {
    route: 21,
    type: "Standard bus",
    stations: [
      "Depot Chowk",
      "Madar-e-Millat Road",
      "Ali Road",
      "Baig Road",
      "Canal Bank Road",
      "Thokar Niaz Baig",
    ],
  },
  {
    route: 22,
    type: "Standard bus",
    stations: [
      "Depot Chowk",
      "Madar-e-Millat Road",
      "Sutlej Avenue",
      "Shahrah Nazria-e-Pakistan Avenue",
      "Thokar Niaz Baig",
    ],
  },
  {
    route: 23,
    type: "Mini bus",
    stations: [
      "Valencia",
      "Valencia Main Boulevard",
      "Khayaban-e-Jinnah",
      "Raiwind Road",
      "Thokar Niaz Baig",
    ],
  },
  {
    route: 24,
    type: "Standard bus",
    stations: [
      "Multan Chungi",
      "College Road",
      "Maulana Shaukat Ali Road",
      "Wahdat Road",
      "Ghazi Chowk",
    ],
  },
  {
    route: 25,
    type: "Standard bus",
    stations: [
      "R.A Bazar",
      "Lahore-Bedian Road",
      "Allama Iqbal Road",
      "Railway Station",
    ],
  },
  {
    route: 26,
    type: "Standard bus",
    stations: [
      "R.A Bazar",
      "G.T Road",
      "Shalimar Link Road",
      "Tufail Road",
      "Sarfraz Rafique Road",
      "Daroghawala",
    ],
  },
  {
    route: 27,
    type: "Mini bus",
    stations: ["BataPur", "GT Road", "Daroghawala"],
  },
  {
    route: 28,
    type: "Mini bus",
    stations: [
      "Quaid e Azam Interchange",
      "Harbanspura Road",
      "Zarar Shaheed Road",
      "Airport",
    ],
  },
  {
    route: 29,
    type: "Standard bus",
    stations: [
      "Niazi Interchange",
      "Lahore Ring Road",
      "Band Road",
      "Sue Wala Road",
      "Salamat Pura",
    ],
  },
  {
    route: 30,
    type: "Standard bus",
    stations: ["Daroghawala", "G.T. Road", "Shalimar Link Road", "Airport"],
  },
  {
    route: 31,
    type: "Mini bus",
    stations: [
      "Daroghawala",
      "Chamra Mandi",
      "Cooper Store",
      "UET",
      "Shalimar Chowk",
      "Lari Adda",
    ],
  },
  {
    route: 32,
    type: "Mini bus",
    stations: [
      "Shimla Pahari",
      "Durand Road",
      "Queen Mary Road",
      "Garhi Shahu Bridge",
      "Cooper Store",
      "Chamra Mandi",
      "Ek Moriya",
    ],
  },
  {
    route: 33,
    type: "Mini bus",
    stations: [
      "Cooper Store",
      "Workshop Road",
      "Mughalpura Road",
      "Mughalpura",
    ],
  },
  {
    route: 34,
    type: "Mini bus",
    stations: ["Singhpura", "Wheatman Road", "Griffin Road", "Mughalpura"],
  },
];
let opt=[];
const addOptions = (select) => {
  let options ;
  for (var i = 0; i < buses.length; i++) {
    for (var j = 0; j < buses[i].stations.length; j++) {
opt[opt.length]=buses[i].stations[j];
      }
  }
  opt.sort();
  for (var i = 0; i < opt.length; i++) {
    for (var j = i+1; j < opt.length; j++) {
if(opt[i]==opt[j]){
  opt.splice(j,1);
  j--;
}
    }
  }
opt.forEach(val => {
    options += `<option value="${val}">${val}</option>`;
  select.innerHTML = options;
});
};

window.addEventListener("DOMContentLoaded", () => {
  const select = document.getElementById("busdata1");
  addOptions(select);

  const select2 = document.getElementById("busdata2");
  addOptions(select2);
});

document.getElementById("busSearchForm").addEventListener( 'submit',function() {
  event.preventDefault();
  const data1 = busdata1.value;
  const data2 = busdata2.value;
  let bus1data = [];
  let bus2data = [];

function finall(val1,val2){
  const resultParagraph = document.getElementById("resultParagraph");
  resultParagraph.innerHTML = " ";
  if(val1==val2){
    let p = document.createElement('p');
    p.innerText = 'Both values are same. Please change values.';
    resultParagraph.appendChild(p);
  }else{
    for (var i = 0; i < buses.length; i++) {
      for (var j = 0; j < buses[i].stations.length; j++) {
        if (data1 == buses[i].stations[j]) {
          bus1data[bus1data.length] = buses[i];
        }
        if (data2 == buses[i].stations[j]) {
          bus2data[bus2data.length] = buses[i];
        }
      }
    }
    let finalsame = [];
    for (var i = 0; i < bus1data.length; i++) {
      for (var j = 0; j < bus2data.length; j++) {
        if (bus1data[i].route === bus2data[j].route) {
          finalsame[finalsame.length] = bus1data[i];
        }
      }
    }
    if(finalsame.length==0){
      let p = document.createElement('p');
        p.innerText = 'Sorry, no route found. Try some other route.';
        resultParagraph.appendChild(p);
    }else{
    for (var i = 0; i < finalsame.length; i++) {
      let p = document.createElement('p');
      p.innerText = `Route No: ${finalsame[i].route}, Type: ${finalsame[i].type}, Stops: ${finalsame[i].stations.join(', ')}`;
      resultParagraph.appendChild(p);
      }
    }
  }
}
finall(data1,data2);
});
document.getElementById("resetButton").addEventListener('click', function() {
  document.getElementById("busdata1").selectedIndex = 0; 
  document.getElementById("busdata2").selectedIndex = 0; 
  document.getElementById("resultParagraph").innerHTML = ''; 
});
