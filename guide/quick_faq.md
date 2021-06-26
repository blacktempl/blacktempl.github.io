---
layout: page
title: Кратко и Быстро
description: ДХ Истребление 9.1.0 PvE гайд Shadowlands
last_update: 2021-06-24 09:00:00
game_version: 9.1.0 Shadowlands 
author: Rodriguezz и Gaussiana
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

В этом разделе собраны все основные материалы из гайда, чтобы вы максимально быстро смогли начать играть за Охотника на Демонов Истребление.

## Таланты и Ротация

<div class="tabs">
<div class="tabs__nav">
<a class="tabs__link tabs__link_active" href="#content-1">АоЕ М+ билд Медальон </a>
<a class="tabs__link" href="#content-2">АоЕ М+ Тоска </a>
<a class="tabs__link" href="#content-3">СТ билд Рана</a>
<a class="tabs__link" href="#content-4">СТ ФБ Теория</a>
</div>

<div class="tabs__content">
<div class="tabs__pane tabs__pane_show" id="content-1">

<div class="tabs_in" markdown="1">

{% include DarkglareBoon.html %}             
 
<br>

<p class="tanknotes-section-success" markdown="1"><span style="font-weight: 400;">
На **35** уровне можете брать любой талант который подходит больше по стилю вашей игры.
<br>
<br>
Используем легендарный предмет: {{ site.data.legendary.Darkglare_Boon }}
<br>
<br>
Рецепт на этот легендарный предмет добывается с подземелья {{ site.data.mplus.De_Other_Side }}
<br>
<br>
**Крафтим в слот Шея.**
</span></p>

> Если у вас уже скрафчен легендарный предмет в пояс, то вы можете оставить все как есть, вам не нужно переделывать легендарку если вы только не будете охотиться за БоЕ поясом.

В ротации не используется {{ site.data.spell.Blade_Dance }}, а {{ site.data.spell.Death_Sweep }} используем только на 3+ цели

<strong style="font-weight: 800; font-size: 24px;">Ротация М+ Дар созерцателя тьмы</strong>

<div class="guide-boss-card" style="margin: 0;">

<div>
<svg preserveAspectRatio="xMidYMax meet" viewBox="0 0 1600 200" class="svg-separator sep4" style="display:block">
<polygon points="886,86 800,172 714,86 -4,86 -4,204 1604,204 1604,86 " style="fill:#191919;"></polygon>
<polygon points="800,172 886,86 900,86 800,186 700,86 714,86 " style="opacity:1;fill:#d49a29"></polygon>
<polygon points="800,162 876,86 888,86 800,174 712,86 724,86 " style="opacity:1;fill:#795a1e"></polygon>
</svg>

</div>

<div class="subtitle quadrata accent">Опенер:</div>

<div class="flex break-mobile">

<div class="flex-2" markdown="1">


1. Прекастом {{ site.data.covenant.Elysian_Decree }}
1. За 0.5 сек. до начала боя {{ site.data.spell.Immolation_Aura }}
1. {{ site.data.spell.Fel_Rush }} - для нанесения повышенного урона благодаря таланту {{ site.data.talent.Unbound_Chaos }} 
1. {{ site.data.spell.Eye_Beam }}
1. {{ site.data.covenant.The_Hunt }} - Если вы играете за Ночной народец
1. {{ site.data.spell.Death_Sweep }}
1. Если вы Вентир - {{ site.data.spell.Metamorphosis }} для наложения {{ site.data.covenant.Sinful_Brand }} на все цели. Сливаем рагу. {{ site.data.spell.Eye_Beam }}. {{ site.data.covenant.Sinful_Brand }} - в самую жирную/важную цель, но прежде стоит дождаться спадения {{ site.data.covenant.Sinful_Brand }} с цели, или пока (в идеале) не останется 1 сек.
1. Если вы **НЕ** Вентир {{ site.data.spell.Metamorphosis }}.

<div class="subtitle quadrata accent">Список приоритетов:</div>

1. {{ site.data.spell.Metamorphosis }}
1. {{ site.data.spell.Fel_Rush }} - Если активен баф {{ site.data.talent.Unbound_Chaos }} 
1. {{ site.data.covenant.Elysian_Decree }} - Если вы играете за Кирий
1. {{ site.data.spell.Eye_Beam }}
1. {{ site.data.covenant.The_Hunt }} - Если вы играете за Ночной народец
1. {{ site.data.covenant.Sinful_Brand }} - Если вы играете за Вентиров
1. {{ site.data.spell.Death_Sweep }} - 2+ целей.
1. {{ site.data.spell.Immolation_Aura }}
1. {{ site.data.spell.Chaos_Strike }} / {{ site.data.spell.Annihilation }}
1. {{ site.data.spell.Demons_Bite }}

</div>
</div>

<div class="roate-divider">
<div>

<svg preserveAspectRatio="xMidYMax meet" viewBox="0 0 1600 200" class="svg-separator sep4" style="display:block">
<polygon points="886,86 800,172 714,86 -4,86 -4,204 1604,204 1604,86 " style="fill:#191919;"></polygon>
<polygon points="800,172 886,86 900,86 800,186 700,86 714,86 " style="opacity:1;fill:#d49a29"></polygon>
<polygon points="800,162 876,86 888,86 800,174 712,86 724,86 " style="opacity:1;fill:#795a1e"></polygon>
</svg></div></div></div>

</div>
</div>

<div class="tabs__pane" id="content-2" >
   
<div class="tabs_in" markdown="1">

{% include CollectiveAnguish.html %}  

<br>

<p class="tanknotes-section-success" markdown="1"><span style="font-weight: 400;">
На **35** уровне можете брать любой талант который подходит больше по стилю вашей игры.
<br>
В последнем тире талантов можно использовать {{ site.data.talent.Demonic }} 
<br>
<br>
Используем легендарный предмет: {{ site.data.legendary.Collective_Anguish }}
<br>
<br>
Рецепт на этот легендарный предмет добывается с предпоследнего босса {{ site.data.mplus.General_Kaal }} рейда {{ site.data.mplus.Castle_Nathria }}.
<br>
<br>
**Крафтим в слот наручей.**
</span></p>

В ротации не используется {{ site.data.spell.Blade_Dance }}, а {{ site.data.spell.Death_Sweep }} используем только на 3+ цели

<strong style="font-weight: 800; font-size: 24px;">АоЕ М+ билд Всеобщая тоска </strong>

<div class="guide-boss-card" style="margin: 0;">

<div>
<svg preserveAspectRatio="xMidYMax meet" viewBox="0 0 1600 200" class="svg-separator sep4" style="display:block">
<polygon points="886,86 800,172 714,86 -4,86 -4,204 1604,204 1604,86 " style="fill:#191919;"></polygon>
<polygon points="800,172 886,86 900,86 800,186 700,86 714,86 " style="opacity:1;fill:#d49a29"></polygon>
<polygon points="800,162 876,86 888,86 800,174 712,86 724,86 " style="opacity:1;fill:#795a1e"></polygon>
</svg>

</div>

<div class="subtitle quadrata accent">Опенер с Корейном:</div>

<div class="flex break-mobile">

<div class="flex-2" markdown="1">

1. За 0.5 сек. до начала боя {{ site.data.spell.Immolation_Aura }}
1. {{ site.data.spell.Fel_Rush }} - для поддержания баффа {{ site.data.spell.Momentum }} и использования бафа от {{ site.data.talent.Unbound_Chaos }}
1. {{ site.data.talent.Felblade }} 
1. {{ site.data.spell.Eye_Beam }}
1. {{ site.data.covenant.The_Hunt }}
1. {{ site.data.spell.Vengeful_Retreat }}
1. {{ site.data.spell.Fel_Rush }} - для поддержания баффа {{ site.data.spell.Momentum }}
1. {{ site.data.spell.Metamorphosis }}
1. {{ site.data.spell.Eye_Beam }}

<p class="tanknotes-section-success" markdown="1"><span style="font-weight: 400;">Бафф, который дает Корейн на +25% крита в первые 5 секунд боя (при правильной реализации) играет ВАЖНЕЙШУЮ РОЛЬ в вашем опенере. Главная мысль заключается в том, что под этим баффом вы должны зарядить в босса {{ site.data.spell.Fel_Rush }} с бафом от {{ site.data.talent.Unbound_Chaos }} и {{ site.data.covenant.The_Hunt }} Охотой по самому жирному/важному мобу. Реализация усложняется, если у вас есть тринкет с Визгуньи или Денатрия. Тогда в эти 5 секунд надо еще "внедрить" использование тринкета. 
</span></p>
</div>
</div>

