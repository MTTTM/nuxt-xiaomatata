export const state = () => ({
  search: "",
  breadList:[],
  settingCollapse:false,//博客设置页是否收起边栏目
  showTopNav:true,//显示顶部导航栏
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
    
  },
  setSettingCollapse(state,data){
    state.settingCollapse=data;
  },
  setShowTopNav(state,data){
    state.showTopNav=data;
  }
};