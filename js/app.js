import { data, jsonApi } from "./data.js";
import { getUser } from "./functions.js";
import { elAdminButton, elAdminId, elAdminName, elAdminPanel, elForgotAdmin, elForgotUser, elInformationPage, elUserButton, elUserContainer, elUserDivContainer, elUserId, elUserName, elUserPanel } from "./html-elements.js";
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
        elUserDivContainer.classList.remove("hidden")
        elAdminName.value = "";
        elAdminId.value = "";
    }
})

elUserContainer.addEventListener("click", async (evt) => {
    if (evt.target.id) {
        getUser(evt.target.id)
    }
    evt.preventDefault()
    elInformationPage.classList.remove("hidden")
    elUserDivContainer.classList.add("hidden")
})

elUserButton.addEventListener("click", (evt) => {
    elInformationPage.classList.remove("hidden")
    elUserPanel.classList.add("hidden")

    const userPanelId = elUserId.value;
    getUser(userPanelId);

    elUserId.value = ""
    elUserName.value = ""
}) 