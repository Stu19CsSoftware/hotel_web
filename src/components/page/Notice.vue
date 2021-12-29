<template>
    <div >



        <el-row :gutter="40">
            
            <el-col :xs="24" :sm="24" :md="12" :lg="100">
                <el-card class="box-card">
                    通知
                  <hr>
                    <el-form ref="form" label-width="80px">
                        <el-form-item label="姓名">
                            <el-input></el-input>
                        </el-form-item>
                        <el-form-item label="身份证">
                            <el-input></el-input>
                        </el-form-item>
                        <el-form-item label="手机号">
                            <el-input></el-input>
                        </el-form-item>
                        <el-form-item label="最新入住时间">
                            <el-input></el-input>
                        </el-form-item>
                        <el-form-item label="入住次数">
                            <el-input></el-input>
                        </el-form-item>

                        <el-form-item label="通知内容">
                            <el-input type="textarea" :rows="4" placeholder="请输入内容"></el-input>
                        </el-form-item>
                        

                        <el-form-item>
                            <el-button>通知</el-button>
                            <el-button>取消</el-button>
                        </el-form-item>
                        </el-form>




                </el-card>
            </el-col>
        </el-row>            
    </div>



</template>

<script>
    import vPageTitle from '../common/pageTitle.vue';
   
   
    export default {
        data(){
            return{
                time1:'',
                startTime: '',
                endTime: '',
                value1:'',
                value2:'',
                value3:[],
                value4:'',
                value5:null,
                value6:3.7,
                select: '',
                options1: [{value: '选项1',label: '黄金糕'},
                           {value: '选项2',label: '双皮奶'}, 
                           {value: '选项3',label: '蚵仔煎'}, 
                           {value: '选项4',label: '龙须面'},
                           {value: '选项5',label: '北京烤鸭'}],
                options2: [{value: '选项1',label: '黄金糕'},
                           {value: '选项2',label: '双皮奶',disabled: true}, 
                           {value: '选项3',label: '蚵仔煎'}, 
                           {value: '选项4',label: '龙须面'},
                           {value: '选项5',label: '北京烤鸭'}]
                
            };
        },
        components:{
            vPageTitle
        },
        methods: {      
        }
    }
</script>




<style scoped>
    .el-col{
        margin-bottom:16px;
    }
    .material-icons{
        font-size:80px;
        color:#ddd;
    }
   
    .cart-string{
        height:100px;
        padding-top:10px;
        font-size:1.1rem;
        
    }
    .box-card{
        font-size:12px;
        line-height:26px;
    }
    .box-card hr{
        height:1px;
        border:none;
        border-top:1px  dashed #ccc;
        margin-bottom:10px;
    }
    .el-select .el-input {
    width: 140px;
     }
    
 
    
</style>