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
      
    }
  },
  beforeDestroy() {
    
  },

}