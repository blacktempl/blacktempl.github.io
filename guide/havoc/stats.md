---
layout: page
title: Характеристики
last_update: 2020-01-11 09:00:00
game_version: 9.0.0 Shadowlands
toc: true
---

<div id="smooth-nav-outer">
<a href="{{ site.url }}/guide/havoc/quick_faq.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/wow_token01.jpg"> Кратко и Быстро</a>
<a href="{{ site.url }}/guide/havoc/overview.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/inv_misc_spyglass_02.jpg"> Обзор</a>
<a href="{{ site.url }}/guide/havoc/beginners.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/spell_lifegivingseed.jpg"> Новичкам</a>
<a href="{{ site.url }}/guide/havoc/talent-builds.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/ability_marksmanship.jpg"> Таланты и Билды</a>
<a href="{{ site.url }}/guide/havoc/rotation-priority.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/wow_token01.jpg"> Ротация</a>
<a href="{{ site.url }}/guide/havoc/stats.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/inv_inscription_80_warscroll_intellect.jpg"><span style="color: white;"> Характеристики</span></a>
<a href="{{ site.url }}/guide/havoc/gear.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/inv_chest_chain_03.jpg"> Бис лист</a>
<a href="{{ site.url }}/guide/havoc/covenant.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/wow_token01.jpg"> Ковенанты</a>
<a href="{{ site.url }}/guide/havoc/consumables.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/inv_potion_92.jpg"> Расходники</a>
<a href="{{ site.url }}/guide/havoc/macros-addons.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/inv_eng_gearspringparts.jpg"> Макросы и Аддоны</a>
<a href="{{ site.url }}/guide/havoc/weakauras.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/spell_holy_auramastery.jpg"> WeakAuras</a>
<a href="{{ site.url }}/guide/havoc/common-terms.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/ui_chat.jpg"> Сокращения</a>
</div>
<br>

## Характеристики

Ловкость - ваша основная характеристика, и ее можно найти на кожаном снаряжении. Ловкость увеличивает вашу силу атаки и урон, наносимый способностями.

Что касается второстепенных характеристик:

<ul>
<li> Критический удар: Поскольку все способности могут нанести критический урон, это может значительно увеличить наш урон.</li>
<li> Скорость: Уменьшает глобальное время восстановления, также уменьшает время восстановления некоторых способностей</li>
<li> Искусность: Этот показатель увеличивает наносимый нами урон от магии Хаоса, а также нашу скорость передвижения. Масштабирование характеристики довольно плохое, что делает ее нежелательной, хотя на первый взгляд она кажется очень интересной.</li>
<li> Универсальность: Универсальная характеристика, увеличивает наносимый урон и уменьшает получаемый. </li>
</ul>

## Приоритет характеристик для Охотника на Демонов Истребление

<div class="tabs">
    <div class="tabs__nav">
      <a class="tabs__link tabs__link_active" href="#content-1">Рейд СТ</a>
      <a class="tabs__link" href="#content-2">АоЕ М+</a>
    </div>
    <div class="tabs__content">
      <div class="tabs__pane tabs__pane_show" id="content-1">
	  
	<div class="tabs_in">
<img src="{{ site.url }}/assets/img/guide/havoc/agil.png" width="30" height="30"> Ловкость > <img src="{{ site.url }}/assets/img/guide/havoc/crit.png" width="30" height="30"> Критический удар > <img src="{{ site.url }}/assets/img/guide/havoc/speed.png" width="30" height="30"> Скорость > <img src="{{ site.url }}/assets/img/guide/havoc/mastry.png" width="30" height="30"> Искусность > <img src="{{ site.url }}/assets/img/guide/havoc/vers.png" width="30" height="30"> Универсальность
	</div>	
	
	 </div>
      <div class="tabs__pane" id="content-2">

	<div class="tabs_in">
<img src="{{ site.url }}/assets/img/guide/havoc/agil.png" width="30" height="30"> Ловкость > <img src="{{ site.url }}/assets/img/guide/havoc/crit.png" width="30" height="30">  Критический удар > <img src="{{ site.url }}/assets/img/guide/havoc/vers.png" width="30" height="30"> Универсальность > <img src="{{ site.url }}/assets/img/guide/havoc/mastry.png" width="30" height="30"> Искусность > <img src="{{ site.url }}/assets/img/guide/havoc/speed.png" width="30" height="30"> Скорость
	</div>	

      </div>
      
    </div>
  </div>

#### Для каждого персонажа приоритет характеристик индивидуальный, всегда используйте <a href="https://www.raidbots.com/simbot">RaidBots</a> чтобы использовать актуальную для вас экипировку.

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

<div class="minibox minibox-left"><a href="{{ site.url }}/guide/havoc/rotation-priority.html">Назад:<br>Ротация</a></div> <div class="minibox"><a href="{{ site.url }}/guide/havoc/gear.html">Длаее:<br>Бис лист</a></div>

