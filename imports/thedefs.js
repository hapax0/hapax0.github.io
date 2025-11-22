let defs = {
  "origamiAt":{"u":"dimensionality,adding depth,plans","i":"flatness"},
  "airplaneAt":{"u":"motion,travel","i":"staying put"},
  "envelopeAt":{"u":"contains a message","i":"lack of communication"},
  "sardinesAt":{"u":"too close,cramped,need for space,'group think'","i":"alone,'room to spare',independence"},
  "refractionAt":{"u":"an incorrect perception","i":"an incorrect conclusion"},
  "starsAt":{"u":"far away,higher things,aspirations,fame,fate","i":"'the sky is falling',the unreachable,distant"},
  "mountainAt":{"u":"something that can't be moved,or changed,'no getting around this'","i":"a small problem"},
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
  "greenwashingAt":{"u":"deception,(plastics stamped with a number > 2 are rarely recycled)","i":"exposure of deception"},
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
  "press_the_buttonAt":{"u":"go ahead... press it,what could go wrong?,impulsive","i":"release the dogs,launch the missiles,drop the bombs,consequences"},
  "screwAt":{"u":"screwed on tight","i":"screwe(d) up,screwed over"},
  "nailAt":{"u":"nailed it","i":"nail in the coffin"},
  "icebergAt":{"u":"mostly below the surface,more than meets the eye","i":"hazard"},
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
  "whaleAt":{"u":"'and I only am escaped,alone to tell thee'","i":"'all my means are sane, my motive and my object mad'"},
  "free_palletsAt":{"u":"so many uses","i":"destined for the fire pit"},
  "running_with_scissorsAt":{"u":"reckless,scissors cut paper","i":"taking a risk,rock breaks scissors"},
  "tape_dispenserAt":{"u":"bring together","i":"sticky situation"},
  "cabin_air_filterAt":{"u":"always needs to be replaced","i":"breathless,i just wanted an oil change"},
  "scattered_leavesAt":{"u":"winter coming","i":"time to rake"},
  "nowAt":{"u":"(like right now!),already past,can't be held on to","i":"time is short,and now you're even older"},
  "empty_setAt":{"u":"nothing to see here,...move along","i":"a void"},
  "suburbsAt":{"u":"'it's the one on the corner, with the big garage'","i":"'it's the one with the pool'"},
  "solar_systemAt":{"u":"heliocentric much?","i":"it's turtles all the way down"},
  "evidenceAt":{"u":"challenging what you believe","i":"confirming what you believe,confirmation bias"},
  "holeAt":{"u":"lacuna,fill or patch,something is missing","i":"falling into,going down a rabbit hole"},
  "urgentAt":{"u":"is it really so urgent?","i":"work stress"},
  "windAt":{"u":"direction and speed","i":"aimless,lethargy,'hot air'"},
  "pixelAt":{"u":"small size,may have greater depth,atomic","i":"a speck,a nothing,too zoomed in,empty magnification"},
  "gameAt":{"u":"strategy and goal","i":"only a game"},
  "game_pieceAt":{"u":"middle management","i":"only a pawn"},
  "doll_houseAt":{"u":"model","i":"consumerism (metaphorically)"},
  "workAt":{"u":"no time for anything else","i":"retirement: what to do..., with all the spare time?"},
  "your_pointy_elbowsAt":{"u":"get you to the front of the line","i":"pushy (metaphorically)"},
  "divide_by_zeroAt":{"u":"no!,don't do this","i":"undefined"},
  "mona_lisaAt":{"u":"famous much!","i":"enigmatic smile (metaphorically)"},
  "quantum_tunnellingAt":{"u":"'just passing through',when is seems you shouldn't be able to","i":"barriers"},
  "meanAt":{"u":"just average","i":"outlier"},
  "pongAt":{"u":"table tennis (methphorically)","i":"blip...bloop"},
  "le_crépusculeAt":{"u":"twighlight,before dawn,after sunset","i":"deer time"},
  "galleryAt":{"u":"there may be wine and cheese","i":"they ran out of wine and cheese"},
  "one_of_suitsAt":{"u":"privilege,prestige,power suit","i":"clothes make the man,dress for the job you want,anachronism"},
  "regexAt":{"u":"you solved a problem using,a regular expression...","i":"...now you have two problems"},
  "space_intentionally_left_blankAt":{"u":"for office use only","i":"not everything needs an interpretation"},
  "hexAt":{"u":"color of the year?","i":""},
  "missingAt":{"u":"where do they go?","i":"they will be missed"},
  "joineryAt":{"u":"bring together","i":"take apart"},
  "big_cityAt":{"u":"'you can forget all your troubles, forget all your cares'","i":"'my building has every convenience,It's gonna make life easy for me'"},
  "coffee_makerAt":{"u":"mr coffee,simple,'drinkable',not pretentious","i":"french press,so fussy!,bitter,grind your fancy beans much?"},
  "hang_manAt":{"u":"guessing game,spell check","i":"hidden word,hung out to dry"},
  "octopusAt":{"u":"eight arms,mimic,camoflage,shape-shifter","i":"left in a cloud of ink"},
  "reel_to_reelAt":{"u":"analog (metaphorically)","i":"hissing"},
  "flyover_statesAt":{"u":"ignorable,unimportant,boring","i":"self-pity,coastal elites"},
  "gliderAt":{"u":"cellular automata (metaphorically)","i":"'rule following'"},
  "calendarAt":{"u":"today","i":"tomorrow"},
  "snowmanAt":{"u":"gone tomorrow","i":"big oil"},
  "passwordAt":{"u":"does/does not meet,requirements for..., short poem","i":"oversharing,do not share"},
  "incomingAt":{"u":"accept (metaphorically),skeuomorph","i":"decline,spam risk,why can't they just text me?"},
  "tickAt":{"u":"anaplasmosis much?","i":"small troubles,easily confused with a pixel"},
  "shopping_cartAt":{"u":"capitalism (metaphorically)","i":"food desert,senior hours"},
  "tidesAt":{"u":"time and tide wait for no man,pull","i":"ebb and flow,a rising tide lifts all boats,but some boats are more equal than others"},
  "eclipseAt":{"u":"blocking,hiding","i":"dark spot,'down in front!'"},
  "skates_purseAt":{"u":"beach wrack,cast ashore","i":"no coins inside"},
  "invisible_handAt":{"u":"enlightened self-interest,what could go wrong?","i":"'this is the hand...the hand that takes'"},
  "unknown_birdAt":{"u":"you may never know","i":"definitely not a grebe"},
  "dormerAt":{"u":"letting light in","i":"are you sleeping?"},
  "punch_cardAt":{"u":"get with the program, it's written in the cards,punch above your weigh,analytical engine","i":"'born under punches',sucker punch"},
  "geminiAt":{"u":"re-entry,returning","i":"twins"},
  "representationAt":{"u":"not the actual thing","i":"'card' on a card,'it's cards all the way down'"},
  "self_referenceAt":{"u":"it's all about me","i":"'how the sausage gets made'"},
  "upendedAt":{"u":"flip the script","i":"back on your feet"},
  "dogcowAt":{"u":"'iconic',(Susan Kare)","i":"moof!,pixelated"},
  "perfectly_normal_cowboy_bootsAt":{"u":"I repeat... perfectly normal","i":"feeling tall,fascist much?"},
  "soldAt":{"u":"should have charged more","i":"the gallery takes 40%"},
  "topologyAt":{"u":"invariant under deformation,coffee cup equals donut","i":"stretch - but do not cut,donut equals coffee up,(ignoring sprinkles)"},
  "tracesAt":{"u":"tells a story","i":"snowy day,drove away"},
  "endless_shrimpAt":{"u":"be careful what you wish for","i":"there are a finite number of shrimp,so..."},
  "chiralityAt":{"u":"mirror/mirror","i":"flip and rotate all you want,they can't be aligned"},
  "person_man_woman_camera_tvAt":{"u":"easy memory test","i":"cognitive decline served as genius,narcissism"},
  "bag_clipAt":{"u":"'best by' date far in the future","i":"past 'best by' date,more plastic waste"},
  "figure_headAt":{"u": "leader","i":"in name only"},
  "fortAt":{"u": "withstanding,defensive","i":"weakness,vulnerability"},
  "red_flagAt":{"u": "warning,no swimming today","i":"(white flag),surrender"},
  "wrack_lineAt":{"u": "high and dry","i":"cast ashore"},
  "platformAt":{"u": "up a pole","i":"watching over"},
  "covid_testAt":{"u": "negative","i":"positive"},
  "end_of_the_worldAt":{"u": "it probably won't be an asteroid,more likely we cause it","i":"something might survive,not us - but something"},
  "razor_wireAt":{"u": "callous and cruel","i":"blood in the water,red meat for the base"},
  "ingredientsAt":{"u": "magical thinking about food","i":"you are what you eat"},
  "surface_areaAt":{"u": "rotgut (200ml),","i":"4 nips (50ml), same volume,about 33% more plastic"},
  "butterfly_effectAt" :{"u": "small changes to initial conditions,different outcomes","i":"chaos,(deterministic)"},
  "UIAt":{"u": "you don't even notice,if well made","i":"so confusing!"},
  "sketchbookAt":{"u": "holding outlines,brief descriptions,plans and reminders","i":"lacking details"},
  "traffic_lightAt":{"u": "go","i":"stop"},
  "doomscrollingAt":{"u": "take a break","i":"keep feeling bad"},
  "combAt":{"u": "align","i":"part"},
  "groupthinkAt":{"u": "shared beliefs","i":"cult"},
  "copy_and_pasteAt":{"u": "taking shortcuts","i":"mass produced"},
  "heads_or_tailsAt":{"u": "heads","i":"tails"},
  "mobile_appAt":{"u": "so you're ALWAYS connected","i":"never as good as on the desktop"},
  "i_chingAt":{"u": "","i":""},
  "la_sandíaAt":{"u": "La barriga que Juan tenia ere empacho de sandia,(loteria)","i":"La barriga que Juan tenia ere empacho de sandia,(loteria)"},
  "la_campanaAt":{"u": "La camapana y tu debajo,(loteria)","i":"La camapana y tu debajo,(loteria)"},
  "la_peraAt":{"u": "El que espera, desespera,(loteria)","i":"El que espera, desespera,(loteria)"},
  "la_coronaAt":{"u": "El sombrero de los reyes,(loteria)","i":"El sombrero de los reyes,(loteria)"},
  "ice_creamAt":{"u": "happy","i":"disappointed"},
  "tapeAt":{"u": "adhere to","i":"rips when you try to peel it off"},
  "selectionAt":{"u": "axiom of choice","i":"survival of the fittest"},
  "anchorAt":{"u": "anchored","i":"adrift"},
  "cometAt":{"u": "occasional visitor","i":"sky is always cloudy when you try to view it"},
  "snakeAt":{"u": "unfairly maligned","i":"snake in the grass"},
  "jackknifeAt":{"u": "jack of all trades","i":"master of none"},
  "viewfinderAt":{"u": "focus","i":"shoot"},
  "beansAt":{"u": "staple","i":"spill"},
  "redactedAt":{"u": "redacted","i":"the gods are not speaking"},
  "securityAt":{"u": "nothing to hide","i":"no one is looking"},
  "watering_canAt":{"u": "hydration (metaphorically)","i":"klein bottle,'inside versus outside' is meaningless"},
  "routerAt":{"u": "cord cutter","i":"no connection to the internet"},
  "bombAt":{"u": "finished (metaphorically)","i":"the end"},
  "dungeonAt":{"u": "gather the coins","i":"avoid the monsters"},
  "overhead_projectorAt":{"u": "freudian projection (metaphorically)","i":"not me!... you!"},
  "maskAt":{"u": "self-protection","i":"other-protection"},
  "morulaAt":{"u": "8-32 cell pre-implantation embryo,where gap junctions have formed","i":"\"a child\",\"In Jesus' name no more of this, that's worse than devil's madness.\""},
  "peace_symbolAt":{"u": "only a symbol","i":"(what's so funny 'bout),peace\\c love\\c and understanding?"},
  "space_invaderAt":{"u": "we come in peace","i":"oh\\c sure"},
  "kilroyAt":{"u": "...was here","i":"war is hell is other people"},
  "bedAt":{"u": "to sleep","i":"awake"},
  "black_boxAt":{"u": "the surface is all that matters,inference","i":"you think you know what's inside,you do not know what's inside"},
  "fox_and_hareAt":{"u": "seek","i":"evade"},
  "paperclipAt":{"u": "stick together","i":"time is a flat circle"},
  "serverAt":{"u": "but her emails","i":"'to serve man',(it's a cookbook!)"},
  "philosopherAt":{"u": "what has kierkegaard done for me lately?","i":"critique of pure reason... my ass!"},
  "jailAt":{"u": "do not pass go","i":"1% of US population incarcerated"},
  "anosognosiaAt":{"u":"damage you can't see,obvious to others","i":"'everything is fine','I don't see the problem',denial"},
  "stone_of_madnessAt":{"u":"the cause","i":"the cure,(trepanation)"},
  "foundationalismAt":{"u":"'The above proposition, is occasionally useful.'","i":"it's turtles all the way up!"},
  "stageAt":{"u":"all the world's a stage,'I laughed\\c I cried',your 15 minutes of fame","i":"show's over,take a bow,exit stage left"},
  "splashdownAt":{"u":"'wanna come down right now'","i":"'but the little green wheels are following me'"},
  "unhingedAt":{"u":"everything is going to be OK (NOT!)","i":"ignore everything else...,just listen to the voices"},
  "stainAt":{"u":"out damn spot!","i":"should have used a coaster"},
  "tankAt":{"u":"liberation","i":"invasion"},
  "empty_tableAt":{"u":"arrived too early,asynchronous (metaphorically)","i":"arrived too late"},
  "idling_black_pickup_with_tinted_windowsAt":{"u":"compensation","i":"'you might be in a cult'"},
  "fallen_idolAt":{"u":"losing my religion","i":"fall from grace"},
  "empty_signifierAt":{"u":"<something> <something> <something>\\c,signifying nothing","i":"at a loss for words"},
  "field_guideAt":{"u":"special interests","i":"to cram for (metaphorically)"},
  "P_versus_NPAt":{"u":"unlikely things","i":"some things just take (a lot of) time"},
  "no_longer_supportedAt":{"u":"obsolete,e-waste (metaphorically)","i":"can't bring yourself to throw it away,lives in your junk draw (metaphorically)"},
  "traveling_salesmanAt":{"u":"efficiency","i":"no plan (metaphorically)"},
  "ouroborosAt":{"u":"self-centered","i":"'no step on snek!'"},
  "late_stage_capitalismAt":{"u":"the world was destroyed but, at least my package arrived the next day","i":"this card sponsered by...,(he hates when you call it twitter)"},
  "holy_days_of_obligationAt":{"u":"","i":""},
  "stay_in_your_laneAt":{"u":"rule-following","i":"over-cautious"},
  "lazy_evaluationAt":{"u":"only as needed","i":"just in time"},
  "too_far_awayAt":{"u":"'look like specks!'","i":"should have zoomed in (metaphorically)"},
  "palimpsestAt":{"u":"erased,reused","i":"trace of the past,showing through"},
  "homunculus_has_left_the_buildingAt":{"u":"gone baby gone,(Cartesian theater)","i":"was never in there"},
  "mixtapeAt":{"u":"ego","i":"insecurity"},
  "magic_8_ballAt":{"u":"","i":""},
  "psychicAt":{"u":"as was foretold","i":"que sera sera"},
  "bothsidesismAt":{"u":"fear of being accused of bias,goodbye to facts and evidence","i":"fair and balanced - my ass,'next we'll hear from a flat-earther'"},
//"La_macetaAt":{"u":"El que nace pa'maceta, no sale del corredor.,(loteria)","i":"El que nace pa'maceta, no sale del corredor.,(loteria)"}
  "sigilAt":{"u":"lesser angels","i":"inner demons"},
  "swimming_poolAt":{"u":"thrown into the deep end","i":"staying at the shallow end"},
  "you_make_a_better_door_than_a_windowAt":{"u":"you are a solid citizen,(some would say dense),your lifetime achievement award came early","i":"transparency"},
  "trope_they_re_shutting_down_the_x_filesAt":{"u":"...and they were just about to expose the conspiracy","i":"...but\\c we're getting the band back together"},
  "lithomancyAt":{"u":"toss the bones","i":"read the stones"},
  "red_shirtAt":{"u":"sacrificial lamb","i":"might survive the away mission"},
  //"red_hatAt":{"u":"dunce cap","i":"self-identifies as idiot"},
  "pareidoliaAt":{"u":"I can see HIM! ...can't you?","i":"no\\c looks random to me"},
  "koanAt":{"u":"what is the sound of one hand clapping?","i":"if a tree falls in the forest and no living thing is around,what sound does it make?"},
  "counterfactualAt":{"u":"\"If I was where I would be,\Then I'd be where I am not,\Here I am where I must be,\Where I would be\\c I can not\"","i":"\"I don't know half of you half as well as I should like; and I like less than half of you half as well as you deserve.\""},
  "synecdocheAt":{"u":"part for the whole","i":"whole for the part"},
  "transducerAt":{"u":"translator","i":"man in the middle"},

  "frogAt":{"u":"\"this is fine\"","i":"\"this is fine\""},
  "crazy_cat_ladyAt":{"u":"will not vote for you","i":"will vote for your opponent"},
  "gray_areaAt":{"u":"easy decisions","i":"difficult decisions"},
  "pat_yourself_on_the_backAt":{"u":"well done,you deserve it","i":"tell us all about your \"amazing\" accomplishment,blowhard"},
  "asteriskAt":{"u":"wildcard","i":"(*footnote)"},
  "night_drivingAt":{"u":"very late or very early","i":"don't nod off"},
  "full_moonAt":{"u":"","i":""},
  "auroraAt":{"u":"borealis,the sky is always overcast when 'visible' at your latitude","i":"australis"},
  "meteor_showerAt":{"u":"one or two per minute","i":"four or five per hour,light polution (metaphorically)"},
  "deer_in_the_headlightsAt":{"u":"frozen (metaphorically)","i":"get out of the way!"},
  "colanderAt":{"u":"separation","i":"high and dry,feeling drained"},
  "house_on_fireAt":{"u":"unstoppable","i":"vulnerable"},
  "pants_on_fireAt":{"u":"liar liar","i":"fact checked"},
  "soundingsAt":{"u":"navigation,hidden depths","i":"sunken (metaphorically)"},
  "up_lateAt":{"u":"'I'll sleep when I'm dead'","i":"up early?"},
  "a_trapAt":{"u":"don't fall for it","i":"bait and switch"},
  "accidentAt":{"u":"everything happens for a reason","i":"everything happens for no reason"},
  "acrophobiaAt":{"u":"at you peak","i":"let down"},
  "flying_dreamAt":{"u":"above it all","i":"down to earth"},
  "like_pulling_teethAt":{"u":"reticence","i":"please shut up!"},
  "agoraphobiaAt":{"u":"safe inside","i":"outside your comfort zone (metaphorically)"},
  "like_and_followAt":{"u":"I \"liked\" it but I didn't \"like\" it","i":"\u{2605}\u{272b}\u{272b}\u{272b}\u{272b},if I could\\c I would give it zero stars"},
  "ramenAt":{"u":"dorm room feast","i":"slurp!"},
  "scratchy_sweaterAt":{"u":"you have to wear it because your aunt Thelma made it by hand, just for you","i":"so itchy!,(looks suspiciously like ramen)"},
  "automatic_writingAt":{"u":"receiving the messages","i":"transmission transcription"},
  "did_you_even_read_my_email_q_At":{"u":"self-importance","i":"uh\\c no"},
  "bathtub_madonnaAt":{"u":"backyard fatima","i":"like a virgin"},
  "jogo_do_bichoAt":{"u":"número perdido","i":"perdedor\\c perdedor\\c perdedor"},
  "sunporchAt":{"u":"escapism (metaphorically)","i":"retreat"},
  "burdenAt":{"u":"carrying a load","i":"unburdened"},
  "double_slitAt":{"u":"particle [wave]","i":"[particle] wave"},
  "bobberAt":{"u":"which way is up?","i":"pulled down"},
  "rear_viewAt":{"u":"only used for backing up","i":"eyes straight ahead"},
  "dyslexiaAt":{"u":"difficult to read (metaphorically)","i":"\"read the room\""},
  "hunter_bidens_laptopAt":{"u":"falling flat,(see \"But her emails!\")","i":"a MacGuffin"},
  "mass_shootingAt":{"u":"every day events","i":"hopes and prayers,too soon to talk about how to fix this"},
  "artspeakAt":{"u":"illuminating","i":"obscuring"},
  "sanewashingAt":{"u":"interpreting/elevating/legitimizing abnormal gibberish as if it were coherent thought","i":"it is what is is,garbage in\\c garbage out"},
  "nimbyAt":{"u":"not actually in your back yard,(unless there's an easement)","i":"use your clout to get it moved to a poor neighborhood"},
  "bomberAt":{"u":"foreign policy (metaphorically)","i":"stealth"},
  "concept_of_a_planAt":{"u":"methinks you have no plan","i":"stalling tactic"},
  "flowAt":{"u":"absorption","i":"locked in"},
  "people_are_sayingAt":{"u":"hearsay","i":"repeating lies"},
  "swimming_in_circlesAt":{"u":"round and round","i":"not getting anywhere,bait ball (metaphorically)"},
  "tidally_lockedAt":{"u":"always showing the same face,same old same old","i":"one rotation per orbit"},
  "red_lineAt":{"u":"can never cross this","i":"can always re-draw this"},
  "banned_bookAt":{"u":"taliban much?,brown shirt much?","i":"always boosts sales and readership"},
  "convenience_store_sushiAt":{"u":"things to avoid","i":"oh my god\\c no!"},
  "traumaAt":{"u":"'forehead'? more like fivehead!","i":"words can hurt too"},
  "cone_of_shameAt":{"u":"it's all fun and games until someone ends up with a cone on their head","i":"oh the shame of it!"},
  "your_better_halfAt":{"u":"there's no competition","i":"a house divided"},
  "cat_doorAt":{"u":"departures","i":"arriavals"},
  "synapseAt":{"u":"pre","i":"post"},
  "tree_hugging_communistAt":{"u":"\u{1F5F9}  likes trees ,\u{1F5F9} gives hugs,\u{1F5F9} communist","i":"eco-terrorist (metaphorically)"},
  "reciprocalAt":{"u":"reciprocity in all things","i":"opposite day"},
  "snailAt":{"u":"slow,sluggish,(see SPIRAL)","i":"coming out of your shell,(see CHIRALITY)"},
  "scotomaAt":{"u":"blind spot,(see REDACTED\\c ANOSOGNOSIA)","i":"both eyes open"},
  "local_maximaAt":{"u":"think you've peaked?,(maxima)","i":"can't go any lower?,(minima)"},
  "washing_machineAt":{"u":"it all comes out in the wash","i":"dirty laundry (metaphorically)"},
  "cellular_automataAt":{"u":"follow the rules,predictable","i":"input\\output,(rule 110 is Turing complete)"},
  "voidAt":{"u":"","i":""},
  "patriarchyAt":{"u":"fight the power","i":"abolish marriage"},
  "liberal_eliteAt":{"u":"out of touch with 'real' america,(see FLYOVER STATES),where were the jewish space lasers when we needed them?","i":"my latte is getting cold \u{2639},snowflake \u{2744}"},
  "i_apos_m_with_stupidAt":{"u":"you are so intellegent and well informed, (and fankly\\c good-looking)...","i":"...not so much"},
  "hurricaneAt":{"u":"disaster (repeated) (metaphorically),(see CONE OF UNCERTAINTY)","i":"\"share with me a common disaster\""},
  "not_my_circus_not_my_monkeysAt":{"u":"\"I really don't care\\c do you?\"","i":"desensitized (metaphorically)"},
  "price_of_a_dozen_eggsAt":{"u":"a very very very horrible number","i":"things that look worse in binary"},
  "gigoAt":{"u":"garbage in/garbage out","i":"trash half full/trash half empty,(it's trash all the way down)"},
  "bicycles_are_everywhereAt":{"u":"watch out (metaphorically)","i":"that can't be right,there'd be no room to move"},
  "razorAt":{"u":"\"Never attribute to malice that which can be adequately explained by stupidity\"","i":"a close shave (metaphorically)"},
  "wind_chimesAt":{"u":"not music,not noise","i":"a few more windy days and you will become silent"},
  "zero_knowledge_proofAt":{"u":"know you know","i":"don't know what you know"},
  "resistanceAt":{"u":"vive la","i":"V / I"},
  "misprintAt":{"u":"misaligned","i":"quality failure"},
  "gone_silentAt":{"u":"say no more","i":"loose lips,silence is complicity,snitches get stitches"},
  "snitches_get_stitchesAt":{"u":"veiled threats (metaphorically)","i":"compliance"},
  "kioskAt":{"u":"where you're at","i":"where you're going"},
  "trash_dayAt":{"u":"one bin week?,small reckonings","i":"two bin week?,delayed because of Monday holiday"},
  "bokeh_At":{"u":"soft focus","i":"atmosphere"},
  "casseroleAt":{"u":"comfort food","i":"kraft dinner (metaphorically)"},
  "mittensAt":{"u":"protection","i":"lack of dexterity,(see SCRATCHY SWEATER)"},
  "on_the_spectrumAt":{"u":"divergent","i":"typical"},
  "trees_on_the_hillsideAt":{"u":"long shadows","i":"difficult terrain"},
  "buffleheadsAt":{"u":"hard to count","i":"they were there a second ago"},
  "enlightenmentAt":{"u":"if you meet the blind turtle on the road\\c kill him","i":"missed it...,try again"},
  "tail_wagging_the_dogAt":{"u":"inversion of power,a distraction","i":"who's a good boy?, who is?,you is!"},
  "check_engine_lightAt":{"u":"service needed","i":"TPMS is next,See CABIN AIR FILTER"},
  "dnaAt":{"u":"ontogeny recapitulates phylogeny","i":"The evil that men do lives after them; the good is oft interred with their bones"},
  "participationAt":{"u":"you did your best","i":"old-man-yells-at-cloud issue"},
  "comedianAt":{"u":"\"but\\c is it art?\"","i":"who's laughing now?,i'll give you something to laugh about!,laughing all the way to the bank!"},
  "butterAt":{"u":"salted","i":"unsalted"},
  "infinityAt":{"u":"countable","i":"uncountable"},
  "palindromeAt":{"u":"a man a plan a canal - greenland?","i":"backasswards"},
  "propagandaAt":{"u":"\"free speech\" without fact-checking","i":"like yelling \"fire\" in a crowded democracy"},
  "uphill_both_waysAt":{"u":"tales from childhood","i":"old-man-isms"},
  "render_harmlessAt":{"u":"ACROSS - 6 letters","i":"... next\\c carefully lift the cup and paper at the same time..."},
  "toilet_paperAt":{"u":"how good people hang it","i":"chaos,(how people with cats hang it)"},
  "finger_trickAt":{"u":"amaze small children","i":"frighten small children"},
  "art_promptAt":{"u":"do you need one?","i":"something like a clue"},
  "surveillance_capitalismAt":{"u":"your data is for sale","i":"disable your ad tracking ID"},
  "blue_screen_of_deathAt":{"u":"happens to us all","i":"is this the year of the linux desktop?"},
  "starAt":{"u":"catch a falling star,and put it in your pocket","i":"never let it fade away,save if for a rainy day"},
  "asciiAt":{"u":"declare (metaphorically)","i":"console.log(floppy)"},
  "bending_the_knee_kissing_the_ringAt":{"u":"capitulation much?","i":"no compromise"},
  "inner_earAt":{"u":"self-awareness","i":"guided by voices"},
  "under_thumbAt":{"u":"feed the hand that bites","i":"knuckle under"},
  "didn_apos_t_finish_her_drinkAt":{"u":"got a hunch about 'the case' and ran off in a hurry","i":"a waste"},
  "rentre_chez_toi_com_ta_mère_a_fait_des_gaufresAt":{"u":"not feeling wanted","i":"hungry?,inconsistent"},
  "babylonAt":{"u":"failed efforts","i":"why we can't have nice things"},
  "spinelessAt":{"u":"jellyfish\\c sycophant\\c toady\\c flunky\\c bootlicker","i":"doesn't gravity suck?"},
  "newspeakAt":{"u":"doubleplusgood","i":"doubleplusungood"},
  "rothkoAt":{"u":"color over color","i":"colors fade"},
  /*"albersAt":{"u":"nested","i":"homage to the square"},*/
  "sol_lewittAt":{"u":"concept","i":"implementation,lines in four directions"},
  "water_cycleAt":{"u":"evaporation,condensation,precipitation","i":"ignoring the science"},
  "erasedAt":{"u":"bye-bye","i":"fade out,phased out"},
  "toaster_falling_into_bathtubAt":{"u":"hope there's a ground fault circuit interrupter","i":"why would anyone have a toaster in their bathroom?"},
  "lobotomyAt":{"u":"detached (metaphorically)","i":"executive functions... who needs 'em?"},
  "pitted_olive_that_yet_has_a_pitAt":{"u":"surprised and disappointed","i":"trust no one"},
  "mulletAt":{"u":"Shiny chrome rims never rusted,Driving through the tunnel, you might get busted","i":"You're coming off like you're Van Damme.,You've got Kenny G\\c in your Trans Am"},
  "disco_ballAt":{"u":"flashy","i":"'Everybody in the discotheque - I hate'"},
  "periodic_tableAt":{"u":"","i":""},
  "world_upside_downAt":{"u":"topsy-turvy","i":"nuh uh"},
  "fallout_shelterAt":{"u":"consequences","i":"hideaway"},
  "got_your_noseAt":{"u":"will give it back","i":"(swallows nose)"},
  "image_not_foundAt":{"u":"404 (metaphorically)","i":"<alt text here>"},
  "credit_cardAt":{"u":"what's in you wallet?","i":"debit (metaphorically)"},
  "tearsAt":{"u":"of joy","i":"of sorrow"},
  "flashlightAt":{"u":"search","i":"illuminate"},
  "climate_changeAt":{"u":"we are so f*cked!","i":"thing we ignore,things we won't face,things we won't solve"},
  "need_helpAt":{"u":"\"rescue me\"","i":"\"rescue me\""},
  "no_such_thing_as_a_free_lunchAt":{"u":"\"let them eat cake\"","i":"\"eat the rich\""},
  "cul_de_sacAt":{"u":"no outlet","i":"no progress"},
  "streetlight_effectAt":{"u":"i know it's here somewhere","i":"where the light is"},
  "fig_leafAt":{"u":"coverup","i":"hides nothing "},
  "pooAt":{"u":"impolite","i":"don't tread on me"},
  "salamanderAt":{"u":"under a log,under a rock","i":"slippery (metaphorically)"},
  "mute_swanAt":{"u":"koan: what is the call of the mute swan?","i":"silence"},
  "trope_detective_pursuing_suspectAt":{"u":"... into a maze of shipping containers","i":"she was supposed to wait for backup"},
  "fridgeAt":{"u":"stay cool","i":"if you want it cooler\\c, do you dial the knob up or down?"},
  "life_cycleAt":{"u":"what goes around\\c comes around","i":"\"circle of life\""},
  "brain_wormAt":{"u":"anti science","i":"nothing to do with an ear worm"},
  "light_switchAt":{"u":"aha!","i":"have you tried turning it off and on again?"},
  "thumbs_upAt":{"u":"up","i":"down"},
  "square_peg_in_a_round_holeAt":{"u":"we can make this work","i":"clearly it fits,I don't see the problem"},
  "taintAt":{"u":"corrupt","i":"blotch (metaphorically)"},
  "fifty_minute_hourAt":{"u":"how does that make you feel?","i":"therapy couch (metaphorically)"},
   "tarjetas_rojasAt":{"u":"when ICE comes knocking","i":"know your rights"},
   "victoryAt":{"u":"\"peace for our time\"","i":"\"nixon's the one\""},
   "algorithmAt":{"u":"procedural","i":"heuristic,(rule of thumb)"},
   "chainsawAt":{"u":"lunatics wielding these should be avoided","i":"tax cuts for the wealthy,service cuts for everyone else"},
   "right_over_my_headAt":{"u":"huh?","i":"\"adult books\\c,I don't understand\\c,Jackie Susann\""},
   "unpluggedAt":{"u":"self-preservation","i":"isolationist"},
   "don_apos_t_happy_com_be_worryAt":{"u":"let's turn that frown up side down","i":"you ok?"},
   "phrenologyAt":{"u":"bumps ahead","i":"take your lumps"},
   "ishihara_testAt":{"u":"color by numbers","i":"synesthesia (metaphorically)"},
   "mid_century_modernAt":{"u":"ah\\c the good ole days","i":"regression"},
   "off_with_their_headsAt":{"u":"they're not using them anyway","i":"\"heads will roll\""},
   "knife_drawerAt":{"u":"need some kind of tray in there","i":"sharp!,be careful!"},
   "reactorAt":{"u":"don't have a melt down","i":"situation critical"},
   "optimal_dishwasher_loadingAt":{"u":"do not pre-rinse","i":"small items in top tray"},
   "ikebanaAt":{"u":"late bloomer","i":"more like ike/bad/a"},
   "canceledAt":{"u":"history is written by the victors","i":"say no more"},
   "iglooAt":{"u":"cold outside,warm inside","i":"under the dome"},
   "knock_knockAt":{"u":"who's there?,<insert bad joke>","i":"there's nobody home"},
   "wheel_of_consumptionAt":{"u":"note to self:,\"re-order 500 pc bag of,diposable plastic dental floss picks\"","i":"unexpected boycotts"},
   "volvelleAt":{"u":"dial it up a notch","i":"turn by turn"},
   "disruptorAt":{"u":"mess things up (metaphorically)","i":"cut the YELLOW wire!"},
   "votiveAt":{"u":"offering (metaphorically)","i":"extinguished"},
   "color_modelAt":{"u":"qualia much?","i":"knowledge is power"},
   "rock_paper_scissorsAt":{"u":"no win situation","i":"don't have a plurale tantum!"},
   "dissatisfactionAt":{"u":"always something","i":"never enough"},
   "empty_roomsAt":{"u":"fleeting memories","i":"past is prologue"},
   "calculatorAt":{"u":"basic math","i":"juvenile"},
   "symbolic_fencingAt":{"u":"(symbolically)","i":"\"barrier\""},
   "disappearedAt":{"u":"a noun and a verb","i":"you could be next"},
   "gunAt":{"u":"not loaded","i":"loaded"},
   "elementaryAt":{"u":"basic","i":"education"},
   "cancerAt":{"u":"serious as a heart attack","i":"something eating you?"},
   "hands_offAt":{"u":"power grab,hands where I can see them,keep your hands to yourself,MYOB","i":"idle hands are the devil's workshop"},
   "spell_checkAt":{"u":"mistaeks were made","i":"nobodies perfect"},
    "tin_foil_hatAt":{"u":"everyone's allowed to have a couple of crazy ideas","i":"just don't start a death cult"},
    "no_kingsAt":{"u":"who died and left you in charge?","i":"no major arcana"},
    "reading_tea_leavesAt":{"u":"","i":""},
    "turntableAt":{"u":"something's going around","i":"spiraling in, never reaching the center"},
    "printerAt":{"u":"save file to USB,good luck with that", "i":"tray 1 is empty"},
    "palm_readingAt":{"u":"gimme five,up high,down low,too slow", "i":"what is the sound of one palm clapping?"},
    "illusion_of_controlAt":{"u":"go with the flow,(see 'THE COMB')","i":"swimming against the tide"},
    "is_he_dead_yet_q_At":{"u":"many people are asking","i":"just making sure"},
    "slide_ruleAt":{"u":"computer","i":"obsolete: \"one who computes\""},
    "numerologyAt":{"u":"your lucky numbers","i":"number theory"},
    "key_exchangeAt":{"u":"private/public,(Diffie-Hellman)","i":"\"Oh! they exchanged their hearts in the dark.,In the womb they called for a song.,For a joyful kiss.\""},
    "krebs_cycleAt":{"u":"circle your wagons","i":"rounding rules"},
    "where_your_sleeves_meet_your_waistbandAt":{"u":"no man's land","i":"border crossing"},
    "tacoAt":{"u":"saddle point (metaphorically)","i":"pli selon pli,fold,(see FLIPFLOP)"},
    "small_handsAt":{"u":"they're just a little too small","i":"whiny,petty,ignorant,humorless,cruel"},
    "el_viaje_del_héroeAt":{"u":"on your way","i":"nos vemos en la chancla"},
    "timelineAt":{"u":"let's not do that again!","i":"history is written by..."},
    "sisyphusAt":{"u":"no mow may,(june... july... august)","i":"futility"},
    "number_lineAt":{"u":"\u{211D}","i":"\u{2115}"},
    "coordinatesAt":{"u":"\u{2102}","i":"cities of the plain"},
    "subscription_requiredAt":{"u":"your support makes this possible","i":"also\\c could you please disable your ad blocker?"},
    "cookie_policyAt":{"u":"acceptance","i":"rejection"},
    "captchaAt":{"u":"\u{1F5f9} I am not a robot","i":"\u{2610} I am not a robot"},
    "story_diagramAt":{"u":"who dunnit?","i":"I've seen this one before"},
    "zodiacAt":{"u":"what's your sign","i":"I've seen this one before"},
    "don_apos_t_care_about_why_you_switched_browsersAt":{"u":"need to know - not!","i":"I really don't care\\c do you?"},
    "garden_pathAt":{"u":"","i":""},
    "no_signalAt":{"u":"ensure the correct input source is selected,(metaphorically)","i":"1. return all cards to the deck,2. reshuffle the deck,3. wait at least 60 seconds,4. layout a new spread"},
    "meridiansAt":{"u":"connect the dots","i":"point and counterpoint"},
    "quantity_has_a_quality_all_its_ownAt":{"u":"harder\\c better\\c faster\\c etc,","i":"more better-er"},
    "metalAt":{"u":"your favorite band","i":"head banger"},
    "meditationAt":{"u":"meditate on THIS!","i":"you have achieved enlightenment and may stop now"},
    "matrix_multiplicationAt":{"u":"new hairstyle","i":"bad haircut"},
    "mary_apos_s_roomAt":{"u":"Mary knows #FF0001\\c #EF0000\\c #FF0100\\c but not #FF0000. One day...","i":"\u{042F}\u{018E}\u{15E1}\u{042F}UM,\u{042F}\u{018E}\u{15E1}\u{042F}UM,\u{042F}\u{018E}\u{15E1}\u{042F}UM"},
    "chinese_roomAt":{"u":"manipulative (metaphorically)","i":"look it up!"},
    "day_dayAt":{"u":"Koan: what day of the week is it when you're retired?","i":"Friday? No\\c wait\\c Saturday?"},
    "stygian_blueAt":{"u":"Stare at the black X for 25 seconds.,Then look at the white X.","i":"colors not seen in nature"},
    "special_interestsAt":{"u":"","i":""},
    "what_is_a_concentration_camp_q_At":{"u":"Alex\\c I'll take \"Things you don't associate with a democracy\" for $200.","i":"Alex\\c I'll take \"Smells like fascism\" for $400."},
    "schrödinger_apos_s_catAt":{"u":"superposition","i":"dead,(Did you HAVE to look?)"},
    "_3DAt":{"u":"collect them all,free viewing glasses enclosed","i":"No theatre patrons will be seated after the start of the reading"},
    "vitruvian_manAt":{"u":"in proportion","i":"out of proportion"},
    "backPatternAt":{"u":"this card has no face","i":"this card cannot be flipped"},
    "entscheidungsproblemAt":{"u":"haben sie ein problem?","i":"change of state,read/write,left/right"},
    "hidden_variablesAt":{"u":"even fools are thought wise if they keep silent","i":"faintest of hopes,veiled lies,deceptions"},
    "toy_soldierAt":{"u":"not a real soldier,a real toy","i":"not a real toy soldier,a drawing of a toy soldier"},
    "doom_on_a_tarot_cardAt":{"u":"to hack (metaphorically)","i":"intruder!"},
    "requirementsAt":{"u":"judgemental","i":"I\'m good enough\\c,I\'m smart enough\\c,and doggone it\\c,people like me."},
    "marginaliaAt":{"u":"off to the side","i":"day dreaming"},
    "schröder_apos_s_staircaseAt":{"u":"straight or flipped","i":"kayak\\c deed\\c rotator\\c noon\\c racecar"},
    "nonexistent_filesAt":{"u":"can we just stop talking about these now?","i":"files? what files?"},
    "exitAt":{"u":"where do you get off?","i":"long hauls,roadside attractions"},
    "fertilityAt":{"u":"give birth to","i":"ICSI (metaphorically)"},
    "cognitive_dissonanceAt":{"u":"We will release the files.,There are no files.,I'm not in the files.,The files are fake.","i":"\“I’ve known Jeff for 15 years. Terrific guy\”,\"I wasn’t a big fan of Jeffrey Epstein\\c that I can tell you.\""},
    "big_footAt":{"u":"crypto bro","i":"hairway to steven"},
    "sensitiveAt":{"u":"nothing to see here","i":"I'm sensitive and I'd like to stay that way"},
    "contentAt":{"u":"did you forget something?","i":"all work and no play"},
    "magnetAt":{"u":"attractive","i":"polarizing"},
    "horse_shoeAt":{"u":"derivative","i":"lucky"},
    "pre_hyph_complianceAt":{"u":"cost of doing business,so sue me (not)","i":"How To Use Cowardice In a Sentence?"},
    "indeterminate_of_swordsAt":{"u":"to the point","i":"stabby\\c stabby"},
    "ten_of_ironingAt":{"u":"things going smoothly","i":"wrinkles"},
    "ten_of_cuisenaire_rodsAt":{"u":"equivalence","i":"analog,wood,solid"},
    "anendophasiaAt":{"u":"mono(logue) no aware","i":"chatty"},
    "ironing_boardAt":{"u":"map to flat","i":"transformations"},
    "reductionAt":{"u":"one into another","i":"reductiō,there and back again"},
    "turbulenceAt":{"i":"There is no pilot., You are not alone., Standby.","u":"Place your tray tables in their upright\\c locked position."},
    "lureAt":{"u":"catch as catch can","i":"hook\\c line and sinker"},
    "promisesAt":{"u":"may come true","i":"NO mowing ahead, NO left lane closure, disappointments"},
    "have_we_learned_nothing_yet_q_At":{"u":"yes\\c we haven't","i":"no\\c we haven't"},
    "densityAt":{"u":"Who would win in a fight:, Frankenstein or Wittgenstein?","i":"Who would win in a fight:, Mary Shelley or Herman Melville?"},
    "picture_thisAt":{"u":"controlling the narrative","i":"controlled by the narrative"},
    "draw_your_own_cardAt":{"u":"<your text here>","i":"<your text here>"},
    "orreryAt":{"u":"where things are","i":"where things will be"},
    "crossword_puzzleAt":{"u":"across or down","i":"get a clue"},
    "last_matchAt":{"u":"slim chance","i":"\u{1F3B5} F-I-R-E-I-N-C-A-I-R-O"},
    "constancyAt":{"u":"the squares A and B are the same shade of gray","i":"the same\\c but not the same"},
    "crossroadsAt":{"u":"decisions","i":"disorientated"},
    "burnerAt":{"u":"iron in the fire","i":"noncommittal"},
    "tofuAt":{"u":"bland (allegedly)","i":"\"I am what I am\""},
    "triple_deckerAt":{"u":"stacked","i":"(see THE TOWER)"},
    "acAt":{"u":"chill out","i":"lose your cool"},
    "untitled_drawing_appAt":{"u":"self-portrait,(see SELF-REFERENCE)","i":"\"Why spend 5 minutes drawing something when you can spend 5 hours|days coding it?\""},
    "relicAt":{"u":"","i":""},
    "undoingAt":{"u":"one hand washes the other","i":"vicious circle"},
    "narcissusAt":{"u":"self-assembly","i":"self-sufficient"},
    "halfCardsAt":{"u":"half a loaf is ...","i":"half-hearted,half-baked,half-assed"},
    "lubbersAt":{"u":"boating is not for us","i":"we prefer dry land"},
    "sufferingAt":{"u":"...caused by ignorance and 'attachment'","i":"(see PAT YOURSELF ON THE BACK)"},
    "six_of_heartsAt":{"u":"Kobayashi Maru","i":"\"the cards you were dealt\""},
    "mtg_cardAt":{"u":"gather","i":"play"},
    "flash_cardAt":{"u":"rote","i":"flash in the pan"},
    "bubbleAt":{"u":"things that go away","i":"pop!"},
    "wokeAt":{"u":"project all of you faux rage, onto this orange blob.,feeling better?","i":"Um\\c actually\\c there's nothing wrong with, caring about diversity\\c equity and inclusion."},
    "lubbers_sp__lp_alt_rp_At":{"u":"strength in numbers","i":"vegetarians"},
    "free_readingAt":{"u":"free as in free","i":"fine print"},
    "spiral_boundAt":{"u":"joined at the hip","i":"strange bedfellows"},
    "hierophantAt":{"u":"knowledgeable guide (ackchyually)","i":"share what you know"},
    "four_color_theoremAt":{"u":"enough","i":"is enough"},
    "knot_theoryAt":{"u":"unbound","i":"tie yourself up in knots"},
    "evAt":{"u":"charge","i":"range anxiety"},
    "vaccineAt":{"u":"advice from a doctor","i":"advice from a quack"},
    "trompe_l_apos_oeilAt":{"u":"","i":""},
    "load_cellAt":{"u":"heavy","i":"forced"},
    "eye_contactAt":{"u":"never put anything smaller than your elbow in your eye","i":"don't blink"},
    "stochastic_parrotAt":{"u":"repeate after me...","i":"mirror (metaphorically)"},
    "goedkeuringskrulAt":{"u":"approval","i":"gesundheit"},
    "datura_stramoniumAt":{"u":"poison (metaphorically)","i":"thorny issues"},
     "_19th_century_capitalism_themed_cardAt":{"u":"manifest destiny,gunboat diplomacy,american exceptionalism,laissez-faire\\c qu'est-ce que c'est?",
      "i":"jingoism,smallpox,exploitation,slavery"},
    "card_tableAt":{"u":"all laid out in front of you","i":"ante up"},
    "batten_down_the_hatchesAt":{"u":"protection","i":"crisis"},
    "müller_hyph_lyer_illusionAt":{"u":"length","i":"overly absorbed with \"philosophical implications\""},
    "escalatorAt":{"u":"progress blocked,(needs more gold plating)","i":"some times you just have to climb"},
    "tech_broAt":{"u":"wants to tell you about blockchain,(there is no cure),","i":"run away"},
    "about_to_walk_off_a_cliffAt":{"u":"edge condition","i":"synonym for idiot"},
    "one_trick_ponyAt":{"u":"find the darkest/purplest dot","i":"there is no cure"},
    "judgmentalAt":{"u":"I think about you sometimes","i":"just sayin'"},
    "is_it_prime_q_At":{"u":"sieve of Eratosthenes much?","i":"no free shipping"},
    "walled_gardenAt":{"u":"all your base are belong to us","i":"stay awhile"},
    "संसारAt":{"u":"rat race","i":"round we go"},
    "spandrelAt":{"u":"side effect","i":"chin up!"},
    "rules_of_pokerAt":{"u":"rules is rules","i":"rules are rules"},
    "object_permanenceAt":{"u":"peekaboo!","i":"impermanence"},
    "ceci_n_apos_est_pas_une_carteAt":{"u":"trompe-moi une fois...","i":"trompe-moi deux fois..."},
    "poker_faceAt":{"u":"no secrets","i":"\"oklahoma forehead\",(more like a five head!),\"Top [sic] Forehead Reduction Doctors, in Oklahoma City\""},
    "data_centerAt":{"u":"somewhere in the global south,(See NIMBY)","i":"how the slop gets made"},
    "random_walkAt":{"u":"meander","i":"shamble"},
    "oblique_stratagiesAt":{"u":"text by Brian Eno and Peter Schmidt","i":"text by Brian Eno and Peter Schmidt"},
    "witnessAt":{"u":"I saw what you did","i":"∃x φ(x)"},
    "inflection_pointAt":{"u":"reversals,(so derivative!)","i":"regime change"},
    "shake_a_faceAt":{"u":"profiles in courage","i":"<snuffles loudly>"},
    "waitingAt":{"u":"soon","i":"not soon enough"},
    "landscapeAt":{"u":"on the horizon,whole hog,sideways,halfway to a threeway,messy","i":"(the landscape card is, neither upright nor inverted)"},
    "yoink_exc_At":{"u":"possessive","i":"easy come\\c easy go"},
    "rorschach_testAt":{"u":"see what you see","i":"whatever you make of it"},
    "bug_At":{"u":"mistakes were made","i":"testing in production"},
    "tombstoneAt":{"u":"quod erat demonstrandum","i":"U+220E"},
    "ouijaAt":{"u":"the medium is the message,look who's talking","i":"ideomotor reflex"},
    "desire_pathAt":{"u":"what I want","i":"shortest distance"},
    "dog_that_didn_apos_t_barkAt":{"u":"what is the sound of...","i":"his master's voice"},
    "quiet_piggy_exc_At":{"u":"what is the sound of an orange pig?","i":"projector in chief"},
  }	

