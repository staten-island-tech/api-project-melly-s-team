const shortdef;
//https://www.dictionaryapi.com/api/v3/references/collegiate/json/voluminous?key=your-api-key
const api = "https://www.dictionaryapi.com/api/v3/references/collegiate/json/";
const apiKey = "?key=dc3cdce9-25bd-4b2f-93da-ff18fe638dfd";

const input;

function setup() {
  const button = select("#submit");
  button.mousePressed(wordAsk);

  input = select("#word");
}

function wordAsk() {
  const url = api + input.value() + apiKey;
  loadJSON(url, gotData);
}

function gotData(data) {
  shortdef = data;
}
