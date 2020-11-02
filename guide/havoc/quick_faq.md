---
layout: page
title: Кратко и Быстро
last_update: 2020-01-11 09:00:00
game_version: 9.0.0 Shadowlands
author: Rodriguezz
toc: true
---

<div id="smooth-nav-outer">
<a href="{{ site.url }}/guide/havoc/quick_faq.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/wow_token01.jpg"><span style="color: white;"> Кратко и Быстро</span></a>
<a href="{{ site.url }}/guide/havoc/overview.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/inv_misc_spyglass_02.jpg"> Обзор</a>
<a href="{{ site.url }}/guide/havoc/beginners.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/spell_lifegivingseed.jpg"> Новичкам</a>
<a href="{{ site.url }}/guide/havoc/talent-builds.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/ability_marksmanship.jpg"> Таланты и Билды</a>
<a href="{{ site.url }}/guide/havoc/rotation-priority.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/wow_token01.jpg"> Ротация</a>
<a href="{{ site.url }}/guide/havoc/stats.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/inv_inscription_80_warscroll_intellect.jpg"> Характеристики</a>
<a href="{{ site.url }}/guide/havoc/gear.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/inv_chest_chain_03.jpg"> Бис лист</a>
<a href="{{ site.url }}/guide/havoc/covenant.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/wow_token01.jpg"> Ковенанты</a>
<a href="{{ site.url }}/guide/havoc/consumables.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/inv_potion_92.jpg"> Расходники</a>
<a href="{{ site.url }}/guide/havoc/macros-addons.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/inv_eng_gearspringparts.jpg"> Макросы и Аддоны</a>
<a href="{{ site.url }}/guide/havoc/weakauras.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/spell_holy_auramastery.jpg"> WeakAuras</a>
<a href="{{ site.url }}/guide/havoc/common-terms.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/ui_chat.jpg"> Сокращения</a>
</div>
<br>

В этом разделе собраны все основные материалы из гайда, чтоб вы максимально быстро могли начать играть за Охотника на Демонов Истребление.

## Таланты

<div class="tabs">
    <div class="tabs__nav">
      <a class="tabs__link tabs__link_active" href="#content-1">СТ ?</a>
      <a class="tabs__link" href="#content-2">АОЕ ?</a>
      <a class="tabs__link" href="#content-3">Таланты 3</a>
    </div>
    <div class="tabs__content">
      <div class="tabs__pane tabs__pane_show" id="content-1">
        <p align="center" width="100%">
    <img src="{{ site.url }}/assets/img/guide/havoc/beginer_build901.jpg">
</p>
      </div>
      <div class="tabs__pane" id="content-2">
   таланты 2
      </div>
      <div class="tabs__pane" id="content-3">
        таланты 3
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

    var mytabs = $tabs('.tabs');
    if (localStorage.getItem('mytabs')) {
      mytabs.showTab(document.querySelector('[href="' + localStorage.getItem('mytabs') + '"]'));
    }

    document.addEventListener('tab.show', function (e) {
      localStorage.setItem('mytabs', e.detail.querySelector('.tabs__link_active').getAttribute('href'));
    })
  </script>

## Ковенант и Медиум

Какой ковенат и Медиум

## Кондуиты

Какие кондуиты билд

## Инчант и химия

### Зачарованние

<ul>
<li>Оружие: 2х{{ site.data.prof.Enchant_Weapon_Lightless_Force }}</li>
<li>Кольца: 2х{{ site.data.prof.Enchant_Ring_Tenet_of_Versatility }}</li>
<li>Сапоги: {{ site.data.prof.Enchant_Boots_Eternal_Agility }}</li>
<li>Нагрудник: {{ site.data.prof.Enchant_Chest_Eternal_Stats }}</li>
<li>Плащ: {{ site.data.prof.Enchant_Cloak_Fortified_Leech }}</li>
</ul>

### Настой и  Зелья
<ul>
<li>Настой: {{ site.data.prof.Eternal_Flask }}</li>
<li>Зелья: {{ site.data.prof.Potion_of_Phantom_Fire }} СТ</li>
<li>Зелья: {{ site.data.prof.Potion_of_Empowered_Exorcisms }} АОЕ</li>
<li>Исцеление: {{ site.data.prof.Spiritual_Healing_Potion }} </li>
</ul>

### Камни
<ul>
<li>Камни: {{ site.data.prof.Versatile_Jewel_Cluster }}</li>
</ul>

### Еда
<ul>
<li>Еда: {{ site.data.prof.Steak_a_la_Mode }}</li>
</ul>

## Приоритет статов

Рейды:  Хаста >  Верса >  Мастери > Крит
М+ :    Верса >  Хаста >  Крит > Мастери

## Бис лист

Шмот, тырыни



<div class="minibox minibox-left"><a href="{{ site.url }}/guide/havoc/macros-addons.html">Назад:<br>Макросы и Аддоны</a></div>
<div class="minibox"><a href="{{ site.url }}/guide/havoc/common-terms.html">Длаее:<br>Сокращени</a></div>