let diffTitle = {"zodiacAt":"true","metalAt":"true","stochastic_parrotAt":"true"}

function differentTitle (f) {
  if (f === "zodiacAt") {
    let d = randomPick(["Aardonyx", "Abelisaurus", "Abrictosaurus", "Abrosaurus", "Abydosaurus", "Acanthopholis", "Achelousaurus", "Achillobator", "Acristavus", "Acrocanthosaurus", "Acrotholus", "Adamantisaurus", "Adasaurus", "Adeopapposaurus", "Aegyptosaurus", "Aeolosaurus", "Aerosteon", "Afrovenator", "Agathaumas", "Agilisaurus", "Agujaceratops", "Agustinia", "Ajkaceratops", "Alamosaurus", "Alaskacephale", "Albalophosaurus", "Albertaceratops", "Albertadromeus", "Albertonykus", "Albertosaurus", "Alectrosaurus", "Aletopelta", "Alioramus", "Allosaurus", "Altirhinus", "Alvarezsaurus", "Alwalkeria", "Alxasaurus", "Amargasaurus", "Amazonsaurus", "Ammosaurus", "Ampelosaurus", "Amphicoelias", "Amurosaurus", "Anabisetia", "Anatosaurus", "Anatotitan", "Anchiceratops", "Anchiornis", "Anchisaurus", "Andesaurus", "Angaturama", "Angolatitan", "Angulomastacator", "Animantarx", "Ankylosaurus", "Anodontosaurus", "Anserimimus", "Antarctopelta", "Antarctosaurus", "Antetonitrus", "Anzu", "Aorun", "Apatosaurus", "Appalachiosaurus", "Aquilops", "Aragosaurus", "Aralosaurus", "Archaeoceratops", "Archaeopteryx", "Archaeornithomimus", "Arcovenator", "Arcusaurus", "Argentinosaurus", "Argyrosaurus", "Aristosuchus", "Arrhinoceratops", "Astrodon", "Asylosaurus", "Atlasaurus", "Atlascopcosaurus", "Atrociraptor", "Aublysodon", "Aucasaurus", "Auroraceratops", "Australodocus", "Australovenator", "Austroraptor", "Austrosaurus", "Avaceratops", "Aviatyrannis", "Avimimus", "Bactrosaurus", "Bagaceratops", "Bagaraatan", "Bahariasaurus", "Balaur", "Bambiraptor", "Barapasaurus", "Barilium", "Barosaurus", "Barsboldia", "Baryonyx", "Batyrosaurus", "Becklespinax", "Beipiaosaurus", "Beishanlong", "Bellusaurus", "Berberosaurus", "Bicentenaria", "Bistahieversor", "Bonapartenykus", "Bonitasaura", "Borogovia", "Bothriospondylus", "Brachiosaurus", "Brachyceratops", "Brachylophosaurus", "Brachytrachelopan", "Bravoceratops", "Brontomerus", "Bruhathkayosaurus", "Buitreraptor", "Byronosaurus", "Camarasaurus", "Camarillasaurus", "Camelotia", "Camptosaurus", "Carcharodontosaurus", "Carnotaurus", "Caudipteryx", "Centrosaurus", "Cerasinops", "Ceratonykus", "Ceratosaurus", "Cetiosauriscus", "Cetiosaurus", "Changyuraptor", "Chaoyangsaurus", "Charonosaurus", "Chasmosaurus", "Chialingosaurus", "Chilantaisaurus", "Chilesaurus", "Chindesaurus", "Chirostenotes", "Chubutisaurus", "Chungkingosaurus", "Citipati", "Claosaurus", "Coahuilaceratops", "Coelophysis", "Coelurus", "Colepiocephale", "Compsognathus", "Concavenator", "Conchoraptor", "Condorraptor", "Coronosaurus", "Corythosaurus", "Crichtonsaurus", "Cruxicheiros", "Cryolophosaurus", "Cryptovolans", "Cumnoria", "Dacentrurus", "Daemonosauru", "Dahalokely", "Dakotaraptor", "Daspletosaurus", "Datousaurus", "Darwinsaurus", "Deinocheirus", "Deinodon", "Deinonychus", "Delapparentia", "Deltadromeus", "Demandasaurus", "Diabloceratops", "Diamantinasaurus", "Diceratops", "Dicraeosaurus", "Dilong", "Dilophosaurus", "Dimetrodon", "Diplodocus", "Dollodon", "Draconyx", "Dracopelta", "Dracorex", "Dracovenator", "Dravidosaurus", "Dreadnoughtus", "Drinker", "Dromaeosauroides", "Dromaeosaurus", "Dromiceiomimus", "Dryosaurus", "Dryptosaurus", "Dubreuillosaurus", "Duriavenator", "Dyoplosaurus", "Dysalotosaurus", "Dyslocosaurus", "Dystrophaeus", "Echinodon", "Edmarka", "Edmontonia", "Edmontosaurus", "Efraasia", "Einiosaurus", "Ekrixinatosaurus", "Elaphrosaurus", "Elmisaurus", "Elopteryx", "Elrhazosaurus", "Enigmosaurus", "Eoabelisaurus", "Eobrontosaurus", "Eocarcharia", "Eocursor", "Eodromaeus", "Eolambia", "Eoraptor", "Eosinopteryx", "Eotriceratops", "Eotyrannus", "Epachthosaurus", "Epidendrosaurus", "Epidexipteryx", "Equijubus", "Erectopus", "Erketu", "Erliansaurus", "Erlikosaurus", "Euhelopus", "Euoplocephalus", "Europasaurus", "Europelta", "Euskelosaurus", "Eustreptospondylus", "Fabrosaurus", "Falcarius", "Ferganasaurus", "Fruitadens", "Fukuiraptor", "Fukuisaurus", "Fulgurotherium", "Futalognkosaurus", "Gallimimus", "Gargoyleosaurus", "Garudimimus", "Gasosaurus", "Gasparinisaura", "Gastonia", "Genyodectes", "Gideonmantellia", "Giganotosaurus", "Gigantoraptor", "Gigantspinosaurus", "Gilmoreosaurus", "Giraffatitan", "Glacialisaurus", "Gobiceratops", "Gobisaurus", "Gobivenator", "Gojirasaurus", "Gondwanatitan", "Gorgosaurus", "Goyocephale", "Graciliraptor", "Gryphoceratops", "Gryponyx", "Gryposaurus", "Guaibasaurus", "Guanlong", "Hadrosaurus", "Hagryphus", "Halticosaurus", "Haplocanthosaurus", "Haplocheirus", "Harpymimus", "Haya", "Herrerasaurus", "Hesperonychus", "Hesperosaurus", "Heterodontosaurus", "Hexing", "Hexinlusaurus", "Heyuannia", "Hippodraco", "Homalocephale", "Hongshanosaurus", "Hoplitosaurus", "Huabeisaurus", "Huanghetitan", "Huaxiagnathus", "Huaxiaosaurus", "Huayangosaurus", "Huehuecanauhtlus", "Hungarosaurus", "Huxleysaurus", "Hylaeosaurus", "Hypacrosaurus", "Hypselosaurus", "Hypselospinus", "Hypsibema", "Hypsilophodon", "Ichthyovenator", "Ignavusaurus", "Iguanacolossus", "Iguanodon", "Ilokelesia", "Incisivosaurus", "Indosuchus", "Ingenia", "Irritator", "Isanosaurus", "Isisaurus", "Jainosaurus", "Janenschia", "Jaxartosaurus", "Jeholosaurus", "Jeyawati", "Jianchangosaurus", "Jinfengopteryx", "Jingshanosaurus", "Jinzhousaurus", "Jobaria", "Judiceratops", "Juratyrant", "Juravenator", "Kaatedocus", "Kaijiangosaurus", "Kazaklambia", "Kentrosaurus", "Kerberosaurus", "Khaan", "Kileskus", "Kinnareemimus", "Kol", "Koreaceratops", "Koreanosaurus", "Kosmoceratops", "Kotasaurus", "Kritosaurus", "Kryptops", "Kukufeldia", "Kulindadromeus", "Kundurosaurus", "Labocania", "Lagosuchus", "Lambeosaurus", "Lamplughsaura", "Lanzhousaurus", "Laosaurus", "Lapparentosaurus", "Laquintasaura", "Latirhinus", "Leaellynasaura", "Leinkupal", "Leonerasaurus", "Leptoceratops", "Leshansaurus", "Lesothosaurus", "Lessemsaurus", "Lexovisaurus", "Leyesaurus", "Liaoceratops", "Liaoningosaurus", "Liliensternus", "Limaysaurus", "Limusaurus", "Linhenykus", "Linheraptor", "Linhevenato", "Lophorhothon", "Lophostropheus", "Loricatosaurus", "Lourinhanosaurus", "Lourinhasaurus", "Luanchuanraptor", "Lufengosaurus", "Lurdusaurus", "Lusotitan", "Lycorhinus", "Lythronax", "Machairasaurus", "Macrogryphosaurus", "Magnapaulia", "Magnirostris", "Magnosaurus", "Magyarosaurus", "Mahakala", "Maiasaura", "Majungasaurus", "Malawisaurus", "Mamenchisaurus", "Manidens", "Mantellisaurus", "Mantellodon", "Mapusaurus", "Marshosaurus", "Martharaptor", "Masiakasaurus", "Massospondylus", "Maxakalisaurus", "Medusaceratops", "Megalosaurus", "Megapnosaurus", "Megaraptor", "Mei", "Melanorosaurus", "Mendozasaurus", "Mercuriceratops", "Metriacanthosaurus", "Microceratops", "Micropachycephalosaurus", "Microraptor", "Microvenator", "Minmi", "Minotaurasaurus", "Miragaia", "Mirischia", "Mochlodon", "Mojoceratops", "Monkonosaurus", "Monoclonius", "Monolophosaurus", "Mononykus", "Montanoceratops", "Mussaurus", "Muttaburrasaurus", "Mymoorapelta", "Nankangia", "Nanosaurus", "Nanotyrannus", "Nanshiungosaurus", "Nanuqsaurus", "Nanyangosaurus", "Nasutoceratops", "Nebulasaurus", "Nedcolbertia", "Neimongosaurus", "Nemegtomaia", "Nemegtosaurus", "Neovenator", "Neuquenraptor", "Neuquensaurus", "Nigersaurus", "Nipponosaurus", "Noasaurus", "Nodocephalosaurus", "Nodosaurus", "Nomingia", "Nothronychus", "Notohypsilophodon", "Nqwebasaurus", "Nuthetes", "Nyasasaurus", "Ojoceratops", "Olorotitan", "Omeisaurus", "Oohkotokia", "Opisthocoelicaudia", "Orkoraptor", "Ornithodesmus", "Ornitholestes", "Ornithomimus", "Ornithopsis", "Orodromeus", "Orthomerus", "Oryctodromeus", "Ostafrikasaurus", "Othnielia", "Othnielosaurus", "Ouranosaurus", "Overosaurus", "Oviraptor", "Oxalaia", "Ozraptor", "Pachycephalosaurus", "Pachyrhinosaurus", "Palaeoscincus", "Paluxysaurus", "Pampadromaeus", "Pamparaptor", "Panamericansaurus", "Panoplosaurus", "Panphagia", "Pantydraco", "Paralititan", "Paranthodon", "Pararhabdodon", "Parasaurolophus", "Parksosaurus", "Paronychodon", "Parvicursor", "Patagosaurus", "Pawpawsaurus", "Pedopenna", "Pegomastax", "Pelecanimimus", "Peloroplites", "Pelorosaurus", "Pentaceratops", "Philovenator", "Phuwiangosaurus", "Piatnitzkysaurus", "Pinacosaurus", "Pisanosaurus", "Piveteausaurus", "Planicoxa", "Plateosaurus", "Pleurocoelus", "Pneumatoraptor", "Podokesaurus", "Poekilopleuron", "Polacanthus", "Prenocephale", "Prenoceratops", "Proa", "Probactrosaurus", "Proceratosaurus", "Procompsognathus", "Propanoplosaurus", "Prosaurolophus", "Protarchaeopteryx", "Protoceratops", "Protohadros", "Psittacosaurus", "Puertasaurus", "Pyroraptor", "Qantassaurus", "Qianzhousaurus", "Qiaowanlong", "Qiupalong", "Quaesitosaurus", "Quilmesaurus", "Rahiolisaurus", "Rahonavis", "Rajasaurus", "Rapator", "Rapetosaurus", "Raptorex", "Rebbachisaurus", "Regaliceratops", "Regnosaurus", "Rhabdodon", "Rhinorex", "Rhoetosaurus", "Richardoestesia", "Rinchenia", "Rinconsaurus", "Riojasaurus", "Rubeosaurus", "Rugops", "Sahaliyania", "Saichania", "Saltasaurus", "Saltopus", "Sanjuansaurus", "Santanaraptor", "Sarahsaurus", "Sarcolestes", "Sarcosaurus", "Saturnalia", "Saurolophus", "Sauroniops", "Sauropelta", "Saurophaganax", "Sauroposeidon", "Saurornithoides", "Saurornitholestes", "Savannasaurus", "Scansoriopteryx", "Scelidosaurus", "Scipionyx", "Sciurumimus", "Scolosaurus", "Scutellosaurus", "Secernosaurus", "Seitaad", "Segisaurus", "Segnosaurus", "Seismosaurus", "Sellosaurus", "Serendipaceratops", "Shamosaurus", "Shanag", "Shantungosaurus", "Shaochilong", "Shenzhousaurus", "Shunosaurus", "Shuvosaurus", "Shuvuuia", "Siamodon", "Siamosaurus", "Siamotyrannus", "Siats", "Sigilmassasaurus", "Silvisaurus", "Similicaudipteryx", "Sinocalliopteryx", "Sinoceratops", "Sinornithoides", "Sinornithomimus", "Sinornithosaurus", "Sinosauropteryx", "Sinosaurus", "Sinotyrannus", "Sinovenator", "Sinraptor", "Sinusonasus", "Skorpiovenator", "Sonorasaurus", "Sphaerotholus", "Spinophorosaurus", "Spinops", "Spinosaurus", "Spinostropheus", "Staurikosaurus", "Stegoceras", "Stegosaurus", "Stenopelix", "Stokesosaurus", "Struthiomimus", "Struthiosaurus", "Stygimoloch", "Styracosaurus", "Suchomimus", "Sulaimanisaurus", "Supersaurus", "Suuwassea", "Suzhousaurus", "Szechuanosaurus", "Tachiraptor", "Talarurus", "Talenkauen", "Talos", "Tangvayosaurus", "Tanius", "Tanycolagreus", "Taohelong", "Tapuiasaurus", "Tarascosaurus", "Tarbosaurus", "Tarchia", "Tastavinsaurus", "Tatankacephalus", "Tatankaceratops", "Tataouinea", "Tawa", "Tazoudasaurus", "Technosaurus", "Tehuelchesaurus", "Telmatosaurus", "Tendaguria", "Tenontosaurus", "Teratophoneus", "Tethyshadros", "Texacephale", "Thecocoelurus", "Thecodontosaurus", "Theiophytalia", "Therizinosaurus", "Thescelosaurus", "Tianchisaurus", "Tianyulong", "Tianyuraptor", "Tianzhenosaurus", "Timimus", "Titanoceratops", "Titanosaurus", "Tochisaurus", "Tornieria", "Torosaurus", "Torvosaurus", "Triceratops", "Trinisaura", "Troodon", "Tsaagan", "Tsintaosaurus", "Tuojiangosaurus", "Turanoceratops", "Turiasaurus", "Tylocephale", "Tyrannosaurus Rex", "Tyrannotitan", "Uberabatitan", "Udanoceratops", "Unaysaurus", "Unenlagia", "Unescoceratops", "Urbacodon", "Utahceratops", "Utahraptor", "Uteodon", "Vagaceratops", "Vahiny", "Valdoraptor", "Valdosaurus", "Variraptor", "Velafrons", "Velociraptor", "Velocisaurus", "Venenosaurus", "Veterupristisaurus", "Vulcanodon", "Wannanosaurus", "Wellnhoferia", "Wendiceratops", "Willinakaqe", "Wintonotitan", "Wuerhosaurus", "Wulagasaurus", "Xenoceratops", "Xenoposeidon", "Xenotarsosaurus", "Xiaosaurus", "Xiaotingia", "Xinjiangtitan", "Xiongguanlong", "Xixianykus", "Xuanhanosaurus", "Xuanhuaceratops", "Xuwulong", "Yamaceratops", "Yandusaurus", "Yangchuanosaurus", "Yaverlandia", "Yi Qi", "Yimenosaurus", "Yinlong", "Yixianosaurus", "Yizhousaurus", "Yongjinglong", "Yueosaurus", "Yulong", "Yunnanosaurus", "Yutyrannus", "Zalmoxes", "Zanabazar", "Zapalasaurus", "Zby", "Zephyrosaurus", "Zhanghenglong", "Zhejiangosaurus", "Zhenyuanlong", "Zhongyuansaurus", "Zhuchengceratops", "Zhuchengosaurus", "Zhuchengtyrannus", "Zuniceratops", "Zuolong", "Zupaysaurus"])
    defs[f] = {"u":advice(d),"i":advice(d)}
    return d
  }
  let sayings = [
    "Peent, peent, peent","Drink-your-teeeee",
    "Kill-dee, kill-dee, kill-dee", "Drink-your-teeeee","Whip-poor-will",
    "Trees, trees, murmuring trees",'Tow-weeee',"Tea-kettle, tea-kettle, tea-kettle",
    "pee-oo-wee","pee-oo-wee","Bob white, bob white","Are you awake? me too",
    "chick-a-dee, chick-a- dee-dee-dee", "peter, peter, peter","Poor Sam Peabody, Peabody, Peabody",
    "who cooks for you, who cooks for you all?", "potato chip, potato chip","teacher, teacher, teacher"
  ]
  if (f === "stochastic_parrotAt")
    return randomPick(sayings)
  if (f === "metalAt")
    return metal()
}

