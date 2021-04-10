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
      console.log(document.body.scrollHeight-window.innerHeight - window.scrollY)
      if(document.body.scrollHeight - window.scrollY <=200){
          console.log("去加载内容")
      }
    }
  },
  beforeDestroy() {
     window.removeEventListener('scroll',this.scrollEvent);
  },

}