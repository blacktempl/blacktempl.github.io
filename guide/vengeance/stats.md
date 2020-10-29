---
layout: page
title: Характеристики
last_update: 2020-01-11 09:00:00
game_version: 9.0.0 Shadowlands
toc: true
---

<div id="smooth-nav-outer">
<a href="{{ site.url }}/guide/vengeance/overview.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/inv_misc_spyglass_02.jpg"> Обзор</a>
<a href="{{ site.url }}/guide/vengeance/beginners.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/spell_lifegivingseed.jpg"> Новичкам</a>
<a href="{{ site.url }}/guide/vengeance/talent-builds.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/ability_marksmanship.jpg"> Таланты и Билды</a>
<a href="{{ site.url }}/guide/vengeance/rotation-priority.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/wow_token01.jpg"> Ротация</a>
<a href="{{ site.url }}/guide/vengeance/stats.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/inv_inscription_80_warscroll_intellect.jpg"><span style="color: white;"> Характеристики</span></a>
<a href="{{ site.url }}/guide/vengeance/gear.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/inv_chest_chain_03.jpg"> Бис лист</a>
<a href="{{ site.url }}/guide/vengeance/consumables.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/inv_potion_92.jpg"> Расходники</a>
<a href="{{ site.url }}/guide/vengeance/macros-addons.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/inv_eng_gearspringparts.jpg"> Макросы и Аддоны</a>
<a href="{{ site.url }}/guide/vengeance/weakauras.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/spell_holy_auramastery.jpg"> WeakAuras</a>
<a href="{{ site.url }}/guide/vengeance/common-terms.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/ui_chat.jpg"> Сокращения</a>
<a href="">#<img src="https://wow.zamimg.com/images/wow/icons/medium/wow_token01.jpg"> Commenting Legendaries</a>
<a href="#"><img src="https://wow.zamimg.com/images/wow/icons/medium/wow_token01.jpg"> Commenting Legendaries</a>
</div>
<br>
## Характеристики

**Ловкость** - это ваша основная характеристика, она присутствует на всем снаряжении, кроме колец, и очень хорошо масштабируется с повышением уровня предмета. Ловкость увеличивает вашу силу атаки и урон наносимый способностями. Она также увеличивает вашу броню, пока активны {{ site.data.spell.Demon_Spikes }}.<br>
**Выносливость**- эту характеристику можно найти на любом снаряжение, кроме аксессуаров, и она увеличивает ваше здоровье.

Второстепенные характеристики:

<ul>
<li> <b>Критический удар:</b> увеличивает ваш шанс нанести критический удар, удваивая как урон, так и исцеление. Рейтинг критического удара также конвертируется в рейтинг парирования, увеличивая ваш шанс избежать ударов ближнего боя. Существует жесткое ограничение на уровне 100%, но в настоящее время оно недостижимо.</li>
<li> <b>Скорость:</b> Уменьшает глобальное время восстановления, также уменьшает время восстановления некоторых способностей</li>
<li> <b>Искусность:</b> Эта характеристика увеличивает вашу силу атаки, а также процент ловкости преобразованной в броню во время использования {{ site.data.spell.Demon_Spikes }}. Так как искусность работает только когда активны {{ site.data.spell.Demon_Spikes }}, в настоящее время это довольно посредственный показатель, чтобы перевесить ценность других характеристик.</li>
<li> <b>Универсальность:</b> Эта характеристика обеспечивает общее увеличение урона и исцеления, а также снижает получаемый урон вдвое. Он работает против всех форм урона, поэтому это наиболее эффективная характеристика общего назначения для снижения урона.</li>
</ul>

Третичные характеристики:

<ul>
<li> <b>Самоисцеление :</b> урон что вы наносите приводит к самоисцелению.</li>
<li> <b>Скорость передвижения:</b> эта характеристика немного повышает скорость передвижения персонажа.</li>
<li> <b>Избежание :</b> уменьшает урон, получаемый от действующих по области способностей.</li>
<li> <b>Неразрушимость :</b> броня с этой характеристикой не теряет прочность.</li>
</ul>

## Приоритет характеристик для Охотника на Демонов Месть

<div class="tabs">
    <div class="tabs__nav">
      <a class="tabs__link tabs__link_active" href="#content-1">Рейд</a>
      <a class="tabs__link" href="#content-2">М+</a>
    </div>
    <div class="tabs__content">
      <div class="tabs__pane tabs__pane_show" id="content-1">
	  <br>
<ol>
<li>Скорость</li>
<li>Универсальность</li>
<li>Искусность</li>
<li>Критический удар</li>
</ol>
<li>Скорость >= Универсальность > Искусность > Критический удар</li>
      </div>
      <div class="tabs__pane" id="content-2">
	  <br>
<ol>
<li>Скорость</li>
<li>Универсальность</li>
<li>Критический удар</li>
<li>Искусность</li>
</ol>
<li>Скорость > Универсальность > Критический удар > Искусность</li>
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


<div class="minibox minibox-left"><a href="{{ site.url }}/guide/vengeance/rotation-priority.html">Назад:<br>Ротация</a></div> <div class="minibox"><a href="{{ site.url }}/guide/vengeance/gear.html">Длаее:<br>Таланты и Бис лист</a></div>














