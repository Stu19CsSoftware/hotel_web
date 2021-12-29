<template>
    <div >
   


       
        <el-row>
            <el-col :span="24">
                <el-card class="box-card">
                    客户信息
                    <hr>
                    <inlineForm3></inlineForm3>
                </el-card>
            </el-col>
        </el-row>
    </div>



</template>

<script>

    import inlineForm3 from '../forms/inlineForm3.vue';
   
    export default {
        components:{
            inlineForm3
        },
        methods: {      
        }
    }
</script>

<style scoped>
    .el-col{
        margin-bottom:16px;
    }
    .box-card{
        font-size:12px;
    }
    .box-card hr{
        height:1px;
        border:none;
        border-top:1px  dashed #ccc;
        margin-bottom:10px;
        margin-top:6px;
    }
    .card-a{
        height:300px;
    }
   
    
 
    
</style>