$("i").css("color","black")

$("li").addClass("hvr-wobble-horizontal")

// cắt chuối chi tiết 345 ký tự
for (var i = 0; i < $("p#chitiet").length ; i++) {
	var chuoi='';
	var k =  $("p#chitiet")[i]
	// lấy thẻ href của thẻ a
	var link = $(".thumb h4 a")[i]
	link=$(link).attr('href')
	console.log(link+i)
	chuoi = $(k).html().slice(0,345)
	chuoi+= "....<a href=" + link + "> read more" 

	$($("p#chitiet")[i]).html(chuoi)
}



