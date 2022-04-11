async function completed() {
  try {
    let res = await fetch("https://api.openbrewerydb.org/breweries");
    let res1 = await res.json();
    // console.log(res1);
    for (var i = 0; i < res1.length; i++) {
      work(
        res1[i].name,
        res1[i].brewery_type,
        res1[i].address_2,
        res1[i].address_3,
        res1[i].website_url,
        res1[i].phone
      );
    }
  } catch (error) {
    console.log(error);
  }
}

let total = create("div", "box");
let divcontainer = create("div", "container");
let divrow = create("div", "row");
let title = create("h3", "title");
title.innerHTML = "Implement the Open Brewery API using async/await with fetch";

let title1 = create("h3", "title1");
title1.innerHTML =
  "Displaying the breweries Name,Type,Address,Website URL,Phone number";

let Mtdiv = create("div", "MT");

let searchbar = create("input", "searchbar");
searchbar.setAttribute("placeholder", "Search by name");
searchbar.setAttribute("id", "Searchtext");

let searchbutton = create("button", "button");
searchbutton.innerHTML = "SEARCH";
searchbutton.addEventListener("click", (fun) => {
  fun.preventDefault();
  redirect();
});
// searchbutton.setAttribute("click")

divcontainer.append(title, title1, searchbar, searchbutton, Mtdiv, divrow);
total.append(divcontainer);
document.body.append(total);

completed();

function create(tag, class1) {
  var tem1 = document.createElement(tag);
  tem1.setAttribute("class", class1);
  return tem1;
}

function work(name1, type1, address1, address2, website, phone) {
  let divcol = create("div", "col-lg-6");
  divcol.setAttribute("id", "col");
  let nameh = create("h5", "h5name");
  nameh.innerHTML = `Name  : <span> ${name1} </span>`;

  let hr = create("hr", "hrline");

  let type = create("h5", "h5name");
  type.innerHTML = `Type  : <span> ${type1} </span>`;

  let hr1 = create("hr", "hrline");

  let address = create("h5", "h5name");
  address.innerHTML = `Address  : <span> ${
    address1 + " " + address2
  }   </span>`;

  let hr2 = create("hr", "hrline");

  let web = create("h5", "h5name");
  web.innerHTML = `Website URL  : <span> ${website}   </span>`;

  let hr3 = create("hr", "hrline");

  let phonenum = create("h5", "h5name");
  phonenum.innerHTML = `Phone number : <span> ${phone}   </span>`;

 

  divcol.append(nameh, hr, type, hr1, address, hr2, web, hr3, phonenum);
  divrow.append(divcol);
}

async function redirect() {
  let direct = document.getElementById("Searchtext").value;
  let re = await fetch(
    `https://api.openbrewerydb.org/breweries?by_name=${direct}`
  );
  let re1 = await re.json();
  let ansdiv = create("div", "ans");
  let h6 = create("h6", "ans1");
  h6.innerHTML = `Name : ${re1[0].name}

    Type : ${re1[0].brewery_type}
<br>
    Address : ${re1[0].address_2}
<br>
    Website URL : ${re1[0].website_url}
<br>
    phone number : ${re1[0].phone}`;

  ansdiv.append(h6);
  Mtdiv.append(ansdiv);
}
