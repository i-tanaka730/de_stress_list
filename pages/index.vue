<template>
  <div class="container">
    <div>
      <h1 class="title">
        de_stress_list
      </h1>
      <el-table
        :data="items">
        <el-table-column
          prop="title"
          label="タイトル">
        </el-table-column>
        <el-table-column
          prop="description"
          label="説明">
        </el-table-column>
        <el-table-column
          label="画像">
          <template slot-scope="scope">
            <img :src="scope.row.image.url" />
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import axios from 'axios'

const MICRO_CMS_URL = process.env.MICRO_CMS_URL ?? "";
const MICRO_CMS_API_KEY = process.env.MICRO_CMS_API_KEY ?? "";

export default Vue.extend(
  {
    data () {
      return {
        items: []
      }
    },
    async asyncData () {
      const { data } = await axios.get(MICRO_CMS_URL, {headers: { 'X-API-KEY': MICRO_CMS_API_KEY }})
      return {
        items: data.contents
      }
    }
  })
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
