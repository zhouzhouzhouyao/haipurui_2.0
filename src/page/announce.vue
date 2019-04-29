<template>
    <div class="app-container">

        <el-button type="primary">
            当前公告
        </el-button>
        <div style="width: 100%;height: 350px;background: #3b91b6;margin: 15px 0 15px 0">
            这里是现在的公告
        </div>
        <div style="text-align: center">
            <el-button type="primary" size="big" @click="handleAddRole">
                修改公告
            </el-button>
        </div>

    </div>
</template>

<script>
    export default {
        name: "announce"
    }
</script>

<style scoped>
</style>
