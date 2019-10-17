// very very important
// we have changed this from $("li").on("click",function(){ to $("ul").on("click","li",function(){ because so that  our properties can easily work on all the new li's that we add later.
$("ul").on("click","li",function(){
	$(this).toggleClass("deco");
});


// very very important
// we have changed $("span").on("click",function(event) by $("ul").on("click","span",function(event) so that our properties can work also on newly added span

$("ul").on("click","span",function(event){

	// parent() is used to remove <li> along with the span.it will remove the parent element of the selected element.
	// therefore here it will remove <li> which is the parent element <span>


	 //here (this) represents only <span>.  
	$(this).parent().fadeOut(150,function(){


	// here (this) represents whole <li>.
	$(this).remove();
});

	// stopPropagation is used to restrict parent elements to execute.
	event.stopPropagation()
});


// input
$("input[type='text']").on("keypress",function(event){
	if(event.which==13){
		var v= $(this).val();
//append() method is used to append the new values or strings to whereever we want to insert the value. 
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> "+v+"</li>");
		$(this).val("");

	};


});


$(".fa-plus").on("click",function(){
	$("input").fadeToggle();
});