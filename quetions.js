var geoQust = [
    {
        question: '1. Which river flows through Paris?',
        prop: [
            'Seine',
            'Amazon',
            'Nile'
        ],
        correct:'Seine'
    },
    {
        question:'2. What is the highest active volcano in Europe?',
           prop: ['Mount Elbrus',
                  'Mount Etna',
                  'Teide' 
                 ],
          correct:'Mount Etna'
    },
    {
        question:'3. What’s the world’s biggest port?', 
         prop: ['Shenzhen, China',
                  'Ningbo-Zhoushan, China' ,
                  'Shanghai, China'
    ],
        correct:'Shanghai, China'
    }
];



var sporQust = [
    {
        question:'1. Which England footballer was famously never given a yellow card?',
          prop:  {'Lineker': true,
          'Frank Lampard': false,
          'Wayne Rooney': false 
        }
    },
    {
        question:'2. A penalty in football is taken how many yards away from the goal?',
          prop:  {'16 yards':false ,
          '12 yards': true,
          '18 yards':false 
        }
    },
    {
        question :'3. In which sport do you wear a plastron?', 
           prop: {'Boxe':false,
           'Tennis': false,
           'fencing bout': true
        }
    }];

var histQust = [
    {
        question:'1.Who was the first human to journey into space?',
           prop:{ 'Valentina Tereshkova': false,
           'Yuri Alekseyevich Gagarin': true,
           'Sally Kristen Ride': false  
        }
    },
    {
        question:'2.Which king preceded Queen Victoria?',
           prop: {'William IV': true,
           'Edward VII': false ,
           'Leopold': false 
        }
    },
    {
        question:'3.Where was Napoleon Bonaparte born?',
            prop:{'Marseille': false,
            'Ajaccio, France': true,
            'Corsica':  false
        }
    },
];

var musQuet = [
    {
        question:'1. Which singer has the most UK Number One singles ever?',
            prop:{'Elvis Presley': true,
            '2 Chainz': false ,
            '2 Pac':false
        }
    },
    {
        question:"2. Which British band had the hit 'Fools Gold'?",
            prop:{'the Smiths':false ,
            'the Beatles':false ,
            'the Stone Roses': true
        }
    },

];

var celebQust = [
    {
    question:"1.What is Lady Gaga's real name?",
       prop:{ 'Stefani Joanne': false ,
       'Stefani Joanne Angelina Germanotta': true,
       'Joanne Angelina': false
    }
},
{
    question:"2.What film did Angelina Jolie and Brad Pitt famously meet on the set of?",
    prop:{'Too young to die ': false ,
    'Mr. and Mrs. Smith': true,
    'Cool World': false
    }
},
{
    question:"3.Who plays Tommy Shelby in Peaky Blinders?",
   prop:{ 'Cillian Murphy': true,
    'Harry Styles':false ,
    'Tom Hardy': false
    }
}];




function check(){
    $('.bnt').on('click', function(){
        
        for(var i in geoQust){
        if($('input[value="0"]').prop('checked') == `${geoQust[geoQust[i].question].correct}`){
            alert('Good!');
            
        }else{
            console.log('Nope!');
        }
    } 
    })
    
}


function showresult(geoQust,results){

    var useranser = '';
	var results = 0;

    for(var i=0; i<geoQust.length; i++){
        useranser= (prop[i].useranser('input[name=question'+i+']:')||{}).value;
        if(useranser===geoQust[i].correct){
            results++;            
            prop[i].style.color = 'green';
        }
        else{prop[i].style.color='red'}
    }
}
    


