let defs = {
    "origamiAt":{"u":"dimensionality,adding depth,plans","i":"flatness"},
    "airplaneAt":{"u":"motion,travel","i":"staying put"},
    "envelopeAt":{"u":"contains a message","i":"lack of communication"},
    "sardinesAt":{"u":"too close,cramped,need for space,'group think'","i":"alone,'room to spare',independence"},
    "refractionAt":{"u":"an incorrect perception","i":"an incorrect conclusion"},
    "starsAt":{"u":"far away,higher things,aspirations,fame,fate","i":"'the sky is falling',the unreachable,distant"},
    "mountainAt":{"u":"something that can't be moved ,or changed,'no getting around this'","i":"a small problem"},
    
    "mothAt":{"u":"night,dreaming","i":"insomnia,lack of dreams"},
    "firebirdAt":{"u":"rebirth","i":"stagnation"},
    "spiralAt":{"u":"long term path,covering all ground","i":"trapped,spiraling down"},
    "finger_gunAt":{"u":"playfulness","i":"foolishness,childish"},
    "vineAt":{"u":"climbing,moving upward","i":"dependence,strangling"},
    "triangleAt":{"u":"measurement,planning","i":"mistakes,measure twice: cut once"},
    "flaskAt":{"u":"elixir,medicine","i":"poison,bad medicine"},
    "pencilAt":{"u":"drawing,writing,expression","i":"inexpressiveness"},
    "forestAt":{"u":"nature","i":"wasteland,lost,a parking lot"},
    
    "elephantAt":{"u":"strength,matriarchy","i":"weakness,gop"},
    "coreAt":{"u":"self,stability,centeredness","i":"hollowness,chaos"},
    "orbitAt":{"u":"influence","i":"lack of influence"},
    "lensAt":{"u":"focus,joining","i":"lack of focus,dispersing,distorting"},
    "theoremAt":{"u":"logic,order","i":"irrationality,disorder,falsification"},
    "floppyAt":{"u":"memory,nostalgia,saudade","i":"stuck in the past,obsolescence"},
    "spiderAt":{"u":"venom,a web,a trap,(alarmist)","i":"don't squash it,just take it outside,(mercy)"},
    "shoesAt":{"u":"preparation","i":"unpreparedness"},
    "bee_hiveAt":{"u":"industriousness,sisterhood,'works well with others'","i":"laziness,hive mind"},
    
    "mushroomAt":{"u":"necessary decay,cleaning up","i":"loose ends,unfinished business"},
    "catAt":{"u":"warmth","i":"aloofness"},
    "birdAt":{"u":"perspective","i":"lack of perspective"},
    "functionAt":{"u":"relationship between two factors","i":"functionally unrelated,separate"},
    "almost_hanged_manAt":{"u":"milquetoast,white bread","i":"stockholm syndrome,slow to throw (deserved) shade"},
    //"pageAt":{"u":"communication,news,the written word,'on the same page'","i":"lack of communication"},
    "urnAt":{"u":"capacity","i":"loss of capacity"},
    "venn_diagramAt":{"u":"insight,finding commonalities","i":"ignoring commonalities"},
    "monsterAt":{"u":"anger,irrationality,evil kirk","i":"determination,good kirk"},
    "frameAt":{"u":"a perspective that may be limiting","i":"thinking outside of the usual"},
    
    "pantsAt":{"u":"modesty","i":"lack of modesty"},
    "tvAt":{"u":"entertainment","i":"passivity,superficiality"},
    "duckrabbitAt":{"u":"ambiguity,tolerance","i":"rigidity,intolerance"},
    "fishAt":{"u":"being where you belong,in your element","i":"fish out of water"},
    "cactusAt":{"u":"withstanding drought,enduring","i":"hard to touch,prickly"},
    "umbrellaAt":{"u":"protection","i":"lack of protection"},
    "flameAt":{"u":"something that must be tended,or controlled","i":"out of control,or fading out,'burn out'"},
    "bulbAt":{"u":"insight,idea,'the naked truth'","i":"ignorance"},
    "deadlockAt":{"u":"poor planning,uncooperativeness","i":"sharing,cooperating,planning ahead"},
    
    "mazeAt":{"u":"motivation,a long term goal","i":"lack of goal,loss of motivation,being lost"},
    "transomAt":{"u":"air,flow,security (door closed)","i":"stuffiness,closeted"},
    "cameraAt":{"u":"capturing the present","i":"not being in the present"},
    "bicycleAt":{"u":"travel","i":"being stuck"},
    "cigarettesAt":{"u":"bad habits","i":"ending bad habits"},
    "phoneAt":{"u":"communication","i":"lack of connectedness"},
    "wife_beaterAt":{"u":"poor choices","i":"abuse"},
    "gateAt":{"u":"security,privacy,protection","i":"privilege,exclusion,'gatekeeping'"},
    
    "appleAt":{"u":"nutrition,health","i":"hunger,junk food"},
    "bridgeAt":{"u":"connection,transitions","i":"isolation"},
    "bugAt":{"u":"annoyances,errors","i":"lack of annoyances,or errors"},
    "mailboxAt":{"u":"sending and receiving","i":"withdrawing"},
    "jumpropeAt":{"u":"rhythm,synchronization,play","i":"monotony"},
    "observatoryAt":{"u":"taking in a larger view,outwardness","i":"detachment,narrowness of view,inwardness,'navel gazing'"},
    "heronAt":{"u":"gracefulness","i":"clumsiness"},
    "crazy_wallAt":{"u":"insight from connections","i":"paranoia"},
    
    "houseAt":{"u":"home,self,safety","i":"'homelessness',far from home"},
    "falling_chairAt":{"u":"change,a tipping point","i":"chaotic change,disruption"},
    "birdhouseAt":{"u":"virtue: helping nature,nascent process or thing,nest","i":"empty nest,hubris: why does nature need our help?"},
    "factoryAt":{"u":"work,industriousness,productivity","i":"pollution,tedium,sweatshop,mechanization,dehumanization"},
    "phaseAt":{"u":"change,giving way to","i":"lack of change"},
    "mirrorAt":{"u":"self insight","i":"vanity,self-centeredness"},
    "blind_eyeAt":{"u":"willful ignorance","i":"insight,facing the truth,'eyes wide open'"},
    
    "leafAt":{"u":"nature,purity","i":"decay"},
    "userAt":{"u":"anonymity","i":"exposure,exploitation"},
    "heartAt":{"u":"love","i":"lack of love"},
    "glassAt":{"u":"optimism","i":"pessimism"},
    "prayerAt":{"u":"hopes,wishes","i":"futility"},
    "body_of_waterAt":{"u":"abundance","i":"drought"},
    
    "rainAt":{"u":"precipitate,sudden events","i":"another wet weekend"}, 
    "cloudsAt":{"u":"obscurities,what is hidden","i":"shade"},
    
    "thoughtAt":{"u":"thoughtfulness","i":"obsessive thought"},
    "skullAt":{"u":"death,the end of something","i":"not letting go"},
    "lampAt":{"u":"guidance","i":"lack of guidance,'in the dark'"},
    "chairAt":{"u":"stability","i":"stagnation,inactivity"},
    "cubeAt":{"u":"foundation,solidity","i":"shapelessness,mushiness"},
    "full_cupAt":{"u":"fulfillment","i":"empty,spill: exposure,a lack of something"},
    "mouseAt":{"u":"motion (mental)","i":"stagnation,repetition,carpal tunnel syndrome"},
    "uapAt":{"u":"otherworldliness,wanting to believe","i":"'it's just a weather balloon',incredulity"},
    "flipflopAt":{"u":"lack of conviction","i":"lack of conviction"},
    
    "stairsAt":{"u":"transition,levels","i":"stagnating,failing"},
    "treeAt":{"u":"nature,hierarchy","i":"inversion of order,revolution"},
    "slideAt":{"u":"change of status","i":"downfall"},
    "puzzle_pieceAt":{"u":"need all of the pieces","i":"start at the edges"},
    "ladderAt":{"u":"opportunity","i":"lack of opportunity"},
    "swingAt":{"u":"play,motion","i":"repetition"},
    "unread_spreadAt":{"u":"draw again,go fish,\"UNO!\",","i":"pointless self-reference"},
    "cakeAt":{"u":"reward,a special occasion","i":"gluttony,greed"},
    "piechartAt":{"u":"need for data","i":"ignoring the data"},
    "greenwashingAt":{"u":"deception","i":"exposure of deception"},
    "bribeAt":{"u":"a bad influence,moral weakness","i":"resistance to bad influences,moral strength"},
    "postcardAt":{"u":"a message,wish you were here","i":"forgot the stamp?"},
    "riverAt":{"u":"go with the flow","i":"swept away"},
    "big_fishAt":{"u":"predation,competition,food chain","i":"trickle-down economics,dog-eat-dog"},
    "clickbaitAt":{"u":"morbid curiosity,temptation,an attention trap","i":"don't look,don't fall for it,'nothing to see here'"},
    "two_ingredient_brownieAt":{"u":"too good to be true","i":"too true to be good"},
    "chatAt":{"u":"an interruption","i":"antisocial"},
    "gas_station_shrubberyAt":{"u":"ugly but indestructible","i":"lingering illness"},
    "misheard_lyricsAt":{"u":"'clowns in my coffee','you're so vein'","i" : "'clouds in my coffee','you're so vain'"},
    "plate_tectonicsAt":{"u":"'as above - so below',recycling,karma","i":"'what goes around - comes around'"},
    "negative_spaceAt":{"u":"when what is missing,defines what is present","i":"figure and ground,not obvious"},
    "coneAt":{"u":"cone of uncertainty","i":"light cone,'the big crunch'"},
    "nice_thingsAt":{"u":"this is why,we can't have...","i":"impermanence,it is already broken"},
    "monitorAt":{"u":"heavy,bulky,old-fashioned","i":"eye strain"},
    "fossilAt":{"u":"the past,evolution","i":"the future,extinction"},
    "flat_tireAt":{"u":"a setback,a bumpy ride,out of the race","i":"pause and reflect,spare tire: backup plan"},
    'get_off_my_lawnAt':{"u":"old-man-ism,frowns,shakes fist,grumpiness","i":"all are welcome"},
    'virusAt':{"u":"not quite alive,parasite,spreading quickly","i":"horse paste won't save you"},
    "tissue_boxAt":{"u":"eponym,save a tree,use a handkerchief","i":"wipe away your tears"},
    "bandaidAt":{"u":"eponym,self-help","i":"not a real solution,superficial"},
    "keyholeAt":{"u":"secrets,privacy","i":"lack of privacy"},
    "uphillAt":{"u":"work required,switch to a lower gear","i":"(downhill),over the hill?,slow down,apply breaks"},
    "impossibleAt":{"u":"makes no sense","i":"maybe?"},
    
    "doorAt":{"u":"passing through,new frame of reference","i":"(closed),closed mind,stuffy"}, 
    "sunAt":{"u":"warmth,power","i":"cold,powerless"}, 
    "windowAt":{"u":"provides a view,fresh air","i":"(shades drawn),withdrawal"},
    
    "parking_lotAt":{"u":"wasteland","i":"leave something for a while"},
    "lemonAt":{"u":"sour!","i":"sweet!"},
    "dieAt":{"u":"chance","i":"total chaos or,rigid determinism"},
    "progress_indicatorAt":{"u":"the indeterminate,waiting,patience","i":"loading...,this may take a while"},
    "steering_wheelAt":{"u":"control,direction","i":"illusion of control"},
    "seedAt":{"u":"a beginning,potential,starting point","i":"'as you sow...',false starts,failed startups"},
    "witch_huntAt":{"u":"a deflection","i":"thou who smelt it dealt it"},
    "lighthouseAt":{"u":"guidance,safety","i":"rocky waters ahead,you're on your own"},
    "sailboatAt":{"u":"with or without a goal in mind,effortless","i":"aimless,drifting,adrift"},
    "heirloomAt":{"u":"a legacy,tradition,from the past","i":"overrated,break from the past"},
    "dog_whistleAt":{"u":"coded hate,veiled message","i":"saying the quiet part out loud"},
    "two_car_garageAt":{"u":"space never used,...for its intended purpose","i":"car hole"},
    "racetrackAt":{"u":"rat race,no exit,no finish line,samsara","i":"breaking free,walk away from,off the grid"},
    "entanglementAt":{"u":"lack of independence,correlated distant events","i":"spooky action at a distance"},
    "too_expensive_burgerAt":{"u":"$78!,(but it comes with a bourbon),","i":"sign of societal decline,exaggeration,hyperbole,nonsense"},
    "connect_the_dotsAt":{"u":"obvious conclusion (supposedly),see the bigger picture,make connections","i":"can't see the forest,for the trees"},
    "ghost_in_the_machineAt":{"u":"dualism (metaphorically)","i":"'grandmother cell',expecting too much from a single thing"},
    "conference_room_bAt":{"u":"important decisions,consensus,plans,agreements","i":"tedium,nothing gets done,...but there will be pizza"},
    "waveAt":{"u":"big changes,washed away,following a trend,","i":"bucking a trend"}, 
    "sofaAt":{"u":"cushioned,comfort-centered","i":"lazy,sad guest bed"},
    "talkAt":{"u":"words,talk is cheap","i":"actions speak louder"},
    "pencil_sharpenerAt":{"u":"everything looks like a pencil","i":"what's the point?"},
    "clickAt":{"u":"action,pointing,selecting","i":"inaction,hovering around"},
    "stumpAt":{"u":"quickly gone,a long time to replace","i":"remnant,chopped,hacked,axed"},
    "hammerAt":{"u":"everything looks like a nail","i":"if I had a hammer"},
    "paint_brushAt":{"u":"everything looks like a canvas","i":"the brush off"},
    "medicationAt":{"u":"everything looks like depression","i":"mother's little helper"},
    "paper_bagAt":{"u":"lunch,groceries,beer","i":"never plastic"},
    "shopping_listAt":{"u":"routine,to-do,organization","i":"don't forget the cream"},
    "press_the_buttonAt":{"u":"go ahead... press it,what could go wrong?","i":"release the dogs,launch the missiles,drop the bombs"},
    "screwAt":{"u":"screwed on tight","i":"screwe(d) up,screwed over"},
    "nailAt":{"u":"nailed it","i":"nail in the coffin"},
    "icebergAt":{"u":"mostly below the surface,more than meets the eye","i":"hazard"},
    "mark_rothkoAt":{"u":"imagine the colors","i":"colors fade"},
    "josef_albersAt":{"u":"imagine the colors","i":"homage to the square"},
    "sol_lewittAt":{"u":"imagine black and white","i":"lines in four directions"},
    "compassAt":{"u":"draw a circle","i":"2\u03C0r,full circle,story arc"},
    "vinylAt":{"u":"2 sided,nostalgia,","i":"33.333333..."},
    "pillAt":{"u":"time released,easy to swallow","i":"no - not \"the\" pill,a hard pill to swallow"},
    "power_linesAt":{"u":"power,low vegetation,gravel roads","i":"no climbing,humming"},
    "cubicleAt":{"u":"where does your soul go?","i":"where does your soul go?"},
    "furniture_at_nightAt":{"u":"seen... not clearly","i":"you know where it is"},
    "plastic_owlAt":{"u":"once inspired fear,no longer a deterrent","i":"decoy,paper tiger,straw dog"},
    "indicate_by_pointingAt":{"u":"dogs understand","i":"blame: point the finger"},
    "stone_axeAt":{"u":"old school tech","i":"\"primitive\""},
    "thread_the_needleAt":{"u":"difficult task,low margin for error","i":"easy-peasy"},
    "islandAt":{"u":"stranded,alone,solitary","i":"tourist trap"},
    "walk_it_backAt":{"u":"undo!,undo!,undo!","i":"insincere,regrets,moonwalk"},
    "toy_drumAt":{"i":"full of sound and fury,signifying nothing","u":"bang your own drum, march to the beat, of a different drummer"},
    "aiAt":{"u":"will take away your job (good?),mechanical turk","i":"will take away your job (bad?)"},
    "antsAt":{"u":"busy","i":"may spoil a picnic"},
    "flock_of_birdsAt":{"u":"birds of a feather","i":"migration"},
    "rainbowAt":{"u":"storm's over,(imagine the colors)","i":"sexual anarchy,(wasn't that a band from the 80s?)"},
    "too_many_thingsAt":{"u":"overwhelmed,hard to interpret,recursion could be a problem","i":"reduce,reuse,recycle,time for a yard sale (metaphorically)"},
    "keyAt":{"u":"unlocks something","i":"locks something"},
    "herdAt":{"u":"standing out in the crowd,egoist?","i":"singled out,scapegoat"},
    "alarm_clockAt":{"u":"wake up","i":"insomnia"},
    "checkpointAt":{"u":"crossing a border,what is the purpose of this visit?,papers please","i":"better check yourself,before you wreck yourself"},
    "fish_hookAt":{"u":"caught up,snagged,reeled in","i":"the one that got away"},
    "coat_hangerAt":{"u":"hang ups,hang on","i":"patriarchy"},
    "teak_rat_sculptureAt":{"u":"rat made \"acceptable\",yard sale finds","i":"wire legs will scratch table"},
    "winter_stickAt":{"u":"find your moorings,(after a cold season)","i":"lose your moorings"},
    "dreyAt":{"u":"nest up high","i":"squirrelly"},
    "oocyteAt":{"u":"half of the genes,all of the mitochondria","i":"half of the genes,all of the mitochondria"},
    "bird_cageAt":{"u":"beauty captured","i":"set it free"},
    "blast_radiusAt":{"u":"things that drag on,(outside the radius)","i":"things that end quickly,(inside the radius)"},
    "eyeglassesAt":{"u":"seeing clearly","i":"not seeing clearly"},
    "bacteriophageAt":{"u":"hijacker","i":"take control"},
    "stone_wallAt":{"u":"what else are you going,to do with all those rocks?","i":"sisyphean tasks"},
    "whaleAt":{"u":"and I only am escaped,alone to tell thee","i":"all my means are sane, my motive and my object mad"},
    "free_palletsAt":{"u":"so many uses","i":"destined for the fire pit"},
    "running_with_scissorsAt":{"u":"reckless,scissors cut paper","i":"taking a risk,rock breaks scissors"},
    "tape_dispenserAt":{"u":"bring together","i":"sticky situation"},
    "cabin_air_filterAt":{"u":"always needs to be replaced","i":"breathless,i just wanted an oil change"},
    "scattered_leavesAt":{"u":"winter coming","i":"time to rake"},
    "nowAt":{"u":"already past,can't be held on to","i":"time is short,and now you're even older"},
    "empty_setAt":{"u":"nothing to see here,...move along","i":"a void"},
    "suburbsAt":{"u":"close...,but not too close,away...,but not too far away","i":"leaf blowers"},
    "solar_systemAt":{"u":"heliocentric much?","i":"it's turtles all the way down"},
    "evidenceAt":{"u":"challenging what you believe","i":"confirming what you believe"},
    "holeAt":{"u":"lacuna,fill or patch,something is missing","i":"falling into,going down a rabbit hole"},
    "urgentAt":{"u":"is it really so urgent?","i":"work stress"},
  }
  
  function testCards() {
    let keys = Object.keys(defs), i = 0
    let text = "", err = "", UNUSED = []
    for (; i < 200; i++)
      threecards()
    i = 0
    for (; i < keys.length;i++) {
      printableCard(keys[i])
      text += keys[i].slice(0,-2) + "\n"
      text += defs[keys[i]].u + "\n"
      text += defs[keys[i]].i + "\n"
      if (defs[keys[i]].u.length < 1 || defs[keys[i]].i.length < 1)
        err = "-BLANK DEF"
      else
        err = ""
      console.log(i, keys[i],err)
      if (!atList.includes(keys[i]))
        UNUSED.push(keys[i])
    }
    console.log("Unused defs: "+UNUSED)
    let ta = document.createElement("textarea")
    ta.style.width = "100%"
    ta.style.height = "300px"
    ta.value = text.replace(/_/gm, " ")
    document.body.appendChild(ta);
  }
  
  function showdefs () {
    let list = shortlist, i = 0
    let tsv = "card\tif dealt upright\tif dealt inverted"
    for (; i < list.length; i++) {
      tsv += "\n"
      tsv += list[i].replace(/At/gm,"").replace(/_/gm, " ") + "\t"
      tsv += defs[list[i]].u + "\t"
      tsv += defs[list[i]].i
    }
   
    return tsv
  }
  
  function mobydef () {
      let text = book.replace(/_para_/gm,"").split("\n").join(" ")
      let sentences = text.split(/[.!?]/gm)
      //console.log(sentences)
      return(randomPick(sentences).trim())
  }
  
  function mobyword () {
      let text = book.replace(/_para_/gm,"").split("\n").join(" ")
      let sentences = text.split(/[^\w]/gm)
      //console.log(sentences)
      return(randomPick(sentences).trim())
  }