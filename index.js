var fs=require('fs');
var data=fs.readFileSync('states.json');
const express = require("express");
const app = express();
const cors=require('cors');
var states=JSON.parse(data);


const port = 3000;

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`)
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
	var word=request.params.states;
	console.log(word)
	word=word.charAt(0).toUpperCase()+word.slice(1).toLowerCase();
	console.log(word);
	//console.log(elements[word]);
	if(states[word])
	{
		var reply=states[word];
		
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

