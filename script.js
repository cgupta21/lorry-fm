(function(){
  'use strict';

  // ===== EDIT THIS LIST TO ADD YOUR OWN SONGS =====
  // title / artist / cover show up in the player.
  // src points to the mp3 file.
  // cover points to an image file.
  // Put mp3s in "music/" and images in "assets/covers/".

  var playlist = [
  {
    title: "Chand Se Parda Kijiye",
    artist: "Kumar Sanu",
    src: "music/song1.mp3",
    cover: "assets/covers/song1.jpg"
  },
  {
    title: "Dheere Dheere Se Meri Zindagi Mein Aana",
    artist: "Kumar Sanu, Anuradha Paudwal",
    src: "music/song2.mp3",
    cover: "assets/covers/song2.jpg"
  },
  {
    title: "Mera Dil Bhi Kitna Pagal Hai",
    artist: "Kumar Sanu, Alka Yagnik",
    src: "music/song3.mp3",
    cover: "assets/covers/song3.jpg"
  },
  {
    title: "Tum Dil Ki Dhadkan Mein",
    artist: "Kumar Sanu, Alka Yagnik",
    src: "music/song4.mp3",
    cover: "assets/covers/song4.jpg"
  },
  {
    title: "Tu Meri Zindagi Hai",
    artist: "Kumar Sanu, Anuradha Paudwal",
    src: "music/song5.mp3",
    cover: "assets/covers/song5.jpg"
  },
  {
    title: "Aankh Hai Bhari Bhari",
    artist: "Kumar Sanu",
    src: "music/song6.mp3",
    cover: "assets/covers/song6.jpg"
  },
  {
    title: "Mera Chand Mujhe Aaya Hai Nazar",
    artist: "Kumar Sanu",
    src: "music/song7.mp3",
    cover: "assets/covers/song7.jpg"
  },
  {
    title: "Sochenge Tumhe Pyar",
    artist: "Kumar Sanu",
    src: "music/song8.mp3",
    cover: "assets/covers/song8.jpg"
  },
  {
    title: "Pehla Nasha",
    artist: "Udit Narayan, Sadhana Sargam",
    src: "music/song9.mp3",
    cover: "assets/covers/song9.jpg"
  },
  {
    title: "Tadap Tadap Ke",
    artist: "KK, Dominique Cerejo",
    src: "music/song10.mp3",
    cover: "assets/covers/song10.jpg"
  },
  {
    title: "Tujhe Dekha To Yeh Jana Sanam",
    artist: "Kumar Sanu, Lata Mangeshkar",
    src: "music/song11.mp3",
    cover: "assets/covers/song11.jpg"
  },
  {
    title: "Aankhon Se Tune Kya Keh Diya",
    artist: "Kumar Sanu, Alka Yagnik",
    src: "music/song12.mp3",
    cover: "assets/covers/song12.jpg"
  },
  {
    title: "Kya Mujhe Pyaar Hai",
    artist: "KK",
    src: "music/song13.mp3",
    cover: "assets/covers/song13.jpg"
  },
  {
    title: "Sach Keh Raha Hai Deewana",
    artist: "KK",
    src: "music/song14.mp3",
    cover: "assets/covers/song14.jpg"
  },
  {
    title: "O Mere Dil Ke Chain",
    artist: "Kishore Kumar",
    src: "music/song15.mp3",
    cover: "assets/covers/song15.jpg"
  },
  {
    title: "Pal Pal Dil Ke Paas",
    artist: "Kishore Kumar",
    src: "music/song16.mp3",
    cover: "assets/covers/song16.jpg"
  },
  {
    title: "Zindagi Ek Safar Hai Suhana",
    artist: "Kishore Kumar",
    src: "music/song17.mp3",
    cover: "assets/covers/song17.jpg"
  },
  {
    title: "Neele Neele Ambar Par",
    artist: "Kishore Kumar",
    src: "music/song18.mp3",
    cover: "assets/covers/song18.jpg"
  },
  {
    title: "Mere Rang Mein Rangne Wali",
    artist: "S. P. Balasubrahmanyam",
    src: "music/song19.mp3",
    cover: "assets/covers/song19.jpg"
  },
  {
    title: "Mere Sapno Ki Rani",
    artist: "Kishore Kumar",
    src: "music/song20.mp3",
    cover: "assets/covers/song20.jpg"
  },
  {
    title: "Khaike Paan Banaraswala",
    artist: "Kishore Kumar",
    src: "music/song21.mp3",
    cover: "assets/covers/song21.jpg"
  },
  {
    title: "Roop Tera Mastana",
    artist: "Kishore Kumar",
    src: "music/song22.mp3",
    cover: "assets/covers/song22.jpg"
  },
  {
    title: "Kaho Naa... Pyaar Hai",
    artist: "Udit Narayan, Alka Yagnik",
    src: "music/song23.mp3",
    cover: "assets/covers/song23.jpg"
  },
  {
    title: "Yeh Shaam Mastani",
    artist: "Kishore Kumar",
    src: "music/song24.mp3",
    cover: "assets/covers/song24.jpg"
  },
  {
    title: "Rimjhim Gire Saawan",
    artist: "Kishore Kumar",
    src: "music/song25.mp3",
    cover: "assets/covers/song25.jpg"
  },
  {
    title: "Mere Samne Wali Khidki Mein",
    artist: "Kishore Kumar",
    src: "music/song26.mp3",
    cover: "assets/covers/song26.jpg"
  },
  {
    title: "Aap Ki Aankhon Mein Kuch",
    artist: "Kishore Kumar, Lata Mangeshkar",
    src: "music/song27.mp3",
    cover: "assets/covers/song27.jpg"
  },
  {
    title: "Ho Gaya Hai Tujhko To Pyar Sajna",
    artist: "Lata Mangeshkar, Udit Narayan",
    src: "music/song28.mp3",
    cover: "assets/covers/song28.jpg"
  },
  {
    title: "Yeh Ladka Hai Deewana",
    artist: "Udit Narayan, Alka Yagnik",
    src: "music/song29.mp3",
    cover: "assets/covers/song29.jpg"
  },
  {
    title: "Koi Mil Gaya",
    artist: "Kavita Krishnamurthy, Udit Narayan, Alka Yagnik",
    src: "music/song30.mp3",
    cover: "assets/covers/song30.jpg"
  },
  {
    title: "Tum Mile Dil Khile",
    artist: "Kumar Sanu, Alka Yagnik",
    src: "music/song31.mp3",
    cover: "assets/covers/song31.jpg"
  },
  {
    title: "You Are My Soniya",
    artist: "Sonu Nigam, Alka Yagnik",
    src: "music/song32.mp3",
    cover: "assets/covers/song32.jpg"
  },
  {
    title: "Nazar Ke Samne",
    artist: "Kumar Sanu, Anuradha Paudwal",
    src: "music/song33.mp3",
    cover: "assets/covers/song33.jpg"
  },
  {
    title: "Mujhe Neend Na Aaye",
    artist: "Udit Narayan, Anuradha Paudwal",
    src: "music/song34.mp3",
    cover: "assets/covers/song34.jpg"
  },
  {
    title: "Bahut Pyar Karte Hain",
    artist: "Anuradha Paudwal",
    src: "music/song35.mp3",
    cover: "assets/covers/song35.jpg"
  },
  {
    title: "Mere Khwabon Mein",
    artist: "Lata Mangeshkar",
    src: "music/song36.mp3",
    cover: "assets/covers/song36.jpg"
  },
  {
    title: "Pehli Nazar Mein",
    artist: "Udit Narayan, Alka Yagnik",
    src: "music/song37.mp3",
    cover: "assets/covers/song37.jpg"
  },
  {
    title: "Raah Mein Unse Mulaqat Ho Gayi",
    artist: "Kumar Sanu, Alka Yagnik",
    src: "music/song38.mp3",
    cover: "assets/covers/song38.jpg"
  },
  {
    title: "Tumsa Koi Pyaara",
    artist: "Kumar Sanu, Alka Yagnik",
    src: "music/song39.mp3",
    cover: "assets/covers/song39.jpg"
  },
  {
    title: "Kitni Hasrat Hain Humein",
    artist: "Kumar Sanu, Sadhana Sargam",
    src: "music/song40.mp3",
    cover: "assets/covers/song40.jpg"
  },
  {
    title: "Yeh Dil Aashiqana",
    artist: "Kumar Sanu, Alka Yagnik",
    src: "music/song41.mp3",
    cover: "assets/covers/song41.jpg"
  },
  {
    title: "Chunnari Chunnari",
    artist: "Abhijeet, Anuradha Sriram",
    src: "music/song42.mp3",
    cover: "assets/covers/song42.jpg"
  },
  {
    title: "Kitna Pyara Tujhe Rab Ne Banaya",
    artist: "Udit Narayan, Alka Yagnik",
    src: "music/song43.mp3",
    cover: "assets/covers/song43.jpg"
  },
  {
    title: "Jaan-E-Jigar Jaaneman",
    artist: "Kumar Sanu, Anuradha Paudwal",
    src: "music/song44.mp3",
    cover: "assets/covers/song44.jpg"
  },
  {
    title: "Bole Mora Kangna",
    artist: "Kumar Sanu, Alka Yagnik",
    src: "music/song45.mp3",
    cover: "assets/covers/song45.jpg"
  },
  {
    title: "Woh Ladki Jo",
    artist: "Abhijeet",
    src: "music/song46.mp3",
    cover: "assets/covers/song46.jpg"
  },
  {
    title: "Aayiye Aapka Intezaar Tha",
    artist: "Kumar Sanu",
    src: "music/song47.mp3",
    cover: "assets/covers/song47.jpg"
  },
  {
    title: "Tere Chehre Pe Mujhe Pyar Nazar Aata Hai",
    artist: "Kumar Sanu, Anuradha Paudwal",
    src: "music/song48.mp3",
    cover: "assets/covers/song48.jpg"
  },
  {
    title: "Chhoti Chhoti Raatein",
    artist: "Sonu Nigam, Anuradha Paudwal",
    src: "music/song49.mp3",
    cover: "assets/covers/song49.jpg"
  },
  {
    title: "Tip Tip Barsa Paani",
    artist: "Udit Narayan, Alka Yagnik",
    src: "music/song50.mp3",
    cover: "assets/covers/song50.jpg"
  }
];

  // ===================================================

  var reduceMotion =
    window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;


  // ===================================================
  // FALLBACK COVER
  // ===================================================

  var fallbackCover =
    'data:image/svg+xml;utf8,' +
    encodeURIComponent(
      '<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">' +
        '<rect width="120" height="120" fill="#12776f"/>' +
        '<rect y="78" width="120" height="42" fill="#d2491d"/>' +
        '<circle cx="60" cy="46" r="26" fill="#ffc22e" stroke="#171310" stroke-width="3"/>' +
        '<path d="M60 26 L66 42 L84 42 L69 52 L75 68 L60 58 L45 68 L51 52 L36 42 L54 42 Z" fill="#171310"/>' +
        '<text x="60" y="98" text-anchor="middle" font-family="monospace" font-size="9" fill="#f3e7cf" letter-spacing="1">HORN OK</text>' +
        '<text x="60" y="110" text-anchor="middle" font-family="monospace" font-size="9" fill="#f3e7cf" letter-spacing="1">PLEASE</text>' +
      '</svg>'
    );


  // ===================================================
  // DOM ELEMENTS
  // ===================================================

  var body = document.body;
  var panel = document.getElementById('panel');
  var coverImg = document.getElementById('coverImg');

  var playbtn = document.getElementById('playbtn');
  var prevbtn = document.getElementById('prevbtn');
  var nextbtn = document.getElementById('nextbtn');

  var track = document.getElementById('track');

  var trackTitle = document.getElementById('trackTitle');
  var trackArtist = document.getElementById('trackArtist');

  var seekbar = document.getElementById('seekbar');
  var seekfill = document.getElementById('seekfill');
  var seekthumb = document.getElementById('seekthumb');

  var curTimeEl = document.getElementById('curTime');
  var durTimeEl = document.getElementById('durTime');


  // ===================================================
  // PLAYER STATE
  // ===================================================

  var currentIndex = 0;
  var playing = false;
  var hasEverPlayed = false;
  var isScrubbing = false;


  // ===================================================
  // FORMAT TIME
  // ===================================================

  function fmt(s){

    if(!isFinite(s) || s < 0){
      return '0:00';
    }

    var m = Math.floor(s / 60);
    var r = Math.floor(s % 60);

    return m + ':' + String(r).padStart(2, '0');

  }


  // ===================================================
  // UPDATE SEEK UI
  // ===================================================

  function updateSeekUI(current, duration){

    var pct =
      duration
        ? Math.min(100, (current / duration) * 100)
        : 0;

    seekfill.style.width = pct + '%';
    seekthumb.style.left = pct + '%';

    curTimeEl.textContent = fmt(current);
    durTimeEl.textContent = fmt(duration);

    seekbar.setAttribute(
      'aria-valuenow',
      Math.round(pct)
    );

    seekbar.setAttribute(
      'aria-valuetext',
      fmt(current) + ' of ' + fmt(duration)
    );

  }


  // ===================================================
  // SHARED AUDIO CONTEXT
  // ===================================================

  var audioCtx = null;

  function getAudioCtx(){

    if(!audioCtx){

      try{

        audioCtx =
          new (
            window.AudioContext ||
            window.webkitAudioContext
          )();

      }catch(e){

        return null;

      }

    }

    if(audioCtx.state === 'suspended'){
      audioCtx.resume();
    }

    return audioCtx;

  }


  // ===================================================
  // HORN SOUNDS
  // ===================================================

  var hornSounds = [
    {
      src: "music/horn1.mp3",
      freqs: [220, 277]
    },
    {
      src: "music/horn2.mp3",
      freqs: [330, 415]
    },
    {
      src: "music/horn3.mp3",
      freqs: [165, 208]
    }
  ];


  // ===================================================
  // HORN STATE
  // ===================================================

  var currentHornAudio = null;

  var currentHornGain = null;

  var currentHornOscillators = [];

  var currentHornRequest = 0;

  // True only when music was playing when horn was clicked.
  var musicWasPlayingForHorn = false;


  // ===================================================
  // STOP CURRENT HORN
  // ===================================================

  function stopCurrentHorn(){

    // Invalidate previous horn requests.
    currentHornRequest++;


    // -------------------------------------------------
    // Stop MP3 horn
    // -------------------------------------------------

    if(currentHornAudio){

      try{
        currentHornAudio.pause();
      }catch(e){}

      try{
        currentHornAudio.currentTime = 0;
      }catch(e){}

      currentHornAudio = null;

    }


    // -------------------------------------------------
    // Stop synthesized horn
    // -------------------------------------------------

    if(currentHornGain && audioCtx){

      try{

        currentHornGain.gain.cancelScheduledValues(
          audioCtx.currentTime
        );

        currentHornGain.gain.setValueAtTime(
          0.0001,
          audioCtx.currentTime
        );

        currentHornGain.disconnect();

      }catch(e){}

      currentHornGain = null;

    }


    // -------------------------------------------------
    // Stop synthesized oscillators
    // -------------------------------------------------

    currentHornOscillators.forEach(
      function(osc){

        try{
          osc.stop();
        }catch(e){}

        try{
          osc.disconnect();
        }catch(e){}

      }
    );


    currentHornOscillators = [];

  }


  // ===================================================
  // RESUME MUSIC AFTER HORN
  // ===================================================

  function resumeMusicAfterHorn(requestId){

    // Don't resume if another horn has been clicked.
    if(requestId !== currentHornRequest){
      return;
    }


    // Only resume if music was playing
    // before the horn was pressed.
    if(
      musicWasPlayingForHorn &&
      !playing
    ){

      start();

    }


    musicWasPlayingForHorn = false;

  }


  // ===================================================
  // SYNTHESIZED FALLBACK HORN
  // ===================================================

  function synthHorn(freqs, requestId){

    // A newer horn has already been clicked.
    if(requestId !== currentHornRequest){
      return;
    }


    var ctx = getAudioCtx();

    if(!ctx){
      return;
    }


    var g = ctx.createGain();

    currentHornGain = g;


    g.gain.setValueAtTime(
      0.0001,
      ctx.currentTime
    );

    g.gain.exponentialRampToValueAtTime(
      0.18,
      ctx.currentTime + 0.03
    );

    g.gain.exponentialRampToValueAtTime(
      0.0001,
      ctx.currentTime + 0.5
    );


    g.connect(ctx.destination);


    var oscillators = [];


    freqs.forEach(
      function(f){

        var o =
          ctx.createOscillator();

        o.type = 'square';

        o.frequency.value = f;

        o.connect(g);

        o.start();

        o.stop(
          ctx.currentTime + 0.5
        );

        oscillators.push(o);

      }
    );


    currentHornOscillators =
      oscillators;


    // Wait for synthesized horn to finish.
    setTimeout(
      function(){

        // Don't resume because this horn
        // is no longer the current horn.
        if(
          requestId !==
          currentHornRequest
        ){

          return;

        }


        currentHornGain = null;

        currentHornOscillators = [];


        resumeMusicAfterHorn(
          requestId
        );

      },
      550
    );

  }


  // ===================================================
  // PLAY HORN
  // ===================================================

  function playHorn(index, btn){

    // -------------------------------------------------
    // Stop any previous horn.
    // -------------------------------------------------

    stopCurrentHorn();


    var requestId =
      currentHornRequest;


    var h =
      hornSounds[index];


    // -------------------------------------------------
    // Remember music state BEFORE pausing it.
    // -------------------------------------------------

    musicWasPlayingForHorn =
      playing;


    // -------------------------------------------------
    // Pause music only if it was playing.
    // -------------------------------------------------

    if(musicWasPlayingForHorn){

      track.pause();

      playing = false;


      panel.classList.remove(
        'playing'
      );


      playbtn.setAttribute(
        'aria-pressed',
        'false'
      );


      playbtn.setAttribute(
        'aria-label',
        'Play'
      );


      setDriving(false);

    }


    // -------------------------------------------------
    // Create separate horn audio.
    // -------------------------------------------------

    var audio =
      new Audio();


    currentHornAudio =
      audio;


    audio.src =
      h.src;

    audio.preload =
      'auto';


    // Horn volume.
    audio.volume =
      0.7;


    // -------------------------------------------------
    // Play real horn MP3.
    // -------------------------------------------------

    audio.play()
      .then(
        function(){

          // Another horn was clicked while
          // this horn was loading.
          if(
            requestId !==
            currentHornRequest
          ){

            try{
              audio.pause();
              audio.currentTime = 0;
            }catch(e){}

          }

        }
      )
      .catch(
        function(){

          // Another horn was clicked.
          if(
            requestId !==
            currentHornRequest
          ){

            return;

          }


          currentHornAudio =
            null;


          // Use synthesized horn.
          synthHorn(
            h.freqs,
            requestId
          );

        }
      );


    // -------------------------------------------------
    // Real horn finished
    // -------------------------------------------------

    audio.addEventListener(
      'ended',
      function(){

        // Ignore old horn.
        if(
          requestId !==
          currentHornRequest
        ){

          return;

        }


        currentHornAudio =
          null;


        // Resume the song.
        resumeMusicAfterHorn(
          requestId
        );

      }
    );


    // =================================================
    // VISUAL HORN EFFECT
    // =================================================

    if(!reduceMotion){

      panel.classList.remove(
        'honking'
      );

      void panel.offsetWidth;

      panel.classList.add(
        'honking'
      );


      if(btn){

        btn.classList.remove(
          'honked'
        );

        void btn.offsetWidth;

        btn.classList.add(
          'honked'
        );

      }

    }

  }


  // ===================================================
  // HORN BUTTONS
  // ===================================================

  document.getElementById(
    'hornBtn1'
  ).addEventListener(
    'click',
    function(){

      playHorn(
        0,
        this
      );

    }
  );


  document.getElementById(
    'hornBtn2'
  ).addEventListener(
    'click',
    function(){

      playHorn(
        1,
        this
      );

    }
  );


  document.getElementById(
    'hornBtn3'
  ).addEventListener(
    'click',
    function(){

      playHorn(
        2,
        this
      );

    }
  );


  // ===================================================
  // LIVE CLOCK
  // ===================================================

  var liveClock =
    document.getElementById(
      'liveClock'
    );


  function updateClock(){

    if(!liveClock){
      return;
    }

    var now =
      new Date();

    var h =
      now.getHours();

    var m =
      String(
        now.getMinutes()
      ).padStart(2, '0');

    var ampm =
      h >= 12
        ? 'PM'
        : 'AM';

    var h12 =
      h % 12;

    if(h12 === 0){
      h12 = 12;
    }

    liveClock.textContent =
      h12 + ':' + m + ' ' + ampm;

  }


  updateClock();


  setInterval(
    updateClock,
    1000 * 15
  );


  // ===================================================
  // ROTATING TRUCK ART LINES
  // ===================================================

  var rotatingLines = [

    "हर मोड़ पर नयी कहानी, हर सफर में नयी जवानी।",

    "धूल उड़े या बारिश आए, ड्राइवर का दिल कभी न घबराए।",

    "मंज़िल दूर मगर रफ़्तार तेज़, दिल में बस चलने का जोश है आज।",

    "हॉर्न बजा के रस्ता दे भाई, आगे निकलनी है हमारी गाड़ी।",

    "थके पैर पर चलता है पहिया, सपनों का सफर है ये मेरा भैया।"

  ];


  var rotatingLineEl =
    document.getElementById(
      'rotatingLine'
    );


  var rotatingIndex = 0;


  function rotateLine(){

    if(!rotatingLineEl){
      return;
    }


    rotatingLineEl.classList.add(
      'fading'
    );


    setTimeout(
      function(){

        rotatingIndex =
          (
            rotatingIndex + 1
          ) %
          rotatingLines.length;


        rotatingLineEl.textContent =
          rotatingLines[
            rotatingIndex
          ];


        rotatingLineEl.classList.remove(
          'fading'
        );

      },
      400
    );

  }


  if(!reduceMotion){

    setInterval(
      rotateLine,
      3000
    );

  }


  // ===================================================
  // DRIVING MODE
  // ===================================================

  function setDriving(on){

    body.classList.toggle(
      'driving',
      on && !reduceMotion
    );

  }


  // ===================================================
  // LOAD TRACK
  // ===================================================

  function loadTrack(
    index,
    autoplay
  ){

    currentIndex =
      (
        index +
        playlist.length
      ) %
      playlist.length;


    var song =
      playlist[currentIndex];


    // -------------------------------------------------
    // Crossfade artwork + text
    // -------------------------------------------------

    if(
      hasEverPlayed &&
      !reduceMotion
    ){

      coverImg.classList.add(
        'swap'
      );

      trackTitle.classList.add(
        'swap'
      );

      trackArtist.classList.add(
        'swap'
      );

    }


    setTimeout(
      function(){

        trackTitle.textContent =
          song.title;

        trackArtist.textContent =
          song.artist;


        coverImg.onerror =
          function(){

            coverImg.onerror =
              null;

            coverImg.src =
              fallbackCover;

          };


        coverImg.src =
          song.cover ||
          fallbackCover;


        coverImg.classList.remove(
          'swap'
        );

        trackTitle.classList.remove(
          'swap'
        );

        trackArtist.classList.remove(
          'swap'
        );

        if('mediaSession' in navigator){
          try {
            navigator.mediaSession.metadata = new MediaMetadata({
              title: song.title,
              artist: song.artist,
              album: 'Lorry FM — Highway Anthems',
              artwork: [
                { src: song.cover || fallbackCover, sizes: '512x512', type: 'image/jpeg' }
              ]
            });
          } catch(e) {}
        }

      },
      (
        hasEverPlayed &&
        !reduceMotion
      )
        ? 160
        : 0
    );


    // -------------------------------------------------
    // Change music track
    // -------------------------------------------------

    track.pause();

    track.removeAttribute(
      'src'
    );

    track.src =
      song.src;


    updateSeekUI(
      0,
      0
    );


    if(autoplay){

      start();

    }else{

      stop();

    }

  }


  // ===================================================
  // AUDIO ERROR
  // ===================================================

  track.addEventListener(
    'error',
    function(){

      if(playing){

        stop();

      }

    }
  );


  // ===================================================
  // AUDIO METADATA
  // ===================================================

  track.addEventListener(
    'loadedmetadata',
    function(){

      updateSeekUI(
        track.currentTime,
        track.duration
      );

    }
  );


  // ===================================================
  // AUDIO TIME UPDATE
  // ===================================================

  track.addEventListener(
    'timeupdate',
    function(){

      if(isScrubbing){
        return;
      }


      updateSeekUI(
        track.currentTime,
        track.duration
      );

    }
  );


  // ===================================================
  // AUTO NEXT SONG
  // ===================================================

  track.addEventListener(
    'ended',
    function(){

      next();

    }
  );


  // ===================================================
  // START MUSIC
  // ===================================================

  function start(){

    var p =
      track.play();


    if(
      p &&
      typeof p.then ===
      'function'
    ){

      p.then(
        function(){

          playing = true;

          hasEverPlayed =
            true;


          panel.classList.add(
            'playing'
          );


          playbtn.setAttribute(
            'aria-pressed',
            'true'
          );


          playbtn.setAttribute(
            'aria-label',
            'Pause'
          );


          setDriving(
            true
          );

        }
      )
      .catch(
        function(){

          playing = false;


          panel.classList.remove(
            'playing'
          );


          playbtn.setAttribute(
            'aria-pressed',
            'false'
          );


          playbtn.setAttribute(
            'aria-label',
            'Play'
          );


          setDriving(
            false
          );

        }
      );

    }

  }


  // ===================================================
  // STOP MUSIC
  // ===================================================

  function stop(){

    playing =
      false;


    track.pause();


    panel.classList.remove(
      'playing'
    );


    playbtn.setAttribute(
      'aria-pressed',
      'false'
    );


    playbtn.setAttribute(
      'aria-label',
      'Play'
    );


    setDriving(
      false
    );

  }


  // ===================================================
  // NEXT TRACK
  // NO HORN
  // ===================================================

  function next(){

    loadTrack(
      currentIndex + 1,
      true
    );

  }


  // ===================================================
  // PREVIOUS TRACK
  // NO HORN
  // ===================================================

  function prev(){

    loadTrack(
      currentIndex - 1,
      true
    );

  }


  // ===================================================
  // BUTTON PRESS FLASH
  // ===================================================

  function pressFlash(btn){

    if(reduceMotion){
      return;
    }


    if(!btn){
      return;
    }


    btn.classList.add(
      'pressed'
    );


    setTimeout(
      function(){

        btn.classList.remove(
          'pressed'
        );

      },
      140
    );

  }


  // ===================================================
  // PLAY / PAUSE
  // NO HORN
  // ===================================================

  playbtn.addEventListener(
    'click',
    function(){

      if(
        !hasEverPlayed &&
        !reduceMotion
      ){

        panel.classList.add(
          'poweron'
        );


        setTimeout(
          function(){

            panel.classList.remove(
              'poweron'
            );

          },
          900
        );

      }


      if(playing){

        stop();

      }else{

        start();

      }

    }
  );


  // ===================================================
  // NEXT
  // NO HORN
  // ===================================================

  nextbtn.addEventListener(
    'click',
    function(){

      pressFlash(
        nextbtn
      );


      next();

    }
  );


  // ===================================================
  // PREVIOUS
  // NO HORN
  // ===================================================

  prevbtn.addEventListener(
    'click',
    function(){

      pressFlash(
        prevbtn
      );


      prev();

    }
  );


  // ===================================================
  // SEEK BAR
  // ===================================================

  function seekToClientX(
    clientX
  ){

    var rect =
      seekbar.getBoundingClientRect();


    var pct =
      Math.min(
        1,
        Math.max(
          0,
          (
            clientX -
            rect.left
          ) /
          rect.width
        )
      );


    var duration =
      track.duration || 0;


    var newTime =
      pct * duration;


    updateSeekUI(
      newTime,
      duration
    );


    if(duration){

      track.currentTime =
        newTime;

    }

  }


  function beginScrub(
    clientX
  ){

    isScrubbing =
      true;


    seekbar.classList.add(
      'scrubbing'
    );


    seekToClientX(
      clientX
    );

  }


  function endScrub(){

    isScrubbing =
      false;


    seekbar.classList.remove(
      'scrubbing'
    );

  }


  // ===================================================
  // MOUSE SEEK
  // ===================================================

  seekbar.addEventListener(
    'mousedown',
    function(e){

      beginScrub(
        e.clientX
      );


      function onMove(ev){

        seekToClientX(
          ev.clientX
        );

      }


      function onUp(){

        endScrub();


        window.removeEventListener(
          'mousemove',
          onMove
        );


        window.removeEventListener(
          'mouseup',
          onUp
        );

      }


      window.addEventListener(
        'mousemove',
        onMove
      );


      window.addEventListener(
        'mouseup',
        onUp
      );

    }
  );


  // ===================================================
  // TOUCH SEEK
  // ===================================================

  seekbar.addEventListener(
    'touchstart',
    function(e){

      beginScrub(
        e.touches[0].clientX
      );

    },
    {
      passive: true
    }
  );


  seekbar.addEventListener(
    'touchmove',
    function(e){

      seekToClientX(
        e.touches[0].clientX
      );

    },
    {
      passive: true
    }
  );


  seekbar.addEventListener(
    'touchend',
    endScrub
  );


  seekbar.addEventListener(
    'touchcancel',
    endScrub
  );


  // ===================================================
  // KEYBOARD SEEK
  // ===================================================

  seekbar.addEventListener(
    'keydown',
    function(e){

      var duration =
        track.duration || 0;


      if(!duration){
        return;
      }


      var step =
        5;


      if(
        e.key === 'ArrowRight' ||
        e.key === 'ArrowUp'
      ){

        track.currentTime =
          Math.min(
            duration,
            track.currentTime + step
          );


        updateSeekUI(
          track.currentTime,
          duration
        );


        e.preventDefault();

      }


      else if(
        e.key === 'ArrowLeft' ||
        e.key === 'ArrowDown'
      ){

        track.currentTime =
          Math.max(
            0,
            track.currentTime - step
          );


        updateSeekUI(
          track.currentTime,
          duration
        );


        e.preventDefault();

      }


      else if(e.key === 'Home'){

        track.currentTime =
          0;


        updateSeekUI(
          0,
          duration
        );


        e.preventDefault();

      }


      else if(e.key === 'End'){

        track.currentTime =
          duration;


        updateSeekUI(
          duration,
          duration
        );


        e.preventDefault();

      }

    }
  );


 

  // ===================================================
  // NAVIGATION DRAWER & ACCESSIBILITY
  // ===================================================

  var menuToggleBtn = document.getElementById('menuToggleBtn');
  var menuCloseBtn = document.getElementById('menuCloseBtn');
  var navDrawer = document.getElementById('navDrawer');
  var navDrawerBackdrop = document.getElementById('navDrawerBackdrop');

  function openMenu(){
    if(!navDrawer) return;
    navDrawer.removeAttribute('hidden');
    void navDrawer.offsetWidth;
    navDrawer.classList.add('active');
    if(navDrawerBackdrop) navDrawerBackdrop.classList.add('active');
    document.body.classList.add('menu-open');
    if(menuToggleBtn){
      menuToggleBtn.setAttribute('aria-expanded', 'true');
      menuToggleBtn.classList.add('menu-open');
    }
    if(menuCloseBtn) menuCloseBtn.focus();
  }

  function closeMenu(){
    if(!navDrawer) return;
    navDrawer.classList.remove('active');
    if(navDrawerBackdrop) navDrawerBackdrop.classList.remove('active');
    document.body.classList.remove('menu-open');
    if(menuToggleBtn){
      menuToggleBtn.setAttribute('aria-expanded', 'false');
      menuToggleBtn.classList.remove('menu-open');
      menuToggleBtn.focus();
    }
    setTimeout(function(){
      if(!navDrawer.classList.contains('active')){
        navDrawer.setAttribute('hidden', '');
      }
    }, 300);
  }

  if(menuToggleBtn){
    menuToggleBtn.addEventListener('click', function(){
      if(navDrawer && navDrawer.classList.contains('active')){
        closeMenu();
      } else {
        openMenu();
      }
    });
  }

  if(menuCloseBtn){
    menuCloseBtn.addEventListener('click', closeMenu);
  }

  if(navDrawerBackdrop){
    navDrawerBackdrop.addEventListener('click', closeMenu);
  }

  // Drawer quick horns
  var drawerHorn1 = document.getElementById('drawerHorn1');
  if(drawerHorn1){
    drawerHorn1.addEventListener('click', function(){
      playHorn(0, this);
    });
  }

  var drawerHorn2 = document.getElementById('drawerHorn2');
  if(drawerHorn2){
    drawerHorn2.addEventListener('click', function(){
      playHorn(1, this);
    });
  }

  var drawerHorn3 = document.getElementById('drawerHorn3');
  if(drawerHorn3){
    drawerHorn3.addEventListener('click', function(){
      playHorn(2, this);
    });
  }

  // ===================================================
  // GLOBAL KEYBOARD SHORTCUTS
  // ===================================================

  window.addEventListener('keydown', function(e){
    var tag = e.target && e.target.tagName;
    if(tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT'){
      return;
    }

    if(e.key === 'Escape'){
      if(navDrawer && navDrawer.classList.contains('active')){
        closeMenu();
        e.preventDefault();
      }
      return;
    }

    // Spacebar to toggle Play / Pause
    if(e.key === ' ' || e.code === 'Space'){
      if(e.target && e.target.tagName === 'BUTTON'){
        return;
      }
      e.preventDefault();
      if(playing){
        stop();
      } else {
        start();
      }
      return;
    }

    // Key 'n' or 'N' for next track
    if((e.key === 'n' || e.key === 'N') && !e.ctrlKey && !e.metaKey && !e.altKey){
      next();
      return;
    }

    // Key 'p' or 'P' for previous track
    if((e.key === 'p' || e.key === 'P') && !e.ctrlKey && !e.metaKey && !e.altKey){
      prev();
      return;
    }

    // Horn keys 1, 2, 3
    if(e.key === '1'){
      var h1 = document.getElementById('hornBtn1');
      playHorn(0, h1);
      return;
    }
    if(e.key === '2'){
      var h2 = document.getElementById('hornBtn2');
      playHorn(1, h2);
      return;
    }
    if(e.key === '3'){
      var h3 = document.getElementById('hornBtn3');
      playHorn(2, h3);
      return;
    }
  });

  // MediaSession Action Handlers
  if('mediaSession' in navigator){
    try {
      navigator.mediaSession.setActionHandler('play', function(){ start(); });
      navigator.mediaSession.setActionHandler('pause', function(){ stop(); });
      navigator.mediaSession.setActionHandler('previoustrack', function(){ prev(); });
      navigator.mediaSession.setActionHandler('nexttrack', function(){ next(); });
      navigator.mediaSession.setActionHandler('seekto', function(details){
        if(details.seekTime !== undefined && track.duration){
          track.currentTime = details.seekTime;
          updateSeekUI(track.currentTime, track.duration);
        }
      });
    } catch(e) {}
  }


  // ===================================================
  // INITIAL LOAD
  // ===================================================

  // Load first track without autoplay.
  // Visitor must press Play.

  loadTrack(
    0,
    false
  );

})();