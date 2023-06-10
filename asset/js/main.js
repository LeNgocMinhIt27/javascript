html = ''
html += `<table>`
for (var i = 1; i < 9; i++) {
    html += `
<thead style="margin-bottom:1px;display:block;"> 
<tr><span style="padding:22px">${i}</span></tr>
</thead>
`
}
for (var i = 8; i > 0; i--) {
    html += `
<tr>
    <td>${i}</td>
<td class="square" id="${1}_${i}"><div class=""></div></td>
<td class="square" id="${2}_${i}"><div class=""></div></td>
<td class="square" id="${3}_${i}"><div class=""></div></td>
<td class="square" id="${4}_${i}"><div class=""></div></td>
<td class="square" id="${5}_${i}"><div class=""></div></td>
<td class="square" id="${6}_${i}"><div class=""></div></td>
<td class="square" id="${7}_${i}"><div class=""></div></td>
<td class="square" id="${8}_${i}"><div class=""></div></td>
<td>${i}</td>
</tr>`
}
html += `</table>`
for (var i = 1; i < 9; i++) {
    html += `

<span style="padding-left:20px;padding-right:22px;margin-top:8px;display:inline-block">${i}</span>`
}
html += `
<div class="f_pure">
Quân tịnh   
    <input type="number" style="margin-left:15px" id="f_pure_1" min="1" max="8">
    <input type="number" id="f_pure_2" min="1" max="8">
    <button onclick="move_pure()" id="pure">Xóa</button>
</div>
<div class="f_knight">
    Quân mã   
    <input type="number" style="margin-left:15px" id="f_horse_1" min="1" max="8">
    <input type="number" id="f_horse_2" min="1" max="8">
    <button onclick="move_knight()" id="knight">Xóa</button>
</div>
`
document.getElementById('wrapper').innerHTML = html

const f_pure_1 = document.getElementById('f_pure_1')
const f_pure_2 = document.getElementById('f_pure_2')
const squares = document.getElementsByClassName("square");
var f_pure_1_value = parseInt(document.getElementById('f_pure_1').value);
var f_pure_2_value = parseInt(document.getElementById('f_pure_2').value);
// Tìm các nước có thể đi từ vị trí hiện tại của quân tịnh
function pure(x, y) {
    var moves = []
    document.getElementById(`${x}_${y}`).style.backgroundColor = 'red'
    for (var i = 1; i < 8; i++) {
        let newx = x + i;
        let newy = y + i;
        let newa = x - i;
        let newb = y - i;
        if (newx <= 8 && newy <= 8) {
            moves.push([newx, newy])
        }
        if (newa <= 8
            && newa > 0
            && newb > 0
            && newb <= 8) {
            moves.push([newa, newb])
        }
        if (newx <= 8
            && newb > 0
            && newb <= 8) {
            moves.push([newx, newb])
        }
        if (newa <= 8
            && newa > 0
            && newy <= 8) {
            moves.push([newa, newy])
        }
    }
    return moves;
}
// Sự kiên onclick
function move_pure() {
    move_knight()
}
// Sự kiện onchange 1
f_pure_1.addEventListener('change', function (e) {
    e.preventDefault();
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = '#f4d6a7'
    }
    var new_f_pure_1_value = parseInt(this.value);
    var new_f_pure_2_value = parseInt(document.getElementById('f_pure_2').value);
    if(new_f_pure_2_value){
    var moves = pure(new_f_pure_1_value, new_f_pure_2_value);
    var moves_length = moves.length;
    for (var i = 0; i < moves_length; i++) {
        let x = moves[i][0];
        let y = moves[i][1];
        var abc = document.getElementById(`${x}_${y}`).style.backgroundColor = '#000'
    }
}
})
// Sự kiện onchange 2
f_pure_2.addEventListener('change', function (e) {
    e.preventDefault();
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = '#f4d6a7'
    }
    var new_f_pure_1_value = parseInt(document.getElementById('f_pure_1').value);
    var new_f_pure_2_value = parseInt(this.value);
    if(new_f_pure_1_value){
    var moves = pure(new_f_pure_1_value, new_f_pure_2_value);
    var moves_length = moves.length;
    for (var i = 0; i < moves_length; i++) {
        let x = moves[i][0];
        let y = moves[i][1];
        var abc = document.getElementById(`${x}_${y}`).style.backgroundColor = '#000'
    }
}
})
// quân mã
//Các nước đi của quân mã
const f_horse_1 = document.getElementById('f_horse_1')
const f_horse_2 = document.getElementById('f_horse_2')
var f_horse_1_value = parseInt(document.getElementById('f_horse_1').value);
var f_horse_2_value = parseInt(document.getElementById('f_horse_2').value);
function knight(a, b) {
    var horses = []
    document.getElementById(`${a}_${b}`).style.backgroundColor = 'blue'
    var nwx = a + 2;
    var nwy = b + 1;
    var nwz = b - 1;
    var nwk = a - 2;
    var nwa = b + 2;
    var nwb = a + 1;
    var nwc = a - 1;
    var nwd = b - 2;
    if (nwx <= 8 && nwy <= 8) {
        horses.push([nwx, nwy])
    }
    if (nwx <= 8 && nwz > 0) {
        horses.push([nwx, nwz])
    }
    if (nwk > 0 && nwy <= 8) {
        horses.push([nwk, nwy])
    }
    if (nwk > 0 && nwz > 0) {
        horses.push([nwk, nwz])
    }
    //    //
    if (nwa <= 8 && nwb <= 8) {
        horses.push([nwb, nwa])
    }
    if (nwa <= 8 && nwc > 0) {
        horses.push([nwc, nwa])
    }
    if (nwd > 0 && nwb <= 8) {
        horses.push([nwb, nwd])
    }
    if (nwd > 0 && nwc > 0) {
        horses.push([nwc, nwd])
    }
    return horses
}
// Sự kiên onclick
function move_knight() {
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = '#f4d6a7'
    }

}
// Sự kiện onchange 1
f_horse_1.addEventListener('change', function (e) {
    e.preventDefault();
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = '#f4d6a7'
    }
    var new_f_horse_1_value = parseInt(this.value);
    var new_f_horse_2_value = parseInt(document.getElementById('f_horse_2').value);
    if(new_f_horse_2_value){
    var horses = knight(new_f_horse_1_value, new_f_horse_2_value);
    var moves_length = horses.length;
    for (var i = 0; i < moves_length; i++) {
        let x = horses[i][0];
        let y = horses[i][1];
        var abc = document.getElementById(`${x}_${y}`).style.backgroundColor = '#000'
    }
}
})
// Sự kiện onchange 2
f_horse_2.addEventListener('change', function (e) {
    e.preventDefault();
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = '#f4d6a7'
    }
    var new_f_horse_1_value = parseInt(document.getElementById('f_horse_1').value);
    var new_f_horse_2_value = parseInt(this.value);
    if(new_f_horse_1_value){
    var horses = knight(new_f_horse_1_value, new_f_horse_2_value);
    var moves_length = horses.length;
    for (var i = 0; i < moves_length; i++) {
        let x = horses[i][0];
        let y = horses[i][1];
        var abc = document.getElementById(`${x}_${y}`).style.backgroundColor = '#000'
    }
}
})