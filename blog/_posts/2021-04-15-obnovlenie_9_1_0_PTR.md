---
layout: page
title: Обновление на PTR 9.1.0 для Охотников на Демонов
description: Обновление на PTR 9.1.0 для Охотников на Демонов Shadowlands
game_version: 9.1.0 Shadowlands
last_update: 2021-03-06 00:00:00 +0200
author: Rodriguezz
toc: true
---

В обновлении 9.1 не появится новых медиумов, поэтому участники ковенантов продолжат дружить с тремя своими старыми товарищами, однако каждому из них достанется несколько дополнительных строк под таланты и бонусы, а также небольшое новшество – зачарованные ячейки, которые делают вставленные в них проводники мощнее. Все эти изменения доступны для тестирования на PTR "Цепей Господства".

# Изменение медиумов

Вкратце об изменениях:
* Древо талантов каждого медиума было продлено, пополнившись 4 новыми строками, причем их структура у всех персонажей одинаковая. Новые строки, как и предыдущие, станут открываться по мере повышения уровней известности, сверх, но уже после 40.
* На этих 4 строках располагаются 3 ячейки под проводники (1 силы, 1 выносливости, 1 точности), 2 таланта и 1 финальный мощный талант.
* По мере развития уровня известности все ячейки под проводники постепенно становятся  "зачарованными". Если вставить проводник в "зачарованную" ячейку, то его эффект усилится и он будет давать бонус будто бы является на 2 ранга мощнее, чем есть на самом деле.

<p align="center" width="100%"> <img src="{{ site.url }}/assets/img/blog/PTR91/pic1.png"> </p>
> Новые строки талантов и проводников

<p align="center" width="100%"> <img src="{{ site.url }}/assets/img/blog/PTR91/pic2.png"> </p>
> По мере повышения известности ячейки под проводники становятся зачарованными

<p align="center" width="100%"> <img src="{{ site.url }}/assets/img/blog/PTR91/pic3.png"> </p>
>Пример: в зачарованной ячейке проводник {{ site.data.conduits.Proliferation }}  имеет не 30%, а 34% эффективность

# Новые таланты

# Вентиры
<p align="center" width="100%"> <img src="{{ site.url }}/assets/img/blog/conduits/ventyr_logo.png"></p>

## Наджия

* {{ site.data.covenant.Fatal_Flaw }} – Когда бонус к скорости от "Эйфории" заканчивается, шанс критического удара или универсальность повышается на 20% на 10 секунд, характеристика выбирается от наивысшего показателя.
* {{ site.data.covenant.Nimble_Steps }} – Противники в радиусе 8 м. замедляются на 10%. Если ваш уровень здоровья падает ниже 35%, противники в радиусе 8 м. обездвиживаются на 4 сек. Эффект срабатывает не чаще одного раза в 60 сек.
* {{ site.data.covenant.Sinful_Preservation }} – Зелья исцеления и Камни здоровья дают щит в объёме 50% от полученного исцеления.

## Теотар

* {{ site.data.covenant.Its_Always_Tea_Time }} – Когда срабатывает "Успокаивающая тень", Таббинс и Габбинс предлагают вам чашечку чая, которая восстанавливает 1% от максимального запаса здоровья раз в 1 сек. и уменьшает получаемый урон на 5%, пока вы стоите в области действия чая.
* {{ site.data.covenant.Life_is_but_an_Appetizer }} – Когда персонаж насыщается, он получает бонус к скорости передвижения и бонус к показателю избегания.
* {{ site.data.covenant.Party_Favors }} – Один раз в день можно поговорить с Теотаром в Грехопаде и получить "Чай Безумного герцога", повышающий основную характеристику, скорость, вероятность критического удара или универсальность на 3% на 1 час.

## Генерал Дрейвен
* {{ site.data.covenant.Battlefield_Presence }} – Каждый находящийся рядом противник трепещет от вашего присутствия, повышая наносимый вами урон и исходящее исцеление на 1%, и уменьшая получаемый урон на 1%. Эффект суммируется до 3 раз.
* {{ site.data.covenant.Intimidation_Tactics }} – Когда ваш уровень здоровья падает ниже 50%, "Врата теней" восстанавливаются на 50% быстрее.
* {{ site.data.covenant.Regenerative_Stone_Skin }} – 15% от полученного вами избыточного исцеления трансформируется в здоровье за 6 секунд

