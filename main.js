function tinhThue() {
    var name = document.getElementById('name').value;
    var income = document.getElementById('income').value * 1;
    var family = document.getElementById('family').value * 1;
    var output=document.getElementById('thue')
    if (income > 0) {
        var taxRate = 0;
        if (income <= 60) {
            taxRate = 5 / 100;
        }
        else if (income <= 120) {
            taxRate = 10 / 100
        }
        else if (income <= 210) {
            taxRate = 15 / 100
        }
        else if (income <= 384) {
            taxRate = 20 / 100
        }
        else if (income <= 624) {
            taxRate = 25 / 100
        }
        else if (income <= 960) {
            taxRate = 30 / 100
        }
        else if (income > 960) {
            taxRate = 35 / 100
        }
        else {
            alert('Nhập lại')
        }
        var tax = new Intl.NumberFormat('Vn-vn').format((income - 4 - family * 1.6) * taxRate)
        var ketQua = "Ông/Bà " + name + " cần nộp thuế " + tax + " triệu đồng ";
        output.innerHTML = ketQua;
        output.style.display = "block";
    }
    else {
        alert('Nhập lại')
    }
}

function soKetnoi(){
    if(document.getElementById('doanhNghiep').checked){
    document.getElementById('box').style.display='block'
    }
    else{
        document.getElementById('box').style.display='none'
    }
}
function thanhToan(){
    var maSo=document.getElementById('maSo').value;
    var soKenh=document.getElementById('soKenh').value*1;
    var output=document.getElementById('thanhToan')
    var totalCost=0;
    if(document.getElementById('nhaDan').checked){
        totalCost= 4.5+20.5+7.5*soKenh;
    }
    else if(document.getElementById('doanhNghiep').checked){
        var soKetnoi=document.getElementById('soKetnoi').value*1;
        if(soKetnoi <=10){
            totalCost= 15+75+50*soKenh;
        }
        else{
            totalCost= 15+75+5*(soKetnoi-10)+50*soKenh;
        }
    }
    var ketQua="Mã khách: "+maSo+" cần thanh toán tiền cáp "+totalCost+" $";
    output.innerHTML = ketQua ;
    output.style.display="block";
}