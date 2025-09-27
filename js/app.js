import { data, jsonApi } from "./data.js";
import { elAdminButton, elAdminId, elAdminName, elAdminPanel, elForgotAdmin, elForgotUser, elUserContainer, elUserPanel } from "./html-elements.js";
import { uiChangerUsers } from "./ui-changer.js";

elForgotAdmin.addEventListener("click", () => {
    elUserPanel.classList.add("hidden")
    elAdminPanel.classList.remove("hidden")
})

elForgotUser.addEventListener("click", () => {
    elUserPanel.classList.remove("hidden")
    elAdminPanel.classList.add("hidden")
})

elAdminButton.addEventListener("click", () => {
    elAdminPanel.classList.add("hidden")
    let name = elAdminName.value
    let id = elAdminId.value;
    
    if (name === "ntadmin" && id == 8963) {
        uiChangerUsers(data);
        elAdminName.value = "";
        elAdminId.value = "";
    }
})

elUserContainer.addEventListener("click", (evt) => {
    console.log(evt.target.id);
    let newApi = `${jsonApi}/${evt.target.id}`
    console.log(newApi);
    
})