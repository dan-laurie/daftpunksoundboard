function init() {
  
  //Linking all audio files for each button. Must be a quicker way to do this right?
  const workItDiv = document.getElementById('work-it')
  const workItAudio = document.querySelector('.work-it-audio')

  function workIt(){
    workItAudio.src = 'sounds/work_it.wav'
    workItAudio.play()
  }

  workItDiv.addEventListener('click', workIt)

  const makeItDiv = document.getElementById('make-it')
  const makeItAudio = document.querySelector('.make-it-audio')

  function makeIt(){
    makeItAudio.src = 'sounds/make_it.wav'
    makeItAudio.play()
  }

  makeItDiv.addEventListener('click', makeIt)

  const doItDiv = document.getElementById('do-it')
  const doItAudio = document.querySelector('.do-it-audio')

  function doIt(){
    doItAudio.src = 'sounds/do_it.wav'
    doItAudio.play()
  }

  doItDiv.addEventListener('click', doIt)

  const makesUsDiv = document.getElementById('makes-us')
  const makesUsAudio = document.querySelector('.makes-us-audio')

  function makesUs(){
    makesUsAudio.src = 'sounds/makes_us.wav'
    makesUsAudio.play()
  }

  makesUsDiv.addEventListener('click', makesUs)

  const harderDiv = document.getElementById('harder')
  const harderAudio = document.querySelector('.harder-audio')

  function harder(){
    harderAudio.src = 'sounds/harder.wav'
    harderAudio.play()
  }

  harderDiv.addEventListener('click', harder)

  const betterDiv = document.getElementById('better')
  const betterAudio = document.querySelector('.better-audio')

  function better(){
    betterAudio.src = 'sounds/better.wav'
    betterAudio.play()
  }

  betterDiv.addEventListener('click', better)

  const fasterDiv = document.getElementById('faster')
  const fasterAudio = document.querySelector('.faster-audio')

  function faster(){
    fasterAudio.src = 'sounds/faster.wav'
    fasterAudio.play()
  }

  fasterDiv.addEventListener('click', faster)

  const strongerDiv = document.getElementById('stronger')
  const strongerAudio = document.querySelector('.stronger-audio')

  function stronger(){
    strongerAudio.src = 'sounds/stronger.wav'
    strongerAudio.play()
  }

  strongerDiv.addEventListener('click', stronger)

  const moreThanDiv = document.getElementById('more-than')
  const moreThanAudio = document.querySelector('.more-than-audio')

  function moreThan(){
    moreThanAudio.src = 'sounds/more_than.wav'
    moreThanAudio.play()
  }

  moreThanDiv.addEventListener('click', moreThan)

  const hourDiv = document.getElementById('hour')
  const hourAudio = document.querySelector('.hour-audio')

  function hour(){
    hourAudio.src = 'sounds/hour.wav'
    hourAudio.play()
  }

  hourDiv.addEventListener('click', hour)

  const ourDiv = document.getElementById('our')
  const ourAudio = document.querySelector('.our-audio')

  function our(){
    ourAudio.src = 'sounds/our.wav'
    ourAudio.play()
  }

  ourDiv.addEventListener('click', our)  

  const neverDiv = document.getElementById('never')
  const neverAudio = document.querySelector('.never-audio')

  function never(){
    neverAudio.src = 'sounds/never.wav'
    neverAudio.play()
  }

  neverDiv.addEventListener('click', never)  

  const everDiv = document.getElementById('ever')
  const everAudio = document.querySelector('.ever-audio')

  function ever(){
    everAudio.src = 'sounds/ever.wav'
    everAudio.play()
  }

  everDiv.addEventListener('click', ever)  

  const afterDiv = document.getElementById('after')
  const afterAudio = document.querySelector('.after-audio')

  function after(){
    afterAudio.src = 'sounds/after.wav'
    afterAudio.play()
  }

  afterDiv.addEventListener('click', after)  

  const workIsDiv = document.getElementById('work-is')
  const workIsAudio = document.querySelector('.work-is-audio')

  function workIs(){
    workIsAudio.src = 'sounds/work_is.wav'
    workIsAudio.play()
  }

  workIsDiv.addEventListener('click', workIs)  

  const overDiv = document.getElementById('over')
  const overAudio = document.querySelector('.over-audio')

  function over(){
    overAudio.src = 'sounds/over.wav'
    overAudio.play()
  }

  overDiv.addEventListener('click', over)  





  //  Hover Gif 1 interaction
  const makeitgif = document.querySelector('#make-it')

  
  function handleMouseEnter() {
    makeitgif.classList.add('gif')
  }

  function handleMouseLeave() {
    makeitgif.classList.remove('gif')
  }

  makeitgif.addEventListener('mouseenter', handleMouseEnter)
  makeitgif.addEventListener('mouseleave', handleMouseLeave)

  const fastergif = document.querySelector('#faster')

  
  function handleMouseEnter1() {
    fastergif.classList.add('gif')
  }

  function handleMouseLeave1() {
    fastergif.classList.remove('gif')
  }

  fastergif.addEventListener('mouseenter', handleMouseEnter1)
  fastergif.addEventListener('mouseleave', handleMouseLeave1)

  const morethangif = document.querySelector('#more-than')

  
  function handleMouseEnter2() {
    morethangif.classList.add('gif')
  }

  function handleMouseLeave2() {
    morethangif.classList.remove('gif')
  }

  morethangif.addEventListener('mouseenter', handleMouseEnter2)
  morethangif.addEventListener('mouseleave', handleMouseLeave2)

  const overgif = document.querySelector('#over')

  
  function handleMouseEnter3() {
    overgif.classList.add('gif')
  }

  function handleMouseLeave3() {
    overgif.classList.remove('gif')
  }

  overgif.addEventListener('mouseenter', handleMouseEnter3)
  overgif.addEventListener('mouseleave', handleMouseLeave3)

  //  Hover Gif 2 interaction
  const workitgif = document.querySelector('#work-it')

  
  function handleMouseEnter4() {
    workitgif.classList.add('gif2')
  }
  
  function handleMouseLeave4() {
    workitgif.classList.remove('gif2')
  }

  workitgif.addEventListener('mouseenter', handleMouseEnter4)
  workitgif.addEventListener('mouseleave', handleMouseLeave4)
  
  const bettergif = document.querySelector('#better')
  
    
  function handleMouseEnter5() {
    bettergif.classList.add('gif2')
  }
  
  function handleMouseLeave5() {
    bettergif.classList.remove('gif2')
  }
  
  bettergif.addEventListener('mouseenter', handleMouseEnter5)
  bettergif.addEventListener('mouseleave', handleMouseLeave5)
  
  const nevergif = document.querySelector('#never')
  
    
  function handleMouseEnter6() {
    nevergif.classList.add('gif2')
  }
  
  function handleMouseLeave6() {
    nevergif.classList.remove('gif2')
  }
  
  nevergif.addEventListener('mouseenter', handleMouseEnter6)
  nevergif.addEventListener('mouseleave', handleMouseLeave6)
  
  const workisgif = document.querySelector('#work-is')
  
    
  function handleMouseEnter7() {
    workisgif.classList.add('gif2')
  }
  
  function handleMouseLeave7() {
    workisgif.classList.remove('gif2')
  }
  
  workisgif.addEventListener('mouseenter', handleMouseEnter7)
  workisgif.addEventListener('mouseleave', handleMouseLeave7)

  //  Hover Gif 3 interaction
  const doitgif = document.querySelector('#do-it')

  
  function handleMouseEnter8() {
    doitgif.classList.add('gif3')
  }
    
  function handleMouseLeave8() {
    doitgif.classList.remove('gif3')
  }
  
  doitgif.addEventListener('mouseenter', handleMouseEnter8)
  doitgif.addEventListener('mouseleave', handleMouseLeave8)
    
  const hardergif = document.querySelector('#harder')
    
      
  function handleMouseEnter9() {
    hardergif.classList.add('gif3')
  }
    
  function handleMouseLeave9() {
    hardergif.classList.remove('gif3')
  }
    
  hardergif.addEventListener('mouseenter', handleMouseEnter9)
  hardergif.addEventListener('mouseleave', handleMouseLeave9)
    
  const hourgif = document.querySelector('#hour')
    
      
  function handleMouseEnter10() {
    hourgif.classList.add('gif3')
  }
    
  function handleMouseLeave10() {
    hourgif.classList.remove('gif3')
  }
    
  hourgif.addEventListener('mouseenter', handleMouseEnter10)
  hourgif.addEventListener('mouseleave', handleMouseLeave10)
    
  const evergif = document.querySelector('#ever')
    
      
  function handleMouseEnter11() {
    evergif.classList.add('gif3')
  }
    
  function handleMouseLeave11() {
    evergif.classList.remove('gif3')
  }
    
  evergif.addEventListener('mouseenter', handleMouseEnter11)
  evergif.addEventListener('mouseleave', handleMouseLeave11)

  //  Hover Gif 4 interaction
  const makesusgif = document.querySelector('#makes-us')

  
  function handleMouseEnter12() {
    makesusgif.classList.add('gif4')
  }
    
  function handleMouseLeave12() {
    makesusgif.classList.remove('gif4')
  }
  
  makesusgif.addEventListener('mouseenter', handleMouseEnter12)
  makesusgif.addEventListener('mouseleave', handleMouseLeave12)
    
  const strongergif = document.querySelector('#stronger')
    
      
  function handleMouseEnter13() {
    strongergif.classList.add('gif4')
  }
    
  function handleMouseLeave13() {
    strongergif.classList.remove('gif4')
  }
    
  strongergif.addEventListener('mouseenter', handleMouseEnter13)
  strongergif.addEventListener('mouseleave', handleMouseLeave13)
    
  const ourgif = document.querySelector('#our')
    
      
  function handleMouseEnter14() {
    ourgif.classList.add('gif4')
  }
    
  function handleMouseLeave14() {
    ourgif.classList.remove('gif4')
  }
    
  ourgif.addEventListener('mouseenter', handleMouseEnter14)
  ourgif.addEventListener('mouseleave', handleMouseLeave14)
    
  const aftergif = document.querySelector('#after')
    
      
  function handleMouseEnter15() {
    aftergif.classList.add('gif4')
  }
    
  function handleMouseLeave15() {
    aftergif.classList.remove('gif4')
  }
    
  aftergif.addEventListener('mouseenter', handleMouseEnter15)
  aftergif.addEventListener('mouseleave', handleMouseLeave15)
  
  // Has to be a quicker way than to do all of this hahahahaha ^^^^^^^^^^^

}

window.addEventListener('DOMContentLoaded', init)
