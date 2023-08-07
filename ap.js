function hienGioiThieu() {
    var hinhts = document.getElementById("lytra");
    var intro = document.getElementById("intro");
    var found = document.getElementById("found")
    console.log(hinhts.src)
    hinhts.style.display = 'none';
    intro.style.display = 'block';
    found.style.display = 'block';
}

function hienTsua() {
    let tsua = document.getElementById("sp1");
    let htra = document.getElementById("sp2");
    let sto = document.getElementById("sp3");
    tsua.style.display = 'block';
    htra.style.display = 'none';
    sto.style.display = 'none';
}

function hienHtra() {
    let tsua = document.getElementById("sp1");
    let htra = document.getElementById("sp2");
    let sto = document.getElementById("sp3");
    htra.style.display = 'block';
    tsua.style.display = 'none';
    sto.style.display = 'none';
}

function hienSto() {
    let tsua = document.getElementById("sp1");
    let htra = document.getElementById("sp2");
    let sto = document.getElementById("sp3");
    sto.style.display = 'block';
    tsua.style.display = 'none';
    htra.style.display = 'none';
}

//Chạm đổi hình sản phẩm
var trasua = new Image();
var trasua1 = new Image();
var hongtra = new Image();
var hongtra1 = new Image();
var sinhto = new Image();
var sinhto1 = new Image();
function loadAnh() {
    trasua.src = "./image/truyenthong.jpg";
    trasua1.src = "./image/truyenthong1.jpg";
    hongtra.src = "./image/hongtra.jpg";
    hongtra1.src = "./image/hongtra1.jpg";
    sinhto.src = "./image/sinhto.jpg";
    sinhto1.src = "./image/sinhto1.jpg";
}

function onTsuaEvent() {document.hinh1.src = trasua1.src;}
function outTsuaEvent() {document.hinh1.src = trasua.src}


function onHtraEvent() {document.hinh2.src = hongtra.src}
function outHtraEvent() {document.hinh2.src = hongtra1.src}

function onStoEvent() {document.hinh3.src = sinhto.src}
function outStoEvent() {document.hinh3.src = sinhto1.src}

//Hiện form tuyển dụng
function hienCV() {
    let Form = document.getElementById("tuyendung1");
    let hinhtuyen = document.getElementById("hinhtuyen");
    let yeucau = document.getElementById("Yeucau");
    let hinhtuyen1 = document.getElementById("hinhtuyen1");
    yeucau.style.display = "none";
    hinhtuyen.style.display = "none";
    Form.style.display = "block";
    hinhtuyen1.style.display = "block";

}

function guiTT() {
    let Form = document.getElementById("tuyendung1");
    let hinhtuyen = document.getElementById("hinhtuyen")
    let yeucau = document.getElementById("Yeucau");
    let hinhtuyen1 = document.getElementById("hinhtuyen1");
    var hoten = document.getElementById("hoten");
    var diachi = document.getElementById("diachi");
    var ngaysinh = document.getElementById("ngaysinh");
    if (hoten.value == "") {
        alert("Nhập họ tên");
        hoten.focus();
    } else if (diachi.value == "") {
        alert("Nhập địa chỉ");
        diachi.focus(); 
    // } else if (ngaysinh == null) {
    //     alert("Nhập ngày sinh");
    } else {
    hinhtuyen.style.display = "block";
    yeucau.style.display = "block";
    hinhtuyen1.style.display = "none";
    Form.style.display = "none";
    alert("Đã nhận thông tin! Xin Cảm ơn sự quan tâm");
    document.getElementById("ngaysinh1")
    }
}

function guiTT1() {
    var ten = document.getElementById("ten");
    var sdt = document.getElementById("sdt");
    var mail = document.getElementById("email");
    if (ten.value == "") {
        alert("Nhập họ tên");
        ten.focus();
    } else if (sdt.value == "") {
        alert("Nhập số điện thoại");
        sdt.focus();
    } else if (mail.value == "") {
        alert("Nhập Email");
        mail.focus();
    } else {
        alert("Đã nhận thông tin! Xin Cảm ơn sự quan tâm");
        ten.value = "";
        sdt.value = "";
        mail.value ="";
    }
    
}