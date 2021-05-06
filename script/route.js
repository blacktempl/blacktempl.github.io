const affixes = [
  { name: "Tyrannical-Bolstering-Necrotic", href: "/guide/route/Tyrannical-Bolstering-Necrotic.html" },
  { name: "Fortified-Inspiring-Storming", href: "/guide/route/Fortified-Inspiring-Storming.html" },
  { name: "Tyrannical-Bursting-Explosive", href: "/guide/route/Tyrannical-Bursting-Explosive.html" },
  { name: "Fortified-Sanguine-Grievous", href: "/guide/route/Fortified-Sanguine-Grievous.html" },
  { name: "Tyrannical-Raging-Quaking", href: "/guide/route/Tyrannical-Raging-Quaking.html" },
  { name: "Fortified-Bursting-Volcanic", href: "/guide/route/Fortified-Bursting-Volcanic.html" },
  { name: "Tyrannical-Bolstering-Storming", href: "/guide/route/Tyrannical-Bolstering-Storming.html" },
  { name: "Fortified-Spiteful-Grievous", href: "/guide/route/Fortified-Spiteful-Grievous.html" },
  { name: "Tyrannical-Inspiring-Necrotic", href: "/guide/route/Tyrannical-Inspiring-Necrotic.html" },
  { name: "Fortified-Sanguine-Quaking", href: "/guide/route/Fortified-Sanguine-Quaking.html" },
  { name: "Tyrannical-Raging-Explosive", href: "/guide/route/Tyrannical-Raging-Explosive.html" },
  { name: "Volcanic-Fortified-Spiteful", href: "/guide/route/Volcanic-Fortified-Spiteful.html" }
];

const firstAffixStartDate = new Date("2021-04-21");
// Тут можно тестисть, вставляя разные даты в виде  YYYY-MM-DD, например
// const currentDate = new Date("2021-04-28");
const currentDate = new Date();
const diffTime = Math.abs(currentDate - firstAffixStartDate);
const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
const diffInWeeks = Math.floor(diffDays / 7);
const affixeIndex = diffInWeeks % affixes.length;

console.log(
  "Affix for",
  currentDate.toUTCString(),
  "is",
  affixes[affixeIndex].name
);

document.querySelector("#mdt-routes").href = affixes[affixeIndex].href;
