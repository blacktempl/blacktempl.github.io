---
layout: page
title: Что такое Simulationcraft
last_update: 2020-01-11 09:00:00
game_version: 8.3.0 Battle for Azeroth
toc: true
---

## Что такое Simulationcraft?

<p style="text-indent: 20px;"> Это сторонняя программа, способная воссоздавать различные боевые ситуации в World of Warcraft и собирать статистику со всех параметров боя в плане нанесения урона. Такой софт позволяет выяснять такие полезные вещи как:<p style="text-indent: 20px;"> 
<ul>
<li>Приоритет способностей, ротация </li>
<li>Вес статов и сравнение предметов экипировки, включая тринькеты </li>
<li>Итоговый результат по урону </li>
</ul>
К сожалению, Simcraft не способен выяснить подобные параметры для лекарей или танков.

## Основы

    1. Вы импортируете своего персонажа в программу в текстовом виде. Сделать это из игры поможет аддон <a href="https://www.curseforge.com/wow/addons/simulationcraft" target="_blank"> Simcraft</a>. Также можно программе предоставить ссылку на вашего персонажа из армори, но в ней не будет содержаться информация о ваших вещах в сумках и прочее.
    1. Вы можете выбрать приоритеты способностей, модель боя, количество целей, длину боя
    1. После выбора всех параметров, программа обрабатывает симуляции
    1. В результате вы получаете полный файл со всеми выбранными вами параметрами, которые расписаны максимально подробно
    
## Что такое Pawn & Pawnstrings?

<a href="https://www.curseforge.com/wow/addons/pawn" target="_blank"> Pawn</a> — крайне удобный аддон для использования в игре. Его задача — сравнивать вещи с вторичными характеристиками между собой, с учетом результатов предыдущей симуляции. SimulationCraft может посчитать вес характеристик для вашего персонажа. Вес — это количество характеристики, которое увеличивает урон вашего персонажа на 1.
Этот аддон также позволяет завести несколько профилей для одной и той же специализации. Например, скорость по одиночной цели для вас в на третьем места, а во время аое становится лучшей характеристикой.
Для удобства импорта этой информации <a href="https://www.curseforge.com/wow/addons/pawn" target="_blank"> Pawn</a> имеет возможность создания нового профиля простым копированием строчки из Simcraft — PawnString. Вставив содержимое в аддон, появится профиль с этими данными.

#### {{ site.data.talent.se }} + {{ site.data.talent.eb }}
- Active Azerite: 3x {{ site.data.azerite.natural_harmony }}
- Change: You keep casting {{ site.data.talent.eb }} until you reach 14 stacks of {{ site.data.spell.wind_gust }}


#### {{ site.data.talent.sk }} + {{ site.data.talent.sop }}
- Change: You pool Maelstrom before casting {{ site.data.talent.sk }} to combo both empowered {{ site.data.spell.lb }} with {{ site.data.talent.sop }}
- Example cast sequence:
    - Pool to 96+MS
    - {{ site.data.spell.es }}
    - {{ site.data.talent.sk }}
    - {{ site.data.spell.lb }}
    - {{ site.data.spell.lvb }}
    - {{ site.data.spell.es }}
    - {{ site.data.spell.lb }}

#### {{ site.data.talent.se }} + {{ site.data.talent.pe }}
Combining {{ site.data.talent.se }} with {{ site.data.talent.pe }} enables access to {{ site.data.spell.eye_of_the_storm_damage }}. This powerful ability needs to be activated manually. Make sure to use it shortly after your {{ site.data.talent.se }} buffs itself with {{ site.data.spell.call_lightning }}. {{ site.data.spell.eye_of_the_storm_damage }} is an incredible AoE CD and very useful for single target as well. Check out our FAQ for macros if you need help with that.


#### {{ site.data.talent.sop }} + 2 targets
- Change: as long as both targets don't have {{ site.data.spell.fs }} or are in refreshable duration and spread range, use {{ site.data.spell.es }} once to spread {{ site.data.spell.fs }} to both with {{ site.data.talent.sop }}.


## AoE (3 or more targets)
<div class="apl" style="max-width: 100%; text-align:justify;" markdown="0">
    <ol>
        <li> Cast {{ site.data.spell.meteor }} / {{ site.data.spell.eye_of_the_storm }} against as many targets as possible. Make sure {{ site.data.talent.se }} buffs itself with {{ site.data.spell.call_lightning }} before you activate {{ site.data.spell.eye_of_the_storm }}.</li>
        <li>Cast {{ site.data.talent.tm }} when any of the following are true:
            <ol>
                <li>It is not active.</li>
                <li>The buff's duration is at or below 9 seconds remaining.</li>
            </ol>
        </li>
        <li>Cast {{ site.data.spell.fe }} / {{ site.data.talent.se }} / {{site.data.spell.ee}} on cooldown (see <a href="#pe">the warning</a> about Primal Elementalist).</li>
        <li class="sk-apl">Cast {{ site.data.talent.sk }} on cooldown.</li>
        <li class="lmt-apl" style="display:none;">Cast {{ site.data.talent.lmt }} on cooldown.</li>
        <li>Maintain 3 {{ site.data.spell.fs }}s if there are 3 targets.</li>
        <li>Cast {{ site.data.spell.eq }} when available. (Try gaming {{ site.data.talent.mote }}.)</li>
        <li>Cast {{ site.data.spell.lvb }} to consume {{ site.data.spell.lava_surge }} procs when {{ site.data.talent.se }} is not active and you're fighting only 3 targets.</li>
        <li class="eb-apl" style="display:none;">Cast {{ site.data.talent.eb }} if there are 3 targets.</li>
        <li>Cast {{ site.data.spell.cl }}.</li>
    </ol>
