<template>
  <div>
    <form action="/">
      <van-search
        v-model="searchText"
        show-action
        placeholder="请输入搜索关键词"
        @cancel="$router.go(-1)"
        @search="onsearch"
        autofocus
        @focus="isSearch = false"
      />
    </form>
    <SearchHistory v-if="searchText === ''" @search="onsearch"></SearchHistory>
    <template v-else>
      <SearchResult v-if="isSearch" :searchText='searchText'></SearchResult>
      <SearchSuggest
        v-else
        :searchText="searchText"
        @search="onsearch"
      ></SearchSuggest>
    </template>
  </div>
</template>

<script>
import SearchHistory from '@/views/Search/components/SearchHistory.vue'
import SearchSuggest from '@/views/Search/components/SearchSuggest.vue'
import SearchResult from '@/views/Search/components/SearchResult.vue'
export default {
  created () { },
  data () {
    return {
      searchText: '',
      isSearch: false
    }
  },
  methods: {
    onsearch (str) {
      this.searchText = str
      this.isSearch = true
      this.$store.commit('setSearchHistoryList', str)
    }
  },
  computed: {},
  watch: {},
  filters: {},
  components: {
    SearchHistory,
    SearchSuggest,
    SearchResult
  }
}
</script>

<style scoped>
.van-search {
  background-color: #3296fa;
}
</style>
