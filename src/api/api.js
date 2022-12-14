import axios from 'axios'


export default {
    // 获得所有商品数据
    async getAllGoods() {
        let ret;
        await axios.get("/goods/")
        .then(response => {
            ret = response.data;
        })
        return ret;
    }

}