function metal () {
  let wrd = randomWord().toUpperCase()+" "+randomWord().toUpperCase()
  wrd = wrd.replaceAll("O", "\u{00D6}")
  wrd = wrd.replaceAll("U", "\u{016E}")
  wrd = wrd.replaceAll("A", "\u{00C4}")
  wrd = wrd.replaceAll("I", "\u{0130}")
  wrd = wrd.replaceAll("E", "\u{0116}")
 // wrd = wrd.replaceAll("S", "\u{1E9E}")
  wrd = wrd.replaceAll("T", "\u{0166}")
  wrd = wrd.replaceAll("H", "\u{0126}")
  wrd = wrd.replaceAll("D", "\u{0110}")
  wrd = wrd.replaceAll("Y", "\u{0178}")
  wrd = wrd.replaceAll("N", "\u{0376}")
  console.log(wrd)
  return(wrd)
}
function advice (d) {
  let date = new Date()// .getMonth()+1
  const months = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"]
  let nextmonth = months[(date.getMonth()+2)%12]
  let wis = [" shouldn't take up new hobbies just now", " should be more down to earth", " shouldn't start new relationships right now", 
    " are best avoided at this time", " should avoid heavy lifting until "+nextmonth, " can expect rainy weekends for the next few months", " ought to smile more"]
  if (!d.endsWith("s"))
    d += "s"
  return d + randomPick(wis)
}

