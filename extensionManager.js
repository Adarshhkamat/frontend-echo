class ExtensionManager{
 constructor(){
  this.extensions={};
  this.defaultExt=null;
 }
 register(ext){
  this.extensions[ext.id]=ext;
  if(!this.defaultExt) this.defaultExt=ext;
 }
 search(q){ return this.defaultExt.search(q); }
 getStream(id){ return this.defaultExt.getStream(id); }
}
export const extensionManager=new ExtensionManager();