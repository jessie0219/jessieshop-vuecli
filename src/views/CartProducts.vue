<template>
  <section id="card">
    <div class="container">
      <div class="text-center mb-5">
        <a class="btn" @click="addCart = 'all'">全部商品</a>
        <a class="btn mx-5" @click="addCart = 'buy'"
          ><i class="fa-solid fa-cart-shopping"></i>(0)</a
        >
        <a class="btn mx-3" v-if="addCart == 'buy'" @click="pay">結帳</a>
      </div>
      <div class="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-4">
        <div v-for="(item, index) in showProducts" class="col" :key="item.id">
          <div class="card">
            <img :src="item.imgUrl" class="card-img-top" />
            <!-- <span id="word" class="btn bg-secondary"
              ><i class="fa-solid fa-message"></i
            ></span> -->
            <!-- <div @click="toggleBuy(item.id)">
              <span id="cart" class="btn"
                ><i class="i fa-solid fa-cart-shopping"></i
              ></span>
            </div> -->
            <div class="card-body">
              <h4 class="card-title">{{ item.name }}</h4>
              <p class="price p-3">
                價錢:{{ item.price }}

                {{ item.favorite ? "💜" : "🤍" }}
              </p>
              <p class="button d-flex justify-content-evenly">
                <button
                  v-if="addCart == 'buy'"
                  @click="reduceCount(item)"
                  class="btn favcolor"
                >
                  -
                </button>
                <span v-if="addCart == 'buy'">{{ item.count }}</span>
                <button
                  v-if="addCart == 'buy'"
                  @click="addCount(item)"
                  class="btn favcolor"
                >
                  +
                </button>
              </p>
              <p class="text-end" v-if="addCart == 'buy'">
                小計:{{ item.price * item.count }}
              </p>
              <p class="button d-flex justify-content-evenly">
                <button
                  :src="item"
                  @click="
                    toggleBuy(item.id);
                    getItemName(item);
                  "
                  v-if="addCart == 'all'"
                  class="btn favcolor"
                >
                  加入購物車
                </button>
                <button
                  v-if="addCart == 'all'"
                  class="btn favcolor"
                  @click="toggleFavorite(index)"
                >
                  {{ item.favorite ? "移除最愛" : "加到最愛" }}
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      products: [
        {
          id: 1,
          name: "RAM燈",
          imgUrl:
            "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjpZJZDfcZrhUbL4u0crD8eBozlhamssUYDBQdpAvF_msFGp9_ChqXEpeKD5jORpLprkOkcK3Wae6BKaRpcHiralzEQ-nacx9iUEP3afzi0dkz5-2ZLTkft7VjBf0U5YVX1Tkv8D9qEbmMF9hKUVN-CbnFoctz7cy5J-aDxirl84GHevP4YGj6AcPls1A/s320/RAM%E7%87%88.jpg",
          price: 1900,
          favorite: false,
          count: 0,
        },
        {
          id: 2,
          name: "ditoo喇叭",
          imgUrl:
            "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhm6FhLLqsBDgj3P3WxJqZzv4l14ED4ZOlVvPD9H30oPFmyLvTerr_LAwg-bMQfHwBPD7eLzU2nbLdwTXmC5_-77eU9T0fPj8Sv5ZMi_sqNtJfWU7Kmy3_opYDwtLhyw-sTOpr0QUTA0WyjcYnbfrzYe0iPbAepOQC5ywtM00opj9yCfak6Iy98lDnqTQ/s1284/ditoo%E5%96%87%E5%8F%AD.jpg",
          price: 1350,
          favorite: false,
          count: 0,
        },
        {
          id: 3,
          name: "happi class迷你漢堡椅子",
          imgUrl:
            "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgzJoHj-MkWWn6F0H93w1PvMi2oMh1nDQvCQImeoSM22TnuignnU-qEt9irfJIoecX3TOW6p853duYKH7QLDErajExp_1XqKZl1xU485DKv1-aiKtJ5A1LWgLEjN7uB9JO4Js7ZIWPRrhiIypB8tIM7502Vao54wuy8XPmCR64g5zFUPuagG2xzQCnItA/s320/happi%20class%E8%BF%B7%E4%BD%A0%E6%BC%A2%E5%A0%A1%E6%A4%85%E5%AD%90.jpg",
          price: 9000,
          favorite: false,
          count: 0,
        },
        {
          id: 4,
          name: "六人行小電視",
          imgUrl:
            "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhT3my6ydH3O5Enze7tefXyN0-p-lu1c8JOd_uTPAVL2dR_fAA28X1DWjpSAISVltjbav41y3VAUb7VjqACrMMV5W39gsB_q4XpYfkS58fpjeB_JLLSm_PEJxRaJC-IDolUlACwyBGVhfRPj6aM-_TRvRdxwusbbuiHy5wyOQysX5m73eXCG-o8qY0jYQ/s320/%E5%85%AD%E4%BA%BA%E8%A1%8C%E5%B0%8F%E9%9B%BB%E8%A6%96.jpg",
          price: 900,
          favorite: false,
          count: 0,
        },
        {
          id: 5,
          name: "回到未來燈",
          imgUrl:
            "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgSFOY6pTY6cy4MKf9PWeX4pSykeYWAZ4N5nFlIU9mv9oXAIIuSYWok8Afe0k_oX7hV22Y9mT84y1QMIaqATsmOfK5kjIC9eJySyDlF1A00f9W_X9Bs-pcALD5nNMuUKIhq8O7OH4UvQGQvsvRpyFCpkqyXw6S-DKCZxoeKDdzkD9nSkv0RtcdjnnJGNQ/s320/%E5%9B%9E%E5%88%B0%E6%9C%AA%E4%BE%86%E7%87%88.jpg",
          price: 1720,
          favorite: false,
          count: 0,
        },
        {
          id: 6,
          name: "Avenger-奇異博士",
          imgUrl:
            "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEifGuqI1VYGLOr6SUVWyYMm0p5xtqKkwaIU2gz0xTe9BLy0VGOeWrZUN-2nAwsOMB59b9ugF53yT3aXeqZNOHTLrMgqOjfqChbqY3-Q5c3ilVruzYCTqpf6UUpjnjKoAq3lnM6-4xpUIpG4SIOogRhmz5dCQMTdHcrvE-2fb3OSUumOvlOFGTVw5Lurxg/s320/Avenger-%E5%A5%87%E7%95%B0%E5%8D%9A%E5%A3%AB.jpg",
          price: 2100,
          favorite: false,
          count: 0,
        },
      ],
      buying: {},
      getName: "",
      addCart: "all",
    };
  },
  methods: {
    pay() {
      let sum = 0;
      this.products.forEach(function (item) {
        sum += item.price * item.count;
      });
      alert(`一共${sum}元`);
    },
    toggleFavorite(which) {
      this.products[which].favorite = !this.products[which].favorite;
    },
    toggleBuy(id) {
      this.buying[id] = !this.buying[id];
      // alert(`已將商品加入購物車!`);
    },
    getItemName(name) {
      this.getName = name;
      alert(`已將 "${this.getName.name}" 加入購物車!`);
    },
    addCount(item) {
      console.log(item);
      item.count++;
    },
    reduceCount(item) {
      console.log(item);
      if (item.count > 0) {
        item.count--;
      } else if ((item.count = 0)) {
        buying[item.id] = false;
      }
    },
  },
  computed: {
    showProducts() {
      if (this.addCart === "all") {
        return this.products;
      } else if (this.addCart === "buy") {
        return this.products.filter((item) => this.buying[item.id]);
      }
    },
  },
};
</script>

