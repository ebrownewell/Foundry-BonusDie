import {registerSettings} from "./Settings.js";
import {handle} from "./BonusDice.js";
import {socketsHandle} from "./socketsHandler.js";

Hooks.on("init", async () => await registerSettings());

Hooks.on("ready", () => {
    //event trigger for updating the data un the user side
    game.socket.on('module.BonusDie', socketsHandle());
})

Hooks.on("renderPlayerList", (playerList, html, players) => {
    html.find('ol').children().each(handle(players));
});