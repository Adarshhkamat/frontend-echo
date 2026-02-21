import { extensionManager } from "./extensionManager.js";
import yt from "./extensions/youtube.js";
import { play } from "./player.js";

extensionManager.register(yt);

window.doSearch = async () => {
 const q=document.getElementById("search").value;
 const results=await extensionManager.search(q);
 const list=document.getElementById("results");
 list.innerHTML="";
 results.forEach(t=>{
   const li=document.createElement("li");
   li.innerText=t.title;
   li.onclick=()=>play(t.id);
   list.appendChild(li);
 });
};

if('serviceWorker' in navigator){
 navigator.serviceWorker.register('./service-worker.js');
}