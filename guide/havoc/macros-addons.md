---
layout: page
title: Обзор
last_update: 2020-01-11 09:00:00
game_version: 9.0.0 Shadowlands
author: Rodriguezz
toc: true
---

<div id="smooth-nav-outer">
<a href="{{ site.url }}/guide/havoc/overview.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/inv_misc_spyglass_02.jpg"> Обзор</a>
<a href="{{ site.url }}/guide/havoc/beginners.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/spell_lifegivingseed.jpg"> Новичкам</a>
<a href="{{ site.url }}/guide/havoc/talent-builds.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/ability_marksmanship.jpg"> Таланты и Билды</a>
<a href="{{ site.url }}/guide/havoc/rotation-priority.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/wow_token01.jpg"> Ротация</a>
<a href="{{ site.url }}/guide/havoc/stats.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/inv_inscription_80_warscroll_intellect.jpg"> Характеристики</a>
<a href="{{ site.url }}/guide/havoc/gear.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/inv_chest_chain_03.jpg"> Бис лист</a>
<a href="{{ site.url }}/guide/havoc/consumables.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/inv_potion_92.jpg"> Расходники</a>
<a href="{{ site.url }}/guide/havoc/macros-addons.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/inv_eng_gearspringparts.jpg"><span style="color: white;"> Макросы и Аддоны</span></a>
<a href="{{ site.url }}/guide/havoc/weakauras.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/spell_holy_auramastery.jpg"> WeakAuras</a>
<a href="{{ site.url }}/guide/havoc/common-terms.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/ui_chat.jpg"> Сокращения</a>
<a href="">#<img src="https://wow.zamimg.com/images/wow/icons/medium/wow_token01.jpg"> Commenting Legendaries</a>
<a href="#"><img src="https://wow.zamimg.com/images/wow/icons/medium/wow_token01.jpg"> Commenting Legendaries</a>
</div>
<br>
## Макросы
	   
Макрос — это маленькая программа, написанная на скриптовом языке, предназначенная для решения следующих (к примеру) задач:
> Каждый класс в WoW имеет гораздо больше заклинаний, чем может помещаться на панелях команд. Макросы позволяют объединять несколько умений в одну «кнопку» на панели команд, а сами умению будут использоваться с дополнительными модификаторами (клавишами Shift, Alt, Ctrl). Используя макросы, вы можете повесить до 24 заклинаний всего на 6 кнопок.<br>
> Макросы позволяют объединять несколько умений, активируя их нажатием одной кнопки, что может экономить время. Но данная возможность работает, только если не более чем одно из заклинаний имеет время каста или является мгновенным, но имеет гкд (GCD – общее время восстановления).<br>
> Также макросы могут выполнять множество других задач, например, рассчитывать эвойденс, если вы танк, или сообщать вам, когда в зоне вашей видимости появился затерянный во времени протодракон, пока вы летите по Грозовой Гряде. (Это достаточно сложные макросы и выходят за рамки нашей темы, но для любопытных они включены для примера в конце)

	   
 <li> Чтобы открыть интерфейс макроса в игре, введите «/ macro» или «/ m».</li>
 <li> Выберите между вкладками «Общие» и «Макросы для конкретного персонажа». Затем нажмите кнопку «Создать» в окне макроса.</li>
 <li> Выберите имя и значок, чтобы вы могли легко узнать свой макрос, затем нажмите «ОК».</li>
 <li> Выберите новый макрос и используйте текстовый редактор ниже, чтобы написать команду для макроса. Также вы можете скопировать готовый макрос и просто его вставить..</li>
 <li> Нажмите кнопку «Сохранить» и перетащите значок макроса на панели заклинайний чтоб использовать его, как любое другое заклинание из вашей книги заклинаний.</li>
 <li> Чтобы закрыть окно, нажмите «Выход» или просто нажмите Escape.</li> 
<br>
 Для получения дополнительной информации о создании макросов, включая полные списки условных операторов, модификаторов и других настроек команд, которые вы можете использовать, ознакомьтесь с нашим полным руководством по <a href="{{ site.url }}/guide/general/macros_guide.html"> Макросам</a>.

## Макрос на отмену заклинания
    

<pre>
<code class="language-less">@body-bg: #000;
body {
	background-color: @body-bg;
	color: contrast(@body-bg);
}</code>
</pre>