<div class="roate-divider">
<div>

<svg preserveAspectRatio="xMidYMax meet" viewBox="0 0 1600 200" class="svg-separator sep4" style="display:block">
<polygon points="886,86 800,172 714,86 -4,86 -4,204 1604,204 1604,86 " style="fill:#191919;"></polygon>
<polygon points="800,172 886,86 900,86 800,186 700,86 714,86 " style="opacity:1;fill:#d49a29"></polygon>
<polygon points="800,162 876,86 888,86 800,174 712,86 724,86 " style="opacity:1;fill:#795a1e"></polygon>
</svg></div></div></div>

<div class="guide-boss-card" style="margin: 0;">

<div>
<svg preserveAspectRatio="xMidYMax meet" viewBox="0 0 1600 200" class="svg-separator sep4" style="display:block">
<polygon points="886,86 800,172 714,86 -4,86 -4,204 1604,204 1604,86 " style="fill:#191919;"></polygon>
<polygon points="800,172 886,86 900,86 800,186 700,86 714,86 " style="opacity:1;fill:#d49a29"></polygon>
<polygon points="800,162 876,86 888,86 800,174 712,86 724,86 " style="opacity:1;fill:#795a1e"></polygon>
</svg>

</div>

<div class="subtitle quadrata accent">Опенер:</div>

<div class="flex break-mobile">

<div class="flex-2" markdown="1">

1. Прекастом {{ site.data.covenant.Elysian_Decree }}
1. За 0.5 сек. до начала боя {{ site.data.spell.Immolation_Aura }}
1. {{ site.data.spell.Fel_Rush }} - для поддержания баффа {{ site.data.spell.Momentum }} и использования бафа от {{ site.data.talent.Unbound_Chaos }} 
1. {{ site.data.talent.Felblade }}
1. {{ site.data.spell.Vengeful_Retreat }}
1. {{ site.data.spell.Fel_Rush }} - для поддержания баффа {{ site.data.spell.Momentum }}
1. {{ site.data.spell.Eye_Beam }}
1. {{ site.data.covenant.The_Hunt }} - Если вы играете за Ночной народец
1. {{ site.data.covenant.Sinful_Brand }} - Если вы играете за Вентиров
1. {{ site.data.spell.Death_Sweep }}
1. **Если вы играете за Ночной народец** - {{ site.data.spell.Metamorphosis }}
1. Если вы Вентир -  Играем СТ ротацию до тех пор, пока до спадения клейма с цели не останется 1 сек и только затем отдаем {{ site.data.spell.Metamorphosis }} 
1. {{ site.data.spell.Eye_Beam }}
1. {{ site.data.spell.Death_Sweep }}

<div class="subtitle quadrata accent">Список приоритетов:</div>

1. {{ site.data.spell.Metamorphosis }}
1. {{ site.data.spell.Vengeful_Retreat }}
1. {{ site.data.spell.Fel_Rush }}
1. {{ site.data.spell.Fel_Rush }} - Если активен баф {{ site.data.talent.Unbound_Chaos }} 
1. {{ site.data.spell.Death_Sweep }} - 3+ цели
1. {{ site.data.covenant.Elysian_Decree }} - Если вы играете за Кирий
1. {{ site.data.spell.Eye_Beam }}
1. {{ site.data.covenant.The_Hunt }} - Если вы играете за Ночной народец
1. {{ site.data.covenant.Sinful_Brand }} - Если вы играете за Вентиров
1. {{ site.data.spell.Immolation_Aura }}
1. {{ site.data.spell.Blade_Dance }} - 4+ целей.
1. {{ site.data.spell.Chaos_Strike }} / {{ site.data.spell.Annihilation }}
1. {{ site.data.spell.Throw_Glaive }}

</div>
</div>

<div class="roate-divider">
<div>

<svg preserveAspectRatio="xMidYMax meet" viewBox="0 0 1600 200" class="svg-separator sep4" style="display:block">
<polygon points="886,86 800,172 714,86 -4,86 -4,204 1604,204 1604,86 " style="fill:#191919;"></polygon>
<polygon points="800,172 886,86 900,86 800,186 700,86 714,86 " style="opacity:1;fill:#d49a29"></polygon>
<polygon points="800,162 876,86 888,86 800,174 712,86 724,86 " style="opacity:1;fill:#795a1e"></polygon>
</svg></div></div></div>

</div>
</div>
      
<div class="tabs__pane" id="content-3">

<div class="tabs_in" markdown="1">

{% include BurningWound.html %} 

<br>

<p class="tanknotes-section-success" markdown="1"><span style="font-weight: 400;">
На **35** уровне можете брать любой талант который подходит больше по стилю вашей игры.
<br>
<br>
Используем легендарный предмет: {{ site.data.legendary.Burning_Wound }}
<br>
<br>
Рецепт на этот легендарный предмет добывается с подземелья {{ site.data.mplus.Plaguefall }}.
<br>
<br>
**Крафтим в слот спины.**
</span></p>

В ротации не используется {{ site.data.spell.Blade_Dance }} / {{ site.data.spell.Death_Sweep }}

<strong style="font-weight: 800; font-size: 24px;">Ротация СТ Жгучая рана </strong>

<div class="guide-boss-card" style="margin: 0;">

<div>
<svg preserveAspectRatio="xMidYMax meet" viewBox="0 0 1600 200" class="svg-separator sep4" style="display:block">
<polygon points="886,86 800,172 714,86 -4,86 -4,204 1604,204 1604,86 " style="fill:#191919;"></polygon>
<polygon points="800,172 886,86 900,86 800,186 700,86 714,86 " style="opacity:1;fill:#d49a29"></polygon>
<polygon points="800,162 876,86 888,86 800,174 712,86 724,86 " style="opacity:1;fill:#795a1e"></polygon>
</svg>

</div>

<div class="subtitle quadrata accent">Опенер:</div>

<div class="flex break-mobile">

<div class="flex-2" markdown="1">

1. Прекастом {{ site.data.covenant.Elysian_Decree }}
1. За 0.5 сек. до начала боя {{ site.data.spell.Immolation_Aura }}
1. {{ site.data.spell.Fel_Rush }} - для нанесения повышенного урона благодаря таланту {{ site.data.talent.Unbound_Chaos }} 
1. {{ site.data.spell.Demons_Bite }}
1. {{ site.data.spell.Eye_Beam }}
1. {{ site.data.covenant.The_Hunt }} - Если вы играете за Ночной народец
1. Если вы Вентир - {{ site.data.spell.Metamorphosis }} для наложения {{ site.data.covenant.Sinful_Brand }} на все цели. Сливаем рагу. 1. {{ site.data.spell.Eye_Beam }}. {{ site.data.covenant.Sinful_Brand }} - в самую жирную/важную цель, но прежде стоит дождаться спадения {{ site.data.covenant.Sinful_Brand }} с цели, или пока (в идеале) не останется 1 сек.
1. Если вы **НЕ** Вентир {{ site.data.spell.Metamorphosis }}.

<div class="subtitle quadrata accent">Список приоритетов:</div>

1. {{ site.data.spell.Metamorphosis }}
1. {{ site.data.spell.Fel_Rush }} - Если активен баф {{ site.data.talent.Unbound_Chaos }} 
1. {{ site.data.covenant.Elysian_Decree }} - Если вы играете за Кирий
1. {{ site.data.spell.Eye_Beam }}
1. {{ site.data.covenant.The_Hunt }} - Если вы играете за Ночной народец
1. {{ site.data.covenant.Sinful_Brand }} - Если вы играете за Вентиров
1. {{ site.data.spell.Death_Sweep }} - 2+ целей.
1. {{ site.data.spell.Immolation_Aura }}
1. {{ site.data.spell.Chaos_Strike }} / {{ site.data.spell.Annihilation }}
1. {{ site.data.spell.Demons_Bite }}

</div>
</div>

<div class="roate-divider">
<div>

