---
layout: page
title: Ковенанты
last_update: 2020-11-14 09:00:00
game_version: 9.0.0 Shadowlands
author: Rodriguezz
toc: true
---

<div id="smooth-nav-outer">
<a href="{{ site.url }}/guide/havoc/quick_faq.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/wow_token01.jpg"> Кратко и Быстро</a>
<a href="{{ site.url }}/guide/havoc/overview.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/inv_misc_spyglass_02.jpg"> Обзор</a>
<a href="{{ site.url }}/guide/havoc/beginners.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/spell_lifegivingseed.jpg"> Новичкам</a>
<a href="{{ site.url }}/guide/havoc/talent-builds.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/ability_marksmanship.jpg"> Таланты и Билды</a>
<a href="{{ site.url }}/guide/havoc/rotation-priority.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/wow_token01.jpg"> Ротация</a>
<a href="{{ site.url }}/guide/havoc/stats.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/inv_inscription_80_warscroll_intellect.jpg"> Характеристики</a>
<a href="{{ site.url }}/guide/havoc/gear.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/inv_chest_chain_03.jpg"> Бис лист</a>
<a href="{{ site.url }}/guide/havoc/covenant.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/wow_token01.jpg"><span style="color: white;"> Ковенанты</span></a>
<a href="{{ site.url }}/guide/havoc/consumables.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/inv_potion_92.jpg"> Расходники</a>
<a href="{{ site.url }}/guide/havoc/macros-addons.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/inv_eng_gearspringparts.jpg"> Макросы и Аддоны</a>
<a href="{{ site.url }}/guide/havoc/weakauras.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/spell_holy_auramastery.jpg"> WeakAuras</a>
<a href="{{ site.url }}/guide/havoc/common-terms.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/ui_chat.jpg"> Сокращения</a>
</div>
<br>
## Что такое Ковенанты?

Одной из ключевых новинок World of Warcraft Shadowlands станут ковенанты. Это своеобразные фракции, которые вобрали в себя лучшие идеи системы классовых оплотов и перенесли их на новый уровень. Занимаясь улучшением отношений с ними, игроки будут получать дополнительные способности в свой арсенал, пассивные бонусы и косметические награды, открывать масштабные сюжетные кампании. Узнать больше о ковенантах можно в статье <a href="{{ site.url }}/blog/2020/10/22/covenant-abilities-shadowlands.html">Обзор Ковенантов</a>.

## Какой Ковенант выбрать

Для Охотника на Демонов специализации Истребления хорошим выбором будет ковенант <span style="color:#68ccef;font-size:1em;"><img src="{{ site.url }}/assets/img/guide/havoc/kyrian.png" width="16" height="24"> <b>Кирий</b></span>. Лучший медиум для нас это **Пелагий**. 

После вступленя в ковенант нам отроются две способности:

{{ site.data.covenant.Elysian_Decree }} - Размещает в указанном месте кирийскую печать, которая активируется через 2 sec. Печать наносит сильный АоЕ урон, которую можно усилить баффом от {{ site.data.talent.Momentum }}. После взрыва печати появляются 3 {{ site.data.spell.Shattered_SoulsHDH }}, это сильно повышает нашу выживаемость. Таже использование {{ site.data.covenant.Elysian_Decree }} активирует способность нашего медиума и дает нам бафф искусности на 10сек, который можно продлевать собирая сферы "Печальных воспоминаний", тем самым усилия наши способности которые используют Хаос, например такие как {{ site.data.spell.Chaos_Strike }} или {{ site.data.spell.Eye_Beam }}.

{{ site.data.covenant.Summon_Steward }} - Вы зовете распорядителя, и он приносит вам {{ site.data.covenant.Phial_of_Serenity }}, восполняющий 20% здоровья и снимающий проклятия, болезни, яды и эффекты кровотечения. Очень полезный флакон, сильно упрощает жизнь в ключах, снимает даже стаки аффикса {{ site.data.mplus.Necrotic }}.

