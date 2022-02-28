  
      const $video = document.querySelector('#video')
      const $play = document.querySelector('#play')
      const $pause = document.querySelector('#pause')

      const $backward = document.querySelector('#backward')
      const $forward = document.querySelector('#forward')

      $play.addEventListener('click', handlePlay)
      $pause.addEventListener('click', handlePause)

      function handlePlay(){
          $video.play()
          $play.hidden = true
          $pause.hidden = false
          console.log('le distes click al botton de play')
      }

      function handlePause(){
          $video.pause()
          $play.hidden = false
          $pause.hidden = true
          console.log('le distes click al botton de pause')
      }

      $backward.addEventListener('click', handleBackward)

      function handleBackward(){
          $video.currentTime -= 10;
          console.log('para atras 10 segundos',  $video.currentTime)
      }

      $forward.addEventListener('click', handleForward)

      function handleForward(){
        $video.currentTime= $video.currentTime +10;
          console.log('para adelante 10 segundos',$video.currentTime )
      }

      $progress = document.querySelector('#progress')
      $video.addEventListener('loadedmetadata', handleLoaded)

      function handleLoaded(){
        $progress.max = $video.duration
        console.log('ha cargado mi video',   )
      }

      $video.addEventListener('timeupdate', handleTimeUpdate)
      function handleTimeUpdate(){
        $progress.value = $video.currentTime
        //  console.log('holi', $video.currentTime) 
      }

      $progress.addEventListener('input',handleInput )

      function handleInput(){
        $video.currentTime = $progress.value
         console.log('progresss', $progress.value) 

      }