let altTitles = { // for alternatives: remove "At"
  "crossroadsAt":"the four_directions",
  "rentre_chez_toi_com_ta_mère_a_fait_des_gaufresAt":"Go_Back_Home_com_Your_Mother_Made_You_Waffles",
  "thumbs_upAt":"thumbs_down",
  "tarjetas_rojasAt":"red_card",
  "victoryAt":"capitulation",
  "is_he_dead_yet_q_At":"is_he_still_dead?",
  "stygian_blueAt":"hyperbolic_orange",
  "fertilityAt":"infertility",
  "what_is_a_concentration_camp_q_At":"what_is_kidnappings_by_masked_goons_q_"
}

let tealeaves_u = ["acorn", "airplane", "anchor", "apple", "arrow", "axe", "baby", "bag", "ball", "balloon", "basket", "bell", "birds", "boat", "book", "bottle", "broom", "bush", "butterfly", "candle", "cat", "chain", "chair", "circle", "clock", "clouds", "coin", "cross", "cup", "dagger", "dish", "dog", "door", "duck", "eagle", "egg", "envelope", "eye", "face", "fan", "feather", "fence", "finger", "fire", "fish", "flag", "flower", "fly", "forked line", "fruit", "gate", "water glass", "cocktail glass", "goat", "grapes", "gun", "hammer", "hand", "hat", "hawk", "heart", "horse", "horseshoe", "hourglass", "house", "insect", "jewels", "kettle", "key", "kite", "knife", "ladder", "lamp", "leaf", "letter", "lines", "lion", "lock", "man", "moon", "mountain", "mouse", "mushroom", "nail", "necklace", "nest", "needle", "oak tree", "octopus", "ostrich", "owl", "palm tree", "palm leaf", "parasol", "parrot", "pig", "pin", "pine tree", "pipe", "pistol", "plough", "purse", "question mark", "rabbit", "rainbow", "rake", "raven", "rider", "ring", "ring, broken", "rose", "scales", "scissors", "sheep", "shell", "ship", "shoe", "sickle", "snake", "spider", "spoon", "squirrel", "stairs", "star", "sun", "sword", "table", "teardrops", "tent", "thimble", "tortoise", "tower", "triangle", "turtle", "umbrella", "vase", "violin", "volcano", "wagon", "wasp", "wheel", "wings", "wolf", "zebra"]
let tealeaves_1 = tealeaves_u
let eightball_u = ["It is certain","It is decidedly so","Without a doubt","Yes definitely","You may rely on it","As I see it\\c yes","Most likely","Outlook good","Yes","Signs point to yes"]
let eightball_i = ["Reply hazy, try again","Ask again later","Better not tell you now","Cannot predict now","Concentrate and ask again","Don't count on it","My reply is no","My sources say no","Outlook not so good","Very doubtful"]

