let api = {
    data() {
        return {
            datas: [],
        }
    },
    mounted() {
        this.getApi()
    },
    methods: {
        getApi(sex, age) {
            axios.get('https://app.rakuten.co.jp/services/api/IchibaItem/Ranking/20170628', { 
                params: {
                    applicationId: '', // ご自身で取得したアプリIDを入力してください
                    elements:
                    "rank,itemName,itemUrl,mediumImageUrls,itemPrice,lastBuildDate,title",
                    sex: sex,
                    age: age,
                }
            })
                .then(response => this.datas = response.data)
        },
    },
}
Vue.createApp(api).mount("#app");