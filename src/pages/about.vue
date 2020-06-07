<template>
  <div class="AboutContainer">
    <about-section>
      <h3>ブラウザ環境について</h3>
      <p>
        当サイトは以下の環境でご覧いただくことを推奨いたします。
      </p>
      <ul>
        <li>Microsoft Edge 最新版</li>
        <li>Mozilla Firefox 最新版</li>
        <li>Google Chrome 最新版（Windows 10以上, Android 8.0以上）</li>
        <li>Safari 最新版（macOS, iOS）</li>
        <li>Opera Software ASA Opera 最新版</li>
      </ul>
    </about-section>
    <about-section>
      <h3>クッキー (Cookie) について</h3>
      <p>
        当サイトの一部ではクッキーを使用しています。
        <br />クッキーとは、Webコンテンツからの要求で利用者の手元の端末に一時的に保存されるデータのことで、当サイトでは利用状況の把握のためにクッキーを使用する場合があります。
        <br />ブラウザに関する情報の収集を希望しない場合は、インターネット閲覧ソフト（ブラウザ）をご自身で設定することにより、クッキーの機能が働かないようにすることも可能です。
        <br />ただし、クッキーを受け入れない設定をされている場合は、当サイトの機能が正常に動作しない場合がございます。
      </p>
    </about-section>
    <about-section>
      <h3>JavaScriptについて</h3>
      <p>
        当サイトではJavaScriptを使用しております。
        <br />JavaScriptを無効にして使用された場合、各ページが正常に動作しない、または、表示されない場合がございます。
        <br />当サイトをご利用の際には、JavaScriptを有効にして頂きますようお願いいたします。
      </p>
    </about-section>
    <about-section>
      <h3>当サイトへのリンクについて</h3>
      <p>
        当サイトへのリンクは自由です。
      </p>
    </about-section>
    <about-section>
      <h3>Google Analyticsの利用について</h3>
      <p>
        当サイトでは、サービス向上やサイトの改善のためにGoogle
        LLCの提供するアクセス分析のツールであるGoogle
        Analyticsを利用した計測を行っております。
        <br />Google Analyticsでは、当サイトが発行するクッキー (Cookie)
        等を利用して、Webサイトの利用データ（アクセス状況、トラフィック、閲覧環境、IPアドレスなど）を収集しております。クッキーの利用に関してはGoogleのプライバシーポリシーと規約に基づいております。
        <br />取得したデータはWebサイト利用状況を分析しサービスの改善につなげるため、またはサイト運営者へのレポートを作成するため、その他のサービスの提供に関わる目的に限り、これを使用します。（サイト運営者へのレポートでは、クッキーはブラウザ単位で本サイトのユーザー数をカウントするため、IPアドレスはGoogle
        Analyticsの分析機能を通じてアクセス元の地域分布（国、州・都道府県、都市）を把握するために利用されています。）
      </p>
    </about-section>
    <about-section>
      <h3>免責事項</h3>
      <p>
        当サイトに掲載されている情報の正確性については万全を期していますが、東京都は利用者が当サイトの情報を用いて行う一切の行為について責任を負うものではありません。
        <br />また、利用者が当サイトを利用したことにより発生した利用者の損害及び利用者が第三者に与えた損害に対して、責任を負うものではありません。
        <br />サイトに掲載されている情報は、予告なしに変更又は削除することがあります。
      </p>
    </about-section>
    <about-section>
      <h3>データについて</h3>
      <p>
        本サイトで公表しているデータは、xxxxより誰でも自由にダウンロードが可能です。（データは順次追加予定です）
      </p>
    </about-section>
  </div>
</template>

<script>
import Meta from '@/assets/mixins/meta'
import AboutSection from '@/components/Molecules/AboutSection'

export default {
  components: { AboutSection },
  layout: 'default',
  mixins: [Meta],
  data() {
    return {
      meta: {
        title: 'a..about',
        type: 'article',
        description: 'ページ個別のディスクリプション',
        url: 'https://example.com/test',
        image: 'https://example.com/img/ogp/test.jpg'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.AboutContainer {
  padding: 3rem 4.5rem;
}
</style>
