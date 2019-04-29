
<template>
    <div class="fillcontain">
        <head-top></head-top>
        <el-button type="primary" style="margin: 15px 0 15px 15px">
            当前公告
        </el-button>
        <div style="width: 80%;height: 300px;background: #3b91b6;margin: 15px 0 15px 30px">
            这里是现在的公告
        </div>
        <div style="text-align: center">
            <el-button type="primary" size="big" @click="handleAddRole">
                修改公告
            </el-button>
        </div>
    </div>

    <!--<el-dialog :visible.sync=false title="公告修改">-->
        <!--<el-form :model="role" label-width="80px" label-position="left">-->
            <!--<el-form-item label="Name">-->
                <!--<el-input v-model="role.name" placeholder="Role Name" />-->
            <!--</el-form-item>-->
            <!--<el-form-item label="Desc">-->
                <!--<el-input-->
                    <!--v-model="role.description"-->
                    <!--:autosize="{ minRows: 2, maxRows: 4}"-->
                    <!--type="textarea"-->
                    <!--placeholder="Role Description"-->
                <!--/>-->
            <!--</el-form-item>-->
            <!--<el-form-item label="price">-->
                <!--<el-input v-model="role.price" placeholder="Role price" />-->
            <!--</el-form-item>-->
            <!--<el-form-item label="goodimg">-->
                <!--<el-input v-model="role.img" placeholder="Role img" />-->
            <!--</el-form-item>-->
        <!--</el-form>-->
        <!--<div style="text-align:right;">-->
            <!--<el-button type="danger" @click="dialogVisible=false">-->
                <!--取消-->
            <!--</el-button>-->
            <!--<el-button type="primary" @click="confirmRole">-->
                <!--确定-->
            <!--</el-button>-->
        <!--</div>-->
    <!--</el-dialog>-->
</template>

<script>
	import headTop from '../components/headTop'
    export default {
    	components: {
    		headTop,
    	},
    }
</script>

<style lang="less">
	@import '../style/mixin';
	.explain_text{
		margin-top: 20px;
		text-align: center;
		font-size: 20px;
		color: #333;
	}
</style>
