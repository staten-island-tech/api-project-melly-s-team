import { DOMSelectors } from "./DOM";
unirest
  .get("https://wordsapiv1.p.mashape.com/words/soliloquy")
  .header("X-Mashape-Key", "<required>")
  .header("Accept", "application/json")
  .end(function (result) {
    console.log(result.status, result.headers, result.body);
  });
