import { elAdminPanel, elUserContainer, elUserTemplate } from "./html-elements.js";

export function uiChangerUsers(data) {
    elUserContainer.innerHTML = "";
    
    data.forEach(element => {
        
        const clone = elUserTemplate.cloneNode(true).content;
        const elTitle = clone.querySelector(".userTitle")
        const elUID = clone.querySelector(".userPID")
        const elUserTitle = clone.querySelector(".userNametitle")
        const elUserWebsite = clone.querySelector(".userWebsite")
        const elLi = clone.querySelector("li")

        elTitle.innerText = element.name;
        elUID.innerText = element.id;
        elUserTitle.innerText = element.username;
        elUserWebsite.innerText = element.website;
        elLi.id = element.id
        elTitle.id = element.id
        elUID.id = element.id;
        elUserTitle.id = element.id;
        elUserWebsite.id = element.id

        elUserContainer.append(clone)
    });
}