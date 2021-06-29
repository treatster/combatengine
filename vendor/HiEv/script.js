// If flag exists then return value, else return false
window.Flag = function (Fnam) {
    if (State.variables.Flags == undefined) {
        State.variables.Flags = {};
    } else if (State.variables.Flags[Fnam.toLowerCase()] !== undefined) {
        return State.variables.Flags[Fnam.toLowerCase()];
    };
    return false;
};

//config saves

Config.saves.onSave = function (save, details) {
	if (details.type === "slot") {
		save.title = prompt("Enter Save Slot Title:", save.title);
	}
};

Config.saves.onLoad = function (save) {
	console.log("Loaded game title: " + save.title);
	console.log("Loaded game version: " + save.version);
};	