## Какие связи душ выбрать

<p align="center" width="100%"> <img src="{{ site.url }}/assets/img/guide/havoc/pelagos.png"> </p>

## Проводники (Кондуиты)

### Рейд

<u>Проводники силы</u>

* {{ site.data.conduits.Demons_Touch }} —  {{ site.data.spell.Chaos_Strike }} с вероятностью 5,0%-14,5% сработает еще раз. Очень сильный кондуит для СТ боев.
* {{ site.data.conduits.Growing_Inferno }} — урон способности {{ site.data.spell.Immolation_Aura }} дополнительно увеличивается на 10-24% каждый раз, когда она наносит урон. Очень сильно увеличивает урон от {{ site.data.spell.Immolation_Aura }}, используем всегда.

<u>Проводники выносливости</u>

* {{ site.data.conduits.Viscous_Ink }} — {{ site.data.spell.Demonic_WardsHDH }} снижает получаемый вами урона от магии дополнительно на 6-13%. Очень сильный проводник, берем когда в бою присутствует магический урон.
* {{ site.data.conduits.Fel_Defender }} — время восстановления вашей способности {{ site.data.spell.Blur }} уменьшается на 5-20 сек. Выбор по умолчанию в в боях без магии.

<u>Проводники точности</u>

* {{ site.data.conduits.Felfire_Haste }} — ваша скорость передвижения повышается на 5-20% после использования способности {{ site.data.spell.Fel_Rush }}. Дает дополнительную мобильность и без того мобильному классу. Все же является единственным универсальным выбором проводника в эту ячейку
* {{ site.data.conduits.Ravenous_Consumption }} — способность {{ site.data.spell.Consume_Magic }} получает 15-30% шанс рассеять дополнительный эффект.

### Мифик+

<u>Проводники силы</u>

* {{ site.data.conduits.Repeat_Decree }} — способность {{ site.data.covenant.Elysian_Decree }} устанавливает вторую руну через 1 секунду, которая наносит 25% урона. Усиляет и без того сильную способность ковенанта, но нужен высокий илвл кондуита.
* {{ site.data.conduits.Demons_Touch }} —  {{ site.data.spell.Chaos_Strike }} с вероятностью 5,0%-14,5% сработает еще раз. Очень сильный кондуит для СТ боев.
* {{ site.data.conduits.Growing_Inferno }} — урон способности {{ site.data.spell.Immolation_Aura }} дополнительно увеличивается на 10-24% каждый раз, когда она наносит урон. Очень сильно увеличивает урон от { site.data.spell.Immolation_Aura }}, используем всегда.

<u>Проводники выносливости</u>

* {{ site.data.conduits.Viscous_Ink }} — {{ site.data.spell.Demonic_WardsHDH }} снижает получаемый вами урона от магии дополнительно на 6-13%. Очень сильный проводник, берем когда в бою присутствует магический урон.
* {{ site.data.conduits.Fel_Defender }} — время восстановления вашей способности {{ site.data.spell.Blur }} уменьшается на 5-20 сек. Выбор по умолчанию в в боях без магии.

<u>Проводники точности</u>

* {{ site.data.conduits.Felfire_Haste }} — ваша скорость передвижения повышается на 5-20% после использования способности {{ site.data.spell.Fel_Rush }}. Дает дополнительную мобильность и без того мобильному классу. Все же является единственным универсальным выбором проводника в эту ячейку
* {{ site.data.conduits.Ravenous_Consumption }} — способность {{ site.data.spell.Consume_Magic }} получает 15-30% шанс рассеять дополнительный эффект.



<div class="minibox minibox-left"><a href="{{ site.url }}/guide/havoc/gear.htmll">Назад:<br>Бис лист</a></div>
<div class="minibox"><a href="{{ site.url }}/guide/havoc/consumables.html">Длаее:<br>Расходники</a></div>