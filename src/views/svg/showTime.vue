<template>
    <svg>
        <text id="time" text-anchor="middle" x="50%" y="50%" class="words words-1"></text>
        <text id="time" text-anchor="middle" x="50%" y="50%" class="words words-2"></text>
        <text id="time" text-anchor="middle" x="50%" y="50%" class="words words-3"></text>
        <text id="time" text-anchor="middle" x="50%" y="50%" class="words words-4"></text>
    </svg>
</template>

<script lang="ts">
import { ref, reactive } from "vue";

type c =number|String
const time = ()=>{
    function showtime() {
            var noatime = new Date();
            var h:c = noatime.getHours(),
                m:c = noatime.getMinutes(),
                s:c = noatime.getSeconds();
            h = checktime(h);
            m = checktime(m);
            s = checktime(s);
            return h + ":" + m + ":" + s;
        }

        function checktime(x:c):c{
            if (x < 10) {
                x = "0" + x;
            }
            return x;
        }

        var div1 = document.getElementsByTagName("text");
        setInterval(function() {
            for (var i in div1) {
                div1[i].innerHTML = showtime();
            }
        }, 1000);
}

export default {
    name:"showTime",
    setup(){
        time()
        return {

        }
    }
}
</script>

<style scoped>

svg {
	height:15vh;
	width:25vw;
    position: absolute;
    right: 0vw;
    top: 0vh;
}
.words {
	font-size:8vh;
	font-weight:bold;
	text-transform:uppercase;
	fill:none;
	stroke-width:4px;
	stroke-dasharray:90,310;
	animation-name:drawing;
	animation-duration:8s;
	animation-iteration-count:infinite;
	animation-timing-function:linear;
}
.words-1 {
	stroke:rgb(212, 27, 104)    ;
	text-shadow:0 0 50px rgb(212, 27, 104);
	animation-delay:-2s;
}
.words-2 {
	stroke:lightseagreen;
	text-shadow:0 0 50px lightseagreen;
	animation-delay:-4s;
}
.words-3 {
	stroke:orange;
	text-shadow:0 0 50px orange;
	animation-delay:-6s;
}
.words-4 {
	stroke:purple;
	text-shadow:0 0 50px purple;
	animation-delay:-8s;
}
@keyframes drawing {
	100% {
	stroke-dashoffset:-400;
}
}
</style>