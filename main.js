function snt(n) {
    // let n = document.getElementById('n').value
    console.log(n);
    if (n < 2) {
        document.getElementById("kq").innerText = ""
        document.getElementById("kq").innerText = "không phải là số nguyên tố"
    }
    else {
        let dem = 0;
        for (let i = 1; i <= n; i++) {
            if (n % i == 0) {
                dem++
            }
        }
        if (dem == 2) {
            document.getElementById("kq").innerText = ""
            document.getElementById("kq").innerText = "n là số nguyên tố"
        }
        else {
            document.getElementById("kq").innerText = ""
            document.getElementById("kq").innerText = "không phải là số nguyên tố"

        }
    }
}

function in1_n(n) {
    // let n=document.getElementById('n').value
    document.getElementById("kq").innerText = ""
    for (let i = 0; i <= n; i++) {
        let a = document.getElementById("kq")
        a.innerHTML = a.innerHTML + "<label>" + i + " " + "</label>"
    }

}
function in_le(n) {
    // let n=document.getElementById('n').value
    document.getElementById("kq").innerText = ""
    for (let i = 0; i <= n; i++) {
        if (i % 2 == 1) {
            let a = document.getElementById("kq")
            a.innerHTML = a.innerHTML + "<label>" + i + " " + "</label>"
        }

    }

}
function in_chan(n) {
    // let n=document.getElementById('n').value
    document.getElementById("kq").innerText = ""
    for (let i = 0; i <= n; i++) {
        if (i % 2 == 0) {
            let a = document.getElementById("kq")
            a.innerHTML = a.innerHTML + "<label>" + i + " " + "</label>"
        }

    }

}

function in_snt(n) {
    document.getElementById("kq").innerText = ""
    
    for (let j = 0; j <= n; j++) {
        let dem = 0;
        for (let i = 1; i <= j; i++) {
            if (j % i == 0) {
                dem++
            }
        } if (dem == 2) {
            let a = document.getElementById("kq")
            a.innerHTML = a.innerHTML + "<label>" + j + " " + "</label>"
        }
        else{
            console.log("no")
        }
    }
}


function sum(n) {
    // let n=document.getElementById('n').value
    let sum = 0
    document.getElementById("kq").innerText = ""
    for (let i = 0; i <= n; i++) {
        sum += i
        document.getElementById("kq").innerText = sum

    }
}

function sum_binh_phuong(n) {
    // let n=document.getElementById('n').value
    let sum = 0
    document.getElementById("kq").innerText = ""
    for (let i = 0; i <= n; i++) {
        sum += i * i
        document.getElementById("kq").innerText = sum

    }

}

function sum_le(n) {
    // let n=document.getElementById('n').value
    let sum = 0
    document.getElementById("kq").innerText = ""
    for (let i = 0; i <= n; i++) {
        if (i % 2 == 1) {
            sum += i
            document.getElementById("kq").innerText = sum
        }
    }

}


function check(n) {
    let a = String(n)
    let dem = 0
    for (let i = 0; i <= a.length - 1; i++) {
        if (a.charAt(i) % 2 == 0) {
            dem++
        }
    }
    if (dem == 1) {
        document.getElementById("kq").innerText = "không"
    }
    else {
        document.getElementById("kq").innerText = "có"
    }
}

function kq() {
    switch (document.getElementById("select").value) {
        case '0':
            snt(document.getElementById('n').value)
            break;
        case '1':
            in1_n(document.getElementById('n').value)
            break;
        case '2':
            in_le(document.getElementById('n').value)
            break;
        case '3':
            in_chan(document.getElementById('n').value)
            break;
        case '4':
            in_snt(document.getElementById('n').value)
            break;
        case '5':
            sum(document.getElementById('n').value)
            break;
        case '6':
            sum_binh_phuong(document.getElementById('n').value)
            break;
        case '7':
            sum_le(document.getElementById('n').value)
            break;
        case '8':
            check(document.getElementById('n').value)
            break;
        default:
            document.getElementById("kq").innerText = "bạn chưa chọn câu hỏi ?"
            break;
    }
}