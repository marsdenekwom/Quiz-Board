$(document).ready(function(){
   $("input[type='button']").click(function(){
       var quesone = parseInt($("input[name='data']:checked").val());
       var questwo = parseInt($("input[name='form']:checked").val());
       var questhree = parseInt($("input[name='inline']:checked").val());
       var quesfour = parseInt($("input[name='belong']:checked").val());
       var quesfive = parseInt($("input[name='dry']:checked").val());

       var total = quesone + questwo + questhree + quesfour + quesfive;
       document.getElementById('result').innerHTML="YOUR SCORE IS " + total + " OUT OF 50";
   });
 });
