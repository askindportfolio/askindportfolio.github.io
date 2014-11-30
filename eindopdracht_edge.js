/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
   fonts['fredericka-the-great, sans-serif']='<script src=\"http://use.edgefonts.net/fredericka-the-great:n4:all.js\"></script>';


var resources = [
];
var symbols = {
"stage": {
   version: "2.0.0",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.0.250",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'flower1_2preview',
            type:'image',
            rect:['172px','135px','640px','480px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"flower1%20%282%29.preview.jpg",'0px','0px']
         },
         {
            id:'home',
            type:'text',
            rect:['172px','617px','108px','72px','auto','auto'],
            text:"<br>HOME",
            align:"center",
            font:['fredericka-the-great, sans-serif',20,"rgba(94,94,94,1.00)","normal","none","normal"]
         },
         {
            id:'about',
            type:'text',
            rect:['345px','651px','108px','72px','auto','auto'],
            text:"<br>ABOUT",
            align:"center",
            font:['fredericka-the-great, sans-serif',20,"rgba(94,94,94,1.00)","normal","none","normal"]
         },
         {
            id:'contact',
            type:'text',
            rect:['515px','651px','128px','72px','auto','auto'],
            text:"<br>CONTACT",
            align:"center",
            font:['fredericka-the-great, sans-serif',20,"rgba(94,94,94,1.00)","normal","none","normal"]
         },
         {
            id:'shop',
            type:'text',
            rect:['710px','651px','102px','72px','auto','auto'],
            text:"<br>SHOP",
            align:"center",
            font:['fredericka-the-great, sans-serif',20,"rgba(94,94,94,1.00)","normal","none","normal"]
         },
         {
            id:'slider4',
            type:'image',
            rect:['172px','135px','640px','480px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"sunny-flowers.jpg",'0px','0px']
         },
         {
            id:'slider3',
            type:'image',
            rect:['172px','135px','640px','480px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"The%20latest%20fresh%20plant%20flowers%20wallpapers%20640x480%20%2814%29.jpg",'0px','0px']
         },
         {
            id:'slider2',
            type:'image',
            rect:['172px','135px','640px','480px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Almond%20flowers.jpg",'0px','0px']
         },
         {
            id:'slider1',
            type:'image',
            rect:['172px','135px','640px','480px','auto','auto'],
            opacity:1,
            fill:["rgba(0,0,0,0)",im+"flower1%20%282%29.preview.jpg",'0px','0px']
         },
         {
            id:'logo',
            type:'image',
            rect:['675px','0px','185px','125px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"logo.png",'0px','0px']
         },
         {
            id:'titel',
            type:'text',
            rect:['281px','35px','auto','auto','auto','auto'],
            text:"B L O E M E N W I N K E L <br>  D O E T I N C H E M ",
            align:"center",
            font:['fredericka-the-great, sans-serif',30,"rgba(0,0,0,1.00)","normal","none","normal"],
            transform:[[],[],[],['0.88973']]
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_shop}": [
            ["style", "top", '617px'],
            ["style", "font-size", '20px'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "height", '72px'],
            ["style", "left", '710px'],
            ["style", "width", '102px']
         ],
         "${_slider3}": [
            ["style", "top", '135px'],
            ["style", "opacity", '1'],
            ["style", "left", '172px']
         ],
         "${_home}": [
            ["style", "top", '617px'],
            ["style", "font-size", '20px'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "height", '72px'],
            ["style", "left", '172px'],
            ["style", "width", '108px']
         ],
         "${_flower1_2preview}": [
            ["style", "top", '135px'],
            ["style", "opacity", '1'],
            ["style", "left", '172px']
         ],
         "${_about}": [
            ["style", "top", '617px'],
            ["style", "font-size", '20px'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "height", '72px'],
            ["style", "left", '345px'],
            ["style", "width", '108px']
         ],
         "${_slider2}": [
            ["style", "top", '135px'],
            ["style", "opacity", '1'],
            ["style", "left", '172px']
         ],
         "${_slider4}": [
            ["style", "top", '135px'],
            ["style", "opacity", '1'],
            ["style", "left", '172px']
         ],
         "${_contact}": [
            ["style", "top", '617px'],
            ["style", "font-size", '20px'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "height", '72px'],
            ["style", "left", '515px'],
            ["style", "width", '128px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '800px'],
            ["style", "width", '1000px']
         ],
         "${_logo}": [
            ["style", "left", '701px'],
            ["style", "top", '0px']
         ],
         "${_titel}": [
            ["style", "top", '35px'],
            ["style", "text-align", 'center'],
            ["transform", "scaleX", '0.88973'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "font-family", 'fredericka-the-great, sans-serif'],
            ["style", "left", '281px'],
            ["style", "font-size", '30px']
         ],
         "${_slider1}": [
            ["style", "top", '135px'],
            ["style", "opacity", '1'],
            ["style", "left", '172px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 11360,
         autoPlay: true,
         labels: {
            "home_hover": 250,
            "home_mouseout": 500,
            "about_hover": 1250,
            "about_mouseout": 1500,
            "contact_hover": 2250,
            "contact_mouseout": 2500,
            "shop_hover": 3250,
            "shop_mouseout": 3500,
            "logo_weg": 4250,
            "loop": 5250,
            "logo_delete": 5250,
            "foto1": 5750,
            "foto2": 7250,
            "foto3": 8750,
            "foto4": 10250
         },
         timeline: [
            { id: "eid14", tween: [ "color", "${_shop}", "color", 'rgba(166,166,166,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1.00)'}], position: 3250, duration: 250 },
            { id: "eid16", tween: [ "color", "${_shop}", "color", 'rgba(0,0,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(166,166,166,1.00)'}], position: 3500, duration: 250 },
            { id: "eid36", tween: [ "style", "${_slider4}", "opacity", '0', { fromValue: '1'}], position: 10250, duration: 1000 },
            { id: "eid35", tween: [ "style", "${_slider3}", "opacity", '0', { fromValue: '1'}], position: 8750, duration: 1000 },
            { id: "eid32", tween: [ "style", "${_slider2}", "opacity", '0', { fromValue: '1'}], position: 7250, duration: 1000 },
            { id: "eid5", tween: [ "color", "${_home}", "color", 'rgba(166,166,166,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1.00)'}], position: 250, duration: 250 },
            { id: "eid6", tween: [ "color", "${_home}", "color", 'rgba(0,0,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(166,166,166,1.00)'}], position: 500, duration: 250 },
            { id: "eid10", tween: [ "color", "${_about}", "color", 'rgba(166,166,166,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1.00)'}], position: 1250, duration: 250 },
            { id: "eid9", tween: [ "color", "${_about}", "color", 'rgba(0,0,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(166,166,166,1.00)'}], position: 1500, duration: 250 },
            { id: "eid129", tween: [ "style", "${_flower1_2preview}", "opacity", '0', { fromValue: '1'}], position: 11250, duration: 110 },
            { id: "eid29", tween: [ "style", "${_slider1}", "opacity", '0', { fromValue: '1'}], position: 5750, duration: 1000 },
            { id: "eid24", tween: [ "style", "${_logo}", "left", '1000px', { fromValue: '701px'}], position: 4250, duration: 1000 },
            { id: "eid11", tween: [ "color", "${_contact}", "color", 'rgba(166,166,166,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1.00)'}], position: 2250, duration: 250 },
            { id: "eid13", tween: [ "color", "${_contact}", "color", 'rgba(0,0,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(166,166,166,1.00)'}], position: 2500, duration: 250 }         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-7039168");
