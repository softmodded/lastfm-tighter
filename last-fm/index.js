import{storage as e}from"@plugin";import{html as a}from"@neptune/voby";function s(){e.lastfmKey||(e.lastfmKey=""),e.username?console.log("Username is",e.username):e.username="",window.neptune.intercept("eventTracking/ADD_REMOVE_FAVORITES",t=>{console.log("ADD_REMOVE_FAVORITES",t),t[0].contentType=="track"});function n(){window.neptune.observe(".button--KufgQ",t=>{console.log("Found a favorite button",t)})}n()}function r(){let n=e.lastfmKey,t=e.username;return a`<div>
    <div style="display:flex;justify-content:space-between;margin-bottom:10px;">
      <label>
        Last.fm API Key
        <input
          type="text"
          value=${n}
          oninput=${o=>e.lastfmKey=o.target.value}
        />
      </label>
      <label>
        Last.fm Username
        <input
          type="text"
          value=${t}
          oninput=${o=>e.username=o.target.value}
        />
      </label>
    </div>
  </div>`}s();function u(){console.log("Goodbye world!")}export{r as Settings,u as onUnload};
