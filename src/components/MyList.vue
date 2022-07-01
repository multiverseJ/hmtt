<template>
  <van-cell-group>
    <van-pull-refresh
      v-model="refreshing"
      @refresh="onRefresh"
      ref="pullrefresh"
    >
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <!-- <van-cell
          v-for="(item, index) in articlrlist"
          :key="index"
          :title="item.title"
          value="内容"
          label="描述信息"
        /> -->
        <ArticleItem
          v-for="(item, index) in articlrlist"
          :key="index"
          :article="item"
        >
        </ArticleItem>
      </van-list>
    </van-pull-refresh>
  </van-cell-group>
</template>

<script>

import { getArticleList } from '@/api/home'
import ArticleItem from './ArticleItem.vue'
let ele = null
let scrollTop = 0
export default {
  name: 'ArticleList',
  props: {
    id: {
      type: Number,
      required: true
    }
  },
  created () {
    this.getArticleList()
  },
  mounted () {
    ele = this.$refs.pullrefresh.$el
    console.log(ele)
    // console.log(this.$refs.pullrefresh)
    this.$refs.pullrefresh.$el.addEventListener('scroll', function () {
      scrollTop = this.scrollTop
      // console.log(this.scrollTop)
      // console.log(ele.scrollTop)
    })
  },
  activated () {
    // console.log(1)
    ele.scrollTop = scrollTop
    console.log(ele.scrollTop)
  },
  data () {
    return {
      timestamp: Date.now(),
      articlrlist: [],
      loading: false,
      finished: false,
      refreshing: false
    }
  },
  methods: {
    async getArticleList () {
      if (this.refreshing) {
        this.articlrlist = []
        this.refreshing = false
      }
      try {
        const res = await getArticleList({ channel_id: this.id, timestamp: this.timestamp })
        // console.log(res)
        this.timestamp = res.data.data.pre_timestamp
        if (this.timestamp === null) this.finished = true
        this.articlrlist.push(...res.data.data.results)
        this.loading = false
      } catch (err) {
        console.log(err)
      }
    },
    onLoad () {
      this.getArticleList()
    },
    onRefresh () {
      console.log(1)
      this.finished = false
      this.loading = true
      this.timestamp = Date.now()
      this.getArticleList()
    }
  },
  computed: {},

  filters: {},
  components: { ArticleItem }
}
</script>

<style scoped>
.van-cell-group {
  padding-top: 174px;
}
</style>
