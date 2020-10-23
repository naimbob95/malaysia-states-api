var fs=require('fs');
var data=fs.readFileSync('states.json');
const express = require("express");
const app = express();
const cors=require('cors');
var states=JSON.parse(data);


const port = process.env.PORT || 3000;

app.listen(port, () => {
	console.log(`Example app listening at ${port}`)
  })

app.use(express.static('public'));
app.use(cors());
app.get('/states',alldata);
function alldata(request,response)
{
    response.send(states);
}
app.get('/states/:states/',searchstates);
function searchstates(request,response)
{
	var keyword=request.params.states;
	keyword=keyword.charAt(0).toUpperCase()+keyword.slice(1).toLowerCase();
	
	//console.log(elements[word]);
	if(states[keyword])
	{
		var reply=states[keyword];
		
	}
	else
	{
		var reply={
			status:"Not Found"
		}
	}
    // console.log(reply.boil);
	response.send(reply);

}

