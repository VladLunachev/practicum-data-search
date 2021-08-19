// russian lang test
// document.querySelector('html').lang = "ru"

function modalPosition() {
  var gap;
  var top;
  var width;
  var height;
  gap = 1;
  top = document.querySelector('#search').getBoundingClientRect().top + document.querySelector('#search').getBoundingClientRect().height + gap;
  // let left = document.querySelector('.ais-SearchBox').getBoundingClientRect().left;
  width = Math.round(document.querySelector('.ais-SearchBox').getBoundingClientRect().width);
  height = window.innerHeight - top - 40;
  // let height = 351; // примерный размер секции result
  document.querySelector('#hits-container').style.top = `${gap + 40}px`;
  // document.querySelector('#hits-container').style.left = `${left}.px`;
  document.querySelector('#hits-container').style.width = `${width}px`;
  document.querySelector('#hits-container').style.height = `${height}px`;
  document.querySelector('#hits-container').style.position = 'absolute';
}

function searchListeners() {
  document.querySelector('section.trainer-footer').addEventListener('click', (e) => {
    // console.log(e.target);
    // if (
    //   e.target !==
    //   document.querySelector(
    //     '#mount > div > div.page.trainer-page > div.page__content > div > div > section.trainer > section > div > div:nth-child(2) > div > div:nth-child(2) > section.trainer-result.trainer-result_type_python-ws > section > div > button.button.button_size_m.button_type_icon.button_theme_light.button_view_clear.button_has-hover-color.button_with-scaling-background.scale-fade-enter-done'
    //   )
    // ) {
    //   closeSearch();
    // }
    closeSearch();
  });
  document.querySelector('section.trainer-theory__tabs').style.zIndex = 300;
  document.querySelector('section.trainer-footer').style.marginBottom = '40px';
  document.querySelector('section.trainer-footer').style.zIndex = 250;
  // document.querySelector('.notification').style.zIndex = 350; // makes notification above search (2 places)
  document.querySelector('#close-search').addEventListener('click', () => {
    closeSearch();
  });
  document.addEventListener('keyup', (e) => {
    if (e.code == 'Escape' || (e.shiftKey && e.key == 'Enter') || (e.ctrlKey && e.key == 'Enter')) {
      closeSearch();
    }
  });
  document.addEventListener('keyup', (e) => {
    if (e.ctrlKey && e.code == 'Semicolon') {
      document.querySelector('.ais-SearchBox-input').focus();
    }
  });
  document.querySelector('.ais-SearchBox-input').addEventListener('focusin', () => {
    modalPosition();
    document.querySelector('#hits-container').style.display = 'flex';
  });
}

