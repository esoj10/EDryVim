import * as authorizationAPI from "./EP/authorization.command";
import * as clientServiceAPI from "./API/clientService.command"
import * as safetyServiceAPI from "./API/safetyService.command"
import * as utilsAPI from "./API/utils.command"
import cypress = require("cypress");

//Cypress.Commands.add("",); 

/*
    Autorization
*/
Cypress.Commands.add("authorizationAPApi", authorizationAPI.authorization);

/*
    Client Service
*/
Cypress.Commands.add("getMessageAcceptanceReportAPI",
    clientServiceAPI.getMessageAcceptanceReport);

/*
    Safety Service
*/
Cypress.Commands.add("sendNotificationsForNewModuleAvailableAPI",
    safetyServiceAPI.sendNotificationsForNewModuleAvailable);


/*
    utils
*/
Cypress.Commands.add("bodyRequestAPI", utilsAPI.bodyRequest);
Cypress.Commands.add("lstAPI", utilsAPI.lst);
Cypress.Commands.add("recAPI", utilsAPI.rec);