<script setup lang="ts">
import { reactive } from 'vue';
import { menuItem } from './data';
import { useRouter } from 'vue-router';
// import { defineProps } from 'vue';
const $router = useRouter();
const props = defineProps({
  onCollpase: Function,
});
const state = reactive({
  activeKey: '/home',
  isCollpase: false,
});

const onChange = () => {
  props.onCollpase?.();
  state.isCollpase = !state.isCollpase;
};

const goRoute = (vc: string) => {
  //路由跳转
  console.log('hgg', vc);

  $router.push(vc);
};
</script>

<template>
  <div class="leftSideBar">
    <el-menu
      :default-active="state.activeKey"
      class="el-menu-vertical-demo"
      active-text-color="#ffd04b"
      background-color="#00152b"
      text-color="#fff"
      :collapse="state.isCollpase"
    >
      <template v-for="(item, index) in menuItem">
        <el-sub-menu :key="index" v-if="item.children" :index="item.path">
          <template #title>
            <el-icon>
              <component :is="item.icon"></component>
            </el-icon>
            <span>
              {{ item.title }}
            </span>
          </template>
          <el-menu-item
            v-for="child in item.children"
            :key="child.path"
            :index="child.path"
            @click="goRoute(child.path)"
          >
            <el-icon>
              <component :is="child.icon"></component>
            </el-icon>
            <template #title>
              <span>{{ child.title }}</span>
            </template>
          </el-menu-item>
        </el-sub-menu>

        <el-menu-item
          v-else
          :key="item.path"
          :index="item.path"
          @click="goRoute(item.path)"
        >
          <el-icon>
            <component :is="item.icon"></component>
          </el-icon>
          <template #title>
            <span>{{ item.title }}</span>
          </template>
        </el-menu-item>
      </template>
    </el-menu>
    <el-icon v-show="state.isCollpase" class="collapseIcon" @click="onChange">
      <Expand />
    </el-icon>
    <el-icon v-show="!state.isCollpase" class="collapseIcon" @click="onChange">
      <Fold />
    </el-icon>
  </div>
</template>
<style>
.el-menu-vertical-demo {
  height: 100%;
  width: 100%;
}

.leftSideBar {
  position: relative;
  width: 100%;
  height: 100%;
}
.collapseIcon {
  position: absolute;
  bottom: 24px;
  right: 24px;
  color: #fff;
  cursor: pointer;
}
</style>
