<template>
  <div class="demone-record">
    <div class="top">
      <div>
        <h4>企业名称公司</h4>
        <div class="link">
          <el-button type="primary">发布需求</el-button>
        </div>
      </div>
    </div>
    <div class="demone-list clear">
      <div class="type">
        需求中心
      </div>
      <div class="order-data">
        <div class="stat-data">
          <el-date-picker v-model="staedata" align="left" type="date" placeholder="提交日期（起）" ></el-date-picker>
        </div>
        <div class="end-data">
          <el-date-picker v-model="enddata" align="right" type="date" placeholder="提交日期（止）"></el-date-picker>
        </div>
         <el-button type="primary">搜索</el-button>
      </div>
      <div class="order-table">
        <el-table :data="tableData2" style="width: 100%" row-class-name="tableRowClassName">
        <el-table-column prop="date" label="提交时间"></el-table-column>
        <el-table-column prop="order" label="订单号"></el-table-column>
        <el-table-column  label="订单总金额" width="310px">
          <div slot-scope="scope">
              <p style="color: #e02828;font-size: 14px" >￥{{scope.row.ordermoney}}</p>
              <div class="detail" style="font-size: 14px">(发放金额：￥10000.00；服务费：￥7500.00)</div>
          </div>
        </el-table-column>
        <el-table-column prop="serve" label="服务内容" ></el-table-column>
        <el-table-column prop="enddata" label="期望完成时间" ></el-table-column>
        <el-table-column label="状态">
           <div slot-scope="scope">
             <!--<div>需求已提交</div>-->
             <!--<div>待付款</div>-->
             <!--<div>审核中</div>-->
             <!--<div>服务中</div>-->
             <div><p style="color: #e02828">审核未通过</p><p style="color: #999999">请重新上传凭证</p></div>
           </div>
        </el-table-column>
        <el-table-column prop="contractid" label="合同编号" ></el-table-column>
        <el-table-column label="操作" >
          <div class="upload" slot-scope="scope">
            <el-upload class="upload" action="https://jsonplaceholder.typicode.com/posts">
               <div class="upimge"><button>上传付款凭证</button></div>
            </el-upload>

             <!--<div class="delorder"><button @click="deleteOrder">删除</button></div>-->
             <!--<div class="upimge"><button>上传付款凭证</button></div>-->
             <!--<div class="confirm"><button>确认验收</button></div>-->
             <!--<div class="lookimg" @click="showimg"><button>查看付款凭证</button></div>-->
          </div>
        </el-table-column>
      </el-table>
      </div>
      <div class="page ">
        <el-pagination  background layout="prev, pager, next, total, jumper" :total="1000" ></el-pagination>
      </div>
    </div>
    <el-dialog title="提示" :visible.sync="dialogVisible" width="30%">
      <span>这是一段信息</span>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  name: 'DemandRecord',
  data() {
    return {
      staedata: '',
      enddata: '',
      tableData2: [{
          date: '2018-05-22 13:54:00',
          order: '10000000000000',
          ordermoney: '1588200',
          serve: '咨询、培训',
          enddata: '2018-07-28',
          status: '需求已提交',
        },{
          date: '2018-05-22 13:54:00',
          order: '10000000000000',
          ordermoney: '1588200',
          serve: '咨询、培训',
          enddata: '2018-07-28',
          status: '需求已提交',
          contractid: 'HC12345657',
        },{
          date: '2018-05-22 13:54:00',
          order: '10000000000000',
          ordermoney: '1588200',
          serve: '咨询、培训',
          enddata: '2018-07-28',
          status: '需求已提交',
          contractid: 'HC12345657',
        } ],
      dialogVisible: false
    }
  },
  methods: {
    deleteOrder() {
      this.$confirm('此操作将删除该订单, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
    },
    showimg() {
      this.dialogVisible = true
    }
  }
}
</script>
<style  lang="scss">
.demone-record{
  width: 100%;
  .top{
    background: #fff;
    border-top: 4px solid #418bfa;
    border-radius: 4px;
    h4{
      color: #333;
      font-size: 26px;
      text-align: center;
      margin-top: 45px;
    }
    .link{
      margin-top: 40px;
      padding-bottom: 45px;
      text-align: center;
    }
  }
  .demone-list{
    background: #fff;
    border-radius: 4px;
    margin-top: 20px;
    .type{
      font-size: 14px;
      color: #333333;
      border-left: 4px solid #418bfa;
      border-top-left-radius: 4px;
      height: 40px;
      line-height: 40px;
      padding-left: 14px;
    }
    .order-data{
      height: 34px;
      padding: 10px 0;
      padding-left:18px;
      .el-date-editor.el-input, .el-date-editor.el-input__inner{
        width: 200px;
        height: 30px;
      }
      .el-input__inner{
        font-size: 14px;
        line-height: 30px;
        height: 30px;
        background: #f0f0f0;
      }
      .el-input__icon{
        line-height: 30px;
      }
      .stat-data{
        display: inline-block;

      }
      button{
        height: 30px;
        font-size: 14px;
        display: inline-block;
        vertical-align: middle;
        padding-top:0 ;
        padding-bottom: 0;
        line-height: 30px;
      }
      .end-data{
        .el-input__inner{
           height: 30px;
           line-height: 30px;
           font-size: 14px;
        }
        padding-left: 10px;
        display: inline-block;
      }
    }
   .order-table{
     padding: 0 18px;
     thead{
       tr{
         th{
           height: 32px;
           background: #f0f0f0;
           padding: 0;
           line-height: 32px;
           color: #333;
           text-align: center;
         }
      }
     }
     .tableRowClassName {
       text-align: center;
     }
     button{
       outline:none;
       cursor:pointer;
     }
     .delorder{
       button{
         border:1px solid #e02828;
         color: #e02828;
         background-color: #fff;
         width: 68px;
         font-size: 14px;
         line-height: 30px;
       }
     }
     .upimge{
       button{
         border:none;
         background-color: #418bfa;
         font-size: 14px;
         color: #fff;
         line-height: 32px;
         width: 110px;
       }
     }
     .lookimg{
       button{
         border: none;
        background-color: transparent;
         font-size: 14px;
         color: #418bfa;
         line-height: 32px;
         width: 110px;
       }
     }
      .confirm{
       button{
         border:none;
         background-color: #418bfa;
         font-size: 14px;
         color: #fff;
         line-height: 32px;
         width: 110px;
       }
     }
    }
    .page{
      float: right;
      padding: 28px 0;
      padding-right: 18px;
    }
  }
}
</style>
