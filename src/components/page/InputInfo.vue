<template>
  <div>
    <el-row :gutter="20">
      <el-col :xs="24" :sm="24" :md="12" :lg="12">
        <el-card class="box-card">
          信息录入
          <hr />
          <el-form ref="form" label-width="80px">
            <el-form-item label="姓名">
              <el-input v-model="name"></el-input>
            </el-form-item>
            <el-form-item label="身份证">
              <el-input></el-input>
            </el-form-item>
            <el-form-item label="手机号">
              <el-input></el-input>
            </el-form-item>
            <el-form-item label="入住时间">
              <el-col :span="12">
                <el-date-picker
                  type="date"
                  placeholder="选择日期"
                  style="width: 99%"
                  v-model="date1"
                ></el-date-picker>
              </el-col>

              <el-col :span="12">
                <el-time-picker
                  type="fixed-time"
                  placeholder="选择时间"
                  style="width: 100%"
                ></el-time-picker>
              </el-col>
            </el-form-item>
            <el-form-item label="离开时间">
              <el-col :span="12">
                <el-date-picker
                  type="date"
                  placeholder="选择日期"
                  style="width: 99%"
                ></el-date-picker>
              </el-col>

              <el-col :span="12">
                <el-time-picker
                  type="fixed-time"
                  placeholder="选择时间"
                  style="width: 100%"
                ></el-time-picker>
              </el-col>
            </el-form-item>

            <el-form-item label="入住类型">
              <el-select
                v-model="value1"
                placeholder="请选择"
                style="width: 100%"
              >
                <el-option
                  v-for="item in options1"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </el-form-item>

            <el-form-item label="入住房号">
              <el-input></el-input>
            </el-form-item>

            <el-form-item>
              <el-button @click="getInfo()">录入</el-button>
              <el-button @click="deleteInfo()">取消</el-button>
            </el-form-item>
          </el-form>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import vPageTitle from "../common/pageTitle.vue";
export default {
  data() {
    return {
      date1: "",
      name: "fafd",
      time1: "",
      startTime: "",
      endTime: "",
      value1: "",
      value2: "",
      value3: [],
      value4: "",
      value5: null,
      value6: 3.7,
      select: "",
      options1: [
        { value: "选项1", label: "黄金糕" },
        { value: "选项2", label: "双皮奶" },
        { value: "选项3", label: "蚵仔煎" },
        { value: "选项4", label: "龙须面" },
        { value: "选项5", label: "北京烤鸭" },
      ],
      options2: [
        { value: "选项1", label: "黄金糕" },
        { value: "选项2", label: "双皮奶", disabled: true },
        { value: "选项3", label: "蚵仔煎" },
        { value: "选项4", label: "龙须面" },
        { value: "选项5", label: "北京烤鸭" },
      ],
    };
  },
  components: {
    vPageTitle,
  },
  methods: {
    getInfo() {
      this.axios.get('https://www.easy-mock.com/')
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    },
    deleteInfo() {
      alert("deleteInfo");
    }
    
  },
};
</script>




<style scoped>
.el-col {
  margin-bottom: 16px;
}
.material-icons {
  font-size: 80px;
  color: #ddd;
}

.cart-string {
  height: 100px;
  padding-top: 10px;
  font-size: 1.1rem;
}
.box-card {
  font-size: 12px;
  line-height: 26px;
}
.box-card hr {
  height: 1px;
  border: none;
  border-top: 1px dashed #ccc;
  margin-bottom: 10px;
}
.el-select .el-input {
  width: 140px;
}
</style>