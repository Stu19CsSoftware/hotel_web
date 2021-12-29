<template>
    <div >


       
        <el-row>
            <el-col>
                <el-card class="box-card">
                    预约信息
                    <hr>
                    <inlineForm2></inlineForm2>
                </el-card>
            </el-col>
        </el-row>
    </div>



</template>

<script>

    import inlineForm2 from '../forms/inlineForm2.vue';
   
    export default {
        components:{
            inlineForm2
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