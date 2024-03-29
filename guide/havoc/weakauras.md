---
layout: guide
title: WeakAuras
description: Гайд WeakAuras для Охотников на Демонов Истребление 10.0 PvE Dragonflight
last_update: 22022-10-25 09:00:00
game_version: 10.0 Dragonflight
author: Rodriguezz и Gaussiana
toc: true
image:
    path: assets/img/blog/prev/spec_logo.png
---

<div id="smooth-nav-outer">
<a href="{{ site.url }}/guide/havoc/changes-patch.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/inv_misc_spyglass_02.jpg"> Изменения в патче</a>
<a href="{{ site.url }}/guide/havoc/overview.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/inv_misc_spyglass_02.jpg"> Обзор</a>
<a href="{{ site.url }}/guide/havoc/gear.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/inv_chest_chain_03.jpg"> Бис лист</a>
<a href="{{ site.url }}/guide/havoc/talent-builds.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/ability_marksmanship.jpg"> Таланты и Билды</a>
<a href="{{ site.url }}/guide/havoc/set-bonuses.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/wow_token01.jpg"> Сет бонусы</a>
<a href="{{ site.url }}/guide/havoc/beginners.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/spell_lifegivingseed.jpg"> Новичкам</a>
<a href="{{ site.url }}/guide/havoc/rotation-priority.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/spell_mekkatorque_bot_bluegear.jpg"> Ротация</a>
<a href="{{ site.url }}/guide/havoc/stats.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/inv_inscription_80_warscroll_intellect.jpg"> Характеристики</a>
<a href="{{ site.url }}/guide/havoc/consumables.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/inv_potion_92.jpg"> Расходники</a>
<a href="{{ site.url }}/guide/havoc/macros-addons.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/inv_eng_gearspringparts.jpg"> Макросы и Аддоны</a>
<a href="{{ site.url }}/guide/havoc/weakauras.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/spell_holy_auramastery.jpg"><span style="color: white;"> WeakAuras</span></a>
<a href="{{ site.url }}/guide/havoc/common-terms.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/ui_chat.jpg"> Сокращения</a>
</div>
<br>

<a href="https://www.patreon.com/bePatron?u=43917749"  data-patreon-widget-type="become-patron-button">Become a Patron!</a><script async src="https://c6.patreon.com/becomePatronButton.bundle.js"></script>

## Что такое WeakAuras?

<a href="{{ site.url }}/guide/general/weak_auras.html"> WeakAuras2</a>  это дополнение к WoW, которое позволяет максимально 
настраивать практически любую информацию, которую вы хотели бы получить в своем пользовательском интерфейсе. Что может сделать WeakAuras? WeakAuras может показать 
вам любую информацию, доступную вам по вашему выбору. Это может быть что угодно, от того сколько стаков какого либо из баффов на вас, сколько времени 
осталось до восстановления вашего заклинания прерывания, до оповещения когда у вас мало маны. WeakAuras предназначен для изменения способа отображения информации,
 чтобы ее было легче увидеть. Вы можете сделать в ней так много, что вам будет проще сказать, чего не может сделать WeakAuras. WeakAuras не может сделать что-то за вас.
 Вы можете заставить ее сказать что-то шепотом или криком, но WeakAuras нельзя использовать для создания макросов или автоматизации любого игрового
 процесса (что в любом случае противоречит правилам игры). 
 
## Пользовательский интерфейс WeakAuras
 
Существует очень много таких сборников на сайте wago.io, но я могу вам посоветовать только два, они по моему мнению самые лучшие и очень качественно сделаны.
 
**Ipse's WA's - Demon Hunter:** <a href="https://wago.io/4kTH1dUFb" target="blank">https://wago.io/4kTH1dUFb</a>
<p align="left" width="100%">
<img src="{{ site.url }}/assets/img/guide/havoc/WA_ipses_havoc.gif">
</p>

**Afenar WA's - Demon Hunter:** <a href="https://wago.io/Afenar_DH" target="blank">https://wago.io/Afenar_DH</a>
<p align="left" width="100%">
<img src="{{ site.url }}/assets/img/guide/havoc/WA_afenar_Havoc.webp">
</p>

## Полезные ауры

Эта полоса гнева отображает оставшийся прирост ярости от {{ site.data.spell.Immolation_Aura }} и ваш текущий уровень гнева. 
Чрезвычайно полезно для измерения того, сколько гнева вы можете набрать, чтоб не уйти в оверкап.

**Полоса гнева с прогнозами:** <a href="https://wago.io/kib-dh-power-bar" target="blank">https://wago.io/kib-dh-power-bar</a>
<p align="left" width="100%">
<img src="{{ site.url }}/assets/img/guide/havoc/WA_Kibo_Power_bar.gif">
</p>

## Создание собственных 

Если вам нужна только одна WeakAura, а не сборник, или если вы просто не можете найти ту, которая соответствует вашим потребностям,
 вы всегда можете создать свою собственную.
 Для более сложных WeakAuras вы можете взглянуть на наше подробное руководство по <a href="{{ site.url }}/guide/general/weak_auras.html"> WeakAuras</a>  или посетить <a href="WeakAurashttps://discord.gg/wa2">Discord канал WeakAuras</a>, 
 но вы можете получить базовые знания по WeakAuras прямо здесь.
 <br>
Для того чтобы быстро создать WeakAura посетите страницу на WowHead с нужной вам способностью, талантом или PvP-талантом и нажмите красную кнопку **Экспорт WeakAuras**, 
 чтобы открыть окно экспорта. Далее просто нажмите «Копировать», чтобы использовать ауру по умолчанию, или **Настроить**, чтобы легко изменить ее настройки!
 
 <p align="left" width="100%">
<img src="{{ site.url }}/assets/img/guide/havoc/WA_crate_havoc.jpg">
</p>

 <p align="left" width="100%">
<img src="{{ site.url }}/assets/img/guide/havoc/WeakAuras_preferens.png">
</p>

<hr>

<div class="minibox minibox-left"><a href="{{ site.url }}/guide/havoc/macros-addons.html">Назад:<br>Макросы и Аддоны</a></div>
<div class="minibox"><a href="{{ site.url }}/guide/havoc/common-terms.html">Далее:<br>Сокращения</a></div>

<br>