function startSearch() {
  var searchSection = document.createElement('section');
  searchSection.id = 'search';
  document.querySelector('.trainer-result').parentNode.insertBefore(searchSection, document.querySelector('.trainer-result'));

  // language conditional ru/en
  if (document.querySelector('html').lang == 'en') {
    var indexName = 'practicum_data_us_search';
    var placeholder = 'Forgot something? Search here!';
    var empty = `<div class="markdown markdown_type_theory markdown_size_small"><p class="search-empty">Sorry. No snippets on this topic yet. You can <a class="search-note-link" target="_blank" href='https://rebrand.ly/learning-support'>ask our learning support</a> about it.</p></div>`;
    document.querySelector('#search').innerHTML = `
    <div id="search-container">
    <svg class="ais-SearchBox-submitIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
    <path
    d="M26.804 29.01c-2.832 2.34-6.465 3.746-10.426 3.746C7.333 32.756 0 25.424 0 16.378 0 7.333 7.333 0 16.378 0c9.046 0 16.378 7.333 16.378 16.378 0 3.96-1.406 7.594-3.746 10.426l10.534 10.534c.607.607.61 1.59-.004 2.202-.61.61-1.597.61-2.202.004L26.804 29.01zm-10.426.627c7.323 0 13.26-5.936 13.26-13.26 0-7.32-5.937-13.257-13.26-13.257C9.056 3.12 3.12 9.056 3.12 16.378c0 7.323 5.936 13.26 13.258 13.26z"
    ></path>
    </svg>
    <button id="close-search" title="Click to close or press Esc.">✕</button>
    </div>
    <div id="hits-container">
    <div id="search-note">
    <div id="search-note-card" class="markdown markdown_type_theory markdown_size_small">
    <span class="search-note-title"><b>You can search here for any:</b></span>
    <p class="search-note-text">● action you want to perform (like "add element" or "count unique values")<br> ● part of code (like "loc" or "format")<br> ● term or abbreviation that we use in our course materials (like "variable" or "df")<br></p>
    <br>
    <span class="search-note-title"><b>A note on memorization strategy:</b></span>
    <p class="search-note-text">Understanding code logic, their concepts, and actions that you want to perform with them is more important than memorizing specific code syntax. Feel free to use the search bar and notes right away if you can't remember something, and don't feel bad about it. This knowledge will settle in your memory as you go through this course. <a class="search-note-link" href="https://rebrand.ly/memorization-strategy-explainer" target="_blank">You can watch this 5-minute video that explains it in more detail.</a></p>
    <br>
    <span class="search-note-title"><a class="search-note-link" href="https://rebrand.ly/clipboardfusion" target="_blank"><b>Also, you can try out the stand-alone app for creating a searchable personal knowledge base.</b></a></span>
    <br>
    <br>
    <span class="search-note-title"><b>Keyboard shortcuts:</b></span>
    <p class="search-note-text">[ Ctrl+; ] to activate search <br> [ Ctrl+' ] to hide search <br> [ Esc ] to close search results <br> [ Shift+Enter ] to run code (search will automatically close) <br> [ Ctrl+Enter ] to submit answer (search will automatically close)</p>
    </div>
    <div id="search-note-spacer"></div>
    </div>
    <div id="search-hits"></div>
    </div>
    `;
  } else {
    /*================== ENG to RU + change rebrandly links to RU sources =================*/
    var indexName = 'practicum_data_ru_search';
    var placeholder = 'Поиск';
    var empty = `<div class="markdown markdown_type_theory markdown_size_small"><p class="search-empty">К сожалению, на этот запрос мы не нашли подсказок. <br>Вы можете <a class="search-note-link" target="_blank" href='https://rebrand.ly/learning-support-ru'> обратиться в службу учебной поддержки.</a></p></div>`;
    document.querySelector('#search').innerHTML = `
    <div id="search-container">
    <svg class="ais-SearchBox-submitIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
    <path
    d="M26.804 29.01c-2.832 2.34-6.465 3.746-10.426 3.746C7.333 32.756 0 25.424 0 16.378 0 7.333 7.333 0 16.378 0c9.046 0 16.378 7.333 16.378 16.378 0 3.96-1.406 7.594-3.746 10.426l10.534 10.534c.607.607.61 1.59-.004 2.202-.61.61-1.597.61-2.202.004L26.804 29.01zm-10.426.627c7.323 0 13.26-5.936 13.26-13.26 0-7.32-5.937-13.257-13.26-13.257C9.056 3.12 3.12 9.056 3.12 16.378c0 7.323 5.936 13.26 13.258 13.26z"
    ></path>
    </svg>
    <button id="close-search" title="Click to close or press Esc.">✕</button>
    </div>
    <div id="hits-container">
    <div id="search-note">
    <div id="search-note-card" class="markdown markdown_type_theory markdown_size_small">
    <span class="search-note-title"><b>Здесь вы сможете искать любые:</b></span>
    <p class="search-note-text">● действия, которые вы хотите выполнить (например, "добавить элемент" или "посчитать уникальные значения")<br>● фрагменты кода (например, "loc" или "format")<br>● термины и сокращения (например, "переменная" или "df")<br></p>
    <br>
    <span class="search-note-title"><b>Небольшой совет по стратегии запоминания:</b></span>
    <p class="search-note-text">Понимать логику кода, его концепции и действия, которые вы хотите выполнить — важнее, чем пытаться запоминать синтаксис кода. Если вспомнить какие-то детали не получается, без колебаний пользуйтесь поиском. Эти знания постепенно уложатся в вашей памяти по мере прохождения курса. <a class="search-note-link" href="https://rebrand.ly/memorization-advice-ru" target="_blank">Вот 5-минутное видео, раскрывающее этот совет подробнее.</a></p>
    <br>
    <span class="search-note-title"><a class="search-note-link" href="https://rebrand.ly/clipboardfusion-ru" target="_blank"><b>Также вы можете попробовать отдельное приложение для поиска и создания своей базы знаний.</b></a></span>
    <br>
    <br>
    <span class="search-note-title"><b>Клавиатурные сокращения:</b></span>
    <p class="search-note-text">[ Ctrl+; ] активировать поиск <br> [ Ctrl+' ] спрятать поиск <br> [ Esc ] скрыть окно результатов поиска <br> [ Shift+Enter ] запустить выполнение кода (поиск автоматически закроется) <br> [ Ctrl+Enter ] отправить ответ на проверку (поиск автоматически закроется) </p>
    </div>
    </div>
    <div id="search-hits"></div>
    </div>
    `;
  }

  const searchClient = algoliasearch('JAGBS2F5BN', '4bcd001dfae68e583fe1e651bad00297');
  const search = instantsearch({
    indexName: indexName,
    searchClient,
    routing: false,
    searchFunction: function (helper) {
      var searchResults = document.querySelector('#search-hits');
      if (helper.state.query === '') {
        searchResults.style.display = 'none';
        document.querySelector('#search-note').style.display = 'block';
        return;
      }
      helper.search();
      searchResults.style.display = 'block';
      document.querySelector('#search-note').style.display = 'none';
    },
  });
  search.addWidgets([
    instantsearch.widgets.searchBox({
      container: '#search-container',
      placeholder: placeholder,
      autofocus: false,
      showReset: false,
      showSubmit: false,
      showLoadingIndicator: false,
    }),
  ]);
  search.addWidgets([
    instantsearch.widgets.hits({
      container: '#search-hits',
      escapeHTML: false,
      templates: {
        item: `
        <div class='search-hits'>
        <pre class="search-hit-text search-hit-description hljs-comment">{{#helpers.highlight}}{ "attribute": "description" }{{/helpers.highlight}}</pre>
        <pre class="search-hit-text search-hit-code">{{#helpers.highlight}}{ "attribute": "body" }{{/helpers.highlight}}</pre>
        </div>`,
        empty: empty,
      },
    }),
  ]);
  search.addWidgets([
    instantsearch.widgets.configure({
      hitsPerPage: 100, //* INFO
    }),
  ]);
  search.start();
}

