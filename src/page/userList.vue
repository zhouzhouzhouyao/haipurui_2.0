<!--用户列表-->
<template>
    <div class="fillcontain">
        <head-top></head-top>
        <div class="table_container">
            <el-table
			    :data="tableData"
			    @expand='expand'
                :expand-row-keys='expendRow'
                :row-key="row => row.index"
			    style="width: 100%">
			    <el-table-column type="expand">
			      <template slot-scope="props">
			        <el-form label-position="left" inline class="demo-table-expand">
			          <el-form-item label="用户名" >
			            <span>{{ props.row.user_name }}</span>
			          </el-form-item>
			          <el-form-item label="购买套餐">
			            <span>{{ props.row.restaurant_name }}</span>
			          </el-form-item>
			          <el-form-item label="手机号">
			            <span>{{ props.row.address }}</span>
			          </el-form-item>
			          <el-form-item label="qq">
			            <span>{{ props.row.restaurant_qq }}</span>
			          </el-form-item>
			          <el-form-item label="地址">
			            <span>{{ props.row.restaurant_address }}</span>
			          </el-form-item>

			        </el-form>
			      </template>
			    </el-table-column>

			    <el-table-column
			      label="用户名"
			      prop="id">
			    </el-table-column>
			    <el-table-column
			      label="用户套餐"
			      prop="total_amount">
			    </el-table-column>
			    <el-table-column
			      label="购买时间"
			      prop="status">
			    </el-table-column>
                <el-table-column
			      label="绑定教练"
			      prop="teacher">
			    </el-table-column>

                <!-- 这个地方进行教练绑定操作，点击跳出页面，首先显示当前状态，如果绑定了，进行更改绑定操作，如果未绑定，直接进行绑定 -->
                <!-- 这里是有两个按钮的，如果有绑定，只显示更改按钮，如果没有绑定，就显示两个按钮 -->
                <el-table-column label="操作" width="160">
                    <el-button
                      size="small"
                     @click="bindCoachVisible = true">绑定</el-button>
                     <el-button
                      size="small"
                     @click="updateCoachVisible = true">更改</el-button>
                </el-table-column>
			</el-table>


            <div class="Pagination" style="text-align: left;margin-top: 10px;">
                <el-pagination
                  @size-change="handleSizeChange"
                  @current-change="handleCurrentChange"
                  :current-page="currentPage"
                  :page-size="20"
                  layout="total, prev, pager, next"
                  :total="count">
                </el-pagination>
            </div>

                <!-- 绑定教练 -->
            <el-dialog title="绑定教练" v-model="bindCoachVisible">
			  	<el-form :rules="specsFormrules" :model="specsForm">
				    <el-form-item label="训练场名称" label-width="100px" prop="specs">
				     	<el-input auto-complete="off"></el-input>
				    </el-form-item>

				    <el-form-item label="教练名称" label-width="100px">
						<el-input auto-complete="off"></el-input>
					</el-form-item>

			  	</el-form>

			  <div slot="footer" class="dialog-footer">
			    <el-button @click="bindCoachVisible = false">取 消</el-button>
			    <el-button type="primary" @click="addspecs">确 定</el-button>
			  </div>
			</el-dialog>

            <!-- 更改绑定教练 -->
            <el-dialog title="更改绑定" v-model="updateCoachVisible">

			  	<el-form :rules="specsFormrules" :model="specsForm">
				    <el-form-item label="原有训练场" label-width="100px" prop="specs">
                         <v-text>南湖训练场</v-text>
				    </el-form-item>
                     <el-form-item label="原有教练" label-width="100px" prop="specs">
                         <v-text>魏教练</v-text>
				    </el-form-item>

				    <el-form-item label="训练场名称" label-width="100px">
						<!-- <el-input-number  :min="0" :max="100"></el-input-number> -->
                        <el-input auto-complete="off"></el-input>
					</el-form-item>

					<el-form-item label="教练名称" label-width="100px">
						<!-- <el-input-number :min="0" :max="10000"></el-input-number> -->
                        <el-input auto-complete="off"></el-input>
					</el-form-item>
			  	</el-form>

			  <div slot="footer" class="dialog-footer">
			    <el-button @click="updateCoachVisible = false">取 消</el-button>
			    <el-button type="primary" @click="addspecs">确 定</el-button>
			  </div>
			</el-dialog>




        </div>
    </div>
</template>

<script>
    import headTop from '../components/headTop'
    import {getOrderList, getOrderCount, getResturantDetail, getUserInfo, getAddressById} from '@/api/getData'
    export default {
        data(){
            return {
                tableData: [],
                currentRow: null,
                offset: 0,
                limit: 20,
                count: 0,
                currentPage: 1,
                restaurant_id: null,
                expendRow: [],
                bindCoachVisible: false,
                updateCoachVisible:false,
            }
        },
    	components: {
    		headTop,
    	},
        created(){
        	  this.restaurant_id = this.$route.query.restaurant_id;
            this.initData();
        },
        mounted(){

        },
        methods: {
            async initData(){
                // try{
                //     const countData = await getOrderCount({restaurant_id: this.restaurant_id});
                //     if (countData.status == 1) {
                //         this.count = countData.count;
                //     }else{
                //         throw new Error('获取数据失败');
                //     }
                    this.getOrders();
                // }catch(err){
                //     console.log('获取数据失败', err);
                // }
            },
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                this.currentPage = val;
                this.offset = (val - 1)*this.limit;
                this.getOrders()
            },
            async getOrders(){
                const Orders = await getOrderList();
                this.tableData = [];
                console.log(Orders.list);
                Orders.list.forEach((item, index) => {
                    const tableData = {};
                    tableData.id = item.fname;
                    tableData.user_name = item.fname;
                    tableData.total_amount = item.fpack;
                    tableData.status = item.fteacher;
                    tableData.restaurant_id = item.fqq;
                     tableData.restaurant_qq = item.fqq;
                    tableData.restaurant_address = item.faddress;
                    tableData.restaurant_name = item.faddress;
                    tableData.address_id = item.fqq;
                    tableData.address = item.ftel
                    tableData.index = index;
                    tableData.teacher=item.teacher;

                    this.tableData.push(tableData);
                })
            },
            // async expand(row, status){
            // 	if (status) {
            // 		const restaurant = await getResturantDetail(row.restaurant_id);
	          //   	const userInfo = await getUserInfo(row.user_id);
	          //   	const addressInfo = await getAddressById(row.address_id);
	          //       this.tableData.splice(row.index, 1, {...row, ...{restaurant_name: restaurant.name, restaurant_address: restaurant.address, address: addressInfo.address, user_name: userInfo.username}});
            //         this.$nextTick(() => {
            //             this.expendRow.push(row.index);
            //         })
	          //   }else{
            //         const index = this.expendRow.indexOf(row.index);
            //         this.expendRow.splice(index, 1)
            //     }
            // },
        },
    }
</script>

<style lang="less">
	@import '../style/mixin';
    .table_container{
        padding: 20px;
    }
    .demo-table-expand {
	    font-size: 0;
	}
	.demo-table-expand label {
	    width: 90px;
	    color: #99a9bf;
	}
	.demo-table-expand .el-form-item {
	    margin-right: 0;
	    margin-bottom: 0;
	    width: 50%;
	}
</style>
