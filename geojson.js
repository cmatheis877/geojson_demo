// 1. erase everything below this line and paste in your geojson
// 2. add the following before your pasted content, so that the map
//    will understand how to find your geojson. See README.md for more info
//
//    var json =
//
//    See example below:


var json = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "stroke": "#555555",
        "stroke-width": 2,
        "stroke-opacity": 1,
        "fill": "#555555",
        "fill-opacity": 0.5,
        "title": "Rabbit Hole Bakery",
        "image": "https://ctycms.com/ne-lincoln/images/rabbithole_outsidesm.jpg"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -96.70978724956512,
              40.81619849342134
            ],
            [
              -96.70979261398315,
              40.81599956063099
            ],
            [
              -96.70960754156113,
              40.81601174020673
            ],
            [
              -96.70960754156113,
              40.81619443357443
            ],
            [
              -96.70978724956512,
              40.81619849342134
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            -96.70982748270035,
            40.81597926133313
          ],
          [
            -96.70996963977814,
            40.815863555216715
          ],
          [
            -96.70998841524124,
            40.814763322062085
          ],
          [
            -96.7096960544586,
            40.814765352029355
          ],
          [
            -96.7096933722496,
            40.814893239842235
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "stroke": "#555555",
        "stroke-width": 2,
        "stroke-opacity": 1,
        "fill": "#555555",
        "fill-opacity": 0.5,
        "title": "The Mill Haymarket",
        "image": "https://cdn.shopify.com/s/files/1/0250/8377/2974/files/cass-madeline190506-46_600x600.jpg?v=1575562537"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -96.70979261398315,
              40.815297201314465
            ],
            [
              -96.70979529619217,
              40.81490947954686
            ],
            [
              -96.70934468507767,
              40.81490541962108
            ],
            [
              -96.7093339562416,
              40.815041426999635
            ],
            [
              -96.70943856239319,
              40.81504751687572
            ],
            [
              -96.70943588018416,
              40.81517946405392
            ],
            [
              -96.70928567647934,
              40.81518555391736
            ],
            [
              -96.70928567647934,
              40.81529517136348
            ],
            [
              -96.70979261398315,
              40.815297201314465
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            -96.70966386795044,
            40.81489729976876
          ],
          [
            -96.70967996120453,
            40.814755202192394
          ],
          [
            -96.70994281768799,
            40.814767381996575
          ],
          [
            -96.70996427536011,
            40.81587167495076
          ],
          [
            -96.71095132827759,
            40.81589197428155
          ],
          [
            -96.71116590499878,
            40.8159366327874
          ],
          [
            -96.71116590499878,
            40.81569710044964
          ],
          [
            -96.71128928661345,
            40.81570116032698
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -96.71150922775267,
              40.815839196008596
            ],
            [
              -96.71150922775267,
              40.815839196008596
            ],
            [
              -96.7114931344986,
              40.815839196008596
            ],
            [
              -96.7114931344986,
              40.815839196008596
            ],
            [
              -96.71150922775267,
              40.815839196008596
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "stroke": "#555555",
        "stroke-width": 2,
        "stroke-opacity": 1,
        "fill": "#555555",
        "fill-opacity": 0.5,
        "title": "Bill Harris Iron Horse Park",
        "image": "data:image/jpeg;base64,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"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -96.71150453388691,
              40.81560981302682
            ],
            [
              -96.71128191053867,
              40.81560981302682
            ],
            [
              -96.71128191053867,
              40.81583665859056
            ],
            [
              -96.71150453388691,
              40.81583665859056
            ],
            [
              -96.71150453388691,
              40.81560981302682
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "stroke": "#555555",
        "stroke-width": 2,
        "stroke-opacity": 1,
        "fill": "#555555",
        "fill-opacity": 0.5,
        "title": "The Oven",
        "image": "https://media-cdn.tripadvisor.com/media/photo-s/14/55/3d/e9/the-oven-haymarket.jpg"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -96.71050608158112,
              40.81490947954686
            ],
            [
              -96.71016275882721,
              40.81490947954686
            ],
            [
              -96.71016275882721,
              40.81504345695838
            ],
            [
              -96.71050608158112,
              40.81504345695838
            ],
            [
              -96.71050608158112,
              40.81490947954686
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            -96.71128928661345,
            40.81565244178255
          ],
          [
            -96.71114981174469,
            40.81565244178255
          ],
          [
            -96.71112835407256,
            40.81483640084471
          ],
          [
            -96.71097815036774,
            40.814751142257144
          ],
          [
            -96.70995354652405,
            40.814775501864766
          ],
          [
            -96.70998036861418,
            40.814970378403814
          ],
          [
            -96.71016275882721,
            40.81496225855946
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            -96.71016812324524,
            40.81494601886776
          ],
          [
            -96.70997500419617,
            40.81495007879105
          ],
          [
            -96.70997500419617,
            40.814763322062085
          ],
          [
            -96.70849978923798,
            40.814775501864766
          ],
          [
            -96.70849442481995,
            40.81451972553858
          ],
          [
            -96.7087197303772,
            40.81451566558895
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "stroke": "#555555",
        "stroke-width": 2,
        "stroke-opacity": 1,
        "fill": "#555555",
        "fill-opacity": 0.5,
        "title": "The Graduate Hotel",
        "image": "https://content.r9cdn.net/rimg/kimg/3b/65/7856223a-1624e79a556.jpg?crop=true&width=500&height=350"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -96.70920789241791,
              40.81437762715349
            ],
            [
              -96.70870900154112,
              40.81437762715349
            ],
            [
              -96.70870900154112,
              40.81464152391215
            ],
            [
              -96.70920789241791,
              40.81464152391215
            ],
            [
              -96.70920789241791,
              40.81437762715349
            ]
          ]
        ]
      }
    }
  ]
}
