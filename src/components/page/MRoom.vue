<template>
    <div >
      
       
        <el-row>
            <el-col :span="24">
                <el-card class="box-card">
                    客房管理
                    <hr>
                    <inlineForm></inlineForm>
                </el-card>
            </el-col>
        </el-row>
    </div>



</template>

<script>

    import inlineForm from '../forms/inlineForm.vue';
   
    export default {
        components:{
            inlineForm
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