# Кирии

<p align="center" width="100%"> <img src="{{ site.url }}/assets/img/blog/conduits/kiri_logo.png"> </p>

## Пелагий

* {{ site.data.covenant.Better_Together }} – Во время боя вы и член вашей группы или рейда в радиусе 3 м. от вас воодушевляется, получая по 52 искусности на 1 мин. На одном игроке не может быть более одного эффекта.
* {{ site.data.covenant.Newfound_Resolve }} – В любой момент боя с низкой вероятностью может появиться "Сомнение" на 10 сек. Столкнувшись со своим сомнением лицом к лицу вы получите бонус в размере 12% от основной характеристики и выносливости на 15 сек.
* {{ site.data.covenant.Path_of_the_Devoted }} – Освободившись от эффекта потери контроля, вы получаете на 15% меньше урона, а ваша скорость передвижения не может опуститься ниже 90% на 6 сек. Этот эффект срабатывает не чаще раза в 30 сек.

## Клейя

* {{ site.data.covenant.Hope_Springs_Eternal }} – Флакон безмятежности уменьшает получаемый урон на 10% на 8 сек. Этот эффект распространяется на ближайшего союзника с наименьшим запасом здоровья.
* {{ site.data.covenant.Light_the_Path }} – Ваши "Храбрые удары" дают 0.25% к вероятности критического удара за каждый эффект. Если "Храбрые удары" воздействуют на союзника, вы оба получаете 5% к вероятности критического удара на 12 сек.
* {{ site.data.covenant.Spear_of_the_Archon }} – Скорость передвижения повышается на 6%, пока вы находитесь вне боя. Когда вы наносите урон по цели, у которой более 90% здоровья, ваш шанс критического удара повышается на 6% на 10 сек.

## Миканикос

* {{ site.data.covenant.Effusive_Anima_Accelerator }} – Выпускает заряд перегруженной анимы в местоположение вашей цели,  распределяется между противниками N урона от тайной магии за 8 секунд. Уменьшает время восстановления способности ковенанта на Y секунд за каждого поражённого противника, максимум 5 противников.
* {{ site.data.covenant.Reactive_Retrofitting }} – Получив физический или магический урон, вы получаете щит поглощающий 8% от максимального запаса здоровья на 10 сек. Каждый тип полученного урона может вызвать этот эффект не чаще 1 раза в 30 сек.
* {{ site.data.covenant.Soulglow_Spectrometer }} – Наносимый урон или исходящее исцеление анализирует цель в течение 15 сек., повышая получаемый ею урон или входящее исцеление на 1% каждые 3 сек. Одновременно можно анализировать только одну цель.

# Некролорды

<p align="center" width="100%"> <img src="{{ site.url }}/assets/img/blog/conduits/necrolord_logo.png"> </p>

## Гейрмир

* {{ site.data.covenant.Carvers_Eye }} – Когда вы наносите урон по противнику, у которого больше 90% здоровья, вы получаете 199 искусности на 5 сек, эффект суммируется до 5 раз. Вы можете получить этот эффект от одной и той же цели один раз в 10 сек.
* {{ site.data.covenant.Mnemonic_Equipment }} – Когда вы наносите урон по противнику с уровнем здоровья ниже 35% здоровья, 3% вашего урона дублируется за 5 сек. Исцеляя союзника, он получит этот эффект с 30% эффективностью на 5 сек. Эффект воздействует максимум на 2 цели.
* {{ site.data.covenant.Waking_Bone_Breastplate }} – Когда около вас находится 3 или более противника, ваш максимальный запас здоровья увеличивается на 5%, эффект длится 5 секунд.

## Марилет

* {{ site.data.covenant.Kevins_Oozeling }} – Призывает Слизня Кевина, который будет сражаться на вашей стороне в течение 20 сек. Его атаки повышают наносимый вами урон по противнику на 2%, и он накладывает на вас щит, который поглощает N урона.
* {{ site.data.covenant.Undulating_Maneuvers }} – Пока ваш уровень здоровья выше 80%, 5% получаемого урона наносится постепенно в течение 5 сек.
* {{ site.data.covenant.Viscou_Trail }} – Когда вы попадаете под эффект замедления передвижения, вы оставляете лужу, которая существует в течение 10 сек. Противники в этой луже замедляются на 70% на 5 сек.

## Эмени

