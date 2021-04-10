export default{
  data(){
    return {
      scroll_loading:false,
    }
  },
  mounted() {
    this.$nextTick(()=>{
      window.addEventListener("scroll",this.scrollEvent.bind(this))
    });
  },
  methods: {
    scrollEvent(){
      console.log("e",window.scrollY)
    }
  },
  beforeDestroy() {
     window.removeEventListener('scroll',this.scrollEvent);
  },

}