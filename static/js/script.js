let play = document.getElementById('play');
        let cover_art = document.getElementById('cover-art');
        let music = document.querySelector('audio');
        let play_ac = false;
        let duration = music.duration;
        play.addEventListener('click',()=>{
            setTimeout(() => {
                cover_art.classList.toggle('col-12');
                if (!play_ac){
                    music.play();
                    play_ac = true
                }else{
                    music.pause();
                    play_ac = false
                }
            }, 100);
            // alert(typeof(duration))
        },true);

        // music.addEventListener('change',()=>{
        //     console.log(music.ondurationchange)
        // })
        music.onplaying = ()=>{
            let progress = document.querySelector('#progress-music');
            setInterval(() => {
                progress.setAttribute('value',String(duration/100))
                duration -= 1
            }, 1000);
        }
        music.onpause = ()=>{

        }

        let volume = document.getElementById('progress-volume');
        console.log(volume.value + 1)
        let high = document.getElementById('high');
        let low = document.getElementById('low');
        
        high.onclick = (e)=>{
            console.log(volume.value + 1)
            if (music.volume < 1){
                music.volume += 0.1
                volume.value += 10
                console.log(music.volume)
            }
        }
        low.onclick = ()=>{
            if (music.volume < 1 && music.volume > 0){
                music.volume -= 0.1
                volume.value -= 10
            }
        }