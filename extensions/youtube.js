const API="https://echo-server-njkj.onrender.com";

export default{
 id:"youtube",

 async search(q){
  return fetch(`${API}/search?q=${q}`).then(r=>r.json());
 },

 async getStream(id){
  return fetch(`${API}/stream/${id}`).then(r=>r.json());
 }
};
