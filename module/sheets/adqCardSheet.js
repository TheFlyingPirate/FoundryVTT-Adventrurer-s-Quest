export default class ADQCardSheet extends ItemSheet {
    get template() {
        return "systems/adventurersquest/templates/sheets/adqCardSheet.html";
    }
    getData(){
        const data = super.getData();
        data.config = CONFIG.adventurersquest;
        console.log(data);
        return data;
    }
}