<<<<<<< HEAD
!function(t){var e={};function r(n){if(e[n])return e[n].exports;var a=e[n]={i:n,l:!1,exports:{}};return t[n].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(n,a,function(e){return t[e]}.bind(null,a));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/dist/",r(r.s=0)}([function(t,e,r){"use strict";r.r(e);r(1),r(2)},function(t,e,r){},function(t,e){document.addEventListener("DOMContentLoaded",(function(){var t=50,e=50,r=50,n=50,a=600-t-r,o=document.getElementById("bar-graph").offsetWidth-n-e,u=d3.select("#bar-graph").append("svg").attr("width","100%").attr("height",a+t+r).append("g").attr("transform","translate("+r+","+t+")"),l=d3.scaleBand().range([0,o]).padding(.4),i=d3.scaleLinear().range([a,0]);d3.csv("https://github.com/ConnorBrabant/Basketball/blob/master/src/data/birddata.csv",(function(t){var e=d3.select("#year"),r=t,n=[];for(ele in r[r.length-1]){var o={};o.stat=ele,o.value=parseFloat(r[r.length-1][ele]),n.push(o)}t=n.slice(1),l.domain(t.map((function(t){return t.stat}))),i.domain([0,40]);var c=d3.axisBottom().scale(l),d=d3.axisLeft().scale(i);u.append("g").call(d),u.append("g").attr("transform","translate(0, 500)").call(c),u.selectAll(".bar").data(t).enter().append("rect").attr("x",(function(t){return l(t.stat)})).attr("y",(function(t){return i(t.value)})).attr("width",l.bandwidth()).attr("height",(function(t){return a-i(t.value)})),e.on("change",(function(){year=d3.event.target.value;var e=[];for(ele in r[year-1]){var n={};n.stat=ele,n.value=parseFloat(r[year-1][ele]),e.push(n)}t=e.slice(1);var o=u.selectAll("rect");o.data(t).enter().append("rect").merge(o).transition().duration(1e3).attr("y",(function(t){return i(t.value)})).attr("height",(function(t){return a-i(t.value)}))}))}))}))}]);
=======
!function(t){var e={};function n(r){if(e[r])return e[r].exports;var a=e[r]={i:r,l:!1,exports:{}};return t[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(r,a,function(e){return t[e]}.bind(null,a));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/dist/",n(n.s=0)}([function(t,e,n){"use strict";n.r(e);n(1),n(2)},function(t,e,n){},function(t,e){document.addEventListener("DOMContentLoaded",(function(){var t=50,e=50,n=50,r=50,a=600-t-n,o=document.getElementById("bar-graph").offsetWidth-r-e,u=d3.select("#bar-graph").append("svg").attr("width","100%").attr("height",a+t+n).append("g").attr("transform","translate("+n+","+t+")"),l=d3.scaleBand().range([0,o]).padding(.4),i=d3.scaleLinear().range([a,0]);d3.csv("https://connorbrabant.github.io/Basketball/src/data/jordandata.csv",(function(t){var e=d3.select("#year"),n=t,r=[];for(ele in n[n.length-1]){var o={};o.stat=ele,o.value=parseFloat(n[n.length-1][ele]),r.push(o)}t=r.slice(1),l.domain(t.map((function(t){return t.stat}))),i.domain([0,40]);var c=d3.axisBottom().scale(l),d=d3.axisLeft().scale(i);u.append("g").call(d),u.append("g").attr("transform","translate(0, 500)").call(c),u.selectAll(".bar").data(t).enter().append("rect").attr("x",(function(t){return l(t.stat)})).attr("y",(function(t){return i(t.value)})).attr("width",l.bandwidth()).attr("height",(function(t){return a-i(t.value)})),e.on("change",(function(){year=d3.event.target.value;var e=[];for(ele in n[year-1]){var r={};r.stat=ele,r.value=parseFloat(n[year-1][ele]),e.push(r)}t=e.slice(1);var o=u.selectAll("rect");o.data(t).enter().append("rect").merge(o).transition().duration(1e3).attr("y",(function(t){return i(t.value)})).attr("height",(function(t){return a-i(t.value)}))}))}))}))}]);
>>>>>>> master
//# sourceMappingURL=main.js.map