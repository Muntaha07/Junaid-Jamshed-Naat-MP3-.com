var data =[
  {
    SNO:'1',
    Name:'Duniya Ke Musafir',
    url :'./img/1.mpeg',
    image:'./img/1.jpeg',
    time:'5:16',
    
   

},

  {
    SNO:'2',
    Name:'Muhammad Ka Roza ',
    image:'./img/2.jpeg',
    url :'./img/2.mpeg',
    time:'6:35',
  },
  {
    SNO:'3',
    Name:'Duniya Ke Musafir',
    image:'./img/3.jpeg',
    url :'./img/3.mpeg',
    time:'5:16',
  },
  {
    SNO:'4',
    Name:'Qaseeda Burda Shareed',
    image:'./img/images.jpeg',
    url :'./img/4.mpeg',
    time:'6:21',
  },
  {
    SNO:'5',
    Name:'Mera Dil Badal De ',
    image:'./img/5.jpeg',
    url :'./img/5.mpeg',
    time:'4:11',
  },
  {
    SNO:'6',
    Name:'Jagah Ji Laganay Ki Duniya ',
    image:'./img/6.jpeg',
    url :'./img/6.mpeg',
    time:'5:39',
  },
]
var audio = new Audio
var currentSong = 0

var Album = document.querySelector("#music-Albem")
var poster = document.querySelector(".fab")
var backward = document.querySelector(".backward")
var play = document.querySelector(".play")
var forward = document.querySelector(".forward")
var pause = document.querySelector(".pause")



function mainfunction() {
  var clutter =''
data.forEach(function(elem,index){
 clutter +=` <div class="elem" id ="${index}">
            <div class="elem-left">
                <h2 class="nun">${elem.SNO}</h2>
                <h3>${elem.Name}</h3>
            </div>
            <div class="elem-right">
                <h5 >${elem.time}</h5>
            </div>
           </div> `
})

Album.innerHTML=clutter

audio.src = data[currentSong].url
poster.style.backgroundImage =`url(${data[currentSong].image})`

}
mainfunction()

Album.addEventListener("click",function(dets){
 currentSong = dets.target.id
 play.style.display ='none'
 pause.style.display ='block'
 pause.style.opacity =1
 mainfunction()
 audio.play()
})

play.addEventListener("click", function(){
 play.style.display ='none'
 pause.style.display ='block'
 pause.style.opacity =1
 mainfunction()
 audio.play()

})
pause.addEventListener("click", function(){
 play.style.display ='block'
 pause.style.display ='none'
 pause.style.opacity =
 audio.pause()

})

forward.addEventListener('click',function(){
  play.style.display ='none'
  pause.style.display ='block'
  pause.style.opacity =1
  if(currentSong < data.length-1){
    currentSong++
    mainfunction()
    audio.play()
  }
  else{
    forward.style.opacity =.2
  }
})
backward.addEventListener('click',function(){
  if(currentSong >0){
    currentSong--
    mainfunction()
    audio.play()
  }
  else{
    backward.style.opacity =.2
  }
})








function threedAnimation() {
    VANTA.CLOUDS({
        el: "#main",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        speed: 1.50
      })
}
threedAnimation()