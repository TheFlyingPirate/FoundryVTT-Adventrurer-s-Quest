import ADQCardSheet from "./module/sheets/adqCardSheet.js"

Hooks.once("init", function(){
    console.log("Adventure Quest | Initializing")
    Items.unregisterSheet("core", ItemSheet);
    Items.registerSheet("adventurersquest", ADQCardSheet, {makeDefault: true});
})