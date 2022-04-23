// function ajax()
// {
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function()
{
    if(this.readyState==4 && this.status==200)
    {
        var response = JSON.parse(this.responseText);
        var output = "";
        for(var i=0;i<response.length;i++)
        {
            output += "<input type=checkbox style=margin-left:2%>       "+ response[i].title+ "<br>";
        }
        document.getElementById("demo").innerHTML= output;
     }
     promise();
}
xhttp.open("GET","list.json",true);
xhttp.send();
// }
/* <checkbox label="Your checkbox" checked="true"/> */
function promise()
{
 if(response[i].completed==true)
        {
           output = "<checkbox checked=true/>";
            
        }
 else
 {
    output = "<checkbox checked= false/>";
     
 }
}