* {{ site.data.covenant.Pustule_Eruption }} – "Скульптор плоти" покрывает ваше тело одной пустулой раз в 1 сек. Получив урон или исцеление, пустула прорвётся, нанося N урона от сил природы находящимся рядом противникам и восполнив Y урона находящимся рядом союзникам. Урон и исцеление поровну распределяется по всем целям.
* {{ site.data.covenant.Resilient_Stitching }} –  Пока у вас больше 90% здоровья, вы получаете щит, поглощающий N магического урона в течение 1 мин. Этот эффект может сработать не чаще раза в 1 мин.
* {{ site.data.covenant.Sole_Slough }} – Стоя неподвижно в течение 5 сек, при движении ваша скорость передвижения повысится на 20% на 10 сек.

# Ночной народец

<p align="center" width="100%"> <img src="{{ site.url }}/assets/img/blog/conduits/fae_logo.png"> </p>

## Ния

* {{ site.data.covenant.Bonded_Hearts }} –  Получая эффект "Перенаправленной анимы", вы исцеляете до 5 находящихся рядом союзников на 2% от их максимального уровня здоровья. Если любой из этих союзников состоит в другом ковенанте, бонус к искусности и максимальному запасу здоровья от "Перенаправленной анимы" усилится на 50% на 5 сек.
* {{ site.data.covenant.Called_Shot }} – Когда вы наносите критический удар, вы получаете 20% к скорости передвижения на 5 сек. Этот эффект срабатывает не чаще раза в 10 сек.
* {{ site.data.covenant.Survivors_Rally }} – Когда уровень вашего здоровья опускается ниже 50%, вы восстанавливаете 20% от вашего максимального запаса здоровья за 10 сек. и получаете на 5% больше исцеления от других способностей и умений. Эффект срабатывает не чаще раза в 60 сек.
 
## Творец снов

* {{ site.data.covenant.Cunning_Dreams }} – Активация "Облика души" замедляет находящихся рядом противников на 50% на 6 сек.
* {{ site.data.covenant.Dream_Delver }} – Нанося урон или исцеляя цель, вы увеличиваете входящий урон или исцеление по ней на 1% в течение 4 сек. Эффект суммируется до 3 раз.
* {{ site.data.covenant.Waking_Dreams }} – Когда вы получаете урон пока у вас меньше 80% здоровья, вы получаете щит в размере 30% от нанесённого урона на 3 сек.
 
## Корейн

* {{ site.data.covenant.Hunts_Exhilaration }} – Нанося урон противнику или восполняя здоровье союзнику в радиусе 8 м., вы получаете 3% к показателю самоисцеления на 5 сек.
* {{ site.data.covenant.Vorkai_Ambush }} – После прерывания заклинания или дезориентируя противника, они наносят на 5% меньше урона в течение 5 сек.
* {{ site.data.covenant.Wild_Hunt_Strategem }} – Когда вы наносите урон или восполняете здоровье союзнику, пока на вас действует "Тактика Дикой Охоты", вы получаете "Стратагему Дикой Охоты" на 1 мин. Ваш следующий урон по противнику с уровнем здоровья ниже 35% или исцеление по союзнику с уровнем здоровья выше 75% повысит урон и исцеление на 5% в течение 10 сек.

# Изменение Охотников на Демонов

## Истребление

### Изменение кондуитов 

* {{ site.data.conduits.Relentless_Onslaught }} - изменено усиление за ранг

<pre>
<code class="language-less">
Было 5.0%	5.5%	6.0%	6.5%	7.0%	7.5%	8.0%	8.5%	9.0%						 
Стало 5.0%	5.5%	6.0%	6.5%	7.0%	7.5%	8.0%	8.5%	9.0%	9.5%	10.0%	10.5%	11.0%	11.5%	12.0%
</code>
</pre>

## Месть

* {{ site.data.spell.Chaos_Brand }} - Категория способности изменена со "Специализация" на "Без категории".
* {{ site.data.spell.Demonic_WardsVDH }} - Татуировки уменьшают получаемый урон на 20% (было 15%). 

## Основные

* {{ site.data.spell.Demonic_WardsHDH }} - Теперь способность Истребление. Категория изменена с "Способностей" на "Специализацию".
* {{ site.data.spell.Shattered_Souls }} - Теперь способность Истребление. Категория изменена с "Способностей" на "Специализацию".




