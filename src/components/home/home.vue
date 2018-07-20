<template>
    <div class="indexContainer">
        <div class="navBox">
            <ul>
                <router-link to=""><li><div></div>美剧</li></router-link>
                <router-link to=""><li><div></div>韩剧</li></router-link>
                <router-link to=""><li><div></div>日剧</li></router-link>
                <router-link to=""><li><div></div>动漫</li></router-link>
                <router-link to=""><li><div></div>全部</li></router-link>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
@import '@/yo/core/reset.scss';
.indexContainer{
    @include flexbox();
    flex-direction: column;
    .navBox{
        width: 100%;
        margin-top: .3rem;
        ul{
            @include flexbox();
            flex-direction: row;
            justify-content: center;
            align-items: center;
            a{
                @include flex();
                cursor: pointer;
                color: #111;
                li{
                    text-align: center;
                    line-height: 1;
                    font-size: .12rem;
                    div{
                        background-image: url(../../assets/images/Artboard.png);

                    }
                }
            }
        }
    }
}
</style>
