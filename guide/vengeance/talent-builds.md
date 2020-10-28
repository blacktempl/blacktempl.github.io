---
layout: page
title: Таланты и Билды
last_update: 2020-01-11 09:00:00
game_version: 9.0.0 Shadowlands
toc: true
---

<div id="smooth-nav-outer">
<a href="{{ site.url }}/guide/vengeance/overview.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/inv_misc_spyglass_02.jpg"> Обзор</a>
<a href="{{ site.url }}/guide/vengeance/beginners.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/spell_lifegivingseed.jpg"> Новичкам</a>
<a href="{{ site.url }}/guide/vengeance/talent-builds.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/ability_marksmanship.jpg"><span style="color: white;"> Таланты и Билды</span></a>
<a href="{{ site.url }}/guide/vengeance/rotation-priority.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/wow_token01.jpg"> Ротация</a>
<a href="{{ site.url }}/guide/vengeance/stats.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/inv_inscription_80_warscroll_intellect.jpg"> Характеристики</a>
<a href="{{ site.url }}/guide/vengeance/gear.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/inv_chest_chain_03.jpg"> Бис лист</a>
<a href="{{ site.url }}/guide/vengeance/consumables.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/inv_potion_92.jpg"> Расходники</a>
<a href="{{ site.url }}/guide/vengeance/macros-addons.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/inv_eng_gearspringparts.jpg"> Макросы и Аддоны</a>
<a href="{{ site.url }}/guide/vengeance/weakauras.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/spell_holy_auramastery.jpg"> WeakAuras</a>
<a href="{{ site.url }}/guide/vengeance/common-terms.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/ui_chat.jpg"> Сокращения</a>
<a href="">#<img src="https://wow.zamimg.com/images/wow/icons/medium/wow_token01.jpg"> Commenting Legendaries</a>
<a href="#"><img src="https://wow.zamimg.com/images/wow/icons/medium/wow_token01.jpg"> Commenting Legendaries</a>
</div>
<br>
# Лучший набор талантов для Охотника на Демонов Месть
<ul>
<li>Уровень 15: {{ site.data.talent.Agonizing_Flames }}</li> 
<li>Уровень 25: {{ site.data.talent.Fallout }}</li> 
<li>Уровень 30: {{ site.data.talent.Spirit_Bomb }}</li> 
<li>Уровень 35: {{ site.data.talent.Fracture }} для урона или {{ site.data.talent.Feed_the_Demon }} для выживаймости.</li>
<li>Уровень 40: {{ site.data.talent.Concentrated_Sigils }} для увеличения урона, {{ site.data.talent.Sigil_of_Chains }} для подземелий.</li> 
<li>Уровень 45: {{ site.data.talent.DemonicVDH }}</li> 
<li>Уровень 50: {{ site.data.talent.Last_Resort }}</li> 
</ul>
	<br>  
<div class="tabs">
    <div class="tabs__nav">
      <a class="tabs__link tabs__link_active" href="#content-1">Билд 1</a>
      <a class="tabs__link" href="#content-2">Билд 2</a>
      <a class="tabs__link" href="#content-3">билд 3</a>
    </div>
    <div class="tabs__content">
      <div class="tabs__pane tabs__pane_show" id="content-1">
        <p align="center" width="100%">
    <img src="{{ site.url }}/assets/img/guide/havoc/beginer_build901.jpg">
</p>
      </div>
      <div class="tabs__pane" id="content-2">
   Билд2
      </div>
      <div class="tabs__pane" id="content-3">
        <p align="center" width="100%">
    <img src="{{ site.url }}/assets/img/guide/havoc/beginer_build901.jpg">
</p>
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
<br>  
## Обзор талантов
### Таланты первого тира (15 Уровень)
<ul>
<li>{{ site.data.talent.Abyssal_Strike }}: Талант дает 2 дополнительных {{ site.data.spell.Infernal_Strike }} в минуту за счет уменьшения времени восстановления до 12 секунд, а также бесплатного использования {{ site.data.spell.Sigil_of_Flame }}. Это означает, что у вас будет 5 зарядов {{ site.data.spell.Infernal_Strike }} в минуту. Это обеспечивает максимальный прирост мобильности. Это также самое большое увеличение урона в секунду с {{ site.data.talent.Flame Crash }} для AoE и конкурентоспособный талант для СТ.</li> 
<li>{{ site.data.talent.Agonizing_Flames }} . </li>
<li>{{ site.data.talent.Felblade }} Очень конкурентоспособный талант, дает много гнева, имеет не большое время восстановления. </li>
</ul>
  
  
