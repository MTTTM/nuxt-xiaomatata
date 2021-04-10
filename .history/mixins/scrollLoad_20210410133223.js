export default{
  data(){
    return {
      scroll_loading:false,
    }
  },
  mounted() {
    this.$nextTick(()=>{
      window.removeEventListener('scroll',this.scrollEvent);
      window.addEventListener("scroll",this.scrollEvent.bind(this))
    });
  },
  methods: {
    scrollEvent(){
      let disY=document.body.scrollHeight-window.innerHeight - window.scrollY;
      if(disY<=200&&this.scroll_loading==false){
          console.log("去加载内容")
          this.scroll_loading=true;
      }
    },
    scrollFn(){
      
    }
  },
  beforeDestroy() {
     window.removeEventListener('scroll',this.scrollEvent);
  },

}