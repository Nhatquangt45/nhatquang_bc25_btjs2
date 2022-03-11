/** bài 1
 * --đầu vào:cho người dùng nhập vào 3 số nguyên
 * 
 * 
 * --xử lý:tạo biến n:chứa 3 số nguyên
 * 
 * --đầu ra:xuất ra kq tăng dần
 */
document.getElementById("btnXuat").onclick = function (){
      var soNguyen1 = document.getElementById("txtNhapSo1").value;
      var soNguyen2 = document.getElementById("txtNhapSo2").value;
      var soNguyen3 = document.getElementById("txtNhapSo3").value;
      soNguyen1 = parseInt(soNguyen1);
      soNguyen2 = parseInt(soNguyen2);
      soNguyen3 = parseInt(soNguyen3);
      var kqTong = soNguyen1+1;
      var kqTong2 = soNguyen2 +1;
      var kqTong3 = soNguyen3 +1;
    var ketQua = "số nguyên bằng :"+kqTong + kqTong2 + kqTong3;
    console.log(ketQua);
    document.getElementById("soNguyen").innerHTML = ketQua;
    document.getElementById("soNguyen").className = "so__nguyen";
}
/** bài 2
 *--đầu vào:hỏi ai là người sử dụng máy
 *          bố,mẹ,anh,em
 * 
 * 
 * --xử lý:nhận biết người nhập và chào hỏi
 * 
 * --đầu ra:show câu chào
 */


document.getElementById("btnChao").onclick = function () {
    var nguoiNhap = document.getElementById('txtChaoHoi').value;
   var B ="B";
   var M = "M";
   var A = "A";
   var E = "E";
   var chaoHoi
  if (nguoiNhap === "B") {
      chaoHoi = "xin chào Bố";
      console.log(chaoHoi);
  } else if(nguoiNhap === "M"){
    chaoHoi = "xin chào Mẹ";
      console.log(chaoHoi);
  }if (nguoiNhap === "A") {
      chaoHoi = "xin chào Anh Trai"
      console.log(chaoHoi);
  } else if(nguoiNhap === "E") {
      chaoHoi = "xin chào Em Gái"
      console.log(chaoHoi);
  }
  document.getElementById("xinChao").innerHTML = chaoHoi;
  document.getElementById("xinChao").className = "xin__chao"
}
/**bài 3
 *--đầu vào:cho 3 số nguyên
 *
 * 
 * 
 * --xử lý:phân biệt số lẻ số chẵn
 * 
 * 
 *--đầu ra:
 */
document.getElementById("btnDem").onclick = function (){
    var soN = document.getElementById("txtSo").value*1;
    var soN2 = document.getElementById("txtSo2").value*1;
    var soN3 = document.getElementById("txtSo3").value*1;
    var ketQuaSN
    var soChan = 0;
    var soLe = 0;
if (soN % 2 === 0) {
  soChan++;
} else soLe++
if(soN2 % 2 === 0){
  soChan++;
}else soLe++
if(soN3 % 2 === 0 ){
    soChan++;
}else soLe++
console.log("số chẵn là:"+ soChan + "số lẻ là :"+ soLe);
document.getElementById("tbSo").innerHTML = "số chẵn là: "+ soChan + ' ; ' +" số lẻ là : " + soLe;
document.getElementById("tbSo").className = "so";
}

/**
 * bài 4 
 * 
 * 
 * --đầu vào:nhập 3 cạnh =>biết được tam giác gì.
 * 
 * 
 * -xử lý :dom tới 3 thẻ 
 * 
 * 
 * --đầu ra:show ra tam giác
 */


document.getElementById("btnNhap").onclick = function () {
    var canhThu1 = document.getElementById("txtCanh1").value;
    var canhThu2 = document.getElementById("txtCanh2").value;
    var canhThu3 = document.getElementById("txtCanh3").value;
    canhThu1 = parseInt(canhThu1);
    canhThu2 = parseInt(canhThu2);
    canhThu3 = parseInt(canhThu3);
    var kqCanh
    if (canhThu1 == canhThu2&&canhThu2 > canhThu3) {
        kqCanh = " Tam Giác Cân"
    } else if(canhThu1 == canhThu2&&canhThu2 == canhThu3){
        kqCanh = " Tam Giác Đều "
    }else{
    kqCanh = " Tam Giác Vuông "        
    }
    console.log(kqCanh);
    document.getElementById("tbKQ").innerHTML = kqCanh;
    document.getElementById("tbKQ").className = " canh"
}
