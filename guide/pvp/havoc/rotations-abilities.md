---
layout: page
title: Ротация и Способности 
description: ДХ Истребление 9.0.2 PvP гайд Shadowlands
last_update: 2021-01-22 09:00:00
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


## Ротация и Способности

Наши наносящие урон способности:

* {{ site.data.talent.Insatiable_Hunger }},  {{ site.data.spell.Immolation_Aura }} или {{ site.data.talent.Demon_Blades }} - Одни из основных генераторов гнева, они генерируют гнев для наших основных атакующих способностей не тратя лишнее ГКД на генерацию гнева.
* {{ site.data.spell.Chaos_Strike }} - Главная наносящая урон способность использующая гнев как ресурс. {{ site.data.spell.Chaos_Strike }} наносит высокий урон и имеет шанс 40% восстановить 20 гнева. Когда активна {{ site.data.spell.Metamorphosis }}, {{ site.data.spell.Chaos_Strike }} заменяется {{ site.data.spell.Annihilation }} которая наносит еще больше урона.
* {{ site.data.spell.Throw_Glaive }} - Атака дальнего боя, с талантом {{ site.data.talent.Master_of_the_Glaive }} замедляет пораженных противников. 
* {{ site.data.talent.Felblade }} - атака, которая притягивает Охотника на Демонов к цели, нанося небольшой урон от огня и генерируя гнев. Используйте {{ site.data.talent.Felblade }} с умом, например комбинируйте его с {{ site.data.talent.Momentum }} чтоб активировать баф и вернутся обратно к цели.
* {{ site.data.spell.Eye_Beam }} - Конусная АоЕ атака которая использует гнев как ресурс (если не взят талант {{ site.data.talent.Blind_Fury }}). {{ site.data.spell.Eye_Beam }} запускает {{ site.data.spell.Metamorphosis }} если взят талант {{ site.data.talent.Demonic }}.


### Основные способности для нанесения урона

Базовая ротация для Охотника на демонов на Арене заключается в том, чтобы не допустить полного заполнения шкалы гнева с помощью {{ site.data.spell.Chaos_Strike }}, при этом удерживая {{ site.data.spell.Throw_Glaive }} и {{ site.data.talent.Felblade }} на кулдауне. Если вы играете с талантом {{ site.data.talent.Momentum }}, все становится немного интересней, вы можете комбинировать {{ site.data.talent.Felblade }} с {{ site.data.talent.Momentum }} чтоб активировать баф и вернутся обратно к цели, и далее использовать {{ site.data.spell.Chaos_Strike }} / {{ site.data.spell.Annihilation }}. Полежно иметь баф от {{ site.data.talent.Momentum }} при использовании {{ site.data.talent.Fel_Barrage }}, но он не так важен для {{ site.data.spell.Eye_Beam }}, так как {{ site.data.spell.Eye_Beam }} имеет смысл использовать только для клива и когда цель нет возможности атаковать атаками ближнего боя.

* Если вы можете активировать баф {{ site.data.talent.Momentum }} и у вас есть гнев для {{ site.data.spell.Chaos_Strike }}, используйте {{ site.data.spell.Vengeful_Retreat }} а после {{ site.data.spell.Fel_Rush  }}.
* Используйте {{ site.data.spell.Chaos_Strike }} / {{ site.data.spell.Annihilation }} чтоб не допустить капа гнева.
* Держите {{ site.data.spell.Throw_Glaive }} и {{ site.data.talent.Felblade }} на кулдауне.
* Если у вас не полная шкала гнева и вы играете без таланта {{ site.data.talent.Demon_Blades }}, используйте {{ site.data.spell.Demons_Bite }}.
* {{ site.data.talent.Essence_Break }} - Это новый талан который усиливает урон от {{ site.data.spell.Chaos_Strike }}. Используйте {{ site.data.talent.Essence_Break }} когда у вас максимальный запас гнева что использовать как можно больше {{ site.data.spell.Chaos_Strike }} пока действует усиление.

### Бурст Охотников на Демонов

Бурст Охотника на Демонов зависит от вашего билда в котором вы играете, и поэтому этот раздел разделен на подразделы. Один трюк, который могут использовать Охотники на Демонов при бурсте когда вы используете {{ site.data.talent.Momentum }} - это воспользоваться преимуществом {{ site.data.spell.Vengeful_Retreat }}, которое составляет половину ГКД, но отбрасывает вас назад. {{ site.data.spell.Metamorphosis }} находится на ГКД, но с ее помощью вы можете вернуться к вашей цели. Поэтому при игре с талантом {{ site.data.talent.Momentum }} сразу нажмите {{ site.data.spell.Vengeful_Retreat }} и {{ site.data.spell.Metamorphosis }} , чтобы отменить анимацию {{ site.data.spell.Vengeful_Retreat }}, и получить максимальную выгоду от бафа {{ site.data.talent.Momentum }}.

**Список приоритетов**