function relicName (relic) {
  let saint = randomPick(names)
  let thing = randomPick(words.match(/\b\w{3,}(ist(ic)?|able|ible|ous)\b/g))
  return "The "+relic+" of Saint "+saint
}

function holyday () {
  let thing = randomPick(words.match(/\b\w{3,}(ist(ic)?|able|ible|ous)\b/g))
  let saint = randomPick(names)
  if (Math.random() > 0.5)
    return("Saint "+saint+" the "+thing+"'s day")
  else
    return "The feast of " + randomPick(words.match(/\b\w{3,}(ous|ic|ful|ive|ish(ed)?|able)\b/g)) + " " + randomPick(words.match(/\b\w{3,}(ation|ment|ion|[eaiou]nt?y)s?\b/g))
}

function randomGP () {
  let gp = shuffle(["Fat people eat accumulates.", "Have the students who failed the exam take the supplementary.", "Helen is expecting tomorrow to be a bad day.", "Hershey Bars Protest.", "Homicide Victims Rarely Talk to Police", "Hospitals Sued by 7 Foot Doctors.", "I convinced her children are noisy.", "I know the words to that song about the queen don't rhyme.", "Mary gave the child the dog bit a Band-Aid.", "Miners Refuse to Work After Death.", "Red Tape Holds up New Bridge.", "She told me a little white lie will come back to haunt me.", "Stolen Painting Found by Tree.", "That Jill is never here hurts.", "The cotton clothing is made of grows in Mississippi.", "The dog that I had really loved bones.", "The florist sent the flowers was pleased.", "The girl told the story cried.", "The horse raced past the barn fell.", "The man who hunts ducks out on weekends.", "The woman who whistles tunes pianos. ", "The old man the boat.", "The prime number few.", "The raft floated down the river sank.", "The sour drink from the ocean.", "The tycoon sold the offshore oil tracts for a lot of money wanted to kill JR.", "Tornado Touches Down in Cemetery Hundreds Dead.", "Until the police arrest the drug dealers control the street.", "We painted the wall with cracks.", "When Fred eats food gets thrown.", "The man pushed through the door swung.", "Mary gave the child the dog bit the bandaid.", "The government plans to raise taxes were defeated.", "Until the police arrest the drug dealers control the street.", "The boy smiled at the girl tossed the ball."])
  return randomPick(gp)
}

