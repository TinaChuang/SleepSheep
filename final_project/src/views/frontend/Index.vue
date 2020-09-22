<template>
  <div>
    <loading :active.sync="isLoading"/>
    <div class="section_1 d-flex align-items-center">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-6 d-flex flex-column justify-content-center align-items-center">
            <div>
              <h1 style="font-size: 4rem;">眠綿羊</h1>
              <h3 style="font-size: 2rem;">Sleep sheep</h3>
              <p style="font-size: 1.5rem;">sleep wll with you</p>
              <router-link class="btn btn-pink px-5" to="/products">
                尋找你的眠綿羊
              </router-link>
            </div>
          </div>
          <div class="col-12 col-md-6">
            <img class="img-fluid" src="@/assets/image/sheep-1.svg" alt="Sleep-Sheep" title="Sleep-Sheep">
          </div>
        </div>
      </div>
    </div>
    <div class="section_2 d-flex flex-column align-items-center my-5">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-6">
            <img class="img-fluid" src="@/assets/image/sheep-2.svg" alt="Sleep-Sheep" title="Sleep-Sheep">
          </div>
          <div class="col-12 col-md-6 d-flex flex-column justify-content-center align-items-center">
            <div>
              <h3>
                與眠綿羊找回睡眠的幸福
              </h3>
              <p>
                2020年，調查發現國人的慢性失眠症盛行率達10.7%。然而，即使在調整了生活作息及環境後，習慣失眠的人還是有無法順利入睡的問題。<br/>
                眠綿羊是一群安靜、柔軟的神祕生物，相傳牠會在人們睡不著時出現在眼前，幫助人們順利入睡。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section_3 my-5">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h3 class="text-center">
              不同的眠綿羊喜歡不同的入睡方式
            </h3>
            <p class="text-center">
              檢視自己的睡眠困擾，來選擇不同的眠綿羊，讓你事半功倍。你的好睡眠，是眠綿羊最大的幸福與驕傲。
            </p>
          </div>
          <div class="col-12 col-md-4">
            <img class="img-fluid" src="@/assets/image/item_1.png" alt="短暫性失眠">
            <h5 class="text-center my-3">短暫性失眠</h5>
            <p>此類失眠，幾乎每個人都有經驗，當你遇到重大的壓力（如考試或重要的會議）或情緒上的激動時（如興奮或憤怒的事物）都可能會造成你當天晚上有失眠的困擾。當然跨越多個時區的旅行，所造成的時差反應(jet lag)，也會對你到達目的地的前幾晚睡眠有所影響。</p>
            <p>時差反應（jet lag）、晝夜輪班工作者（shift worker）、調適性的睡眠疾患（adjustment sleep disorder）、環境性的睡眠患疾（Environmental sleep disorder）</p>
          </div>
          <div class="col-12 col-md-4">
            <img class="img-fluid" src="@/assets/image/item_2.png" alt="短期性失眠">
            <h5 class="text-center my-3">短期性失眠</h5>
            <p>此類失眠的病因和短暫性失眠有所重疊，只是時間較長而已。如喪偶、離婚、男女朋友分手或「金錢被倒」等，此類問題皆會造成一時情緒上的衝擊，其平復所需的時間，往往需要數星期。</p>
            <p>
              持續性的調適性睡眠疾患（Persistent adjustment sleep disorder）、急性疾病導致的失眠（Acute Medical condition）
            </p>
          </div>
          <div class="col-12 col-md-4">
            <img class="img-fluid" src="@/assets/image/item_3.png" alt="長期性失眠">
            <h5 class="text-center my-3">長期性失眠</h5>
            <p>此類失眠是患者至失眠門診求診中，最常遇到的疾病類型，其病史有些達數年或數十年，必須找出其潛在病因，才有痊癒的希望。</p>
            <p>精神生理性失眠（Psychophysiological insomnia）睡眠狀態錯覺（sleep state misperception）、不適當的睡眠衛生（Inadequate sleep hygiene）、延遲性睡眠週期症候群（Delayed Sleep Phase Syndrome）、呼吸暫停症候群（Sleep Apnea Syndrome）等</p>
          </div>
        </div>
      </div>
    </div>
    <div class="section_4 my-5">
      <div class="container">
        <div class="row d-flex justify-content-center my-3">
          <div class="col-10">
            <h3 class="text-center">
              也許你需要的不只是一隻會跳柵欄的眠綿羊
            </h3>
            <p class="text-center">
              老是失眠、淺眠，而且就算有睡，起床還是覺得很疲勞嗎？在長期睡眠不足的情況下，對身體健康的影響其實比你想的還要糟糕，不僅容易讓情緒失控、注意力不集中，還會讓罹患心血管疾病的風險大增。想要改善這些狀況，好好的睡一覺很重要。以下教你６個瑜珈姿勢，在睡前花一點時間伸展，就可以幫助身體放鬆紓壓，幫助入睡並減少淺眠的狀況發生喔！
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col-12 col-md-6 col-lg-4 py-2 content_box">
            <div class="content_img">
              <img class="img-fluid" src="@/assets/image/A1.jpg" alt="英雄式">
            </div>
            <div class="content_text">
              <h5 class="text-center">英雄式 ( hero pose )</h5>
              <p class="text-center">採跪坐姿勢，將掌心放在身體前方地上，臀部稍微上抬讓腳跟向外，並且放置在身體兩側。將坐骨輕輕往下貼地，坐在腳跟內側，腳背貼地。伸展脊椎，維持3-5個呼吸。</p>
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-4 py-2 content_box">
            <div class="content_img">
              <img class="img-fluid" src="@/assets/image/A2.jpg" alt="嬰兒式">
            </div>
            <div class="content_text">
              <h5 class="text-center">嬰兒式 ( child’s pose )</h5>
              <p class="text-center">雙膝微微張開跪地，雙手向前伸展，繼續維持跪姿。將上半身貼近大腿，盡量伸展背部，維持3-5個呼吸。</p>
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-4 py-2 content_box">
            <div class="content_img">
              <img class="img-fluid" src="@/assets/image/A3.jpg" alt="駱駝式">
            </div>
            <div class="content_text">
              <h5 class="text-center">駱駝式 ( camel Pose )</h5>
              <p class="text-center">採高跪姿，雙手向後撐在臀部上方，扶住腰部位置。接著夾緊肩胛骨與臀部，上身向後仰，抬起胸口，視線看向上方。將雙手移動到腳跟上，撐住腳跟，維持3-5個呼吸。</p>
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-4 py-2 content_box">
            <div class="content_img">
              <img class="img-fluid" src="@/assets/image/A4.jpg" alt="抱膝式">
            </div>
            <div class="content_text">
              <h5 class="text-center">抱膝式 ( knee to chest )</h5>
              <p class="text-center">平躺，將雙膝抱起，然後再將頭抬起，臉往膝蓋靠近。維持住這個姿勢3-5個呼吸，然後再回到平躺姿勢。</p>
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-4 py-2 content_box">
            <div class="content_img">
              <img class="img-fluid" src="@/assets/image/A5.jpg" alt="上犬式">
            </div>
            <div class="content_text">
              <h5 class="text-center">上犬式 ( upward dog )</h5>
              <p class="text-center">採趴姿，腳背貼地，雙手放於胸部兩側，手肘彎曲掌心下壓。然後將胸部往前挺出，超過肩膀。雙腳下壓，將大腿、膝蓋抬離地面，此時只有雙手與腳背貼地，維持3-5個呼吸，再回到趴姿。</p>
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-4 py-2 content_box">
            <div class="content_img">
              <img class="img-fluid" src="@/assets/image/A6.jpg" alt="仰臥脊椎扭轉式">
            </div>
            <div class="content_text">
              <h5 class="text-center">仰臥脊椎扭轉式 ( supine twist )</h5>
              <p class="text-center">平躺，雙手攤開在身體兩側。雙腳屈膝成90度，先往右邊擺放停留3-5個呼吸後，再換到左邊。</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section_5">
      <div class="container text-center">
        <p>留下您的Email訂閱我們，將可收到不定期的眠綿羊訊</p>
        <div class="form-inline justify-content-center">
          <input type="email" name="email" class="form-control" placeholder="留下您的Email訂閱我們"/>
          <button type="submit" class="btn btn-pink">訂閱</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isLoading: true
    }
  },
  mounted () {
    this.isLoading = false
  }
}
</script>

<style>

</style>
