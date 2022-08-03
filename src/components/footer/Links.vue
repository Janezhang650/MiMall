<template>
  <div class="footer-links">
    <dl class="col-links"><dd></dd></dl>
    <dl class="col-links">
      <dt>选购指南</dt>
      <dd><a href="javascript:;">手机</a></dd>
      <dd><a href="javascipt:;">电视</a></dd>
      <dd><a href="javascipt:;">笔记本</a></dd>
      <dd><a href="javascipt:;">平板</a></dd>
      <dd><a href="javascipt:;">穿戴</a></dd>
      <dd><a href="javascipt:;">耳机</a></dd>
      <dd><a href="javascipt:;">家电</a></dd>
      <dd><a href="javascipt:;">路由器</a></dd>
      <dd><a href="javascipt:;">音响</a></dd>
      <dd><a href="javascipt:;">配件</a></dd>
    </dl>
    <dl class="col-links">
      <dt>服务中心</dt>
      <dd><a href="javascript:;">申请售后</a></dd>
      <dd><a href="javascript:;">售后政策</a></dd>
      <dd><a href="javascript:;">维修服务价格</a></dd>
      <dd><a href="javascript:;">订单查询</a></dd>
      <dd><a href="javascript:;">以旧换新</a></dd>
      <dd><a href="javascript:;">保障服务</a></dd>
      <dd><a href="javascript:;">防伪查询</a></dd>
      <dd><a href="javascript:;">F码通道</a></dd>
    </dl>
    <dl class="col-links">
      <dt>线下门店</dt>
      <dd><a href="javascript:;">小米之家</a></dd>
      <dd><a href="javascript:;">服务门店</a></dd>
      <dd><a href="javascript:;">授权体验店/专区</a></dd>
    </dl>
    <dl class="col-links">
      <dt>关于小米</dt>
      <dd><a href="javascript:;">了解小米</a></dd>
      <dd><a href="javascript:;">加入小米</a></dd>
      <dd><a href="javascript:;">投资者关系</a></dd>
      <dd><a href="javascript:;">环境、社会及管治</a></dd>
      <dd><a href="javascript:;">廉洁举报</a></dd>
    </dl>
    <dl class="col-links">
      <dt>关于我们</dt>
      <dd><a href="javascript:;">新浪微博</a></dd>
      <dd><a href="javascript:;">官方微信</a></dd>
      <dd><a href="javascript:;">联系我们</a></dd>
      <dd><a href="javascript:;">公益基金</a></dd>
    </dl>
    <div class="col-contact">
      <p class="phone">400-100-5678</p>
      <p>8:00-18:00（仅收市话费）</p>
      <a href="javascript:;" class="btn"><i class="iconfont">&#xe609;</i> 人工客服 </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Links'
}
</script>

<style lang="scss" scoped>
  @import '../../assets/style/common.scss';
  @import '../../assets/style/config.scss';
  .footer-links {
    @include flex($ai: start);
    padding: 40px 0;
    .col-links {
      width: 160px;
      font-size: $fontJ;
      text-align: left;
      dt {
        margin: -1px 0 26px;
      }
      dd {
        margin: 0;
        margin-top: 10px;
        text-align: left;
        a {
          color: $colorC;
          font-size: $fontK;
        }
        &:hover a {
          color: $colorA;
        }
      }
    }
    .col-contact {
      @include size(251px, auto);
      border-left: 1px solid #e0e0e0;
      text-align: center;
      color: $colorC;
      .phone {
        margin-bottom: 4px;
        color: $colorA;
        font-size: $fontF;
      }
      .btn {
        display: inline-block;
        margin-top: 10px;
        @include size(118px, 28px);
        border: 1px solid $colorA;
        text-align: center;
        line-height: 28px;
        color: $colorA;
        &:hover {
          color: $colorW;
          background: $colorA;
        }
      }
    }
  }
</style>
