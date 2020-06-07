<template>
  <div class="cookiePolicy">
    <h1>cookie policy</h1>
    <p>
      This cookie policy describes what cookies are and how Website Operator
      uses them on the interfaceingame.com website and any of its products or
      services. You should read this Policy so you can understand what type of
      cookies we use, the information we collect using cookies and how that
      information is used. It also describes the choices available to you
      regarding accepting or declining the use of cookies. For further
      information on how we use, store and keep your personal data secure, see
      our Privacy Policy.
    </p>
    <h2>What are cookies?</h2>
    <p>
      Cookies are small pieces of data stored in text files that are saved on
      your computer or other devices when websites are loaded in a browser. They
      are widely used to remember you and your preferences, either for a single
      visit (through a “session cookie”) or for multiple repeat visits (using a
      “persistent cookie”). Session cookies are temporary cookies that are used
      during the course of your visit to the Website, and they expire when you
      close the web browser. Persistent cookies are used to remember your
      preferences within our Website and remain on your desktop or mobile device
      even after you close your browser or restart your computer. They ensure a
      consistent and efficient experience for you while visiting our Website or
      using our Services. Cookies may be set by the Website (“first-party
      cookies”), or by third parties, such as those who serve content or provide
      advertising or analytics services on the website (“third party cookies”).
      These third parties can recognize you when you visit our website and also
      when you visit certain other websites.
    </p>
    <h2>Acceptance of this policy</h2>
    <p>
      You acknowledge that you have read this Policy and agree to all its terms
      and conditions. By using the Website or its Services you agree to be bound
      by this Policy. If you do not agree to abide by the terms of this Policy,
      you are not authorized to use or access the Website and its Services.
    </p>
    <h2>Contacting us</h2>
    <p>
      If you have any questions about this Policy or our use of cookies, please
      <a href="mailto:myao.jpn@gmail.com?subject=Mail from Our Site"
        >contact us</a
      >. This document was last updated on August 7, 2020
    </p>
  </div>
</template>

<script>
import Meta from '@/assets/mixins/meta'

export default {
  layout: '',
  mixins: [Meta],
  data() {
    return {
      meta: {
        title: 'Cookie Policy',
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
.cookiePolicy {
  width: 70%;
  max-width: 640px;
  margin: 0 auto;
  padding: 56px 0 0;
  h1 {
    font-size: 2rem;
    text-align: center;
    text-transform: capitalize;
    margin: 0 0 40px;
  }
  h2 {
    font-size: 1.4rem;
    margin: 0 0 16px;
  }
  p {
    font-size: 1.2rem;
    line-height: 1.5;
    margin: 0 0 24px;
  }
}
</style>
