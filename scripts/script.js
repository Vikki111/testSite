//удаление родителя по клику на крест 
$(".close").click(function(){
	$(this).parent().remove();
});

//очищение поля с названием города
function CLEAN(){
document.getElementById("textin").value = "";
};


