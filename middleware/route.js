export default function ({ store, route }) {
  console.log("route",route.name)
  if(route.name=="user-signin"||route.name=='user-registered'){
    store.commit("system/setShowTopNav",false);
  }
  else{
    store.commit("system/setShowTopNav",true);
  }
}
