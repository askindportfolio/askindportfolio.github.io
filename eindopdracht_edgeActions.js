/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      

      Symbol.bindElementAction(compId, symbolName, "${_home}", "mouseover", function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("home_hover");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_home}", "mouseout", function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("home_mouseout");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_about}", "mouseover", function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("about_hover");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_about}", "mouseout", function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("about_mouseout");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_contact}", "mouseover", function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("contact_hover");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_contact}", "mouseout", function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("contact_mouseout");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_shop}", "mouseover", function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("shop_hover");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_shop}", "mouseout", function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("shop_mouseout");
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 750, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1750, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2750, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3750, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 11250, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("loop");

      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${_logo}", "click", function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("logo_weg");
         

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

})(jQuery, AdobeEdge, "EDGE-7039168");