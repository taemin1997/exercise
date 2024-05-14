



// 이미지 변경 
let fileInputImgChange = document.getElementById("file-input-img-change");
//값이 변경될 때 호출되는 이벤트 리스너 
//즉 이미지를 변경했을때 호출되는 이벤트
fileInputImgChange.addEventListener('change',function(e){
  let file = e.target.files[0];//선택된 파일을 file에 담는다
  let reader = new FileReader();
  reader.readAsDataURL(file);//파일URL을 읽는 메소드 

  reader.onload = function(){
    let photoFrame = document.createElement("div");
    photoFrame.style = `background : url(${reader.result}); background-size : cover`;
    photoFrame.className = "photoFrame";
    document.getElementById("mypage-profile-img").appendChild(photoFrame);
    e.target.value = "";

    }})