</div>

**Special mention** {{ site.data.spell.fs }} can be maintained at 4 targets and should be, if you can ensure that they all live at least 80% of the duration. Because this is usually not the case, we opted to write 3 as the maximum number of spreads. Tread carefully, as this could otherwise backfire.

**Special mention** There are many caveats with {{ site.data.talent.mote }} when in AoE situations. *IF* you have two or more {{ site.data.azerite.igneous_potential }} equipped, it is generally worth using {{ site.data.spell.lava_surge }} procs to empower {{ site.data.spell.eq }}s, even on 4+ targets. On more than 4 targets, only apply flame shock to one of the targets, ideally a target with higher health than the rest. Use {{ site.data.spell.lava_surge }} procs on the afflicted target in order to empower {{ site.data.spell.eq }}. With this in mind, be careful not to overdo it; it will very likely result in a loss of DPS if enemies die before your {{ site.data.spell.eq }} finishes ticking when you could have used the spell earlier.

## Openers

Follow the cast sequences below for your chosen opener. A <span style="color:red">red arrow</span> indicates the time the boss is pulled. Please note that openers are a *very* minor and nit-picky increase (or sometimes decrease!), and adapting to the fight is much more important.

Standard raid opener:
<div class="opener">
    <div class="skill sk"><span>SK</span></div>
    <div class="arrow"></div>
    <div class="skill tm"><span>TM</span></div>
    <div class="arrow"></div>
    <div class="skill lvb"><span>LvB</span></div>
    <div class="arrow pull"></div>
    <div class="skill fs"><span>FS</span></div>
    <div class="arrow"></div>
    <div class="skill fe"><span>FE</span></div>
    <div class="arrow"></div>
    <div class="skill lb"><span>LB</span></div>
    <div class="arrow"></div>
    <div class="skill if"><span>IF</span></div>
    <div class="arrow"></div>
</div>

<br>
## Common misconceptions and mistakes

> "I should try and play around {{site.data.talent.mote}}!"

The only time you should adjust your gameplay for {{site.data.talent.mote}} is when you have the liberty to cast a spell *later* with a MotE buff versus *now* -- this means for a spell like {{site.data.spell.es}}, you can make the decision to wait until you have the {{site.data.talent.mote}} buff active before casting it (this is reflected in the priority above). This is thanks to the low urgency of {{site.data.spell.es}} casts, as you are not constrained by a cooldown or Maelstrom cast, since you can cast it at any point between 60 and 100 Maelstrom.

> "I should cast {{ site.data.spell.lb }} during {{ site.data.talent.asc }} if I have some powerful buffs for it active!"

During {{ site.data.talent.asc }} you only want to spend your time casting {{ site.data.spell.lvb }} and {{ site.data.spell.es }}. Yes you'll waste {{ site.data.talent.mote }} but that's fine.

> "I should cast {{ site.data.talent.eb }} during {{ site.data.talent.asc }}!"

No. {{ site.data.talent.eb }} doesn't deal enough damage by quite a significant margin.

> "I should cast {{ site.data.talent.if }} with {{ site.data.talent.mote }} during {{ site.data.talent.asc }}!"

No. Your {{ site.data.talent.asc }} is ideally used when {{ site.data.talent.if }} is on cooldown and won't get ready while you're casting {{ site.data.spell.lvb }}.

> "I should only cast {{ site.data.spell.lb }} / {{ site.data.spell.cl }} during {{ site.data.talent.se }}!"

With 2 or more {{ site.data.azerite.igneous_potential }}: Keep using {{ site.data.spell.lvb }} on single target.

Else: During single target you'll want to only cast {{ site.data.spell.lb }} and {{ site.data.spell.es }}. During AoE {{ site.data.spell.cl }} becomes quickly more worth than {{ site.data.spell.lvb }}. Nonetheless you should use {{ site.data.spell.eq }}.

> "I should cast {{ site.data.spell.fs }} at 7.2 seconds remaining or lower!"

That's correct but which human is able to accurately judge the difference between 7.2 seconds and 7 seconds. So we decided to present the easier to digest number in the priority list.

> "I should cast {{ site.data.talent.tm }} at less than 9 seconds remaining!"

Yes, the shorter the remaining duration, the less likely it is for you to need an additional cast of it over the whole fight. But because that is quite unlikely already, 9 is a good rule of thumbs. The overall dps won't budge with that change.

> "I should try to keep {{ site.data.azerite.natural_harmony }} active with {{ site.data.spell.frs }}!"

No.


<script>
HTMLCollection.prototype[Symbol.iterator] = Array.prototype[Symbol.iterator];
function listeners() {
    let inputs = document.getElementsByTagName("input")
    for (i of inputs) {
        if (i.type == "radio") change_listener(i);
    }
}

function change_listener(element) {
    element.addEventListener("change", function(e) {
        let siblings = document.getElementsByName(e.target.name);
        for (radio of siblings) {
            let apl_elems = document.getElementsByClassName(radio.id.split('-')[0] + "-apl");
            for (item of apl_elems) {
                if (radio.checked == true) {
                    item.style.display = "list-item";
                } else {
                    item.style.display = "none";
                }
            }
        }
    });
}

listeners()
</script>