<svg preserveAspectRatio="xMidYMax meet" viewBox="0 0 1600 200" class="svg-separator sep4" style="display:block">
<polygon points="886,86 800,172 714,86 -4,86 -4,204 1604,204 1604,86 " style="fill:#191919;"></polygon>
<polygon points="800,172 886,86 900,86 800,186 700,86 714,86 " style="opacity:1;fill:#d49a29"></polygon>
<polygon points="800,162 876,86 888,86 800,174 712,86 724,86 " style="opacity:1;fill:#795a1e"></polygon>
</svg></div></div></div>

</div>
</div>


<div class="tabs__pane" id="content-4">
<div class="tabs_in" markdown="1">

{% include ChaosTheory.html %} 

<br>

<p class="tanknotes-section-success" markdown="1"><span style="font-weight: 400;">
На **35** уровне можете брать любой талант который подходит больше по стилю вашей игры.
<br>
<br>
Используем легендарный предмет: {{ site.data.legendary.Chaos_Theory }}
<br>
<br>
Рецепт на этот легендарный предмет добывается с предпоследнего босса {{ site.data.mplus.Sire_Denathrius }} рейда {{ site.data.mplus.Castle_Nathria }}.
<br>
<br>
**Крафтим в слот пояса.**
</span></p>

В ротации используется {{ site.data.spell.Blade_Dance }} / {{ site.data.spell.Death_Sweep }} 1+ цель

<strong style="font-weight: 800; font-size: 24px;">Ротация СТ ФБ Теория Хаоса</strong>

<div class="guide-boss-card" style="margin: 0;">

<div>
<svg preserveAspectRatio="xMidYMax meet" viewBox="0 0 1600 200" class="svg-separator sep4" style="display:block">
<polygon points="886,86 800,172 714,86 -4,86 -4,204 1604,204 1604,86 " style="fill:#191919;"></polygon>
<polygon points="800,172 886,86 900,86 800,186 700,86 714,86 " style="opacity:1;fill:#d49a29"></polygon>
<polygon points="800,162 876,86 888,86 800,174 712,86 724,86 " style="opacity:1;fill:#795a1e"></polygon>
</svg>

</div>

<div class="subtitle quadrata accent">Опенер:</div>

<div class="flex break-mobile">

<div class="flex-2" markdown="1">

1. Прекастом {{ site.data.covenant.Elysian_Decree }}
1. За 0.5 сек. до начала боя {{ site.data.spell.Immolation_Aura }}
1. {{ site.data.spell.Fel_Rush }} - для нанесения повышенного урона благодаря таланту {{ site.data.talent.Unbound_Chaos }} 
1. {{ site.data.talent.Felblade }}
1. {{ site.data.spell.Eye_Beam }}
1. {{ site.data.covenant.The_Hunt }} - Если вы играете за Ночной народец
1. {{ site.data.covenant.Sinful_Brand }} - Если вы играете за Вентиров
1. {{ site.data.spell.Death_Sweep }}
1. Если вы Вентир - {{ site.data.spell.Metamorphosis }} для наложения {{ site.data.covenant.Sinful_Brand }} на все цели. Сливаем рагу. 1. {{ site.data.spell.Eye_Beam }}. {{ site.data.covenant.Sinful_Brand }} - в самую жирную/важную цель, но прежде стоит дождаться спадения {{ site.data.covenant.Sinful_Brand }} с цели, или пока (в идеале) не останется 1 сек.
1. Если вы **НЕ** Вентир {{ site.data.spell.Metamorphosis }}.
1. {{ site.data.spell.Eye_Beam }}
1. {{ site.data.spell.Death_Sweep }}

<div class="subtitle quadrata accent">Список приоритетов:</div>

1. {{ site.data.spell.Metamorphosis }}
1. {{ site.data.spell.Death_Sweep }} / {{ site.data.spell.Blade_Dance }}
1. {{ site.data.spell.Fel_Rush }} - Если активен баф {{ site.data.talent.Unbound_Chaos }} 
1. {{ site.data.covenant.Elysian_Decree }} - Если вы играете за Кирий
1. {{ site.data.spell.Eye_Beam }}
1. {{ site.data.covenant.The_Hunt }} - Если вы играете за Ночной народец
1. {{ site.data.covenant.Sinful_Brand }} - Если вы играете за Вентиров
1. {{ site.data.spell.Immolation_Aura }}
1. {{ site.data.spell.Chaos_Strike }} / {{ site.data.spell.Annihilation }}
1. {{ site.data.talent.Felblade }}
1. {{ site.data.spell.Throw_Glaive }}

</div>
</div>

<div class="roate-divider">
<div>

<svg preserveAspectRatio="xMidYMax meet" viewBox="0 0 1600 200" class="svg-separator sep4" style="display:block">
<polygon points="886,86 800,172 714,86 -4,86 -4,204 1604,204 1604,86 " style="fill:#191919;"></polygon>
<polygon points="800,172 886,86 900,86 800,186 700,86 714,86 " style="opacity:1;fill:#d49a29"></polygon>
<polygon points="800,162 876,86 888,86 800,174 712,86 724,86 " style="opacity:1;fill:#795a1e"></polygon>
</svg></div></div></div>

</div>
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

## Какой ковенант выбрать

**Лучший выбор для рейда.**
1. Ночной народец <img src="{{ site.url }}/assets/img/guide/havoc/nightfae.png" width="22" height="22">
1. Вентиры <img src="{{ site.url }}/assets/img/guide/havoc/venthyr.png" width="16" height="24">
1. Кирии <img src="{{ site.url }}/assets/img/guide/havoc/kyrian.png" width="16" height="24">
1. Некролорды <img src="{{ site.url }}/assets/img/guide/havoc/nekrolords.png" width="16" height="24">

<p class="tanknotes-section-success" markdown="1"><span style="font-weight: 400;">

На 30 уровне известности ковенант <img src="{{ site.url }}/assets/img/guide/havoc/nightfae.png" width="24" height="24"> **Ночного народца** получает сильную прибавку в уроне и обгоняет ближайших конкурентов примерно на 100-150 урона.  Для рейдов советую рассматривать либо <img src="{{ site.url }}/assets/img/guide/havoc/nightfae.png" width="24" height="24"> **Ночной народец** либо <img src="{{ site.url }}/assets/img/guide/havoc/venthyr.png" width="16" height="24"> **Вентиров**.

</span></p>

**Лучший выбор для М+**
1. Ночной народец <img src="{{ site.url }}/assets/img/guide/havoc/nightfae.png" width="22" height="22"> / Вентиры <img src="{{ site.url }}/assets/img/guide/havoc/venthyr.png" width="16" height="24"> / Некролорды <img src="{{ site.url }}/assets/img/guide/havoc/nekrolords.png" width="16" height="24">
1. Кирии <img src="{{ site.url }}/assets/img/guide/havoc/kyrian.png" width="16" height="24">

<p class="tanknotes-section-success" markdown="1"><span style="font-weight: 400;">

Для М+ на данный момент выбор ковенанта особой роли не играет, т.к. игра в каждом ковенанте имеет свои плюсы и минусы. Если вы проводите львиную долю игры в ключах, а мифик рейды вас не интересуют, а ПвП вам всю жизнь было противно - то можете выбрать любой ковенант. Если вы планируете играть ключи и покорять  "прогулочным шагом" мифик рейды - то стоит выбирать между <img src="{{ site.url }}/assets/img/guide/havoc/venthyr.png" width="16" height="24"> Вентирами и <img src="{{ site.url }}/assets/img/guide/havoc/nightfae.png" width="22" height="22"> Ночным народцем . Если вы играете во все аспекты игры (мифик рейды, М+ и пвп) то ваш выбор ограничен (увы) Ночной народец <img src="{{ site.url }}/assets/img/guide/havoc/nightfae.png" width="22" height="22"> Ночным народцем.

</span></p>

## Какого медиума выбрать

### Ковенат Ночной народец

<p align="center" width="100%"> <img src="{{ site.url }}/assets/img/blog/conduits/fae_logo.png"> </p>