<style>
img {
  max-width: 100%;
}
#card {
  padding: 80px 0;
}
#card #cart {
  background: #a4b2d7;
}
#card h3 {
  margin-bottom: 80px;
  font-family: "Noto Serif TC", serif;
}
#card .card {
  width: 100%;
  margin-bottom: 15px;
}
#card img {
  margin-bottom: 20px;
}
#card img:hover {
  opacity: 0.2;
}
#card .card:hover #cart {
  display: block;
}
#card .card:hover #word {
  display: block;
}
#card .card:hover img {
  opacity: 0.5;
}
#card #cart {
  font-size: 30px;
  position: absolute;
  top: 200px;
  right: 70px;
  display: none;
}
#card #word {
  font-size: 30px;
  position: absolute;
  top: 200px;
  left: 70px;
  display: none;
}
@media screen and (max-width: 768px) {
  #card #cart {
    font-size: 30px;
    position: absolute;
    top: 320px;
    right: 80px;
    display: none;
  }
  #card #word {
    font-size: 30px;
    position: absolute;
    top: 320px;
    left: 80px;
    display: none;
  }
}
#card h5 {
  font-family: "Noto Serif TC", serif;
}
#card p {
  font-family: "Noto Serif TC", serif;
}
.price {
  font-size: 30px;
}
/* @media screen and (max-width:768px){
    #card #cart{
    font-size: 30px;
    position: absolute;
    top: 320px;
    right: 80px;
    display: none;
    }
    #card #word{
    font-size: 30px;
    position: absolute;
    top: 320px;
    left: 80px;
    display: none;
    }
} */
#latest {
  padding: 80ox 0;
  background: rgb(248, 248, 248);
}
#latest h3 {
  margin-bottom: 80px;
}
#latest .upper {
  position: relative;
}
#latest .innertext {
  position: absolute;
  bottom: 24px;
  left: 24px;
}
#latest .innertext span {
  background: rgba(255, 255, 255, 0.5);
  padding: 6px 15px;
  border-radius: 20px;
}
#latest .lower h2 {
  margin-top: 12px;
  margin-bottom: 12px;
}
#latest .outer {
  background: #fff;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0, 0.08);
}
#latest .lower {
  padding: 6px 20px 20px 20px;
}
#latest a {
  color: black;
  text-decoration: none;
}
#latest a:hover {
  text-decoration: underline;
}
#page {
  font-family: "Noto Serif TC", serif;
}
button.favcolor {
  background-color: #a4b2d7;
}
</style>
