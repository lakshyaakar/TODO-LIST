//on() is used to add event listeners to newly added li's or todo's.
//because click() dosen't add to those.
//we have  $(ul) selected because we have to make a new li which comes under ul.
//on("click","li",func()),in this "li" tells us the tag inside ul which is clicked and on which we have to apply changes. 

$("ul").on("click","li",function(){
	$(this).toggleClass("selected");
});

$("ul").on("click","span",function(e){
	$(this).parent().fadeOut(1000,function(){
		$(this).remove();
	});
	e.stopPropagation();
}); 

$("input[type='text']").keypress(function(e){
	if(e.which === 13)
	{
		var newtodo = $(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='far fa-trash-alt'></i></span> " + newtodo + "</li>");
	}

});

$("i").click(function(){
	$("input").fadeToggle();
});