После вступления в ковенант нам откроются две способности:
{{ site.data.covenant.The_Hunt }} - Совершает рывок к цели, нанося урон от сил природы и обездвиживая ее на 1.5 сек., накладывая ДоТ на до 5 врагов на пути между вами и вашей целью. Преследование укрепляет вашу душу, в результате чего вы в течение 30 sec. восполняете здоровье в объеме 50% урона, который наносите цели "Охоты". Кондуит {{ site.data.conduits.Unnatural_Malice }} значительно увеличивает урон наносимый {{ site.data.covenant.The_Hunt }} по цели в вашем таргете, что делает этот ковенат хорошим выбором для СТ.
{{ site.data.covenant.Soulshape }} - дополнительное увеличение мобильности, которая поможет уворачиваться от механик.

Лучшим медиумом для нас будет Ния, дерево прокачки медиума выглядит следующим образом:

<a href="https://ru.wowhead.com/soulbind-calc/embed/night-fae/niya/demon-hunter/ApZlAQUrbwARBS0fACIVKvoAJSrvAA" target="blank">anything</a>

Начиная с 31 уровня известности для М+ и АоЕ используем медиума **Корейн**, его дерево прокачки выглядит следующим образом:

<a href="https://ru.wowhead.com/soulbind-calc/embed/night-fae/korayn/demon-hunter/ApbqAQUrbwARBS0fACIVKvoAJSrvAA" target="blank">anything</a>

> Ния очень сильный медиум для Рейда, ее стоит использовать на всех босса в **Замке Нафрия**, но есть ситуации когда Корейн будет выгодней. На **Генералах Каменного легиона**, **Совете Крови**, **Сире Денатрии** игра с Корейном предпочтительнее, за счет присутствия аддов на этих боссах. Корейна так-же можно взять и на** Спасение Солнечного короля**, только в том случае если вы уверенны в том, что сможете "накрутить". В противном случае на **Спасение Солнечного короля** стоит брать Нию.

> Что касается М+ контента, тут выигрывает Корейн, при "вдумчивой" игре Корейн нам дает неоспоримое преимущество перед Нией и взрывной бурстовый урон.

### Ковенат Вентиров
<p align="center" width="100%"> <img src="{{ site.url }}/assets/img/blog/conduits/ventyr_logo.png"></p>

После вступления в ковенант нам откроются две способности:

{{ site.data.covenant.Sinful_Brand }} - Отмечает противника клеймом вентиров, снижая скорость атак ближнего боя на 30%, скорость произнесения заклинаний – на 30%, а также наносит урон от темной магии в течение 8 сек. {{ site.data.covenant.Sinful_Brand }} накладывается на всех ближайших противников при активации {{ site.data.spell.Metamorphosis }}. Наносит неплохой урон в одну цель, и очень сильный урон в АоЕ после применения {{ site.data.spell.Metamorphosis }}, может стать неплохим выбором для СТ боев.

{{ site.data.covenant.Door_of_Shadows }} - Способность дающая нам дополнительную мобильность, с ее помощью можно пропускать группы мобов.

Лучшим медиумом для нас будет **Наджия**, дерево прокачки медиума выглядит следующим образом:

<a href="https://ru.wowhead.com/soulbind-calc/embed/venthyr/nadjia-the-mistblade/demon-hunter/ApavAgUrbwAVK5MAEQUtHwAhFSr6AA" target="blank">anything</a>

> Билд подходит для М+ и Рейда

> У  Наджии есть возможность немного поднять наш АоЕ урон, для этого нужно заменить {{ site.data.covenant.Dauntless_Duelist }} на {{ site.data.covenant.Exacting_Preparation }}, а также зачаровать оружие 2х {{ site.data.prof.Enchant_Weapon_Lightless_Force }}.

### Ковенат Кирий

<p align="center" width="100%"> <img src="{{ site.url }}/assets/img/blog/conduits/kiri_logo.png"> </p>

После вступления в ковенант нам откроются две способности:

{{ site.data.covenant.Elysian_Decree }} - Размещает в указанном месте кирийскую печать, которая активируется через 2 сек. Печать наносит сильный АоЕ урон, который можно усилить баффом от {{ site.data.talent.Momentum }}. После взрыва печати появляются 3 {{ site.data.spell.Shattered_SoulsHDH }}, это сильно повышает нашу выживаемость. Также использование {{ site.data.covenant.Elysian_Decree }} активирует способность нашего медиума и дает нам бафф искусности на 10 сек, который можно продлевать собирая сферы "Печальных воспоминаний", тем самым усиливая наши способности которые используют Хаос, например такие как {{ site.data.spell.Chaos_Strike }} и {{ site.data.spell.Eye_Beam }}.

{{ site.data.covenant.Summon_Steward }} - Вы зовете распорядителя, который приносит вам {{ site.data.covenant.Phial_of_Serenity }}, восполняющий 20% здоровья и снимающий проклятия, болезни, яды и эффекты кровотечения. Очень полезный флакон, сильно упрощает жизнь в ключах, снимает даже стаки аффикса {{ site.data.mplus.Necrotic }}.

Лучшим медиумом для нас будет **Пелагос**, дерево прокачки медиума выглядит следующим образом:

<a href="https://ru.wowhead.com/soulbind-calc/embed/kyrian/pelagos/demon-hunter/ApbmEgUtHwAVLM8AIhUq-gAlKu8A" target="blank">anything</a>

> Для М+ и АоЕ заменяем проводник {{ site.data.conduits.Demons_Touch }} на {{ site.data.conduits.Repeat_Decree }} Начиная с 31 уровня известности для М+ и АоЕ используем медиума **Верховный автоматург Миканикос**, его дерево прокачки выглядит следующим образом:

<a href="https://ru.wowhead.com/soulbind-calc/embed/kyrian/forgelite-prime-mikanikos/demon-hunter/ApbqAQUrbwARBS0fACIVKvoAJSrvAA" target="blank">anything</a>

### Ковенант Некролорды

<p align="center" width="100%"> <img src="{{ site.url }}/assets/img/blog/conduits/necrolord_logo.png"> </p>

После вступленя в ковенант нам отроются две способности:
{{ site.data.covenant.Fodder_to_the_Flame }} - Вы призываете демона которого можете атаковать только вы, его убийство дает {{ site.data.covenant.Empowered_Demon_Soul }}, хоть демон и убивается очень легко, все эти махинации отнимают много времени прежде чем вы начнете бить свою приоритетную цель, тем самым это будет ломать нашу ротацию и вносить дискомфорт в игру.
{{ site.data.covenant.Fleshcraft }} - по описанию звучит как очень хорошая способность, но ее нужно применять 4 сек. чтоб получить щит максимального объема и без специальной связи душ вы не сможете двигаться пока щит "накачивается".

Лучшим медиумом для нас будет **Костоплав Гейрмир**, дерево прокачки медиума выглядит следующим образом:

<a href="https://ru.wowhead.com/soulbind-calc/embed/necrolord/bonesmith-heirmir/demon-hunter/ApbqAQUrbwARBS0fACIVKvoAJSrvAA" target="blank">anything</a>

## Проводники (Кондуиты)

### Рейд

<img src="/assets/img/guide/havoc/potency.png" width="15" height="100%"> <u>Проводники силы</u>

