import "../styles/partials/_fonts.scss";
import "../styles/partials/_variables.scss";
import "../styles/partials/_container.scss";
import "../styles/partials/_header.scss";
import "../styles/partials/_no-classes.scss";
import "../styles/partials/_onderwerp-buttons.scss";
import "../styles/partials/_visualisatie.scss";
import "../styles/partials/_tooltip.scss";
import "../styles/partials/_custom-radio.scss";
import "../styles/partials/_single-purpose-classes.scss";
import "../styles/partials/_cijfer-text.scss";

import { CountUp } from "countup.js";
import inView from "in-view";

const countUpOptions = {
  useEasing: true,
  useGrouping: false
};

const counter = document.querySelector('#counter-hoe-vaak-1');

if(counter) {

// Counters
let counterHoeVaak1 = new CountUp("counter-hoe-vaak-1", 0, countUpOptions);
let counterHoeVaak2 = new CountUp("counter-hoe-vaak-2", 0, countUpOptions);
let counterHoeVaak3 = new CountUp("counter-hoe-vaak-3", 0, countUpOptions);

let counterWaarom1 = new CountUp("counter-waarom-1", 0, countUpOptions);
let counterWaarom2 = new CountUp("counter-waarom-2", 0, countUpOptions);

let counterUitkomst1 = new CountUp("counter-uitkomst-1", 0, countUpOptions);

let counterTerecht1 = new CountUp("counter-terecht-1", 0, countUpOptions);
let counterTerecht2 = new CountUp("counter-terecht-2", 0, countUpOptions);

let counterTevreden1 = new CountUp("counter-tevreden-1", 0, countUpOptions);
let counterTevreden2 = new CountUp("counter-tevreden-2", 0, countUpOptions);
let counterTevreden3 = new CountUp("counter-tevreden-3", 0, countUpOptions);

let counterVertrouwen1 = new CountUp("counter-vertrouwen-1", 0, countUpOptions);
let counterVertrouwen2 = new CountUp("counter-vertrouwen-2", 0, countUpOptions);
let counterVertrouwen3 = new CountUp("counter-vertrouwen-3", 0, countUpOptions);

let counterHoeVaak1el = document.querySelector("#counter-hoe-vaak-1");
let counterHoeVaak2el = document.querySelector("#counter-hoe-vaak-2");
let counterHoeVaak3el = document.querySelector("#counter-hoe-vaak-3");

let counterWaarom1el = document.querySelector("#counter-waarom-1");
let counterWaarom2el = document.querySelector("#counter-waarom-2");

let counterUitkomst1el = document.querySelector("#counter-uitkomst-1");

let counterTerecht1el = document.querySelector("#counter-terecht-1");
let counterTerecht2el = document.querySelector("#counter-terecht-2");

let counterTevreden1el = document.querySelector("#counter-tevreden-1");
let counterTevreden2el = document.querySelector("#counter-tevreden-2");
let counterTevreden3el = document.querySelector("#counter-tevreden-3");

const counterVertrouwen1el = document.querySelector("#counter-vertrouwen-1");
const counterVertrouwen2el = document.querySelector("#counter-vertrouwen-2");
const counterVertrouwen3el = document.querySelector("#counter-vertrouwen-3");

function executeCounters(amount) {
  counterHoeVaak1.update(amount);
  counterHoeVaak2.update(amount);
  counterHoeVaak3.update(amount);
  counterTevreden1.update(amount);
  counterTevreden2.update(amount);
  counterTevreden3.update(amount);
  counterWaarom1.update(amount);
  counterWaarom2.update(amount);
  counterTerecht1.update(amount);
  counterTerecht2.update(amount);
  counterVertrouwen1.update(amount);
  counterVertrouwen2.update(amount);
  counterVertrouwen3.update(amount);
  counterUitkomst1.update(amount);
}

let scrollPos = 0;

inView.offset({
  top: 50,
  bottom: 50
});

inView(".counter").on("enter", () => {
  // scroll up: first elements 1st
  if (document.body.getBoundingClientRect().top > scrollPos) {
    if (inView.is(counterHoeVaak1el)) {
      executeCounters(890);
    } else if (inView.is(counterHoeVaak2el)) {
      executeCounters(815);
    } else if (inView.is(counterHoeVaak3el)) {
      executeCounters(143);
    } else if (inView.is(counterWaarom1el)) {
      executeCounters(815);
    } else if (inView.is(counterWaarom2el)) {
      executeCounters(815);
    } else if (inView.is(counterUitkomst1el)) {
      executeCounters(255);
    } else if (inView.is(counterTerecht1el)) {
      executeCounters(323);
    } else if (inView.is(counterTerecht2el)) {
      executeCounters(210);
    } else if (inView.is(counterTevreden1el)) {
      executeCounters(633);
    } else if (inView.is(counterTevreden2el)) {
      executeCounters(633);
    } else if (inView.is(counterTevreden3el)) {
      executeCounters(633);
    } else if (inView.is(counterVertrouwen1el)) {
      executeCounters(1643);
    } else if (inView.is(counterVertrouwen2el)) {
      executeCounters(1643);
    } else if (inView.is(counterVertrouwen3el)) {
      executeCounters(113);
    }
  }
  //scroll down: last elements 1st
  else {
    if (inView.is(counterVertrouwen3el)) {
      executeCounters(113);
    } else if (inView.is(counterVertrouwen2el)) {
      executeCounters(1643);
    } else if (inView.is(counterVertrouwen1el)) {
      executeCounters(1643);
    } else if (inView.is(counterTevreden3el)) {
      executeCounters(633);
    } else if (inView.is(counterTevreden2el)) {
      executeCounters(633);
    } else if (inView.is(counterTevreden1el)) {
      executeCounters(633);
    } else if (inView.is(counterTerecht2el)) {
      executeCounters(210);
    } else if (inView.is(counterTerecht1el)) {
      executeCounters(323);
    } else if (inView.is(counterUitkomst1el)) {
      executeCounters(255);
    } else if (inView.is(counterWaarom2el)) {
      executeCounters(815);
    } else if (inView.is(counterWaarom1el)) {
      executeCounters(815);
    } else if (inView.is(counterHoeVaak3el)) {
      executeCounters(143);
    } else if (inView.is(counterHoeVaak2el)) {
      executeCounters(815);
    } else if (inView.is(counterHoeVaak1el)) {
      executeCounters(890);
    }
  }
  scrollPos = document.body.getBoundingClientRect().top;
});
}
