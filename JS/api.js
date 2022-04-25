var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function()
{
    if(this.readyState==4 && this.status==200)
    {
        var response = JSON.parse(this.responseText);
        var output = "";
        for(var i=0;i<response.length;i++)
        {
            output += '<input type="checkbox" id="ck"  value="' + response[i].id + '" '
            + (response[i].completed ? 'checked onclick="return false;"' : '' ) + '>'
            + response[i].title
            + '<br />';
            
        }
        document.getElementById("div").innerHTML= output; 
    }
}
xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
xhttp.send();

// CHECKBOX VALIDATION
// var checkBoxes = document.getElementById("ck");
// let selectedItems = [];
//         function check()
//         {
//             checkBoxes.forEach(item => {
//                 if(item.checked){
//                 selectedItems.push(item);
//                 }
//             });
//         }
// function validate()
// {
//     var promise= new Promise(function(resolve,reject){
//         if(selectedItems.length == 5){
//             resolve("Congrats. 5 Tasks have been Successfully Completed");
//         }
//         else{
//             reject("Error occured");
//         }
//     });
// }
// check().then(validate).catch(function(e)
// {console.log(e);})

function selectedBoxes(f) {
	let selectedBoxesArr = [];
	let inputFields = f.getElementById('ck');
	let inputFieldsNumber = inputFields.length;

	for(let i=0; i<inputFieldsNumber; i++) {
		if(
			inputFields[i].type == 'checkbox' &&
			inputFields[i].checked == true
		) selectedBoxesArr.push(inputFields[i].value);
	}
	return selectedBoxesArr;
}

var getRecipesButton = document.getElementById('div');
getRecipesButton.addEventListener("click", function(){
	let selectedCheckBoxes = selectedBoxes(this.form);
	alert(selectedCheckBoxes);
});
