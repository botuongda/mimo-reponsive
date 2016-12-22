// function changeFontSize(x): Thay đổi kích thước font chữ 
// của cả 3 đoạn văn thành x pixels.
     
     // changeFontSize(29)

function changeFontSize(x) {
	document.getElementById("doan1")
	document.getElementById("doan2")
	document.getElementById("doan3")
	var p1=document.getElementById("doan1");
	var p2=document.getElementById("doan2");
	var p3=document.getElementById("doan3");
	p1.style.fontSize=x+"px"
	p2.style.fontSize=x+"px"
	p3.style.fontSize=x+"px"
	}


// function increaseFontSize(paragraph): Tăng kích thước font chữ của 
// đoạn văn mong muốn (paragraph) lên 1 pixel so với kích thước hiện
//  tại, kích thước tăng lên không được vượt quá 30 pixels
//   (Sử dụng sau khi gọi hàm changeFontSize())

	// increaseFontSize(2)

	function increaseFontSize(paragraph){

		var x=parseInt(doan1.style.fontSize)
		var y=parseInt(doan2.style.fontSize)
		var z=parseInt(doan3.style.fontSize)

		switch (paragraph){
			case 1:
			if((x+1)>30)
				{
				console.log("Kích thước tăng lên không được vượt quá 30 pixels ");
				break;
				}
			 	doan1.style.fontSize=(x+1)+"px"
			 break;
			case 2:
			if((y+1)>30)
				{
				console.log("Kích thước tăng lên không được vượt quá 30 pixels ");
				break;
				}
			 doan2.style.fontSize=(y+1)+"px"
			 break;
			case 3:
			if((z+1)>30)
				{
				console.log("Kích thước tăng lên không được vượt quá 30 pixels ");
				break;
				}
			 doan3.style.fontSize=(z+1)+"px"
			 break;
		
		}

	}

// function decreaseFontSize(paragraph): Giảm kích thước font chữ của đoạn văn mong 
// muốn (paragraph) xuống 1 pixels so với kích thước hiện tại, kích thước giảm xuống 
// không vượt quá 10 pixels (Sử dụng sau khi gọi hàm changeFontSize()).


function decreaseFontSize(paragraph){

		var x=parseInt(doan1.style.fontSize)
		var y=parseInt(doan2.style.fontSize)
		var z=parseInt(doan3.style.fontSize)

		switch (paragraph){
			case 1:
			if((x-1)<10)
				{
				console.log("Kích thước giảm xuống không vượt quá 10 pixels ");
				break;
				}
			 	doan1.style.fontSize=(x-1)+"px"
			 break;
			case 2:
			if((y-1)<10)
				{
				console.log("Kích thước giảm xuống không vượt quá 10 pixels ");
				break;
				}
			 doan2.style.fontSize=(y-1)+"px"
			 break;
			case 3:
			if((z-1)<10)
				{
				console.log("Kích thước giảm xuống không vượt quá 10 pixels ");
				break;
				}
			 doan3.style.fontSize=(z-1)+"px"
			 break;
		
		}

	}

	// function changeColor(): Đổi màu chữ của 3 đoạn văn
	//  theo thứ tự xanh, vàng, đỏ.
	// changeColor()
function changeColor(){
	doan1.style.color = "blue"
	doan2.style.color = "yellow"
	doan3.style.color = "red"
}

// function changeBgColor(color): Thay đổi màu nền của trang thành màu color.
// changeBgColor("blue")

function changeBgColor(color){
			document.getElementById("html").style.background=color;
}

// function copyContent(paragraph1, paragraph2): Thay đổi nội dung của đoạn văn .
// paragraph1 thành giống nội dung của đoạn văn paragraph2.
function copyContent(paragraph1, paragraph2){
		var x = paragraph1.innerText;
		paragraph1.innerText=paragraph2.innerText;
		paragraph2.innerText=x;
}