function artspeak () {
  let art = ["This work", "This piece", "This exhibit", "The artist", "The artwork"]
  let things = ["the spacial, ", "the void, ", "the real ", "the dialectic, ", "the intersectional, ", "the parallel, ","parallelism, "]
  let ant = words.match(/\b\w{3,}ant\b/g)
  let ates = words.match(/\b\w{3,}ates\b/g)
  let ating = ["abbreviating","abdicating","ablating","abrogating","accelerating","accentuating","accommodating","accumulating","activating","actuating","adjudicating","administrating","adulterating","adumbrating","advocating","affiliating","agglomerating","aggravating","aggregating","agitating","alienating","alleviating","alliterating","allocating","alternating","amalgamating","ameliorating","amputating","animating","annihilating","antedating","anticipating","appreciating","appropriating","approximating","arbitrating","articulating","aspirating","assassinating","assimilating","associating","attenuating","authenticating","automating","berating","calculating","calibrating","capitulating","captivating","castigating","castrating","celebrating","circulating","cogitating","collaborating","collating","combating","commemorating","commentating","commiserating","communicating","compensating","complicating","concatenating","concentrating","conciliating","confiscating","conflating","congratulating","congregating","conjugating","consecrating","consolidating","consternating","contaminating","contemplating","cooperating","coordinating","copulating","correlating","corroborating","culminating","cultivating","deactivating","debilitating","decapitating","decelerating","decimating","decontaminating","dedicating","defecating","deflating","degenerating","dehydrating","deliberating","delineating","demarcating","demonstrating","denigrating","deprecating","depreciating","deregulating","desecrating","designating","desolating","deteriorating","detonating","devastating","deviating","dictating","differentiating","dilating","disaffiliating","disambiguating","disassociating","discriminating","disintegrating","dislocating","disorientating","disseminating","dissipating","dissociating","dominating","elaborating","elevating","eliminating","elongating","elucidating","emanating","emancipating","emasculating","emigrating","emulating","encapsulating","enervating","entreating","enumerating","enunciating","equilibrating","equivocating","eradicating","escalating","estimating","evacuating","evaluating","evaporating","exacerbating","exaggerating","exasperating","excavating","excommunicating","excruciating","exhilarating","exonerating","expostulating","expurgating","extenuating","exterminating","extrapolating","extricating","fabricating","facilitating","fascinating","fibrillating","fluctuating","fornicating","fractionating","frustrating","fulminating","germinating","gestating","gesticulating","gravitating","gyrating","hallucinating","hesitating","hibernating","humiliating","hyperventilating","hyphenating","illuminating","impersonating","implicating","impregnating","inactivating","inaugurating","incapacitating","incarcerating","incinerating","incorporating","incriminating","inculcating","indoctrinating","infiltrating","infuriating","ingratiating","initiating","innovating","inoculating","insinuating","instantiating","instigating","insulating","integrating","interpolating","interrogating","intimating","intimidating","intoxicating","invalidating","invigilating","invigorating","irradiating","irrigating","irritating","isolating","iterating","legitimating","levitating","liberating","liquidating","litigating","lubricating","luxuriating","manipulating","masticating","matriculating","mediating","meditating","menstruating","migrating","militating","mistranslating","mistreating","mitigating","moderating","modulating","motivating","mutating","mutilating","narrating","nauseating","navigating","negating","negotiating","nominating","obliterating","obviating","officiating","operating","orchestrating","originating","oscillating","oxygenating","paginating","palpitating","participating","penetrating","perambulating","percolating","permeating","perpetrating","perpetuating","pirating","placating","pollinating","pontificating","populating","postulating","precipitating","predating","predicating","predominating","prevaricating","procrastinating","procreating","proliferating","promulgating","propagating","propitiating","prostrating","pulsating","punctuating","pupating","radiating","reactivating","reallocating","reanimating","recalibrating","reciprocating","recirculating","recreating","recuperating","redecorating","reformulating","regenerating","regurgitating","rehabilitating","reincarnating","reinstating","reiterating","rejuvenating","relegating","relocating","remonstrating","renegotiating","renovating","repatriating","repeating","replicating","repudiating","resonating","restating","resuscitating","retaliating","retreating","reverberating","rollerskating","rotating","ruminating","salivating","saturating","scintillating","sedating","segregating","separating","simulating","situating","speculating","stagnating","stimulating","stipulating","subjugating","subordinating","substantiating","suffocating","superannuating","supplicating","suppurating","sweating","tabulating","terminating","titillating","tolerating","translating","transliterating","triangulating","truncating","unaccommodating","underestimating","understating","undiscriminating","undulating","unhesitating","vacillating","validating","vegetating","venerating","ventilating","vibrating","vindicating","violating","vitiating"]
  let v_ises = words.match(/\b\w{3,}i(s|z)es\b/g)
  let not_ises = ["cruises","demises","enterprises","pelvises","porpoises","portcullises","sunrises","tortoises","trellises",]
  v_ises = v_ises.filter(word => !not_ises.includes(word))
  let n_ality = words.match(/\b\w{3,}(al)?ity\b/g)
  let ism = words.match(/\b\w{3,}(al)?ism\b/g)
  let not_ism = ["autism","baptism","botulism","catechism","colloquialism","electromagnetism","embolism","euphemism","geomagnetism","hypnotism","journalism","judaism","mannerism","mechanism","metabolism","microorganism","neologism","nepotism","opportunism","organism","orientalism","plagiarism","rheumatism","schism","syllogism","truism","witticism"]
  ism = ism.filter(word => !not_ism.includes(word))
  let v_ising = words.match(/\b\w{3,}i(s|z)ing\b/g)
  let not_ising = ["appetising","cruising","enterprising","fundraising","hairraising","liaising","practising","praising","premising","promising","surprising","symbolising","unappetising","uncompromising","unpromising","unsurprising","uprising"]
  v_ising = v_ising.filter(word => !not_ising.includes(word))

  let ive = words.match(/\b\w{3,}ive\b/g)
  let ions = words.match(/\b\w{3,}ions\b/g)

  let ly = words.match(/\b\w{3,}ly\b/g)
  let not_adv = ["only", "family", "early", "likely", "supply", "apply", "daily", "lovely", "unlikely", "assembly", "elderly", "reply", "badly", "friendly", "fly", "holy", "rely", "silly", "billy", "kelly", "monthly", "lonely", "monopoly", "rally", "freely", "imply", "lively", "comply", "sally", "ugly", "kindly", "costly", "folly", "holly", "bodily", "jolly", "ally", "lily", "telly", "belly", "deadly", "molly", "quarterly", "butterfly", "dolly", "orderly", "multiply", "grimly", "jelly", "scholarly", "yearly", "curly", "weakly", "ghastly", "leisurely", "melancholy", "timely", "stately", "bully", "heavenly", "chilly", "willy", "tally", "sly", "hourly", "piccadilly", "earthly", "poly", "gully", "oily", "smelly", "homely", "ghostly", "woolly", "anomaly", "worldly", "lowly", "nightly", "sickly", "wally", "disorderly", "unruly", "prickly", "unfriendly", "wobbly", "burly", "filly", "cuddly", "unsightly", "northerly", "steely", "princely", "cowardly", "manly", "shapely", "hilly", "cleanly", "bubbly", "fortnightly", "courtly", "user-friendly", "priestly", "beastly", "gilly", "westerly", "ply", "grisly", "masterly", "nelly", "unholy", "southerly", "godly", "gentlemanly", "wily", "saintly", "untimely", "unseemly", "deathly", "frilly", "surly", "tilly", "pearly", "easterly", "brotherly", "ungainly", "cicely", "sprightly", "spindly", "firefly", "fiddly", "solly", "scaly", "golly", "neighbourly", "motherly", "whitely", "knightly", "lordly", "lully", "unearthly", "dragonfly", "knobbly", "caerphilly", "portly", "shelly", "gravelly", "straggly", "grizzly", "fatherly", "duopoly", "no-fly", "termly", "greenfly", "lolly", "unworldly", "environment-friendly", "gamely", "crinkly", "slovenly", "comely", "miserly", "panoply", "stubbly", "womanly", "bristly", "goodly", "underbelly", "lally", "waterlily", "dally", "welly", "brolly", "kingly", "painterly", "reapply", "superfamily", "chantilly", "crumbly", "subfamily", "ungodly", "gadfly", "homily", "oversupply", "dastardly", "half-yearly", "hurly-burly", "measly", "oligopoly", "unlovely", "bally", "twice-weekly", "whitefly", "other-worldly", "ozone-friendly", "seemly", "sisterly", "sparkly", "pally", "resupply", "rockabilly", "roly-poly", "south-westerly", "wiggly", "comradely", "read-only", "giggly", "girly", "gangly", "twice-yearly", "north-westerly", "dilly", "drizzly", "ly", "mealy", "niggardly", "matronly", "overfly", "seely", "sully", "wrinkly", "muscly", "postmultiply", "selly", "south-easterly", "ungentlemanly", "writerly", "cully", "heterosexually", "premultiply", "tiddly", "acromegaly", "hillbilly", "mayfly", "pebbly", "self-assembly", "soldierly", "unmanly", "googly", "doolally", "eco-friendly", "softly-softly", "fam'ly", "fleshly", "north-easterly", "singlehandedly", "treacly", "wifely", "crackly", "feely", "-ly", "pimply", "squally", "tinkly", "bi-weekly", "botfly", "clerkly", "disapply", "hepatomegaly", "jangly", "paly", "readerly", "reassembly", "splenomegaly", "twiddly", "two-ply", "bimonthly", "half-hourly", "maidenly", "niggly", "purply", "squiggly", "three-ply", "tingly", "blackfly", "coaly", "creepy-crawly", "doily", "sawfly", "stepfamily", "tickly", "barfly", "disassembly", "girl-friendly", "rascally", "swirly", "beggarly", "bobbly", "fruitfly", "jungly", "moly", "otherworldly", "scally", "shingly", "trebly", "underly", "wheely", "bly", "cousinly", "crawly", "dangly", "grandmotherly", "hoverfly", "marly", "microcephaly", "muddly", "rubbly", "this-worldly", "trembly", "twinkly", "undersupply", "unmannerly", "whirly", "diddly", "dolphin-friendly", "freckly", "gnarly", "housewifely", "laggardly", "philately", "scrawly", "shaly", "spangly", "spritely", "unneighbourly", "wibbly", "wriggly", "wurly", "creaturely", "damselfly", "dilly-dally", "dribbly", "freight-only", "horsefly", "hurly", "jubbly", "northwesterly", "pre-emptively", "radio-friendly", "rattly", "relly", "rolly", "rustly", "southwesterly", "subassembly", "superfly", "uncomely", "unwomanly", "wordly", "blowfly", "citizenly", "daughterly", "dimply", "pot-belly", "slatternly", "southeasterly", "stilly", "tangly", "waffly", "biweekly", "booly", "craftsmanly", "curmudgeonly", "gristly", "headly", "headmasterly", "helly", "housefly", "non-daily", "northeasterly", "potbelly", "queenly", "ruffianly", "sandfly", "scrolly", "snuffly", "unscholarly", "unwieldly", "weaselly", "wooly", "actorly", "auntly", "brambly", "business-friendly", "celly", "contumely", "crumply", "dayly", "dooly", "drawly", "drooly", "firebelly", "gobbly", "grumbly", "heav'nly", "hover-fly", "husbandly", "interactionally", "lawyerly", "lurvely", "luvverly", "mannerly", "piddly", "pully", "savourly", "schoolmasterly", "scraggly", "shuffly", "skelly", "sluggardly", "snuggly", "speckly", "toxophily", "trolly", "twirly", "unfatherly", "unshapely", "user-unfriendly", "waggly", "wibbly-wobbly", "anencephaly", "bearly", "bely", "bibliophily", "big-sisterly", "blackguardly", "brachycephaly", "brawly", "caramelly", "chiropterophily", "churchly", "cobbly", "colly", "cooly", "cranefly", "dancerly", "dealy", "designerly", "dovely", "dudely", "entomophily", "exencephaly", "family-friendly", "felly", "fishbelly", "footmanly", "gentlewomanly", "girlfriendly", "goatly", "godfatherly", "gospelly", "gradely", "grandfatherly", "growly", "gruelly", "guestly", "gurgly", "heartly", "hepatosplenomegaly", "hevenly", "hydrocephaly", "jiggly", "jingly", "jowly", "knubbly", "knuckly", "loverly", "male-friendly", "marbly", "megalencephaly", "metally", "misapply", "modelly", "nonfamily", "nubbly", "oly", "ornithophily", "outfly", "overfriendly", "peely-wally", "profamily", "protractedly", "psychobilly", "rambly", "ripply", "rumbly", "samely", "schoolmistressly", "sclerodactyly", "scrabbly", "scrambly", "scribbly", "shambly", "shoggly", "shoogly", "sightly", "skilly", "snivelly", "spinsterly", "squirrely", "statesmanly", "studly", "summerly", "swivelly", "teacherly", "test-fly", "tinselly", "towardly", "trichinopoly", "twilly", "unbrotherly", "uncleanly", "uncourtly", "unkingly", "unlively", "unmotherly", "unreflectively", "unsaintly", "unsisterly", "unsleepingly", "unsoldierly", "unwifely", "viewly", "waly", "weatherly", "weevilly", "whistly", "widdly", "winterly", "wizardly"]
  ly = ly.filter(word => !not_adv.includes(word))

  let ed = words.match(/\b\w{3,}ed\b/g)
  let not_ed = ["aniseed","breezed","creed", "illmannered","jotted","lunged"]
  let junc = ["while simultaneously", "while also", "at the same time", "while always already"]
  let pre = ["para-", "proto-", "post-", "hyper-"]
  let thing = randomPick(words.match(/\b\w{3,}(ist(ic)?|able|ible|ous)\b/g))
  let does = ["serves to", "functions to", "seems to","interrogates", "questions", "encodes", "transforms", "subverts", "imbricates", "displaces"]
  // ly and ly ed
  let adv_adv = (" - " + randomPick(ly) +" and "+randomPick(ly) +" "+randomPick(ed) +" - ")
  return("\""+randomPick(art)+ " " +(randomPick(v_ises))+ " the "
  + randomPick(n_ality) + " of "+randomPick(things) 
  + adv_adv
  + randomPick(junc) +" " 
  + (randomPick(v_ising))+", " + (randomPick(v_ising))+", " + (randomPick(v_ising))+" and " + (randomPick(v_ising))
  + " the " +randomPick(pre) +randomPick(ism) +" of its "
  + randomPick(ating) + " " + randomPick(n_ality) + " "
  + randomPick(["thereby", "in so", "so by", "such that"]) + " " 
  + randomPick(ating)+" "+randomPick(ive)+" "+randomPick(ions) +".\"")
}

