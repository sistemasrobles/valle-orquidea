var APP_DATA = {
  "scenes": [
    {
      "id": "0-vista-panormica",
      "name": "Vista Panorámica",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "point_init": 0,
      "point": {top: -1034, left: 0},
      "initialViewParameters": {
        "yaw": -0.18087941484950143,
        "pitch": 0.7906000131701489,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": -1.189883208171267,
          "pitch": 0.899999622376324,
          "rotation": 0,
          "target": "1-ingreso"
        },
        {
          "yaw": -1.1765556653646758,
          "pitch": 0.6897497977231701,
          "rotation": 0,
          "target": "2-mz-a"
        },
        {
          "yaw": -0.8301736895215708,
          "pitch": 0.6755170557796468,
          "rotation": 0,
          "target": "3-mz-b"
        },
        {
          "yaw": -0.5762422960828317,
          "pitch": 0.6197256371152058,
          "rotation": 0,
          "target": "4-mz-c"
        },
        {
          "yaw": 0.21367782131594026,
          "pitch": 0.4395099446465167,
          "rotation": 0,
          "target": "5-mz-d"
        },
        {
          "yaw": 0.3587931902364776,
          "pitch": 0.30402039252911095,
          "rotation": 0,
          "target": "6-mz-e"
        },
        {
          "yaw": 0.40382594344254485,
          "pitch": 0.22425469805832066,
          "rotation": 0,
          "target": "7-mz-f"
        },
        {
          "yaw": 0.5706047200034892,
          "pitch": 0.6487667717628351,
          "rotation": 0,
          "target": "8-mz-g"
        },
        {
          "yaw": 0.27987793817590756,
          "pitch": 0.5784365775038349,
          "rotation": 0,
          "target": "9-mirador"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-ingreso",
      "name": "Ingreso",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "point_init": 0,
      "point": {top: 209, left: 117},
      "initialViewParameters": {
        "yaw": 0.04833075249401375,
        "pitch": -0.024193409348033157,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": 0.5077757185383778,
          "pitch": -0.4502936556058792,
          "rotation": 0,
          "target": "0-vista-panormica"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-mz-a",
      "name": "Mz. A",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "point_init": 0,
      "point": {top: 208, left: 65},
      "initialViewParameters": {
        "yaw": -0.010648682101702889,
        "pitch": 0.9694098818745367,
        "fov": 1.3045151620624345
      },
      "linkHotspots": [
        {
          "yaw": 0.053567376532338784,
          "pitch": 0.6273596202702016,
          "rotation": 0,
          "target": "3-mz-b"
        },
        {
          "yaw": 0.15913591371734803,
          "pitch": 0.3150217251926115,
          "rotation": 0,
          "target": "4-mz-c"
        },
        {
          "yaw": 0.9593231677703962,
          "pitch": 0.4162729191183292,
          "rotation": 0,
          "target": "1-ingreso"
        },
        {
          "yaw": 0.5224819142656276,
          "pitch": 0.05366298545654047,
          "rotation": 0,
          "target": "9-mirador"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.6061726108958236,
          "pitch": 0.3999322073966667,
          "title": "Vendido",
          "text": "Lote 01 - 300m2",
          "estado":"VENDIDO"
        },
        {
          "yaw": 0.6026084052078762,
          "pitch": 0.527033036866305,
          "title": "Vendido",
          "text": "Lote 02 - 300m2",
          "estado":"DISPONIBLE"
        },
        {
          "yaw": 0.5912949470979445,
          "pitch": 0.6627957838345324,
          "title": "Vendido",
          "text": "Lote 03 - 300m2",
          "estado":"DISPONIBLE"
        },
        {
          "yaw": 0.5519640891862725,
          "pitch": 0.8457445150038065,
          "title": "Vendido",
          "text": "Lote 04 - 300m2",
          "estado":"DISPONIBLE"
        },
        {
          "yaw": 0.5001717899386335,
          "pitch": 1.0296579253509606,
          "title": "Vendido",
          "text": "Lote 05 - 300m2",
          "estado":"DISPONIBLE"
        },
        {
          "yaw": 0.1683541944063105,
          "pitch": 1.173324327168963,
          "title": "Vendido",
          "text": "Lote 06 - 300m2",
          "estado":"DISPONIBLE"
        },
        {
          "yaw": -0.34442116377828924,
          "pitch": 1.164373442889886,
          "title": "Vendido",
          "text": "Lote 07 - 300m2",
          "estado":"DISPONIBLE"
        },
        {
          "yaw": -0.6923413571149091,
          "pitch": 1.0730833791860483,
          "title": "Vendido",
          "text": "Lote 08 - 300m2",
          "estado":"DISPONIBLE"
        },
        {
          "yaw": -0.7879999732167988,
          "pitch": 0.9244935727572305,
          "title": "Vendido",
          "text": "Lote 09 - 300m2",
          "estado":"DISPONIBLE"
        }
      ]
    },
    {
      "id": "3-mz-b",
      "name": "Mz. B",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "point_init": 0,
      "point": {top: 174, left: 83},
      "initialViewParameters": {
        "yaw": -0.030520047547446083,
        "pitch": 1.223680259010555,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": 0.3189834532038738,
          "pitch": 1.081098681182553,
          "rotation": 0,
          "target": "4-mz-c"
        },
        {
          "yaw": -1.9645251618789032,
          "pitch": 1.0753053852239507,
          "rotation": 0,
          "target": "2-mz-a"
        },
        {
          "yaw": -3.0204572497624067,
          "pitch": 1.027045438618881,
          "rotation": 0,
          "target": "1-ingreso"
        },
        {
          "yaw": 1.0988603982065204,
          "pitch": 0.39382142398856246,
          "rotation": 0,
          "target": "5-mz-d"
        },
        {
          "yaw": 0.9613856142468862,
          "pitch": 0.2682405743379803,
          "rotation": 0,
          "target": "6-mz-e"
        },
        {
          "yaw": 0.978830216764198,
          "pitch": 0.13444137920468613,
          "rotation": 0,
          "target": "7-mz-f"
        },
        {
          "yaw": 1.7347231984433984,
          "pitch": 0.27604092829625415,
          "rotation": 0,
          "target": "8-mz-g"
        },
        {
          "yaw": 1.4698853480686456,
          "pitch": 0.39943136203894625,
          "rotation": 0,
          "target": "9-mirador"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.9000669351053052,
          "pitch": 0.9995536553772462,
          "title": "Vendido",
          "text": "Lote 10 - 800m2",
          "estado":"DISPONIBLE"
        },
        {
          "yaw": -1.0666360938360313,
          "pitch": 1.16272140937631,
          "title": "Vendido",
          "text": "Lote 11 - 800m2",
          "estado":"DISPONIBLE"
        },
        {
          "yaw": -0.48363732592846276,
          "pitch": 1.3544664647549585,
          "title": "Vendido",
          "text": "Lote 12 - 500m2",
          "estado":"DISPONIBLE"
        },
        {
          "yaw": 0.7915943747134921,
          "pitch": 1.3004968318644892,
          "title": "Vendido",
          "text": "Lote 13 - 300m2",
          "estado":"DISPONIBLE"
        },
        {
          "yaw": 1.1508686105986392,
          "pitch": 1.1432186062737415,
          "title": "Vendido",
          "text": "Lote 14 - 300m2",
          "estado":"DISPONIBLE"
        },
        {
          "yaw": 1.3376454269288658,
          "pitch": 0.9482173746886584,
          "title": "Vendido",
          "text": "Lote 15 - 500m2",
          "estado":"VENDIDO"
        }
      ]
    },
    {
      "id": "4-mz-c",
      "name": "Mz. C",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "point_init": 0,
      "point": {top: 156, left: 104},
      "initialViewParameters": {
        "yaw": -0.16473744089495668,
        "pitch": 1.2510417122872983,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": -1.957421235862558,
          "pitch": 1.0883004831511602,
          "rotation": 0,
          "target": "2-mz-a"
        },
        {
          "yaw": -0.5919900304324823,
          "pitch": 1.329689165685716,
          "rotation": 0,
          "target": "3-mz-b"
        },
        {
          "yaw": -3.0266487472939723,
          "pitch": 1.0290445171149774,
          "rotation": 0,
          "target": "1-ingreso"
        },
        {
          "yaw": 1.1038399827685588,
          "pitch": 0.38242669446762534,
          "rotation": 0,
          "target": "5-mz-d"
        },
        {
          "yaw": 0.9572362701908279,
          "pitch": 0.2780072433448453,
          "rotation": 0,
          "target": "6-mz-e"
        },
        {
          "yaw": 0.9163476610389356,
          "pitch": 0.14984111890727725,
          "rotation": 0,
          "target": "7-mz-f"
        },
        {
          "yaw": 1.733050146895832,
          "pitch": 0.26935024328469304,
          "rotation": 0,
          "target": "8-mz-g"
        },
        {
          "yaw": 1.4612891726876125,
          "pitch": 0.3789751726986861,
          "rotation": 0,
          "target": "9-mirador"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.12915980104626,
          "pitch": 0.736003226244506,
          "title": "Vendido",
          "text": "Lote 16 - 300m2",
          "estado":"DISPONIBLE"
        },
        {
          "yaw": 0.9071586162461696,
          "pitch": 0.8416543082268912,
          "title": "Vendido",
          "text": "Lote 17 - 500m2",
          "estado":"VENDIDO"
        },
        {
          "yaw": 0.6776632953254591,
          "pitch": 1.0055388373431242,
          "title": "Vendido",
          "text": "Lote 18 - 500m2",
          "estado":"VENDIDO"
        },
        {
          "yaw": 0.2342577948353579,
          "pitch": 1.113774568369342,
          "title": "Vendido",
          "text": "Lote 19 - 500m2",
          "estado":"VENDIDO"
        },
        {
          "yaw": -0.1431643637442832,
          "pitch": 1.0430329619793763,
          "title": "Vendido",
          "text": "Lote 20 - 500m2",
          "estado":"DISPONIBLE"
        },
        {
          "yaw": -0.2923762566024024,
          "pitch": 0.8841379146141417,
          "title": "Vendido",
          "text": "Lote 21 - 500m2",
          "estado":"VENDIDO"
        }
      ]
    },
    {
      "id": "5-mz-d",
      "name": "Mz. D",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "point_init": 0,
      "point": {top: 112, left: 172},
      "initialViewParameters": {
        "yaw": -0.9577454444928115,
        "pitch": 1.4053941392783322,
        "fov": 0.8936580603397266
      },
      "linkHotspots": [
        {
          "yaw": -0.04843471335541594,
          "pitch": 0.9823990558041871,
          "rotation": 0,
          "target": "6-mz-e"
        },
        {
          "yaw": 0.004654875180971629,
          "pitch": 0.6264077679598881,
          "rotation": 0,
          "target": "7-mz-f"
        },
        {
          "yaw": 2.396818058836592,
          "pitch": 0.7343574116813834,
          "rotation": 0,
          "target": "8-mz-g"
        },
        {
          "yaw": -2.9931373480354284,
          "pitch": 0.5676268950023395,
          "rotation": 0,
          "target": "1-ingreso"
        },
        {
          "yaw": -2.7391473228201555,
          "pitch": 0.5770000836564719,
          "rotation": 0,
          "target": "2-mz-a"
        },
        {
          "yaw": -2.579596287790885,
          "pitch": 0.6364410397195286,
          "rotation": 0,
          "target": "3-mz-b"
        },
        {
          "yaw": -2.4383775900379554,
          "pitch": 0.7233036281431389,
          "rotation": 0,
          "target": "4-mz-c"
        },
        {
          "yaw": 2.6982991182607323,
          "pitch": 1.09650492829428,
          "rotation": 0,
          "target": "9-mirador"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.120777393258171,
          "pitch": 1.1239071428052993,
          "title": "Vendido",
          "text": "Lote 45 - 300m2",
          "estado":"DISPONIBLE"
        },
        {
          "yaw": -1.947255363177159,
          "pitch": 1.247815397849895,
          "title": "Vendido",
          "text": "Lote 46 - 300m2",
          "estado":"DISPONIBLE"
        },
        {
          "yaw": -1.7748303807264847,
          "pitch": 1.3848534030201542,
          "title": "Vendido",
          "text": "Lote 47 - 300m2",
          "estado":"DISPONIBLE"
        },
        {
          "yaw": -0.9451329231631398,
          "pitch": 1.487718264915968,
          "title": "Vendido",
          "text": "Lote 48 - 300m2",
          "estado":"DISPONIBLE"
        }
      ]
    },
    {
      "id": "6-mz-e",
      "name": "Mz. E",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "point_init": 0,
      "point": {top: 84, left: 211},
      "initialViewParameters": {
        "yaw": -0.1540603759678838,
        "pitch": 1.244867154793683,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": -1.9475876763678919,
          "pitch": 1.2927432622213075,
          "rotation": 0,
          "target": "5-mz-d"
        },
        {
          "yaw": 0.03877179234203609,
          "pitch": 0.6516924206354542,
          "rotation": 0,
          "target": "7-mz-f"
        },
        {
          "yaw": 2.3967220326264425,
          "pitch": 0.7364589757355198,
          "rotation": 0,
          "target": "8-mz-g"
        },
        {
          "yaw": -2.7724753378053535,
          "pitch": 0.5837529418000926,
          "rotation": 0,
          "target": "2-mz-a"
        },
        {
          "yaw": -2.6084417712039762,
          "pitch": 0.6425447474864541,
          "rotation": 0,
          "target": "3-mz-b"
        },
        {
          "yaw": -2.4495235221567544,
          "pitch": 0.7379524155064079,
          "rotation": 0,
          "target": "4-mz-c"
        },
        {
          "yaw": -3.004678298686736,
          "pitch": 0.5944924395111837,
          "rotation": 0,
          "target": "1-ingreso"
        },
        {
          "yaw": 2.670442544233911,
          "pitch": 1.0768247196569973,
          "rotation": 0,
          "target": "9-mirador"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.4578949877082668,
          "pitch": 0.9687600024842617,
          "title": "Vendido",
          "text": "Lote 44 - 400m2",
          "estado":"DISPONIBLE"
        },
        {
          "yaw": -1.1114262112667475,
          "pitch": 1.0114800860538458,
          "title": "Vendido",
          "text": "Lote 43 - 400m2",
          "estado":"DISPONIBLE"
        },
        {
          "yaw": -0.7449299680942732,
          "pitch": 1.0394951708303939,
          "title": "Vendido",
          "text": "Lote 42 - 400m2",
          "estado":"VENDIDO"
        },
        {
          "yaw": -0.33343427453618403,
          "pitch": 0.9983188703293031,
          "title": "Vendido",
          "text": "Lote 41 - 400m2",
          "estado":"VENDIDO"
        },
        {
          "yaw": 0.099947277058727366,
          "pitch": 1.0008314716374681,
          "title": "Vendido",
          "text": "Lote 40 - 400m2",
          "estado":"VENDIDO"
        },
        {
          "yaw": 1.6979981618457435,
          "pitch": 0.996788742635875,
          "title": "Vendido",
          "text": "Lote 37 - 300m2",
          "estado":"DISPONIBLE"
        },
        {
          "yaw": 1.2906201094113716,
          "pitch": 1.1836084595974121,
          "title": "Vendido",
          "text": "Lote 38 - 400m2",
          "estado":"DISPONIBLE"
        },
        {
          "yaw": 0.6637487603814502,
          "pitch": 1.1011703162972157,
          "title": "Vendido",
          "text": "Lote 39 - 400m2",
          "estado":"DISPONIBLE"
        }
      ]
    },
    {
      "id": "7-mz-f",
      "name": "Mz. F",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "point_init": 0,
      "point": {top: 64, left: 223},
      "initialViewParameters": {
        "yaw": 0.17185094670431944,
        "pitch": 1.0064796658140942,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": -1.91569378880601,
          "pitch": 1.301095710815117,
          "rotation": 0,
          "target": "5-mz-d"
        },
        {
          "yaw": -0.14824013065475228,
          "pitch": 0.9809271538238384,
          "rotation": 0,
          "target": "6-mz-e"
        },
        {
          "yaw": 2.416141522676292,
          "pitch": 0.7268760864957926,
          "rotation": 0,
          "target": "8-mz-g"
        },
        {
          "yaw": -3.0242293324649303,
          "pitch": 0.5707897070011914,
          "rotation": 0,
          "target": "1-ingreso"
        },
        {
          "yaw": -2.7913870053478895,
          "pitch": 0.6033720292585425,
          "rotation": 0,
          "target": "2-mz-a"
        },
        {
          "yaw": -2.597496040357905,
          "pitch": 0.6418511811902832,
          "rotation": 0,
          "target": "3-mz-b"
        },
        {
          "yaw": -2.4605621011774073,
          "pitch": 0.7344876498060557,
          "rotation": 0,
          "target": "4-mz-c"
        },
        {
          "yaw": 2.616723528771467,
          "pitch": 1.1250612771613362,
          "rotation": 0,
          "target": "9-mirador"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.2643432232559873,
          "pitch": 0.6842763851197073,
          "title": "Vendido",
          "text": "Lote 22 - 475m2",
          "estado":"DISPONIBLE"
        },
        {
          "yaw": -1.0824213495456714,
          "pitch": 0.691446689670915,
          "title": "Vendido",
          "text": "Lote 23 - 475m2",
          "estado":"VENDIDO"
        },
        {
          "yaw": -0.6583883278519427,
          "pitch": 0.6938573557055128,
          "title": "Vendido",
          "text": "Lote 25 - 475m2",
          "estado":"VENDIDO"
        },
        {
          "yaw": -0.8689965881098652,
          "pitch": 0.6971221570684403,
          "title": "Vendido",
          "text": "Lote 24 - 475m2",
          "estado":"VENDIDO"
        },
        {
          "yaw": -0.40989394046647035,
          "pitch": 0.6584103652082742,
          "title": "Vendido",
          "text": "Lote 26 - 475m2",
          "estado":"DISPONIBLE"
        },
        {
          "yaw": -0.16310226132594167,
          "pitch": 0.6246705801343229,
          "title": "Vendido",
          "text": "Lote 27 - 475m2",
          "estado":"VENDIDO"
        },
        {
          "yaw": 0.08068898205288839,
          "pitch": 0.634918975486233,
          "title": "Vendido",
          "text": "Lote 28 - 475m2",
          "estado":"DISPONIBLE"
        },
        {
          "yaw": 0.3547903013533959,
          "pitch": 0.6620919602531536,
          "title": "Vendido",
          "text": "Lote 29 - 475m2",
          "estado":"DISPONIBLE"
        },
        {
          "yaw": 0.6813482766154712,
          "pitch": 0.7252435533465693,
          "title": "Vendido",
          "text": "Lote 30 - 475m2",
          "estado":"VENDIDO"
        },
        {
          "yaw": 1.0099702151818764,
          "pitch": 0.7802942817454959,
          "title": "Vendido",
          "text": "Lote 31 - 475m2",
          "estado":"VENDIDO"
        },
        {
          "yaw": 1.398617541995058,
          "pitch": 0.7351469850865708,
          "title": "Vendido",
          "text": "Lote 32 - 475m2",
          "estado":"VENDIDO"
        },
        {
          "yaw": 1.664245715867139,
          "pitch": 0.6625788741211434,
          "title": "Vendido",
          "text": "Lote 33 - 400m2",
          "estado":"VENDIDO"
        }
      ]
    },
    {
      "id": "8-mz-g",
      "name": "Mz. G",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "point_init": 0,
      "point": {top: 162, left: 210},
      "initialViewParameters": {
        "yaw": -0.03661529899288318,
        "pitch": 1.2443533269562206,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": -2.4196856112482035,
          "pitch": 1.165931111235306,
          "rotation": 0,
          "target": "9-mirador"
        },
        {
          "yaw": 2.24713314629329,
          "pitch": 0.539645910924305,
          "rotation": 0,
          "target": "2-mz-a"
        },
        {
          "yaw": 2.510056927421563,
          "pitch": 0.5778890936185093,
          "rotation": 0,
          "target": "3-mz-b"
        },
        {
          "yaw": 2.778678077941306,
          "pitch": 0.5656797866459726,
          "rotation": 0,
          "target": "4-mz-c"
        },
        {
          "yaw": -2.5251331448391685,
          "pitch": 0.6551728455093233,
          "rotation": 0,
          "target": "5-mz-d"
        },
        {
          "yaw": -1.8730046682216592,
          "pitch": 0.3330504913407655,
          "rotation": 0,
          "target": "6-mz-e"
        },
        {
          "yaw": -1.5844159477595632,
          "pitch": 0.22837835753054492,
          "rotation": 0,
          "target": "7-mz-f"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.9916317440919666,
          "pitch": 0.9076586703254055,
          "title": "Vendido",
          "text": "Lote 36 - 300m2",
          "estado":"DISPONIBLE"
        },
        {
          "yaw": -0.10004607747168848,
          "pitch": 1.1395984961876788,
          "title": "Vendido",
          "text": "Lote 35 - 500m2",
          "estado":"VENDIDO"
        },
        {
          "yaw": 0.8765784669622718,
          "pitch": 0.9099720358037491,
          "title": "Vendido",
          "text": "Lote 34 - 400m2",
          "estado":"DISPONIBLE"
        }
      ]
    },
    {
      "id": "9-mirador",
      "name": "Mirador",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "point_init": 0,
      "point": {top: 142, left: 204},
      "initialViewParameters": {
        "yaw": 0.4685537761123193,
        "pitch": 0.0961429957078046,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": 0.5917499866239133,
          "pitch": -0.3378151371338376,
          "rotation": 0,
          "target": "0-vista-panormica"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
