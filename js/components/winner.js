"use strict";

const winner = {
  template: `
   <h1>YOU WIN</h1>
  `
}


angular.module("pregame")
        .component("winner", winner);