* Если вы Некролорд, получите свой бафф от Демона перед началом ротации.
* {{ site.data.spell.Chaos_Nova }}.
* При игре с {{ site.data.talent.Momentum }}, используйте преимущество {{ site.data.spell.Vengeful_Retreat }} и используйте его вместе с  {{ site.data.spell.Metamorphosis }} и {{ site.data.talent.Essence_Break }} прожав их как можно быстрее.
* Поддерживайте баф {{ site.data.talent.Momentum }} если он вам нужен.
* Используйте ковенанскую способность (только если вы не Некролорд)
* {{ site.data.spell.Throw_Glaive }}, {{ site.data.talent.Felblade }} или {{ site.data.spell.Demons_Bite }} если цель отошла от вас или вам нужен гнев.

#### Импульс

{{ site.data.talent.Momentum }} хороший выбор когда вам нужен баф на усиление урона.
{{ site.data.talent.Momentum }} усиливает способности ковенанта, а также все ваши атакующие способности.

#### Демоник

Если вы используете {{ site.data.spell.Eye_Beam }} для запуска {{ site.data.spell.Metamorphosis }}, вам следует  накопить как можно больше гнева, не превышая кап, чтобы вы могли использовать как можно больше {{ site.data.spell.Annihilation }} пока действует форма демона. Если вы используете талант {{ site.data.talent.BlindFury }}, тут обратная ситуация - перед тем как применить {{ site.data.spell.Eye_Beam }} у сам должно быть минимум гнева чтоб только хватило для применения способности.

## Эффективные стратегии для Охотников на Демонов

### Позиционирование

Играя за Охотника на Демонов, как и в случае со многими классами ближнего боя, вы будете вступать в ближний бой, по ходу бояя использовать свои защитные кулдауны. Всегда важно постоянно общаться со своим лекарем о своем позиционировании и понимать, что, давя на врага, движущегося от вашего лекаря, вы, скорее всего, поставите своего лекаря в плохое положение.

### Защита

* {{ site.data.spell.Blur }} имеет короткое время восстановления, Повышает вероятность уклонения на 50% и уменьшает получаемый урон на 20%. Способность можно усилить с помощью таланта {{ site.data.talent.Desperate_Instincts }};
* {{ site.data.talent.Netherwalk }} дает нам невосприимчивость к урону на 5 секунд.
* {{ site.data.spell.Metamorphosis }} дает нам самоисцеление. Эффект самоисцеления можно усилить с помощью таланта {{ site.data.talent.Soul_Rending }};
* {{ site.data.spell.Darkness }}, дает шанс полностью избежать урона, можно значительно усилить с помощью PvP таланта {{ site.data.talent.Cover_of_Darkness }};
* После убийства врагов появляются {{ site.data.spell.Soul_Fragment }} который исцеляет нас, если взят талант {{ site.data.talent.Demonic_Appetite }} используя {{ site.data.spell.Chaos_Strike }} есть вероятность появления {{ site.data.spell.Lesser_Soul_Fragment }}
* {{ site.data.talent.Rain_from_Above }} талант который может спасти вас если в группе противника нет бойцов дальнего боя.
 
### Кайтинг

Охотник на Демонов может использовать {{ site.data.spell.Fel_Rush }}, {{ site.data.spell.Vengeful_Retreat }}, {{ site.data.talent.Rain_from_Above }}, или {{ site.data.spell.Metamorphosis }} чтоб избежать урона. {{ site.data.spell.masterydh }} увеличивает нашу скорость передвижения, двойной прыжок также нам дает небольшое ускорение, что поможет нам быстрей отрыватся от врагов не давая им нас атаковать. Используя {{ site.data.spell.Fel_Rush }} или {{ site.data.spell.Vengeful_Retreat }} вы можете избежать {{ site.data.talent.Leg_Sweep }} или {{ site.data.talent.Kidney_Shot }}.

### Игра против милишных составов

Против классов ближнего боя вам нужно использовать либо {{ site.data.talent.Netherwalk }}, либо {{ site.data.talent.Desperate_Instincts }}, чтобы выжить после их атаки. Также очень важно кайтить милишные составы особенно когда вы вдали от вашего хилера, так как кожаная броня не особо устойчива к физическому урону. {{ site.data.talent.Rain_from_Above }} и {{ site.data.spell.Blur }} нужно использовать когда вы видите, что ваш целитель получил контроль или когда вы стали целью фокусированного урона вражеской группы. 

### Игра против бурст составов


Талант {{ site.data.talent.Netherwalk }} или {{ site.data.talent.Desperate_Instincts }} помогает пережить бурст урон. Ваша основная задача - создать дистанцию, играя далеко от своего целителя в нужное время, чтобы было время для использования защитного кулдауна. Например, с такими составами, как Разбойник / Маг / Жрец, в тот момент, когда {{ site.data.talent.Blind }}, {{ site.data.talent.Polymorph }} или {{ site.data.talent.Fear }} наложены на вашего целителя, и вражеская группа переводит свое внимание на вас, у вас есть небольшое окно чтоб использовать {{ site.data.spell.Blur }} перед тем как вам дадут {{ site.data.talent.Kidney_Shot }}, которое поможет выжить во время контроля. Монахи Ткач Туманов и Танцующий с Ветром часто парализуют вашего целителя пока действует {{ site.data.spell.Blur }}.




<div class="minibox"><a href="{{ site.url }}/guide/havoc/overview.html">Далее:<br>Обзор</a></div>
