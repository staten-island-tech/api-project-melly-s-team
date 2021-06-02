import { DOMSelectors } from "./DOM.js";

const key = "dc3cdce9-25bd-4b2f-93da-ff18fe638dfd";

const listen = function () {
  DOMSelectors.searchForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const searchParams = DOMSelectors.searchArea.value;

    const metaWord = data[0].meta.id;
    const shortDefi = data[8].shortdef;
    const searchQuery = async function () {
      try {
        const response = await fetch(
          `https://www.dictionaryapi.com/api/v3/references/collegiate/json/${searchParams}?key=${key}`
        );
        const data = await response.json();

        DOMSelectors.insertAdjacentHTML(
          "beforeend",
          `<form id="search-form" class="search-form">
            <textarea name="search-area" id="search-area" placeholder="search for a word"></textarea>
            <input type="submit" class="submit-button" />
          </form>
          <p>word:${metaWord} definition:${shortDefi}
          </p>`
        );
      } catch (error) {
        console.log(error);
        alert("Hey something went wrong");
      }
    };
    searchQuery();
  });
};

listen();