* {{ site.data.conduits.Growing_Inferno }} — урон способности {{ site.data.spell.Immolation_Aura }} дополнительно увеличивается на 10-18% каждый раз, когда она наносит урон. 
Очень сильно увеличивает урон от {{site.data.spell.Immolation_Aura }}, **используем всегда**.
> Добыча: подземелье [Смертельная тризна](https://ru.wowhead.com/the-necrotic-wake) босс [Хирург Трупошов](https://ru.wowhead.com/npc=166882) и рейд [Святилище Господства](https://ptr.wowhead.com/zone=13561) босс [Сильвана Ветрокрылая](https://ptr.wowhead.com/npc=180828/) 

* [Неестественная злоба](https://ru.wowhead.com/spell=344358) — Увеличивает урон, наносимый "Охотой" основной цели, на 25-45%. Хорошее увеличение урона по основной цели.
> Добыча: рейд [Замок Нафрия](https://ru.wowhead.com/castle-nathria) босс [Сир Денатрий](https://ru.wowhead.com/npc=167406) и мировые боссы

* [Фрагмент адаптивной брони](https://ptr.wowhead.com/spell=357902) При получении исцеления от другого игрока ваша основная характеристика повышается на 2-3,6% на 15 сек. Эффект срабатывает не чаще раза в 30 сек.
> Добыча: мировой босс [Мор'гет](https://ptr.wowhead.com/npc=178958/) и рейд [Святилище Господства](https://ptr.wowhead.com/zone=13561) босс [Стражница Предвечных](https://ptr.wowhead.com/npc=175731/guardian-of-the-first-ones) 

* {{ site.data.conduits.Demons_Touch }} —  {{ site.data.spell.Chaos_Strike }} с вероятностью 5-9% сработает еще раз.
> Добыча: подземелье [Чумные каскады](https://ru.wowhead.com/plaguefall) босс [Домина Отравленный Клинок](https://ru.wowhead.com/npc=164266)

<img src="/assets/img/guide/havoc/endurance.png" width="15" height="100%"> <u>Проводники выносливости</u>

* {{ site.data.conduits.Viscous_Ink }} — {{ site.data.spell.Demonic_WardsHDH }} снижает получаемый вами урон от магии дополнительно на 6-13%. Очень сильный проводник, берем когда в бою присутствует магический урон.
> Добыча: подземелье [Tazavesh, the Veiled Market](https://ptr.wowhead.com/zone=13577/) босс [So'azmi](https://ptr.wowhead.com/npc=175806)

* {{ site.data.conduits.Fel_Defender }} — время восстановления вашей способности {{ site.data.spell.Blur }} уменьшается на 5-20 сек. Выбор по умолчанию в боях без магии.
> Добыча: подземелье [Tazavesh, the Veiled Market](https://ptr.wowhead.com/zone=13577/) босс [So'leah](https://ptr.wowhead.com/npc=180863/)

* [Конденсированная сфера анимы](https://ptr.wowhead.com/spell=357888) — При получении любого урона вы восполняете 2-4,5% максимального запаса здоровья. Эффект срабатывает не чаще раза в 10 сек.
> Добыча: мировой босс [Мор'гет](https://ptr.wowhead.com/npc=178958/)

<img src="/assets/img/guide/havoc/finesse.png" width="15" height="100%"> <u>Проводники точности</u>

* {{ site.data.conduits.Felfire_Haste }} — ваша скорость передвижения повышается на 5-20% после использования способности {{ site.data.spell.Fel_Rush }}. Дает дополнительную мобильность и без того мобильному классу. Все же является единственным универсальным выбором проводника в эту ячейку.
> Добыча: рейд [Святилище Господства](https://ptr.wowhead.com/zone=13561/) босс [Сир Денатрий](https://ptr.wowhead.com/npc=179390/)

* {{ site.data.conduits.Ravenous_Consumption }} — способность {{ site.data.spell.Consume_Magic }} получает 15-30% шанс рассеять дополнительный эффект.
> Добыча: подземелье [Tazavesh, the Veiled Market](https://ptr.wowhead.com/zone=13577/) босс [P.O.S.T. Master](https://ptr.wowhead.com/npc=175646)

### Мифик+

<img src="/assets/img/guide/havoc/potency.png" width="15" height="100%"> <u>Проводники силы</u>

* {{ site.data.conduits.Growing_Inferno }} — урон способности {{ site.data.spell.Immolation_Aura }} дополнительно увеличивается на 10-18% каждый раз, когда она наносит урон. 
Очень сильно увеличивает урон от {{site.data.spell.Immolation_Aura }}, **используем всегда**.
> Добыча: подземелье [Смертельная тризна](https://ru.wowhead.com/the-necrotic-wake) босс [Хирург Трупошов](https://ru.wowhead.com/npc=166882) и рейд [Святилище Господства](https://ptr.wowhead.com/zone=13561) босс [Сильвана Ветрокрылая](https://ptr.wowhead.com/npc=180828/) 

* {{ site.data.conduits.Demons_Touch }} —  {{ site.data.spell.Chaos_Strike }} с вероятностью 5-9% сработает еще раз.
> Добыча: подземелье [Чумные каскады](https://ru.wowhead.com/plaguefall) босс [Домина Отравленный Клинок](https://ru.wowhead.com/npc=164266)

* [Фрагмент адаптивной брони](https://ptr.wowhead.com/spell=357902) При получении исцеления от другого игрока ваша основная характеристика повышается на 2-3,6% на 15 сек. Эффект срабатывает не чаще раза в 30 сек.
> Добыча: мировой босс [Мор'гет](https://ptr.wowhead.com/npc=178958/) и рейд [Святилище Господства](https://ptr.wowhead.com/zone=13561) босс [Стражница Предвечных](https://ptr.wowhead.com/npc=175731/guardian-of-the-first-ones) 

* [Неестественная злоба](https://ru.wowhead.com/spell=344358) — Увеличивает урон, наносимый "Охотой" основной цели, на 25-45%. Хорошее увеличение урона по основной цели.
> Добыча: рейд [Замок Нафрия](https://ru.wowhead.com/castle-nathria) босс [Сир Денатрий](https://ru.wowhead.com/npc=167406) и мировые боссы

<img src="/assets/img/guide/havoc/endurance.png" width="15" height="100%"> <u>Проводники выносливости</u>

* {{ site.data.conduits.Viscous_Ink }} — {{ site.data.spell.Demonic_WardsHDH }} снижает получаемый вами урон от магии дополнительно на 6-13%. Очень сильный проводник, берем когда в бою присутствует магический урон.
> Добыча: подземелье [Tazavesh, the Veiled Market](https://ptr.wowhead.com/zone=13577/) босс [So'azmi](https://ptr.wowhead.com/npc=175806)

* {{ site.data.conduits.Fel_Defender }} — время восстановления вашей способности {{ site.data.spell.Blur }} уменьшается на 5-20 сек. Выбор по умолчанию в боях без магии.
> Добыча: подземелье [Tazavesh, the Veiled Market](https://ptr.wowhead.com/zone=13577/) босс [So'leah](https://ptr.wowhead.com/npc=180863/)

* [Конденсированная сфера анимы](https://ptr.wowhead.com/spell=357888) — При получении любого урона вы восполняете 2-4,5% максимального запаса здоровья. Эффект срабатывает не чаще раза в 10 сек.
> Добыча: мировой босс [Мор'гет](https://ptr.wowhead.com/npc=178958/)

<img src="/assets/img/guide/havoc/finesse.png" width="15" height="100%"> <u>Проводники точности</u>

* {{ site.data.conduits.Felfire_Haste }} — ваша скорость передвижения повышается на 5-20% после использования способности {{ site.data.spell.Fel_Rush }}. Дает дополнительную мобильность и без того мобильному классу. Все же является единственным универсальным выбором проводника в эту ячейку.
> Добыча: рейд [Святилище Господства](https://ptr.wowhead.com/zone=13561/) босс [Сир Денатрий](https://ptr.wowhead.com/npc=179390/)

* {{ site.data.conduits.Ravenous_Consumption }} — способность {{ site.data.spell.Consume_Magic }} получает 15-30% шанс рассеять дополнительный эффект.
> Добыча: подземелье [Tazavesh, the Veiled Market](https://ptr.wowhead.com/zone=13577/) босс [P.O.S.T. Master](https://ptr.wowhead.com/npc=175646)

## Легендарные предметы

### Рейд
 
**СТ**

* {{ site.data.legendary.Burning_Wound }} — {{ site.data.spell.Demons_Bite }}оставляет открытую рану, наносящую противнику урон от магии Хаоса 15 sec. и увеличивающую урон, получаемый от вашего {{ site.data.spell.Immolation_Aura }} на 65%.
> Крафтим в слот спины.

Рецепт на этот легендарный предмет добывается с подземелья {{ site.data.mplus.Plaguefall }}.

* {{ site.data.legendary.Chaos_Theory }} — {{ site.data.spell.Blade_Dance }} с вероятностью 30% накладывает на персонажа эффект “Клинки Хаоса”, который повышает урон от {{ site.data.spell.Chaos_Strike }} на 50%, а вероятность восполнения гнева - дополнительно на 60%. Время действия эффекта - 8 сек. 
> Крафтим в слот наручей.

Рецепт на этот легендарный предмет добывается с последнего босса {{ site.data.mplus.Sire_Denathrius }} рейда {{ site.data.mplus.Castle_Nathria }}.

**Клив/АоЕ**

* {{ site.data.legendary.Darkglare_Boon }} — {{ site.data.spell.Eye_Beam }} с вероятностью 40% не требует восстановления и восполняет 30 ед. гнева.
> Крафтим в слот пояса.

Рецепт на этот легендарный предмет добывается с подземелья {{ site.data.mplus.De_Other_Side }}

* {{ site.data.legendary.Collective_Anguish }} — При использовании {{ site.data.spell.Eye_Beam }} Охотник на Демонов призывает союзника, который использует {{ site.data.spell.Fel_Devastation }}.
> Крафтим в слот наручей.

Рецепт на этот легендарный предмет добывается с предпоследнего босса {{ site.data.mplus.General_Kaal }} рейда {{ site.data.mplus.Castle_Nathria }}.

* {{ site.data.legendary.Burning_Wound }} — {{ site.data.spell.Demons_Bite }} оставляет открытую рану, наносящую противнику урон от магии Хаоса 15 сек. и увеличивающую урон, получаемый от вашего {{ site.data.spell.Immolation_Aura }} на 65%.
> Крафтим в слот спины.

Рецепт на этот легендарный предмет добывается с подземелья {{ site.data.mplus.Plaguefall }}.

* [Пылающая бойня](https://ptr.wowhead.com/spell=355890/) - При достижении цели [Охота](https://ru.wowhead.com/spell=323639) активирует [Обжигающий жар](https://ru.wowhead.com/spell=258920) 
и вы получаете 3% ловкости на 12 секунд за каждого пораженного врага.

> Крафтим в слот спины.

Рецепт выдается на 48 уровне известности ковенанат.

* [Терзающий взгляд](https://ptr.wowhead.com/spell=355886) — [Клеймо греха](https://ru.wowhead.com/spell=317009/sinful-brand) наносит на 10% больше урона, а урон от 
[Пронзающего взгляда](https://ru.wowhead.com/spell=198013) увеличивает время действия [Клейма греха](https://ru.wowhead.com/spell=317009/sinful-brand) на 0,5 секунды за каждый тик способности.

> Крафтим в слот ног.

Рецепт выдается на 48 уровне известности ковенанат.

## Расходники

### Зачарование

* Кольца: 2х{{ site.data.prof.Enchant_Ring_Tenet_of_Versatility }}
* Сапоги: {{ site.data.prof.Enchant_Boots_Eternal_Agility }}
* Нагрудник: {{ site.data.prof.Enchant_Chest_Eternal_Stats }}
* Плащ: {{ site.data.prof.Enchant_Cloak_Fortified_Leech }}

**Оружие:**
**Рейд СТ**

* 1х {{ site.data.prof.Celestial_Guidance }}
* 1х {{ site.data.prof.Sinful_Revelation }}

**M+ АоЕ**

*  2х {{ site.data.prof.Enchant_Weapon_Lightless_Force }}

Для максимально точного подбора зачарований на кольца лучше воспользоваться рейдботсом.

### Настой и  Зелья

* Настой: {{ site.data.prof.Eternal_Flask }}
* Зелья: {{ site.data.prof.Potion_of_Phantom_Fire }} СТ
* Зелья: {{ site.data.prof.Potion_of_Empowered_Exorcisms }} АОЕ
* Исцеление: {{ site.data.prof.Spiritual_Healing_Potion }}

### Камни

* {{ site.data.prof.Deadly_Jewel_Cluster }} — +16 к вероятности критического удара
* {{ site.data.prof.Quick_Jewel_Cluster }} — +16 к скорости
* {{ site.data.prof.Versatile_Jewel_Cluster }} — +16 к универсальности

Воспользуйтесь рейдботсом чтоб узнать какая характеристика вам дает максимальную прибавку урона

### Еда
В рейдах всегда используйте пиры.
* {{ site.data.prof.Feast_of_Gluttonous_Hedonism }} —  повышает ловкость на 20.

Если пиры не доступны используйте еду которая повышает вторичные характеристики 
* {{ site.data.prof.Phantasmal_Souffle_and_Fries }} —  повышает вероятность критического удара на 30. 
* {{ site.data.prof.Steak_a_la_Mode }} — повышает  универсальность на 30. 
* {{ site.data.prof.Tenebrous_Crown_Roast_Aspic }} — повышает скорость на 30.

### Масло и Заточки для оружия
**Рейд СТ**
• На одно оружие используйте {{ site.data.prof.Shadowcore_Oil }}, а на второе {{ site.data.prof.Shaded_Sharpening_Stone }}.
• На оба оружия используйте {{ site.data.prof.Shadowcore_Oil }}.
> Первый вариант даст более стабильный урон, второй вариант зависит от проков но даст выше урон

**М+ АоЕ**
На оба оружия используйте {{ site.data.prof.Shaded_Sharpening_Stone }}.

### Накладки 

* {{ site.data.prof.Heavy_Desolate_Armor_Kit }} — Укрепляет нагрудник, повышая прибавку к выносливости на 32 на 2 часа.

## Приоритет статов

<p align="center" width="100%"> <img src="{{ site.url }}/assets/img/guide/sim.gif"> </p>

**Почему веса статов "не имеют смысла", и почему лучше пользоваться Top Gear.**

Представьте, что функция описывающая ДПС выглядит следующим образом: 
DPS = a1 х Crit+a2 х Haste+a3 х Mastery+a4 х Versatility+a5 х Agility + а6 х MH_DPS + a7 x OH_DPS. 
Значения крита, хасты, и т.д. получаются исходя из вашей экипировки, а веса статов, это коэффициенты (а1, а2, а3... а7). 
Чтобы получить эти самые коэффициенты ребята из симкрафта особо не заморачиваются и применяют простейшую множественную линейную регрессию для получения этих самых весов. 
Сложно объяснить вообще не вдаваясь в подробности, по этому кратко: значения всех статов будут варьироваться на небольшую величину (оставаясь по прежнему 
вблизи ваших текущим значений) и основываясь на этом будут получены веса статов).  Т.е. программа не такая уж и умная как нам хотелось бы, не будет она искать никакого 
"баланса в статах". "Максимум" что вы получаете из весов статов, это то, изменение какого стата влечет к наибольшему/наименьшему увеличению вашего ДПС. 
Так же веса статов покажут, если у вас (речь не о ДХ) катастрофически мало, скажем крита, то программа может заметить, что даже малое повышение крита вам 
дает "огромный" прирост ДПС - она и влепит, что вам "надо добрать крита", т.е. выдаст, что вес крита выше, чем у остальных статов. 
Веса статов, это простая математическая модель, которая не берет в расчет смену талантов, легендарок, медиумов, проводников. 
Лучшее решение, которые вы можете принять в вопросе выбора лучшего предмета экипировки - использовать Top Gear.

## Заметки по боссам Святилища господства

<div class="guide-boss-card">

<div>
<svg preserveAspectRatio="xMidYMax meet" viewBox="0 0 1600 200" class="svg-separator sep4" style="display:block">
<polygon points="886,86 800,172 714,86 -4,86 -4,204 1604,204 1604,86 " style="fill:#191919;"></polygon>
<polygon points="800,172 886,86 900,86 800,186 700,86 714,86 " style="opacity:1;fill:#d49a29"></polygon>
<polygon points="800,162 876,86 888,86 800,174 712,86 724,86 " style="opacity:1;fill:#795a1e"></polygon>
</svg>

</div>

<div class="subtitle quadrata accent"><img src="{{ site.url }}/assets/img/guide/havoc/SoD/The_Tarragrue.png" width="24" height="24">Таррагр</div>

<div class="flex break-mobile">

<div class="flex-2" markdown="1">


Рекомендуемый билд: **1123121**

<img src="{{ site.url }}/assets/img/guide/havoc/rana.png">

Рекомендуемый легендарный предмет: {{ site.data.legendary.Burning_Wound }}

Альтернативный билд: **3323221**

<img src="{{ site.url }}/assets/img/guide/havoc/teoriya.png">

Рекомендуемый легендарный предмет: {{ site.data.legendary.Chaos_Theory }}

**Медиумы:**<br>
<img src="{{ site.url }}/assets/img/guide/havoc/nightfae.png" width="22" height="22"> Ночной народец - **Ния**<br>
<img src="{{ site.url }}/assets/img/guide/havoc/venthyr.png" width="16" height="24"> Вентиры - **Наджия**<br>
<img src="{{ site.url }}/assets/img/guide/havoc/kyrian.png" width="16" height="24"> Кирии - **Пелагос**<br>
<img src="{{ site.url }}/assets/img/guide/havoc/nekrolords.png" width="16" height="24"> Некролорды - **Костоплав Гейрмир**

</div>
</div>

<div class="roate-divider">
<div>

<svg preserveAspectRatio="xMidYMax meet" viewBox="0 0 1600 200" class="svg-separator sep4" style="display:block">
<polygon points="886,86 800,172 714,86 -4,86 -4,204 1604,204 1604,86 " style="fill:#191919;"></polygon>
<polygon points="800,172 886,86 900,86 800,186 700,86 714,86 " style="opacity:1;fill:#d49a29"></polygon>
<polygon points="800,162 876,86 888,86 800,174 712,86 724,86 " style="opacity:1;fill:#795a1e"></polygon>
</svg></div></div></div>

<img src="{{ site.url }}/assets/img/guide/havoc/SoD/The_Tarragrue.png" width="24" height="24"> **Таррагр**


Рекомендуемый билд: **1123121**

<img src="{{ site.url }}/assets/img/guide/havoc/rana.png">

Рекомендуемый легендарный предмет: {{ site.data.legendary.Burning_Wound }}

Альтернативный билд: **3323221**

<img src="{{ site.url }}/assets/img/guide/havoc/teoriya.png">

Рекомендуемый легендарный предмет: {{ site.data.legendary.Chaos_Theory }}

**Медиумы:**
* <img src="{{ site.url }}/assets/img/guide/havoc/nightfae.png" width="22" height="22"> Ночной народец - **Ния**
* <img src="{{ site.url }}/assets/img/guide/havoc/venthyr.png" width="16" height="24"> Вентиры - **Наджия**
* <img src="{{ site.url }}/assets/img/guide/havoc/kyrian.png" width="16" height="24"> Кирии - **Пелагос**
* <img src="{{ site.url }}/assets/img/guide/havoc/nekrolords.png" width="16" height="24"> Некролорды - **Костоплав Гейрмир**



<hr>
<br>

<img src="{{ site.url }}/assets/img/guide/havoc/SoD/Eye_of_the_Jailer.png" width="24" height="24"> **Око Тюремщика**

Рекомендуемый билд: **1123121**

<img src="{{ site.url }}/assets/img/guide/havoc/rana.png">

Рекомендуемый легендарный предмет: {{ site.data.legendary.Burning_Wound }}

Альтернативный легендарный предмет: {{ site.data.legendary.Darkglare_Boon }}

**Медиумы:**
* <img src="{{ site.url }}/assets/img/guide/havoc/nightfae.png" width="22" height="22"> Ночной народец - **Ния**
* <img src="{{ site.url }}/assets/img/guide/havoc/venthyr.png" width="16" height="24"> Вентиры - **Наджия**
* <img src="{{ site.url }}/assets/img/guide/havoc/kyrian.png" width="16" height="24"> Кирии - **Пелагос**
* <img src="{{ site.url }}/assets/img/guide/havoc/nekrolords.png" width="16" height="24"> Некролорды - **Костоплав Гейрмир**

<hr>
<br>

<img src="{{ site.url }}/assets/img/guide/havoc/SoD/The_Nine.png" width="24" height="24"> **Девять**

Рекомендуемый билд: **1123121**

<img src="{{ site.url }}/assets/img/guide/havoc/rana.png">

Рекомендуемый легендарный предмет: {{ site.data.legendary.Burning_Wound }}

Альтернативный билд: **3323221**

<img src="{{ site.url }}/assets/img/guide/havoc/teoriya.png">

Рекомендуемый легендарный предмет: {{ site.data.legendary.Chaos_Theory }}

**Медиумы:**
* <img src="{{ site.url }}/assets/img/guide/havoc/nightfae.png" width="22" height="22"> Ночной народец - **Ния**
* <img src="{{ site.url }}/assets/img/guide/havoc/venthyr.png" width="16" height="24"> Вентиры - **Наджия**
* <img src="{{ site.url }}/assets/img/guide/havoc/kyrian.png" width="16" height="24"> Кирии - **Пелагос**
* <img src="{{ site.url }}/assets/img/guide/havoc/nekrolords.png" width="16" height="24"> Некролорды - **Костоплав Гейрмир**

<hr>
<br>

<img src="{{ site.url }}/assets/img/guide/havoc/SoD/Remnant_of_Nerzhul.png" width="24" height="24"> **Душа Нер'зула**

Рекомендуемый билд: **1123121**

<img src="{{ site.url }}/assets/img/guide/havoc/toska.png">

Рекомендуемый легендарный предмет: {{ site.data.legendary.Collective_Anguish }}

Альтернативный билд:: **1133121**

<img src="{{ site.url }}/assets/img/guide/havoc/toska2.png">

Рекомендуемый легендарный предмет: {{ site.data.legendary.Collective_Anguish }}

**Медиумы:**
* <img src="{{ site.url }}/assets/img/guide/havoc/nightfae.png" width="22" height="22"> Ночной народец - **Ния**
* <img src="{{ site.url }}/assets/img/guide/havoc/venthyr.png" width="16" height="24"> Вентиры - **Наджия**
* <img src="{{ site.url }}/assets/img/guide/havoc/kyrian.png" width="16" height="24"> Кирии - **Пелагос**
* <img src="{{ site.url }}/assets/img/guide/havoc/nekrolords.png" width="16" height="24"> Некролорды - **Костоплав Гейрмир**


<hr>
<br>

<img src="{{ site.url }}/assets/img/guide/havoc/SoD/Soulrender_Dormazain.png" width="24" height="24"> **Раздиратель душ Дормацайн**

Рекомендуемый билд: **1123121**

<img src="{{ site.url }}/assets/img/guide/havoc/rana.png">

Рекомендуемый легендарный предмет: {{ site.data.legendary.Burning_Wound }}

Альтернативный билд: **3323221**

<img src="{{ site.url }}/assets/img/guide/havoc/teoriya.png">

Рекомендуемый легендарный предмет: {{ site.data.legendary.Chaos_Theory }}

**Медиумы:**
* <img src="{{ site.url }}/assets/img/guide/havoc/nightfae.png" width="22" height="22"> Ночной народец - **Ния**
* <img src="{{ site.url }}/assets/img/guide/havoc/venthyr.png" width="16" height="24"> Вентиры - **Наджия**
* <img src="{{ site.url }}/assets/img/guide/havoc/kyrian.png" width="16" height="24"> Кирии - **Пелагос**
* <img src="{{ site.url }}/assets/img/guide/havoc/nekrolords.png" width="16" height="24"> Некролорды - **Костоплав Гейрмир**

<hr>
<br>

<img src="{{ site.url }}/assets/img/guide/havoc/SoD/Painsmith_Raznal.png" width="24" height="24"> **Кузнец боли Разнал**

Рекомендуемый билд: **1123121**

<img src="{{ site.url }}/assets/img/guide/havoc/rana.png">

Рекомендуемый легендарный предмет: {{ site.data.legendary.Burning_Wound }}

Альтернативный билд: **3323221**

<img src="{{ site.url }}/assets/img/guide/havoc/teoriya.png">

Рекомендуемый легендарный предмет: {{ site.data.legendary.Chaos_Theory }}

**Медиумы:**
* <img src="{{ site.url }}/assets/img/guide/havoc/nightfae.png" width="22" height="22"> Ночной народец - **Ния**
* <img src="{{ site.url }}/assets/img/guide/havoc/venthyr.png" width="16" height="24"> Вентиры - **Наджия**
* <img src="{{ site.url }}/assets/img/guide/havoc/kyrian.png" width="16" height="24"> Кирии - **Пелагос**
* <img src="{{ site.url }}/assets/img/guide/havoc/nekrolords.png" width="16" height="24"> Некролорды - **Костоплав Гейрмир**

<hr>
<br>

<img src="{{ site.url }}/assets/img/guide/havoc/SoD/Guardian.png" width="24" height="24"> **Стражница Предвечных**

Рекомендуемый билд: **1123121**

<img src="{{ site.url }}/assets/img/guide/havoc/rana.png">

Рекомендуемый легендарный предмет: {{ site.data.legendary.Burning_Wound }}

Альтернативный легендарный предмет: {{ site.data.legendary.Darkglare_Boon }}

Альтернативный билд: **3323221**

<img src="{{ site.url }}/assets/img/guide/havoc/teoriya.png">

Рекомендуемый легендарный предмет: {{ site.data.legendary.Chaos_Theory }}

**Медиумы:**
* <img src="{{ site.url }}/assets/img/guide/havoc/nightfae.png" width="22" height="22"> Ночной народец - **Корейн**
* <img src="{{ site.url }}/assets/img/guide/havoc/venthyr.png" width="16" height="24"> Вентиры - **Наджия**
* <img src="{{ site.url }}/assets/img/guide/havoc/kyrian.png" width="16" height="24"> Кирии - **Пелагос**
* <img src="{{ site.url }}/assets/img/guide/havoc/nekrolords.png" width="16" height="24"> Некролорды - **Костоплав Гейрмир**

<hr>
<br>

<img src="{{ site.url }}/assets/img/guide/havoc/SoD/Fatescribe_Roh_Kalo.png" width="24" height="24"> **Fatescribe Roh-Kalo**

Рекомендуемый билд: **3323221**

<img src="https://i.imgur.com/Aum8vnp.png">

Рекомендуемый легендарный предмет: {{ site.data.legendary.Chaos_Theory }}

Альтернативный билд: **1133121**

<img src="https://i.imgur.com/EqW2Gr8.png">

Рекомендуемый легендарный предмет: {{ site.data.legendary.Burning_Wound }}

**Медиумы:**
* <img src="{{ site.url }}/assets/img/guide/havoc/nightfae.png" width="22" height="22"> Ночной народец - **Ния**
* <img src="{{ site.url }}/assets/img/guide/havoc/venthyr.png" width="16" height="24"> Вентиры - **Наджия**
* <img src="{{ site.url }}/assets/img/guide/havoc/kyrian.png" width="16" height="24"> Кирии - **Пелагос**
* <img src="{{ site.url }}/assets/img/guide/havoc/nekrolords.png" width="16" height="24"> Некролорды - **Костоплав Гейрмир**

<hr>
<br>

<img src="{{ site.url }}/assets/img/guide/havoc/SoD/Kel_Thuzad.png" width="24" height="24"> **Кел'Тузад**

Рекомендуемый билд: **1123121**

<img src="{{ site.url }}/assets/img/guide/havoc/toska.png">

Рекомендуемый легендарный предмет: {{ site.data.legendary.Collective_Anguish }}

Рекомендуемый билд: **1123123**

<img src="{{ site.url }}/assets/img/guide/havoc/toska3.png">

Рекомендуемый легендарный предмет: {{ site.data.legendary.Collective_Anguish }}

**Медиумы:**
* <img src="{{ site.url }}/assets/img/guide/havoc/nightfae.png" width="22" height="22"> Ночной народец - **Корейн**
* <img src="{{ site.url }}/assets/img/guide/havoc/venthyr.png" width="16" height="24"> Вентиры - **Наджия**
* <img src="{{ site.url }}/assets/img/guide/havoc/kyrian.png" width="16" height="24"> Кирии - **Пелагос**
* <img src="{{ site.url }}/assets/img/guide/havoc/nekrolords.png" width="16" height="24"> Некролорды - **Костоплав Гейрмир**

<hr>
<br>

<img src="{{ site.url }}/assets/img/guide/havoc/SoD/Sylvanas_Windrunner.png" width="24" height="24"> **Сильвана Ветрокрылая**

Рекомендуемый билд: **1123121**

<img src="{{ site.url }}/assets/img/guide/havoc/toska.png">

Рекомендуемый легендарный предмет: {{ site.data.legendary.Burning_Wound }}
Альтернативный легендарный предмет: {{ site.data.legendary.Collective_Anguish }}

**Медиумы:**
* <img src="{{ site.url }}/assets/img/guide/havoc/nightfae.png" width="22" height="22"> Ночной народец - **Корейн / Ния**
* <img src="{{ site.url }}/assets/img/guide/havoc/venthyr.png" width="16" height="24"> Вентиры - **Наджия**
* <img src="{{ site.url }}/assets/img/guide/havoc/kyrian.png" width="16" height="24"> Кирии - **Пелагос**
* <img src="{{ site.url }}/assets/img/guide/havoc/nekrolords.png" width="16" height="24"> Некролорды - **Костоплав Гейрмир**


* Голова - [Cowl of Haunting Precognition](https://ptr.wowhead.com/item=186330/) Босс <img src="{{ site.url }}/assets/img/guide/havoc/SoD/Fatescribe_Roh_Kalo.png" width="24" height="24"> [Fatescribe Roh-Kalo](https://ptr.wowhead.com/npc=179390)
* Шея	    
* !Плечо - [Spaulders of the Crooked Confidant](https://ptr.wowhead.com/item=186336) Босс <img src="{{ site.url }}/assets/img/guide/havoc/SoD/Kel_Thuzad.png" width="24" height="24"> [Кел'Тузад](https://ptr.wowhead.com/npc=15990/kelthuzad) 
* Плащ - [Self-Replicating Tissue](https://ptr.wowhead.com/item=186374/) Босс <img src="{{ site.url }}/assets/img/guide/havoc/SoD/Guardian.png" width="24" height="24"> [Стражница Предвечных](https://ptr.wowhead.com/npc=175731)
* !Грудь - [Witherheart Studded Breastplate](https://ptr.wowhead.com/item=186334) Босс <img src="{{ site.url }}/assets/img/guide/havoc/SoD/Sylvanas_Windrunner.png" width="24" height="24"> [Сильвана Ветрокрылая](https://ptr.wowhead.com/npc=180828) 
* Запястье - [Fate-Threaded Bindings](https://ptr.wowhead.com/item=186335) Босс <img src="{{ site.url }}/assets/img/guide/havoc/SoD/Fatescribe_Roh_Kalo.png" width="24" height="24"> [Fatescribe Roh-Kalo](https://ptr.wowhead.com/npc=179390)
* Руки - [Loyal Kvaldir's Handwraps](https://ptr.wowhead.com/item=186295) Босс <img src="{{ site.url }}/assets/img/guide/havoc/SoD/Eye_of_the_Jailer.png" width="24" height="24"> [Око Тюремщика](https://ptr.wowhead.com/npc=180018)
* !Пояс - [Windrunner's Baldric](https://ptr.wowhead.com/item=186332) Босс <img src="{{ site.url }}/assets/img/guide/havoc/SoD/Sylvanas_Windrunner.png" width="24" height="24"> [Сильвана Ветрокрылая](https://ptr.wowhead.com/npc=180828) 	
* !Ноги - [Elite Aranakk Breeches](https://ptr.wowhead.com/item=186331) Босс <img src="{{ site.url }}/assets/img/guide/havoc/SoD/Kel_Thuzad.png" width="24" height="24"> [Кел'Тузад](https://ptr.wowhead.com/npc=15990/kelthuzad)	
* Сапоги - [Daschla's Defiant Treads](https://ptr.wowhead.com/item=186299) Босс <img src="{{ site.url }}/assets/img/guide/havoc/SoD/The_Nine.png" width="24" height="24"> [Девять](https://ptr.wowhead.com/npc=178738)
* Кольцо 1
* Кольцо 2
* Аксессуар 1
* Аксессуар 2
* Основная рука - [Cruciform Veinripper](https://ptr.wowhead.com/item=186388) Босс <img src="{{ site.url }}/assets/img/guide/havoc/SoD/Painsmith_Raznal.png" width="24" height="24"> [Кузнец боли Разнал](https://ptr.wowhead.com/npc=176523)
* Левая рука - [Cruciform Veinripper](https://ptr.wowhead.com/item=186388) Босс <img src="{{ site.url }}/assets/img/guide/havoc/SoD/Painsmith_Raznal.png" width="24" height="24"> [Кузнец боли Разнал](https://ptr.wowhead.com/npc=176523)



<div class="minibox"><a href="{{ site.url }}/guide/havoc/overview.html">Далее:<br>Обзор</a></div>
