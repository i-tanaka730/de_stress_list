<template>
  <div class="container">
    <div>
      <el-table
        :data="items">
        <el-table-column
          prop="title"
          label="タイトル"
          width="250">
        </el-table-column>
        <el-table-column
          prop="description"
          label="説明"
          width="500">
        </el-table-column>
         <el-table-column
          label="イメージ"
          width="120">
          <template slot-scope="scope">
            <img :src="scope.row.image.url" width="80px" height="80px"/>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { MicroCms } from './microcms'

const MICRO_CMS_URL = process.env.MICRO_CMS_URL ?? "";
const MICRO_CMS_API_KEY = process.env.MICRO_CMS_API_KEY ?? "";

export default Vue.extend(
{
  async asyncData () {
    const microCms = new MicroCms();
    const contents = await microCms.getData(MICRO_CMS_URL, MICRO_CMS_API_KEY);
    return {
      items: contents
    }
  }
})
</script>

<style>

</style>
