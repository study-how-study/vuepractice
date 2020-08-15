<template>
  <div>
      <u-list :items = 'items'></u-list>
  </div>
</template>

<script>
import UList from '../components/UList'
import { createNamespacedHelpers } from "vuex";
const { mapActions, mapState } = createNamespacedHelpers("topic");
export default {
  name: "topic",
  props: ["type"],
  components:{
      UList
  },
  created() {
    const { type } = this;
    this.fetchData({ type });
  },
  computed: {
    ...mapState({
      items: state => state.list[state.type].items
    })
  },
  methods: {
    ...mapActions({
      fetchData: "toggleType"
    })
  },
  watch: {
    type(type) {
      this.fetchData({ type });
    }
  }
};
</script>