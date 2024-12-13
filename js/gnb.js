"use strict";
const headerWrap = document.querySelector("#header-wrap");
const gnbUl = document.querySelector(".gnb");

gnbUl.onmouseenter = () => {
  headerWrap.classList.add("active");
};

gnbUl.onmouseleave = () => {
  headerWrap.classList.remove("active");
};
