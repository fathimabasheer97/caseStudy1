var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function()
{
    if(this.readyState==4 && this.status==200)
    {
        var response = JSON.parse(this.responseText);
        var output = "";
        for(var i=0;i<response.length;i++)
        {
            output +=  
            '<input type="checkbox" id="ck"  value="' + response[i].id + '" '
            + (response[i].completed ? 'checked disabled onclick="return false;"' : '' ) + '>'
            + response[i].title
            + '<br />';
            
        }
        document.getElementById("div").innerHTML= output; 
    }
}
xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
xhttp.send();

var promise = new Promise(function(resolve,reject){

    window.onload = function() {
       setTimeout(loadAfterTime, 1000);
    }; 
 

    function loadAfterTime(){
       var inputElems = document.querySelectorAll("#ck");
       console.log(inputElems);

       if(inputElems)
       {
          console.log(inputElems);
   
       }
       else{
           console.log("empty");
       }     
       var count = 0;
           inputElems.forEach(function(checkbox) {
               checkbox.addEventListener('click', function() {
                   if (this.checked) {
                       console.log("Checkbox is checked..");
                       count++;
                   } else {
                       count--;
                       console.log("Checkbox is not checked..");
                   }
                   console.log(count);
                   if(count==5)
                   {
                       resolve("Congratulations, 5 Tasks have been Successfully Completed");
                   }
                   
   
               });
           });
       
           promise.then(
               function(result) { alert(result);},
             );

   }
       

});



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
//         return new Promise(function(resolve,reject){
//         if(selectedItems.length == 5){
//             resolve("Congrats. 5 Tasks have been Successfully Completed");
//         }
//         else{
//             reject("Error occured");
//         }
//     });
// }

// $(document).ready(function() {
    
//     $.getJSON("https://jsonplaceholder.typicode.com/todos", function(data) {
//         var items = [];
//         items.push("<ol>");
//          $.each( data, function( key, val ) {
//              var checked = (val.completed) == true ? "checked disabled" : "";
//              items.push("<li>" + `<input type = checkbox name="checkbox1" id = "checkbox1" ${checked}>` + val.title + "</li>");         
            
//              });

//       items.push("</ol>");
//       var checkboxes = document.getElementById("checkboxes");
//       checkboxes.innerHTML = items;
      

//       });      
//     });       

// var promise = new Promise(function(resolve,reject){

//  window.onload = function() {
//     setTimeout(loadAfterTime, 1000);
//  }; 


//  function loadAfterTime(){
//     var inputElems = document.querySelectorAll("#checkbox1");
//     console.log(inputElems);

//     if(inputElems)
//     {
//        console.log(inputElems);

//     }
//     else{
//         console.log("empty");
//     }     
//     var count = 0;
//         inputElems.forEach(function(checkbox) {
//             checkbox.addEventListener('click', function() {
//                 if (this.checked) {
//                     console.log("Checkbox is checked..");
//                     count++;
//                 } else {
//                     count--;
//                     console.log("Checkbox is not checked..");
//                 }
//                 console.log(count);
//                 if(count==5)
//                 {
//                     resolve("Congratulations, 5 Tasks have been Successfully Completed");
//                 }
                

//             });
//         });
    
//         promise.then(
//             function(result) { alert(result);},
//           );

// }
    

// });
// // check().then(validate).catch(function(e)
// // {console.log(e);})


// // var count =0;
// // function checkCounter(){

// //     let promise = new Promise(function(resolve,reject){
// //         if(count==5){
// //             resolve("Congrats");
// //         }

// //     })
// //     promise.then(function(s){
// //         alert(s);
// //     })

// // }

// // function selectedBoxes(f) {
// // 	let selectedBoxesArr = [];
// // 	let inputFields = f.getElementById('ck');
// // 	let inputFieldsNumber = inputFields.length;

// // 	for(let i=0; i<inputFieldsNumber; i++) {
// // 		if(
// // 			inputFields[i].type == 'checkbox' &&
// // 			inputFields[i].checked == true
// // 		) selectedBoxesArr.push(inputFields[i].value);
// // 	}
// // 	return selectedBoxesArr;
// // }

// // var getRecipesButton = document.getElementById('div');
// // getRecipesButton.addEventListener("click", function(){
// // 	let selectedCheckBoxes = selectedBoxes(this.form);
// // 	alert(selectedCheckBoxes);
// // });
