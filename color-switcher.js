//Build a background color switcher

/*
1. Initialise a function expression to variable "changeStyleOfPage" to be used as the function within the event. Since we are
changing the color of the body, saved it in reference "body". This will be used in the switch/case condtions when the value of select changes.
"selectElement" is also defined globally because it is used through a few scopes.

2. Initialised a variable for the selected index of the select element. So that within the switch conditions when the selected index is a specific
value, the code block within the case will style the background color and color of the label when certain select values
are chosen by the user

3. Called an onchange event on the "selectElement" variable and assigned the "changeStyleOfPage" function to the event.

*/

const selectElement = document.querySelector("#colors");

const changeStyleOfPage = () => {
	const body = document.querySelector("body");
	const labelOfSelect = document.querySelector("label");
	const valueOfSelect = selectElement.options[selectElement.selectedIndex];

		switch (valueOfSelect.text) {
			case "Blue":
				styleChanges(body, labelOfSelect, valueOfSelect, "White");
				break;
			case "Red":
				styleChanges(body, labelOfSelect, valueOfSelect, "White");
				break;
			case "Purple":
				styleChanges(body, labelOfSelect, valueOfSelect, "White");
				break;
			case "White":
				styleChanges(body, labelOfSelect, valueOfSelect, "Black");
				break;
			case "Green":
				styleChanges(body, labelOfSelect, valueOfSelect, "White");
				break;
			}
};

const styleChanges = (body, label, value, color) => {
	body.style.backgroundColor = value.text;
	label.style.color = color;
}

selectElement.onchange = changeStyleOfPage;