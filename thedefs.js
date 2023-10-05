let defs = {
    "origamiAt":{"u":"dimensionality,adding depth,plans","i":"flatness"},
    "airplaneAt":{"u":"motion,travel","i":"staying put"},
    "envelopeAt":{"u":"contains a message","i":"lack of communication"},
    "sardinesAt":{"u":"too close,cramped,need for space,'group think'","i":"alone,'room to spare',independance"},
    "refractionAt":{"u":"an incorrect perception","i":"an incorrect conclusion"},
    "starsAt":{"u":"far away,higher things,aspirations,fame,fate","i":"'the sky is falling',the unreachable,distant"},
    "mountainAt":{"u":"something that can't be moved or changed,'no getting around this'","i":"a small problem"},
    
    "mothAt":{"u":"night,dreaming","i":"insomnia,lack of dreams"},
    "firebirdAt":{"u":"rebirth","i":"stagnation"},
    "spiralAt":{"u":"long term path,covering all ground","i":"trapped,spiraling down"},
    "finger_gunAt":{"u":"playfulness","i":"foolishness,childish"},
    "vineAt":{"u":"climbing,moving upward","i":"dependance,strangling"},
    "triangleAt":{"u":"measurement,planning","i":"mistakes,measure twice: cut once"},
    "flaskAt":{"u":"elixer,medicine","i":"poison,bad medicine"},
    "pencilAt":{"u":"drawing,writing,expression","i":"unexpressiveness"},
    "forestAt":{"u":"nature","i":"wasteland,lost,a parking lot"},
    
    "elephantAt":{"u":"strength,matriarchy","i":"weakness,gop"},
    "coreAt":{"u":"self,stability,centeredness","i":"hollowness,chaos"},
    "orbitAt":{"u":"influence","i":"lack of influence"},
    "lensAt":{"u":"focus,joining","i":"lack of focus,dispersing,distorting"},
    "theoremAt":{"u":"logic,order","i":"irrationality,disorder,falsification"},
    "floppyAt":{"u":"memory,nostalgia,saudade","i":"stuck in the past,obsolescence"},
    "spiderAt":{"u":"venom,a web,a trap,(alarmist)","i":"don't squash it,just take it outside,(mercy)"},
    "shoesAt":{"u":"preparation","i":"unpreparedness"},
    "bee_hiveAt":{"u":"industriousness,sisterhood,'works well with others'","i":"lazyness,hive mind"},
    
    "mushroomAt":{"u":"necessary decay,cleaning up","i":"loose ends,unfinished buisness"},
    "catAt":{"u":"warmth","i":"aloofness"},
    "birdAt":{"u":"perspective","i":"lack of perspective"},
    "functionAt":{"u":"relationship between two factors","i":"functionally unrelated,separate"},
    "pageAt":{"u":"communication,news,the written word,'on the same page'","i":"lack of communication"},
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
    "transomAt":{"u":"air,flow,security (door closed)","i":"stuffiness"},
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
    "jumpropeAt":{"u":"rythm,synchronization,play","i":"monotiny"},
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
    
    "thoughtAt":{"u":"thoughtfulness","i":"obsessive thought"},
    "skullAt":{"u":"death,the end of something","i":"not letting go"},
    "lampAt":{"u":"guidance","i":"lack of guidance,'in the dark'"},
    "chairAt":{"u":"stability","i":"stagnation,inactivity"},
    "cubeAt":{"u":"foundation,solidity","i":"shapelessness,mushiness"},
    "full_cupAt":{"u":"fulfillment","i":"empty,spill: exposure,a lack of something"},
    "mouseAt":{"u":"motion (mental)","i":"stagnation,repetition,carpal tunnel syndrome"},
    "uapAt":{"u":"outherworldliness,wanting to believe","i":"'it's just a weather ballon',incredulity"},
    "flipflopAt":{"u":"lack of conviction","i":"lack of convicion"},
    
    "stairsAt":{"u":"transition,levels","i":"stagnating,failing"},
    "treeAt":{"u":"nature,heirarchy","i":"inversion of order,revolution"},
    "slideAt":{"u":"change of status","i":"downfall"},
    "ladderAt":{"u":"opportunity","i":"lack of opportunity"},
    "swingAt":{"u":"play,motion","i":"repetition"},
    "unread_spreadAt":{"u":"draw again,go fish,\"UNO!\",","i":"pointless self-reference"},
    "cakeAt":{"u":"reward,a special occasion","i":"gluttony,greed"},
    "piechartAt":{"u":"need for data","i":"ignoring the data"},
    "greenwashingAt":{"u":"deception","i":"exposure of deception"},
    "bribeAt":{"u":"a bad influence,moral weakness","i":"resistence to bad influences,moral strength"},
    
    "big_fishAt":{"u":"predation,competition,food chain","i":"trickle-down economics,dog-eat-dog"},
    "clickbaitAt":{"u":"morbid curiosity,temptation,an attention trap","i":"don't look,don't fall for it,'nothing to see here'"},
    "two_ingredient_brownieAt":{"u":"too good to be true","i":"too true to be good"},
    "chatAt":{"u":"an interruption","i":"antisocial"},
    "gas_station_shrubberyAt":{"u":"ugly but indestructable","i":"lingering illness"},
    "misheard_lyricsAt":{"u":"'clowns in my coffee','you're so vein'","i" : "'clouds in my coffee','you're so vain'"},
    "plate_tectonicsAt":{"u":"'as above - so below'","i":"'what goes around - comes around'"},
    "negative_spaceAt":{"u":"when what is missing,defines what is present","i":"figure and ground,not obvious"},
    "coneAt":{"u":"cone of uncertainty","i":"light cone,'the big crunch'"},
    "nice_thingsAt":{"u":"this is why,we can't have...","i":"impermanence,it is already broken"},
    "monitorAt":{"u":"heavy,bulky,old-fashioned","i":"eye strain"},
    "fossilAt":{"u":"the past,evolution","i":"the future,extinction"},
    "flat_tireAt":{"u":"a setback,a bumpy ride,out of the race","i":"pause and reflect,spare tire: backup plan"},
    'get_off_my_lawnAt':{"u":"old-man-ism,frowns,shakes fist","i":"all are welcome"},
    'virusAt':{"u":"not quite alive,parasite,spreading quickly","i":"horse paste won't save you"},
    "tissue_boxAt":{"u":"eponym,save a tree,use a handkerchief","i":"wipe away your tears"},
    "bandaidAt":{"u":"eponym,self-help","i":"not a real solution,superficial"},
    "keyholeAt":{"u":"secrets,privacy","i":"lack of pricvacy"},
    "uphillAt":{"u":"work required,switch to a lower gear","i":"downhill,over the hill?,slow down,apply breaks"},
    "impossibleAt":{"u":"makes no sense","i":"maybe?"},
    "witch_huntAt":{"u":"a deflection","i":"thou who smelt it dealt it"},
    "sailboatAt":{"u":"with or without a goal in mind,effortless","i":"aimless,drifting,adrift"},
    "heirloomAt":{"u":"a legacy,tradition,from the past","i":"overrated,break from the past"},
    "dog_whistleAt":{"u":"coded hate,veiled message","i":"saying the quiet part out loud"},
    "two_car_garageAt":{"u":"space never used,...for its intended purpose","i":"car hole"},
    "racetrackAt":{"u":"rat race,no exit,no finish line,samsara","i":"breaking free,walk away from,off the grid"},
    "entanglementAt":{"u":"lack of independence,correlated distant events","i":"spooky action at a distance"},
    "too_expensive_burgerAt":{"u":"$78!,(but it comes with a bourbon),","i":"sign of societal decline,exaggeration,hyperbole,nonsense"},
    "connect_the_dotsAt":{"u":"obvious conclusion (supposedly),see the bigger picture,make connections","i":"can't see the forest,for the trees"},
    "ghost_in_the_machineAt":{"u":"dualism (metaphorically)","i":"'grandmother cell',expecting too much from a single thing"}
    }