function colorname() {
  let color = randomPick(["cyan","magents","salmon","violet","beigh","rose","mustard","gray",'red','blue',"orange", "white","black",'green','yellow','brown','pink','purple'])
  let word =  randomPick(words.match(/\b\w{4,11}\b/g)) 
  if (Math.random() > 0.5)
    return word+"-"+color
  else  
    return color+"-"+word
}

function artPrompt () {
  let artwords = []
  artwords.push( randomPick(words.match(/\b\w{4,8}(?<!(s|ing|ed|ly|er|est|ish))\b/g)) )
  let colors = ['red','blue','green','yellow','brown','pink','purple']
  let ly = words.match(/\b\w{3,}ly\b/g)
  let not_adv = ["splashes", "circles", "loops","smeared","only", "family", "early", "likely", "supply", "apply", "daily", "lovely", "unlikely", "assembly", "elderly", "reply", "badly", "friendly", "fly", "holy", "rely", "silly", "billy", "kelly", "monthly", "lonely", "monopoly", "rally", "freely", "imply", "lively", "comply", "sally", "ugly", "kindly", "costly", "folly", "holly", "bodily", "jolly", "ally", "lily", "telly", "belly", "deadly", "molly", "quarterly", "butterfly", "dolly", "orderly", "multiply", "grimly", "jelly", "scholarly", "yearly", "curly", "weakly", "ghastly", "leisurely", "melancholy", "timely", "stately", "bully", "heavenly", "chilly", "willy", "tally", "sly", "hourly", "piccadilly", "earthly", "poly", "gully", "oily", "smelly", "homely", "ghostly", "woolly", "anomaly", "worldly", "lowly", "nightly", "sickly", "wally", "disorderly", "unruly", "prickly", "unfriendly", "wobbly", "burly", "filly", "cuddly", "unsightly", "northerly", "steely", "princely", "cowardly", "manly", "shapely", "hilly", "cleanly", "bubbly", "fortnightly", "courtly", "user-friendly", "priestly", "beastly", "gilly", "westerly", "ply", "grisly", "masterly", "nelly", "unholy", "southerly", "godly", "gentlemanly", "wily", "saintly", "untimely", "unseemly", "deathly", "frilly", "surly", "tilly", "pearly", "easterly", "brotherly", "ungainly", "cicely", "sprightly", "spindly", "firefly", "fiddly", "solly", "scaly", "golly", "neighbourly", "motherly", "whitely", "knightly", "lordly", "lully", "unearthly", "dragonfly", "knobbly", "caerphilly", "portly", "shelly", "gravelly", "straggly", "grizzly", "fatherly", "duopoly", "no-fly", "termly", "greenfly", "lolly", "unworldly", "environment-friendly", "gamely", "crinkly", "slovenly", "comely", "miserly", "panoply", "stubbly", "womanly", "bristly", "goodly", "underbelly", "lally", "waterlily", "dally", "welly", "brolly", "kingly", "painterly", "reapply", "superfamily", "chantilly", "crumbly", "subfamily", "ungodly", "gadfly", "homily", "oversupply", "dastardly", "half-yearly", "hurly-burly", "measly", "oligopoly", "unlovely", "bally", "twice-weekly", "whitefly", "other-worldly", "ozone-friendly", "seemly", "sisterly", "sparkly", "pally", "resupply", "rockabilly", "roly-poly", "south-westerly", "wiggly", "comradely", "read-only", "giggly", "girly", "gangly", "twice-yearly", "north-westerly", "dilly", "drizzly", "ly", "mealy", "niggardly", "matronly", "overfly", "seely", "sully", "wrinkly", "muscly", "postmultiply", "selly", "south-easterly", "ungentlemanly", "writerly", "cully", "heterosexually", "premultiply", "tiddly", "acromegaly", "hillbilly", "mayfly", "pebbly", "self-assembly", "soldierly", "unmanly", "googly", "doolally", "eco-friendly", "softly-softly", "fam'ly", "fleshly", "north-easterly", "singlehandedly", "treacly", "wifely", "crackly", "feely", "-ly", "pimply", "squally", "tinkly", "bi-weekly", "botfly", "clerkly", "disapply", "hepatomegaly", "jangly", "paly", "readerly", "reassembly", "splenomegaly", "twiddly", "two-ply", "bimonthly", "half-hourly", "maidenly", "niggly", "purply", "squiggly", "three-ply", "tingly", "blackfly", "coaly", "creepy-crawly", "doily", "sawfly", "stepfamily", "tickly", "barfly", "disassembly", "girl-friendly", "rascally", "swirly", "beggarly", "bobbly", "fruitfly", "jungly", "moly", "otherworldly", "scally", "shingly", "trebly", "underly", "wheely", "bly", "cousinly", "crawly", "dangly", "grandmotherly", "hoverfly", "marly", "microcephaly", "muddly", "rubbly", "this-worldly", "trembly", "twinkly", "undersupply", "unmannerly", "whirly", "diddly", "dolphin-friendly", "freckly", "gnarly", "housewifely", "laggardly", "philately", "scrawly", "shaly", "spangly", "spritely", "unneighbourly", "wibbly", "wriggly", "wurly", "creaturely", "damselfly", "dilly-dally", "dribbly", "freight-only", "horsefly", "hurly", "jubbly", "northwesterly", "pre-emptively", "radio-friendly", "rattly", "relly", "rolly", "rustly", "southwesterly", "subassembly", "superfly", "uncomely", "unwomanly", "wordly", "blowfly", "citizenly", "daughterly", "dimply", "pot-belly", "slatternly", "southeasterly", "stilly", "tangly", "waffly", "biweekly", "booly", "craftsmanly", "curmudgeonly", "gristly", "headly", "headmasterly", "helly", "housefly", "non-daily", "northeasterly", "potbelly", "queenly", "ruffianly", "sandfly", "scrolly", "snuffly", "unscholarly", "unwieldly", "weaselly", "wooly", "actorly", "auntly", "brambly", "business-friendly", "celly", "contumely", "crumply", "dayly", "dooly", "drawly", "drooly", "firebelly", "gobbly", "grumbly", "heav'nly", "hover-fly", "husbandly", "interactionally", "lawyerly", "lurvely", "luvverly", "mannerly", "piddly", "pully", "savourly", "schoolmasterly", "scraggly", "shuffly", "skelly", "sluggardly", "snuggly", "speckly", "toxophily", "trolly", "twirly", "unfatherly", "unshapely", "user-unfriendly", "waggly", "wibbly-wobbly", "anencephaly", "bearly", "bely", "bibliophily", "big-sisterly", "blackguardly", "brachycephaly", "brawly", "caramelly", "chiropterophily", "churchly", "cobbly", "colly", "cooly", "cranefly", "dancerly", "dealy", "designerly", "dovely", "dudely", "entomophily", "exencephaly", "family-friendly", "felly", "fishbelly", "footmanly", "gentlewomanly", "girlfriendly", "goatly", "godfatherly", "gospelly", "gradely", "grandfatherly", "growly", "gruelly", "guestly", "gurgly", "heartly", "hepatosplenomegaly", "hevenly", "hydrocephaly", "jiggly", "jingly", "jowly", "knubbly", "knuckly", "loverly", "male-friendly", "marbly", "megalencephaly", "metally", "misapply", "modelly", "nonfamily", "nubbly", "oly", "ornithophily", "outfly", "overfriendly", "peely-wally", "profamily", "protractedly", "psychobilly", "rambly", "ripply", "rumbly", "samely", "schoolmistressly", "sclerodactyly", "scrabbly", "scrambly", "scribbly", "shambly", "shoggly", "shoogly", "sightly", "skilly", "snivelly", "spinsterly", "squirrely", "statesmanly", "studly", "summerly", "swivelly", "teacherly", "test-fly", "tinselly", "towardly", "trichinopoly", "twilly", "unbrotherly", "uncleanly", "uncourtly", "unkingly", "unlively", "unmotherly", "unreflectively", "unsaintly", "unsisterly", "unsleepingly", "unsoldierly", "unwifely", "viewly", "waly", "weatherly", "weevilly", "whistly", "widdly", "winterly", "wizardly"]
  ly = randomPick(ly.filter(word => !not_adv.includes(word)))
  //artwords.push(ly)
  artwords = shuffle(artwords)
  let tech = randomPick(["color field", "fading", "surreal", "impressionistic", "portrait", "oblique", "abstract", "parallel", "mirrored", "space", "dream-like", "water color", "#putabirdonit","contrasting", "clashing", "motion", "stillness", "stormy","forms","overlapping", "strokes", "stripes", "dotted", "curves", "hollow", "flowing", "landscape", "on a grid", "rectangles", "still life", "divided", "random", "floating", "blurred", "edges","inverted", "reflections", "non-dominant hand", "threes", "oval", "liminal"])
  return([randomPick(pantonecolors.names).toLowerCase(), tech, artwords[0], artwords[1]])
}

