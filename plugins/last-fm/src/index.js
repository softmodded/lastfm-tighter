/*
{
  "name": "lastfm-addons",
  "description": "adds lastfm stuff",
  "author": "softmodded",
  "main": "./src/index.js"
}
*/

import { storage } from "@plugin";
import { html } from "@neptune/voby";

function init() {
  if (!storage["lastfmKey"]) {
    storage["lastfmKey"] = "";
  }

  if (!storage["username"]) {
    storage["username"] = "";
  } else {
    console.log("Username is", storage["username"]);
  }

  window.neptune.intercept("eventTracking/ADD_REMOVE_FAVORITES", (data) => {
    console.log("ADD_REMOVE_FAVORITES", data);
    if (data[0].contentType == "track") {
      // do this later
    }
  });


  function syncFavoritesToLastfm() {
    window.neptune.observe(".button--KufgQ", (el) => {
      console.log("Found a favorite button", el);
    });
  }

  syncFavoritesToLastfm();
}

export function Settings() {
  const lastfmKey = storage["lastfmKey"];
  const username = storage["username"];

  return html`<div>
    <div style="display:flex;justify-content:space-between;margin-bottom:10px;">
      <label>
        Last.fm API Key
        <input
          type="text"
          value=${lastfmKey}
          oninput=${(e) => (storage["lastfmKey"] = e.target.value)}
        />
      </label>
      <label>
        Last.fm Username
        <input
          type="text"
          value=${username}
          oninput=${(e) => (storage["username"] = e.target.value)}
        />
      </label>
    </div>
  </div>`;
}

init();

// This is where you would typically put cleanup code.
export function onUnload() {
  console.log("Goodbye world!");
}
