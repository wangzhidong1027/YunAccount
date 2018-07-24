<template>
  <div class="demone-record" >
    <div class="top">
      <div>
        <h4>企业名称公司</h4>
        <div class="link">
         <router-link to="/main/postdemand">发布需求</router-link>
        </div>
      </div>
    </div>
    <div class="demone-list clear">
      <div class="type">
        需求中心
      </div>
      <div class="order-data">
        <div class="stat-data">
          <el-date-picker v-model="staedata" :picker-options="pickerOptions1" align="left" type="date" placeholder="提交日期（起）" value-format="yyyy-MM-dd 00:00:00"></el-date-picker>
        </div>
        <div class="end-data">
          <el-date-picker v-model="enddata" :picker-options="pickerOptions1" align="right" type="date" placeholder="提交日期（止）" value-format="yyyy-MM-dd 23:59:59"></el-date-picker>
        </div>
         <el-button type="primary" icon="el-icon-search" @click="search">搜索</el-button>
      </div>
      <div class="order-table">
        <el-table :data="tableData2" style="width: 100%" row-class-name="tableRowClassName" v-loading="loading">
        <el-table-column prop="addtime" label="提交时间"></el-table-column>
        <el-table-column prop="fid" label="订单号"></el-table-column>
        <el-table-column  label="订单总金额" width="310px">
          <div slot-scope="scope">
              <p style="color: #e02828;font-size: 14px" >￥{{scope.row.realmoney}}</p>
              <div class="detail" style="font-size: 14px">(发放金额：￥{{scope.row.money}}；服务费：￥{{scope.row.feemoney}})</div>
          </div>
        </el-table-column>
          <el-table-column prop="serve" label="服务内容" >
            <el-popover
              slot-scope="scope"
              placement="bottom-start"
              width="200"
              trigger="hover">
              <div>
                <p style="text-align: center" v-for="neediten in getchildetype(scope.row.needid,scope.row.needcatpath)">{{neediten}}</p>
              </div>
              <div slot="reference">{{(gettype(scope.row.needid))}}</div>
            </el-popover>
          </el-table-column>
        <el-table-column label="期望完成时间" ><div slot-scope="scope">{{scope.row.pacttime | data}}</div></el-table-column>
        <el-table-column label="状态">
           <div slot-scope="scope">
             <div v-if="scope.row.status==0">已取消</div>
             <div v-if="scope.row.status==1">需求已提交</div>
             <div v-if="scope.row.status==2">待付款</div>
             <div v-if="scope.row.status==3">审核中</div>
             <div v-if="scope.row.status>=4 && scope.row.status<7">服务中</div>
             <div v-if="scope.row.status==8"><p style="color: #e02828">审核未通过</p><p style="color: #999999">请重新上传凭证</p></div>
             <div v-if="scope.row.status==7">已完成</div>
           </div>
        </el-table-column>
        <el-table-column prop="pactno" label="合同编号" ></el-table-column>
        <el-table-column label="操作"  width="179px" >
          <div class="upload" slot-scope="scope" >
            <el-upload class="upload" :action="$GLOBAL.commonUpImgApi" v-if="scope.row.status==2 || scope.row.status==8 " :on-success="upimg" :multiple='false' :limit="1">
               <div class="upimge"><button @click="UPloading(scope.row.id,scope.row.fid)">上传付款凭证</button></div>
            </el-upload>
             <div class="delorder" v-if="scope.row.status==1"><button @click="deleteOrder(scope.row.id,scope.row.fid)">删除</button></div>
             <!--<div class="upimge"><button>上传付款凭证</button></div>-->
             <div class="confirm" v-if="new Date(scope.row.pacttime) < nowDate && scope.row.status>=4 && scope.row.status<7  && scope.row.pactstatus ==1"><button @click='confirmOrder(scope.row.id,scope.row.fid)'>确认验收</button></div>
             <div class="lookimg" v-if="scope.row.status>=3 && scope.row.status<=7"><button @click="showimg(scope.row.imgurl)">查看付款凭证</button></div>
          </div>
        </el-table-column>
      </el-table>
      </div>
      <div class="page ">
        <el-pagination  background layout="prev, pager, next, total, jumper" :total="count" @current-change="changepage"></el-pagination>
      </div>
    </div>
    <el-dialog  :visible.sync="dialogVisible" width="30%">
      <img :src="loogkimg" style="width:100%" alt="">
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
      pickerOptions1: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        },
      },
      count: 0,
      loading: true,
      upImging:{},
      loogkimg: '',
      pageNo: 1,
      tableData2: [],
      nowDate: '',
      dialogVisible: false,
      showTypeData:[]
    }
  },
  computed: {
     typedata: function() {
        return this.$store.state.AllType.allType
      }
  },
  filters: {
    data: function (value) {
      return value.slice(0,10)
    },
  },
  created() {
    this.getorder()
  },
  methods: {
    gettype(val) {
      // var Aneedcatpath = needcatpath.split(',')
      // var MYtype = {cat:'', needcatpath:[]}
      var MYtype
      for (var i in this.typedata){
        if(this.typedata[i].catid == val ){
            //  MYtype.cat = this.typedata[i].cat
            // for (var k = 0; k < Aneedcatpath.length;  k++ ){
            //   for (var j = 0; j <this.typedata[i].childList.length; j++ ){
            //     if(this.typedata[i].childList[j].catpath == Aneedcatpath[k] ){
            //       MYtype.needcatpath.push(this.typedata[i].childList[j].cat)
            //       break
            //     }
            //   }
            // }
          return this.typedata[i].cat
        }
        // return MYtype
     }
    },
    getchildetype(val,needcatpath){
      var Aneedcatpath = needcatpath.split(',')
      var MYtype =[]
      for (var i in this.typedata){
        if(this.typedata[i].catid == val ){
            for (var k = 0; k < Aneedcatpath.length;  k++ ){
              for (var j = 0; j <this.typedata[i].childList.length; j++ ){
                if(this.typedata[i].childList[j].catpath == Aneedcatpath[k] ){
                  MYtype.push(this.typedata[i].childList[j].cat)
                  break
                }
              }
            }
        }
        return MYtype
     }
    },
    /**
     *  @ 分页功能statr
     */
    changepage(currentchange){
      this.pageNo = currentchange
      this.getorder()
    },
     /**
     *  @ 分页功能end
     */
    getorder() {
      this.loading = true
      this.$axios.post(
        this.$GLOBAL.ordeerListApi,
        this.$qs.stringify({
          pageSize: '8',
          pageNo: this.pageNo,
          addtimeStart: this.staedata,
          addtimeEnd: this.enddata
        })
      ).then( res => {
        this.loading = false
        var result = JSON.parse(this.$base64.decode(res.data))
        if(result.code == 10000){
          this.tableData2 = result.data.info
          this.count = result.data.count
        }else{
          this.$message.error(result.info)
        }
      }).catch(error => {
        this.loading = false
        console.log(error)
      })
    },
    /**
     * @ 上传凭证
     */
     UPloading(id,fid){
      this.upImging.id = id
      this.upImging.fid = fid
    },
    upimg(response) {
       var data = JSON.parse(this.$base64.decode(response))
      if(data.code == 10000){
         this.$axios.post(
          this.$GLOBAL.upPayImgApi,
          this.$qs.stringify({
            agentNo:this.$GLOBAL.agent.agentNo,
            id: this.upImging.id,
            fid: this.upImging.fid,
            imgurl: data.data.serverUrl
          })
        ).then(res => {
          var result = JSON.parse(this.$base64.decode(res.data))
          if(result.code == 10000){
              this.getorder()
             this.$message({
                type: 'success',
                message: '凭证上传成功!'
              });
          }else{
            this.$message({
              type: 'success',
              message: data.info
            });
          }
        }).catch(error => {
          console.log(error)
        })
      }
    },
    /**
     * @搜索
     */
    search() {
      if(!this.staedata){
        this.$message.error('请选择开始日期')
        return false
      }
      if(!this.enddata){
        this.$message.error('请选择结束日期')
         return false
      }
      if(new Date(this.enddata) - new Date(this.staedata) < 0){
        this.$message.error('请选择合法日期')
         return false
      }
      this.pageNo = 1
      this.getorder()
    },
    /**
     *
     * @ 删除订单
     */
    deleteOrder(id,fid){
      var _this = this
      this.$confirm('此操作将删除该订单, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
        }).then(() => {
          this.$axios.post(
            this.$GLOBAL.deleteOrderApi,
            this.$qs.stringify({
              agentNo: this.$GLOBAL.agent.agentNo,
              id: id,
              fid: fid
            })
          ).then(res => {
            var result = JSON.parse(_this.$base64.decode(res.data))
            if(result.code == 10000){
               _this.getorder()
               _this.$message({
                  type: 'success',
                  message: '删除成功!'
                });
            }else{
              _this.$message.error(result.info);
            }
          }).catch(error => {
            console.log(error)
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
    },

    // 确认需求
    confirmOrder(id,fid) {
        var _this = this
       this.$confirm('<p>确定验收后，系统将给自由职业者打款！</br>一经确认不可撤销！</p>', '确定验收', {
         dangerouslyUseHTMLString: true,
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
          center: true
        }).then(() => {
          _this.$axios.post(
            _this.$GLOBAL.affirmOrderApi,
            _this.$qs.stringify({
              agentNo: _this.$GLOBAL.agent.agentNo,
              id: id,
              fid: fid
            })
          ).then(res => {
            var result = JSON.parse(_this.$base64.decode(res.data))
            if(result.code == 10000){
                _this.getorder()
               _this.$message({
                  type: 'success',
                  message: '验收成功!'
                });
            }else{
              _this.$message.error( result.info);
            }
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消'
          });
        });
    },
    showimg(src) {
      this.loogkimg = src
      this.dialogVisible = true
    }
  },
  mounted(){
    this.nowDate = new Date()

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
      a{
        text-decoration: none;
        display: block;
        width: 100px;
        margin: 0 auto;
        line-height: 40px;
        font-size: 14px;
        color: #fff;
        background: #418bfa;
        border-radius: 4px;
      }
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
