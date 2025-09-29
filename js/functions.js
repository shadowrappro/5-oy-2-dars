import { data } from "./data.js";
import { elInfoEmail, elInfoName, elInforBS, elInforCatchPrase, elInforCity, elInforCompName, elInforID, elInforLat, elInforLng, elInforPhone, elInforStreet, elInforSuite, elInforWebsite, elInforZipcode } from "./html-elements.js";

export function getUser(id) {
    let selectUser = data.find(element => element.id == id)

    console.log(selectUser);
    

    elInforID.innerText = selectUser.id;
    elInfoName.innerText = selectUser.name;
    elInfoEmail.innerText = selectUser.email;
    elInforPhone.innerText = selectUser.phone;
    elInforWebsite.innerText = selectUser.website;
    elInforStreet.textContent = selectUser.address.street;
    elInforSuite.textContent = selectUser.address.suite;
    elInforCity.textContent = selectUser.address.city;
    elInforZipcode.textContent = selectUser.address.zipcode;
    elInforLat.textContent = selectUser.address.geo.lat;
    elInforLng.textContent = selectUser.address.geo.lng;
    elInforCompName.textContent = selectUser.company.name;
    elInforCatchPrase.textContent = selectUser.company.catchPhrase;
    elInforBS.textContent = selectUser.company.bs;
}