export const state = () => ({
  search: "",
  breadList:[]
})

export const mutations = {
  increment(state) {
    state.search++
  },
  setBreadList(state,data=[]){
    if(Array.isArray(data)){
      state.breadList=data;
    }
    else if(data.isPush&&data.item){
      state.breadList.push(data.item);
    }
    else if(data.isReplace&&data.item){

      let t=[...state.breadList];
      t[t.length-1]=data.item;
      state.breadList=t;
    }
    
  }
};