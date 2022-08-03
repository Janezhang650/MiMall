<template>
  <div class="site-info">
    <div class="container">
      <div class="logo">
        <img src="/images/mi-logo.png" alt="">
      </div>
      <div class="info-text">
        <div class="links">
          <a href="javascript:;">小米商城</a>
          <span class="sep">|</span>
          <a href="javascript:;">MIUI</a>
          <span class="sep">|</span>
          <a href="javascript:;">米聊</a>
          <span class="sep">|</span>
          <a href="javascript:;">米家</a>
          <span class="sep">|</span>
          <a href="javascript:;">多看</a>
          <span class="sep">|</span>
          <a href="javascript:;">游戏</a>
          <span class="sep">|</span>
          <a href="javascript:;">政企服务</a>
          <span class="sep">|</span>
          <a href="javascript:;">小米天猫店</a>
          <span class="sep">|</span>
          <a href="javascript:;">小米集团隐私政策</a>
          <span class="sep">|</span>
          <a href="javascript:;">小米公司儿童信息保护规则</a>
          <span class="sep">|</span>
          <a href="javascript:;">小米商城隐私政策</a>
          <span class="sep">|</span>
          <a href="javascript:;">小米商城用户协议</a>
          <span class="sep">|</span>
          <a href="javascript:;">问题反馈</a>
          <span class="sep">|</span>
          <a href="javascript:;">Select Location</a>
        </div>
        <div class="links">
          <a href="javascript:;">北京互联网法院法律服务工作站</a>
          <span class="sep">|</span>
          <a href="javascript:;">中国消费者协会</a>
          <span class="sep">|</span>
          <a href="javascript:;">北京市消费者协会</a>
        </div>
        <p>
          © <a href="javascipt:;">mi.com</a>
          京ICP证110507号
          <a href="javascript:;">京ICP备10046444号</a>
          <a href="javascript:;">京公网安备11010802020134号</a>
          <a href="javascript:;">京网文[2020]0276-042号</a>
        </p>
        <p>
          <a href="javascript:;">（京）网械平台备字（2018）第00005号</a>
          <a href="javascript:;">互联网药品信息服务资格证 (京)-非经营性-2014-0090</a>
          <a href="javascript:;">营业执照</a>
          <a href="javascript:;">医疗器械质量公告</a>
        </p>
        <p>
          <a href="javascript:;">增值电信业务许可证</a>
          <a href="javascript:;">网络食品经营备案</a>
          <a href="javascript:;">京食药网食备202010048</a>
          <a href="javascript:;">食品经营许可证</a>
        </p>
        <p>
          违法和不良信息举报电话：171-5104-4404&nbsp;&nbsp; 知识产权侵权投诉
        </p>
      </div>
    </div>
    <div class="slogan">
      让全球每个人都能享受科技带来的美好生活
    </div>
  </div>
</template>

<script>
export default {
  name: 'SiteInfo'
}
</script>

<style lang="scss" scoped>
  @import '../../assets/style/config.scss';
  @import '../../assets/style/common.scss';
  .site-info {
    padding: 30px 0;
    @include size(100%, auto);
    background: #fafafa;
    .container {
      @include flex(start, start);
      @include baseContainer();
      .logo {
        margin-right: 20px;
        @include size(56px, 56px);
        background: $colorA;
        border-radius: 20px;
        img {
          @include size(100%, 100%);
        }
      }
      .links {
        margin-bottom: 4px;
        a {
          padding: 0 4px;
          color: $colorC;
          &:first-child {
            padding-left: 0;
          }
          &:hover {
            color: $colorA;
          }
        }
        .sep {
          color: $colorD;
        }
      }
      p {
        color: $colorD;
        a {
          padding-right: 4px;
          color: $colorD;
          &:hover {
            color: $colorA;
          }
        }
      }
    }
    .slogan {
      padding: 30px 0 0;
      width: 100%;
      text-align: center;
      color: $colorF;
      font-size: $fontI;
    }
  }
</style>
