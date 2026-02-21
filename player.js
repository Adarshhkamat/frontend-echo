import { extensionManager } from "./extensionManager.js";
const audio=new Audio();

export async function play(trackId){
 const stream=await extensionManager.getStream(trackId);
 audio.src=stream.url;
 audio.play();

 if('mediaSession' in navigator){
  navigator.mediaSession.metadata=new MediaMetadata({
   title:stream.title,
   artist:"Unknown"
  });
  navigator.mediaSession.setActionHandler("play",()=>audio.play());
  navigator.mediaSession.setActionHandler("pause",()=>audio.pause());
 }
}