<template>
    <div class="signin">
        <mt-popup
        v-model="popupVisible"
        :modal=false
        position="top" class="pop">
        {{popvalue}}
        </mt-popup>

        <div class="phone">
            <i></i>
            <input type="text" placeholder="手机号" v-model="phone">
        </div>
        <div class="code">
            <div>
                <i></i>
                <input type="text" placeholder="验证码" v-model="smsCode">
            </div>
            <button  @click="getcode(phone)">获取动态密码</button>
        </div>
        <div class="login" @click="login(phone,smsCode)">
            登录
        </div>
    </div>
</template>

<script>
import $ from 'axios';
    export default {
        name:'signin',
        data() {
            return {
                phone:'',
                smsCode:'',
                popupVisible:false,
                popvalue:''
            }
        },
        methods:{
            getcode(value){
                // console.log(value)
                $.post(`/sms/send/${value}`)
                .then(function(result){
                    this.randomKey=result.data.randomKey
                    this.popupVisible=true
                    this.popvalue="动态密码发送成功，请注意查收"
                    setInterval(function(){
                        this.popupVisible=false
                    }.bind(this),2000)
                }.bind(this))
            },
            login(phone,smsCode){
                if(this.randomKey){
                    // console.log(1)
                    $.post('/users/phone/register',{
                        phone,
                        smsCode,
                        randomKey:this.randomKey
                    }).then(function(result){
                        console.log(result)
                        // console.log("登录成功")
                        localStorage.setItem('neets_user',result.data.token)
                        localStorage.setItem('username',result.data.phone)
                        this.$router.push({
                            name:'my',
                            params:{
                                username:result.data.phone
                            }
                        })
                    }.bind(this))
                    .catch(function(){
                        this.popupVisible=true
                        this.popvalue="短信验证码不符"
                        setInterval(function(){
                            this.popupVisible=false
                        }.bind(this),2000)
                    }.bind(this))
                }else{
                    this.popupVisible=true
                    this.popvalue="唯一标识不能为空"
                    setInterval(function(){
                        this.popupVisible=false
                    }.bind(this),2000)
                }
                
            }
        }
    }
</script>

<style lang="scss" scoped>
.signin{
    width:92%;
    margin: 0 auto;
    .pop{
        color: #fff;
        opacity: .8;
        background: #000;
        display: inline-block;
        height: 50px;
        margin: 0 auto;
        padding: 0 40px;
        line-height: 50px;
        font-size: 14px;
        border-radius: 2px;
        min-width: 288px;
        text-align: center;
    }
    .phone{
        margin-top: .3rem;
        width:100%;
        height: .4rem;
        line-height: .4rem;
        border: 1px solid #ccc;
        border-radius: .05rem;
        color: #111;
        background-color: #fff;
        display: flex;
        i{
            font-size: .24rem;
            color: #aaa;
            margin-left: .15rem;
        }
        input{
            color: #111;
            width: 85%;
            border: none;
            text-indent: .15rem;
            height: .38rem;
            font-size: .14rem;
            outline: none;
        }
    }
    .code{
        margin-top: .3rem;
        width:100%;
        height: .4rem;
        display: flex;
        justify-content: space-between;
        >div{
            width:60%;
            height: .4rem;
            line-height: .4rem;
            border: 1px solid #ccc;
            border-radius: .05rem;
            color: #111;
            background-color: #fff;
            display: flex;
            i{
                font-size: .24rem;
                color: #aaa;
                margin-left: .15rem;
            }
            input{
                color: #111;
                width: 85%;
                border: none;
                text-indent: .15rem;
                height: .38rem;
                font-size: .14rem;
                outline: none;
            }
        }
        >button{
            width: 38%;
            border: none;
            border-radius: .05rem;
            height: .4rem;
            font-size: .14rem;
            color: #6e4902;
            background-color: #ffde02;
        }
    }
    .login{
        margin-top: .4rem;
        width: 100%;
        height: .4rem;
        font-size: .18rem;
        line-height: .4rem;
        color: #6e4902;
        text-align: center;
        border-radius: .05rem;
        background-color: #ffde02;
    }
}
</style>