function testThrees () {
  let i = 0
  for (; i < 1000; i++)
    threecards()
}

let check_duplicate_in_array = (input_array) => {
  input_array = input_array.sort((a, b) => a - b);
  let duplicate_elements = []
  for (index in input_array) {
      if (input_array[index] ===
          input_array[index - 1]) {
          duplicate_elements.push(
              input_array[index]);
      }
  }
  return [...new Set(duplicate_elements)];
}

function testCards () {
  let keys = Object.keys(defs), i = 0
  let text = "", err = "", UNUSED = []
  let dupes = check_duplicate_in_array(atList)
  if (dupes.length < 1)
    dupes = "None"
  console.log("xxx duplicates in atList: " + dupes)
  //for (; i < 200; i++)
 //   threecards()
  fill()
  i = 0
  for (; i < keys.length;i++) {
    tarotcard (44,187,453, 700,keys[i],cardnumber(keys[i]),undefined,[0])
    tarotcard (44+530,187,453, 700,keys[i],cardnumber(keys[i]),undefined,[1])
    text += keys[i].slice(0,-2) + "\n"
    text += "  "+defs[keys[i]].u + "\n"
    text += "  "+defs[keys[i]].i + "\n"
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
  document.body.appendChild(ta)
  ta.scrollTop = ta.scrollHeight
  console.log("starting TMT test...")
  i = 0
 // for (; i < 1000; i++) 
 //   too_many_thingsAt(0,0,100,"#000000")
  
  console.log("...done. \ncheck spelling.")
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