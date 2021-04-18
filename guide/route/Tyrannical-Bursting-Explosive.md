---
layout: page
title: Укрепленный, Злопамятный, Вулканический
last_update: 2020-01-11 09:00:00
game_version: 9.0.0 Shadowlands
author: Rodriguezz
toc: true
---

### Шпили перерождения

<div data-target="#Spires_of_Ascension-collapse" class="dungeon-header Spires_of_Ascension"></div>

Вся сложность подземелья с аффиксом {{ site.data.mplus.Spiteful }} сводится к тому, что в паках мобов будут мобы с разным количеством здоровья, бойцам ближнего боя нужно быть внимательным когда мобы начинают умирать и использовать контроль по духам чтоб не умереть.

  <div class="tabs" id="tabs-1">
    <div class="tabs__nav">
      <a class="tabs__link tabs__link_active" href="#content-1">Маршрут без пропуска</a>
    </div>
    <div class="tabs__content">
      <div class="tabs__pane tabs__pane_show" id="content-1">
        <iframe src="https://wago.io/3OcOlyr6Q/embed.html" frameborder="0" allowfullscreen="0" scrolling="no" style="width: 100%; height: 795px"></iframe>
      </div>
      </div>
  </div>

  <br><br>

### Halls of Atonement

  <div class="tabs" id="tabs-2">
    <div class="tabs__nav">
      <a class="tabs__link tabs__link_active" href="#content-4">Route with no Skips</a>
      <a class="tabs__link" href="#content-5">Route with Skip</a>
    </div>
    <div class="tabs__content">
      <div class="tabs__pane tabs__pane_show" id="content-4">
        <iframe src="https://wago.io/m0TKn7KHa/embed.html" frameborder="0" allowfullscreen="0" scrolling="no" style="width: 100%; height: 795px"></iframe>
      </div>
      <div class="tabs__pane" id="content-5">
        <iframe src="https://wago.io/WWrhq6pAI/embed.html" frameborder="0" allowfullscreen="0" scrolling="no" style="width: 100%; height: 795px"></iframe>
      </div>
    </div>
  </div>
  
<br><br>
	
  <div class="tabs" id="tabs-3">
    <div class="tabs__nav">
      <a class="tabs__link tabs__link_active" href="#content-7">Вкладка 1</a>
      <a class="tabs__link" href="#content-8">Вкладка 2</a>
      <a class="tabs__link" href="#content-9">Вкладка 3</a>
    </div>
    <div class="tabs__content">
      <div class="tabs__pane tabs__pane_show" id="content-7">
        Содержимое 1...
      </div>
      <div class="tabs__pane" id="content-8">
        Содержимое 2...
      </div>
    </div>
  </div>

  <script>
    var $tabs = function (target) {
      var
        _elemTabs = (typeof target === 'string' ? document.querySelector(target) : target),
        _eventTabsShow,
        _showTab = function (tabsLinkTarget) {
          var tabsPaneTarget, tabsLinkActive, tabsPaneShow;
          tabsPaneTarget = document.querySelector(tabsLinkTarget.getAttribute('href'));
          tabsLinkActive = tabsLinkTarget.parentElement.querySelector('.tabs__link_active');
          tabsPaneShow = tabsPaneTarget.parentElement.querySelector('.tabs__pane_show');
          // если следующая вкладка равна активной, то завершаем работу
          if (tabsLinkTarget === tabsLinkActive) {
            return;
          }
          // удаляем классы у текущих активных элементов
          if (tabsLinkActive !== null) {
            tabsLinkActive.classList.remove('tabs__link_active');
          }
          if (tabsPaneShow !== null) {
            tabsPaneShow.classList.remove('tabs__pane_show');
          }
          // добавляем классы к элементам (в завимости от выбранной вкладки)
          tabsLinkTarget.classList.add('tabs__link_active');
          tabsPaneTarget.classList.add('tabs__pane_show');
          document.dispatchEvent(_eventTabsShow);
        },
        _switchTabTo = function (tabsLinkIndex) {
          var tabsLinks = _elemTabs.querySelectorAll('.tabs__link');
          if (tabsLinks.length > 0) {
            if (tabsLinkIndex > tabsLinks.length) {
              tabsLinkIndex = tabsLinks.length;
            } else if (tabsLinkIndex < 1) {
              tabsLinkIndex = 1;
            }
            _showTab(tabsLinks[tabsLinkIndex - 1]);
          }
        };

      _eventTabsShow = new CustomEvent('tab.show', { detail: _elemTabs });

      _elemTabs.addEventListener('click', function (e) {
        var tabsLinkTarget = e.target;
        // завершаем выполнение функции, если кликнули не по ссылке
        if (!tabsLinkTarget.classList.contains('tabs__link')) {
          return;
        }
        // отменяем стандартное действие
        e.preventDefault();
        _showTab(tabsLinkTarget);
      });

      return {
        showTab: function (target) {
          _showTab(target);
        },
        switchTabTo: function (index) {
          _switchTabTo(index);
        }
      }

    };

    (function () {
      var
        nameKey = 'mytabs2',
        mytabs = {},
        mytabsStorage = {},
        listTabs = document.querySelectorAll('.tabs');

      for (var i = 0, length = listTabs.length; i < length; i++) {
        if (listTabs[i].id) {
          mytabs[listTabs[i].id] = $tabs(listTabs[i]);
        }
      }
      if (localStorage.getItem(nameKey)) {
        mytabsStorage = JSON.parse(localStorage.getItem(nameKey));
        for (var key in mytabsStorage) {
          if (mytabs.hasOwnProperty(key)) {
            mytabs[key].showTab(document.querySelector('[href="' + mytabsStorage[key] + '"]'));
          }
        }
      }
      document.addEventListener('tab.show', function (e) {
        mytabsStorage[e.detail.closest('.tabs').getAttribute('id')] = e.detail.querySelector('.tabs__link_active').getAttribute('href');
        localStorage.setItem(nameKey, JSON.stringify(mytabsStorage));
      })
    })();
  </script>				
						