function closeSearch() {
  document.querySelector('#hits-container').style.display = 'none';
  document.querySelector('.ais-SearchBox-form').reset();
  document.querySelector('.ais-SearchBox-input').blur();
  document.querySelector('#hits-container').style.display = 'none';
}

function init() {
  var loading = setInterval(initSearch, 200);
  function initSearch() {
    console.log(document.querySelector('.trainer-result'));
    console.log(document.querySelector('section.trainer-theory__tabs'));
    console.log(document.querySelector('section.trainer-footer'));
    console.log(document.querySelector('.icon-play'));
    console.log(document.querySelector('.trainer-footer__solution-button'));
    console.log(document.querySelector('.trainer-footer__check-button'));
    if (
      document.querySelector('.trainer-result') !== null &&
      document.querySelector('section.trainer-theory__tabs') !== null &&
      document.querySelector('section.trainer-footer') !== null &&
      document.querySelector('.icon-play') !== null &&
      document.querySelector('.trainer-footer__solution-button') !== null &&
      document.querySelector('.trainer-footer__check-button') !== null
    ) {
      clearInterval(loading);
      console.log('search start');
      startSearch();
      modalPosition();
      document.querySelector('#hits-container').style.display = 'none';
      searchListeners();
    }
  }
}

window.addEventListener('load', init);

// lessons_urls = [];
// if (window.location.href in lessons_urls) {
//   window.addEventListener('load', init);
// }
