//question 21
function q21answer(option){
    selected[20] = document.getElementById(option).value;
}
function q21(){
    document.getElementById('question').innerHTML ='<div id="q">\n\
        <b>In each of the questions 21 to 23, choose the option that has the same vowel as the one represented by the letter(s) underlined.</b>\n\
        <p><b>21)</b> C<u>oo</u>l</p>\n\
        </div>\n\
        <div id="options"><span id="left_option">\n\
            <div><input type="radio" name="option" value="a" id="a" onclick="q21answer(`a`)"/>A) look</div>\n\
            <div><input type="radio" name="option" value="b" id="b" onclick="q21answer(`b`)"/>B) should</div>\n\
        </span>\n\
        <span id="right_option">\n\
            <div><input type="radio" name="option" value="c" id="c" onclick="q21answer(`c`)"/>C) luke</div>\n\
            <div><input type="radio" name="option" value="d" id="d" onclick="q21answer(`d`)"/>D) full</div>\n\
        </span></div>\n\
        <div id="preNext">\n\
            <a href="#" onclick="q20();" id="pre">&Lt;</a>\n\
            <a href="#" onclick="q22();" id="next">&Gt;</a>\n\
            </div>';
    if(selected[20] === 'a'){
        document.getElementById('a').checked = true;
    }else if(selected[20] === 'b'){
        document.getElementById('b').checked = true;
    }else if(selected[20] === 'c'){
        document.getElementById('c').checked = true;
    }else if(selected[20] === 'd'){
        document.getElementById('d').checked = true;
    }else{
        document.getElementById('a').checked = false;
        document.getElementById('b').checked = false;
        document.getElementById('c').checked = false;
        document.getElementById('d').checked = false;
    }
    document.getElementById('l1').style = "background-color: white; color: black;";
    document.getElementById('l2').style = "";
    document.getElementById('l3').style = "";
    document.getElementById('l4').style = "";
    document.getElementById('l5').style = "";
    document.getElementById('l6').style = "";
    document.getElementById('l7').style = "";
    document.getElementById('l8').style = "";
    document.getElementById('l9').style = "";
    document.getElementById('l10').style = "";
    document.getElementById('l11').style = "";
    document.getElementById('l12').style = "";
    document.getElementById('l13').style = "";
    document.getElementById('l14').style = "";
    document.getElementById('l15').style = "";
    document.getElementById('l16').style = "";
    document.getElementById('l17').style = "";
    document.getElementById('l18').style = "";
    document.getElementById('l19').style = "";
    document.getElementById('l20').style = "";
    document.getElementById('l21').style = "background-color: black; color: white;";
    document.getElementById('l22').style = "";
    document.getElementById('l23').style = "";
    document.getElementById('l24').style = "";
    document.getElementById('l25').style = "";
    document.getElementById('l26').style = "";
    document.getElementById('l27').style = "";
    document.getElementById('l28').style = "";
    document.getElementById('l29').style = "";
    document.getElementById('l30').style = "";
    document.getElementById('l31').style = "";
    document.getElementById('l32').style = "";
    document.getElementById('l33').style = "";
    document.getElementById('l34').style = "";
    document.getElementById('l35').style = "";
    document.getElementById('l36').style = "";
    document.getElementById('l37').style = "";
    document.getElementById('l38').style = "";
    document.getElementById('l39').style = "";
    document.getElementById('l40').style = "";
}
//question 22
function q22answer(option){
    selected[21] = document.getElementById(option).value;
}
function q22(){
    document.getElementById('question').innerHTML ='<div id="q">\n\
        <p><b>22)</b>Od<u>ou</u>r</p>\n\
        </div>\n\
        <div id="options"><span id="left_option">\n\
            <div><input type="radio" name="option" value="a" id="a" onclick="q22answer(`a`)"/>A) hold</div>\n\
            <div><input type="radio" name="option" value="b" id="b" onclick="q22answer(`b`)"/>B)  flow</div>\n\
        </span>\n\
        <span id="right_option">\n\
            <div><input type="radio" name="option" value="c" id="c" onclick="q22answer(`c`)"/>C) floor</div>\n\
            <div><input type="radio" name="option" value="d" id="d" onclick="q22answer(`d`)"/>D) sugar</div>\n\
        </span></div>\n\
        <div id="preNext">\n\
            <a href="#" onclick="q21();" id="pre">&Lt;</a>\n\
            <a href="#" onclick="q23();" id="next">&Gt;</a>\n\
            </div>';
    if(selected[21] === 'a'){
        document.getElementById('a').checked = true;
    }else if(selected[21] === 'b'){
        document.getElementById('b').checked = true;
    }else if(selected[21] === 'c'){
        document.getElementById('c').checked = true;
    }else if(selected[21] === 'd'){
        document.getElementById('d').checked = true;
    }else{
        document.getElementById('a').checked = false;
        document.getElementById('b').checked = false;
        document.getElementById('c').checked = false;
        document.getElementById('d').checked = false;
    }
    document.getElementById('l1').style = "background-color: white; color: black;";
    document.getElementById('l2').style = "";
    document.getElementById('l3').style = "";
    document.getElementById('l4').style = "";
    document.getElementById('l5').style = "";
    document.getElementById('l6').style = "";
    document.getElementById('l7').style = "";
    document.getElementById('l8').style = "";
    document.getElementById('l9').style = "";
    document.getElementById('l10').style = "";
    document.getElementById('l11').style = "";
    document.getElementById('l12').style = "";
    document.getElementById('l13').style = "";
    document.getElementById('l14').style = "";
    document.getElementById('l15').style = "";
    document.getElementById('l16').style = "";
    document.getElementById('l17').style = "";
    document.getElementById('l18').style = "";
    document.getElementById('l19').style = "";
    document.getElementById('l20').style = "";
    document.getElementById('l21').style = "";
    document.getElementById('l22').style = "background-color: black; color: white;";
    document.getElementById('l23').style = "";
    document.getElementById('l24').style = "";
    document.getElementById('l25').style = "";
    document.getElementById('l26').style = "";
    document.getElementById('l27').style = "";
    document.getElementById('l28').style = "";
    document.getElementById('l29').style = "";
    document.getElementById('l30').style = "";
    document.getElementById('l31').style = "";
    document.getElementById('l32').style = "";
    document.getElementById('l33').style = "";
    document.getElementById('l34').style = "";
    document.getElementById('l35').style = "";
    document.getElementById('l36').style = "";
    document.getElementById('l37').style = "";
    document.getElementById('l38').style = "";
    document.getElementById('l39').style = "";
    document.getElementById('l40').style = "";
}
//question 23
function q23answer(option){
    selected[22] = document.getElementById(option).value;
}
function q23(){
    document.getElementById('question').innerHTML ='<div id="q">\n\
        <p><b>23)</b>P<u>al</u>m</p>\n\
        </div>\n\
        <div id="options"><span id="left_option">\n\
            <div><input type="radio" name="option" value="a" id="a" onclick="q23answer(`a`)"/>A) lunch</div>\n\
            <div><input type="radio" name="option" value="b" id="b" onclick="q23answer(`b`)"/>B) ranch</div>\n\
        </span>\n\
        <span id="right_option">\n\
            <div><input type="radio" name="option" value="c" id="c" onclick="q23answer(`c`)"/>C) plait</div>\n\
            <div><input type="radio" name="option" value="d" id="d" onclick="q23answer(`d`)"/>D) florid</div>\n\
        </span></div>\n\
        <div id="preNext">\n\
            <a href="#" onclick="q22();" id="pre">&Lt;</a>\n\
            <a href="#" onclick="q24();" id="next">&Gt;</a>\n\
            </div>';
    if(selected[22] === 'a'){
        document.getElementById('a').checked = true;
    }else if(selected[22] === 'b'){
        document.getElementById('b').checked = true;
    }else if(selected[22] === 'c'){
        document.getElementById('c').checked = true;
    }else if(selected[22] === 'd'){
        document.getElementById('d').checked = true;
    }else{
        document.getElementById('a').checked = false;
        document.getElementById('b').checked = false;
        document.getElementById('c').checked = false;
        document.getElementById('d').checked = false;
    }
    document.getElementById('l1').style = "background-color: white; color: black;";
    document.getElementById('l2').style = "";
    document.getElementById('l3').style = "";
    document.getElementById('l4').style = "";
    document.getElementById('l5').style = "";
    document.getElementById('l6').style = "";
    document.getElementById('l7').style = "";
    document.getElementById('l8').style = "";
    document.getElementById('l9').style = "";
    document.getElementById('l10').style = "";
    document.getElementById('l11').style = "";
    document.getElementById('l12').style = "";
    document.getElementById('l13').style = "";
    document.getElementById('l14').style = "";
    document.getElementById('l15').style = "";
    document.getElementById('l16').style = "";
    document.getElementById('l17').style = "";
    document.getElementById('l18').style = "";
    document.getElementById('l19').style = "";
    document.getElementById('l20').style = "";
    document.getElementById('l21').style = "";
    document.getElementById('l22').style = "";
    document.getElementById('l23').style = "background-color: black; color: white;";
    document.getElementById('l24').style = "";
    document.getElementById('l25').style = "";
    document.getElementById('l26').style = "";
    document.getElementById('l27').style = "";
    document.getElementById('l28').style = "";
    document.getElementById('l29').style = "";
    document.getElementById('l30').style = "";
    document.getElementById('l31').style = "";
    document.getElementById('l32').style = "";
    document.getElementById('l33').style = "";
    document.getElementById('l34').style = "";
    document.getElementById('l35').style = "";
    document.getElementById('l36').style = "";
    document.getElementById('l37').style = "";
    document.getElementById('l38').style = "";
    document.getElementById('l39').style = "";
    document.getElementById('l40').style = "";
}
//question 24
function q24answer(option){
    selected[23] = document.getElementById(option).value;
}
function q24(){
    document.getElementById('question').innerHTML ='<div id="q">\n\
        <b>In each of the questions 24 to 26, choose the option that has the same consonant as the one represented by the letter(s) underlined.</b>\n\
        <p><b>24)</b>Vi<u>s</u>ion</p>\n\
        </div>\n\
        <div id="options"><span id="left_option">\n\
            <div><input type="radio" name="option" value="a" id="a" onclick="q24answer(`a`)"/>A) nation</div>\n\
            <div><input type="radio" name="option" value="b" id="b" onclick="q24answer(`b`)"/>B) instruction</div>\n\
        </span>\n\
        <span id="right_option">\n\
            <div><input type="radio" name="option" value="c" id="c" onclick="q24answer(`c`)"/>C) enclosure</div>\n\
            <div><input type="radio" name="option" value="d" id="d" onclick="q24answer(`d`)"/>D) mansion</div>\n\
        </span></div>\n\
        <div id="preNext">\n\
            <a href="#" onclick="q23();" id="pre">&Lt;</a>\n\
            <a href="#" onclick="q25();" id="next">&Gt;</a>\n\
            </div>';
    if(selected[23] === 'a'){
        document.getElementById('a').checked = true;
    }else if(selected[23] === 'b'){
        document.getElementById('b').checked = true;
    }else if(selected[23] === 'c'){
        document.getElementById('c').checked = true;
    }else if(selected[23] === 'd'){
        document.getElementById('d').checked = true;
    }else{
        document.getElementById('a').checked = false;
        document.getElementById('b').checked = false;
        document.getElementById('c').checked = false;
        document.getElementById('d').checked = false;
    }
    document.getElementById('l1').style = "background-color: white; color: black;";
    document.getElementById('l2').style = "";
    document.getElementById('l3').style = "";
    document.getElementById('l4').style = "";
    document.getElementById('l5').style = "";
    document.getElementById('l6').style = "";
    document.getElementById('l7').style = "";
    document.getElementById('l8').style = "";
    document.getElementById('l9').style = "";
    document.getElementById('l10').style = "";
    document.getElementById('l11').style = "";
    document.getElementById('l12').style = "";
    document.getElementById('l13').style = "";
    document.getElementById('l14').style = "";
    document.getElementById('l15').style = "";
    document.getElementById('l16').style = "";
    document.getElementById('l17').style = "";
    document.getElementById('l18').style = "";
    document.getElementById('l19').style = "";
    document.getElementById('l20').style = "";
    document.getElementById('l21').style = "";
    document.getElementById('l22').style = "";
    document.getElementById('l23').style = "";
    document.getElementById('l24').style = "background-color: black; color: white;";
    document.getElementById('l25').style = "";
    document.getElementById('l26').style = "";
    document.getElementById('l27').style = "";
    document.getElementById('l28').style = "";
    document.getElementById('l29').style = "";
    document.getElementById('l30').style = "";
    document.getElementById('l31').style = "";
    document.getElementById('l32').style = "";
    document.getElementById('l33').style = "";
    document.getElementById('l34').style = "";
    document.getElementById('l35').style = "";
    document.getElementById('l36').style = "";
    document.getElementById('l37').style = "";
    document.getElementById('l38').style = "";
    document.getElementById('l39').style = "";
    document.getElementById('l40').style = "";
}
//question 25
function q25answer(option){
    selected[24] = document.getElementById(option).value;
}
function q25(){
    document.getElementById('question').innerHTML ='<div id="q">\n\
        <p><b>25)</b><u>G</u>nash</p>\n\
        </div>\n\
        <div id="options"><span id="left_option">\n\
            <div><input type="radio" name="option" value="a" id="a" onclick="q25answer(`a`)"/>A) king</div>\n\
            <div><input type="radio" name="option" value="b" id="b" onclick="q25answer(`b`)"/>B) forge</div>\n\
        </span>\n\
        <span id="right_option">\n\
            <div><input type="radio" name="option" value="c" id="c" onclick="q25answer(`c`)"/>C) ring</div>\n\
            <div><input type="radio" name="option" value="d" id="d" onclick="q25answer(`d`)"/>D) new</div>\n\
        </span></div>\n\
        <div id="preNext">\n\
            <a href="#" onclick="q24();" id="pre">&Lt;</a>\n\
            <a href="#" onclick="q26();" id="next">&Gt;</a>\n\
            </div>';
    if(selected[24] === 'a'){
        document.getElementById('a').checked = true;
    }else if(selected[24] === 'b'){
        document.getElementById('b').checked = true;
    }else if(selected[24] === 'c'){
        document.getElementById('c').checked = true;
    }else if(selected[24] === 'd'){
        document.getElementById('d').checked = true;
    }else{
        document.getElementById('a').checked = false;
        document.getElementById('b').checked = false;
        document.getElementById('c').checked = false;
        document.getElementById('d').checked = false;
    }
    document.getElementById('l1').style = "background-color: white; color: black;";
    document.getElementById('l2').style = "";
    document.getElementById('l3').style = "";
    document.getElementById('l4').style = "";
    document.getElementById('l5').style = "";
    document.getElementById('l6').style = "";
    document.getElementById('l7').style = "";
    document.getElementById('l8').style = "";
    document.getElementById('l9').style = "";
    document.getElementById('l10').style = "";
    document.getElementById('l11').style = "";
    document.getElementById('l12').style = "";
    document.getElementById('l13').style = "";
    document.getElementById('l14').style = "";
    document.getElementById('l15').style = "";
    document.getElementById('l16').style = "";
    document.getElementById('l17').style = "";
    document.getElementById('l18').style = "";
    document.getElementById('l19').style = "";
    document.getElementById('l20').style = "";
    document.getElementById('l21').style = "";
    document.getElementById('l22').style = "";
    document.getElementById('l23').style = "";
    document.getElementById('l24').style = "";
    document.getElementById('l25').style = "background-color: black; color: white;";
    document.getElementById('l26').style = "";
    document.getElementById('l27').style = "";
    document.getElementById('l28').style = "";
    document.getElementById('l29').style = "";
    document.getElementById('l30').style = "";
    document.getElementById('l31').style = "";
    document.getElementById('l32').style = "";
    document.getElementById('l33').style = "";
    document.getElementById('l34').style = "";
    document.getElementById('l35').style = "";
    document.getElementById('l36').style = "";
    document.getElementById('l37').style = "";
    document.getElementById('l38').style = "";
    document.getElementById('l39').style = "";
    document.getElementById('l40').style = "";
}
//question 26
function q26answer(option){
    selected[25] = document.getElementById(option).value;
}
function q26(){
    document.getElementById('question').innerHTML ='<div id="q">\n\
        <p><b>26)</b> Epita<u>ph</u></p>\n\
        </div>\n\
        <div id="options"><span id="left_option">\n\
            <div><input type="radio" name="option" value="a" id="a" onclick="q26answer(`a`)"/>A) paper</div>\n\
            <div><input type="radio" name="option" value="b" id="b" onclick="q26answer(`b`)"/>B) pseudo</div>\n\
        </span>\n\
        <span id="right_option">\n\
            <div><input type="radio" name="option" value="c" id="c" onclick="q26answer(`c`)"/>C) pneumonia</div>\n\
            <div><input type="radio" name="option" value="d" id="d" onclick="q26answer(`d`)"/>D) fan</div>\n\
        </span></div>\n\
        <div id="preNext">\n\
            <a href="#" onclick="q25();" id="pre">&Lt;</a>\n\
            <a href="#" onclick="q27();" id="next">&Gt;</a>\n\
            </div>';
    if(selected[25] === 'a'){
        document.getElementById('a').checked = true;
    }else if(selected[25] === 'b'){
        document.getElementById('b').checked = true;
    }else if(selected[25] === 'c'){
        document.getElementById('c').checked = true;
    }else if(selected[25] === 'd'){
        document.getElementById('d').checked = true;
    }else{
        document.getElementById('a').checked = false;
        document.getElementById('b').checked = false;
        document.getElementById('c').checked = false;
        document.getElementById('d').checked = false;
    }
    document.getElementById('l1').style = "background-color: white; color: black;";
    document.getElementById('l2').style = "";
    document.getElementById('l3').style = "";
    document.getElementById('l4').style = "";
    document.getElementById('l5').style = "";
    document.getElementById('l6').style = "";
    document.getElementById('l7').style = "";
    document.getElementById('l8').style = "";
    document.getElementById('l9').style = "";
    document.getElementById('l10').style = "";
    document.getElementById('l11').style = "";
    document.getElementById('l12').style = "";
    document.getElementById('l13').style = "";
    document.getElementById('l14').style = "";
    document.getElementById('l15').style = "";
    document.getElementById('l16').style = "";
    document.getElementById('l17').style = "";
    document.getElementById('l18').style = "";
    document.getElementById('l19').style = "";
    document.getElementById('l20').style = "";
    document.getElementById('l21').style = "";
    document.getElementById('l22').style = "";
    document.getElementById('l23').style = "";
    document.getElementById('l24').style = "";
    document.getElementById('l25').style = "";
    document.getElementById('l26').style = "background-color: black; color: white;";
    document.getElementById('l27').style = "";
    document.getElementById('l28').style = "";
    document.getElementById('l29').style = "";
    document.getElementById('l30').style = "";
    document.getElementById('l31').style = "";
    document.getElementById('l32').style = "";
    document.getElementById('l33').style = "";
    document.getElementById('l34').style = "";
    document.getElementById('l35').style = "";
    document.getElementById('l36').style = "";
    document.getElementById('l37').style = "";
    document.getElementById('l38').style = "";
    document.getElementById('l39').style = "";
    document.getElementById('l40').style = "";
}
//question 27
function q27answer(option){
    selected[26] = document.getElementById(option).value;
}
function q27(){
    document.getElementById('question').innerHTML ='<div id="q">\n\
        <b>In each of the questions 27 to 29, choose the option that rhymes with the given word.</b>\n\
        <p><b>27)</b>Ever</p>\n\
        </div>\n\
        <div id="options"><span id="left_option">\n\
            <div><input type="radio" name="option" value="a" id="a" onclick="q27answer(`a`)"/>A) never </div>\n\
            <div><input type="radio" name="option" value="b" id="b" onclick="q27answer(`b`)"/>B) favour </div>\n\
        </span>\n\
        <span id="right_option">\n\
            <div><input type="radio" name="option" value="c" id="c" onclick="q27answer(`c`)"/>C) heavier </div>\n\
            <div><input type="radio" name="option" value="d" id="d" onclick="q27answer(`d`)"/>D) fever</div>\n\
        </span></div>\n\
        <div id="preNext">\n\
            <a href="#" onclick="q26();" id="pre">&Lt;</a>\n\
            <a href="#" onclick="q28();" id="next">&Gt;</a>\n\
            </div>';
    if(selected[26] === 'a'){
        document.getElementById('a').checked = true;
    }else if(selected[26] === 'b'){
        document.getElementById('b').checked = true;
    }else if(selected[26] === 'c'){
        document.getElementById('c').checked = true;
    }else if(selected[26] === 'd'){
        document.getElementById('d').checked = true;
    }else{
        document.getElementById('a').checked = false;
        document.getElementById('b').checked = false;
        document.getElementById('c').checked = false;
        document.getElementById('d').checked = false;
    }
    document.getElementById('l1').style = "background-color: white; color: black;";
    document.getElementById('l2').style = "";
    document.getElementById('l3').style = "";
    document.getElementById('l4').style = "";
    document.getElementById('l5').style = "";
    document.getElementById('l6').style = "";
    document.getElementById('l7').style = "";
    document.getElementById('l8').style = "";
    document.getElementById('l9').style = "";
    document.getElementById('l10').style = "";
    document.getElementById('l11').style = "";
    document.getElementById('l12').style = "";
    document.getElementById('l13').style = "";
    document.getElementById('l14').style = "";
    document.getElementById('l15').style = "";
    document.getElementById('l16').style = "";
    document.getElementById('l17').style = "";
    document.getElementById('l18').style = "";
    document.getElementById('l19').style = "";
    document.getElementById('l20').style = "";
    document.getElementById('l21').style = "";
    document.getElementById('l22').style = "";
    document.getElementById('l23').style = "";
    document.getElementById('l24').style = "";
    document.getElementById('l25').style = "";
    document.getElementById('l26').style = "background-color: black; color: white;";
    document.getElementById('l27').style = "";
    document.getElementById('l28').style = "";
    document.getElementById('l29').style = "";
    document.getElementById('l30').style = "";
    document.getElementById('l31').style = "";
    document.getElementById('l32').style = "";
    document.getElementById('l33').style = "";
    document.getElementById('l34').style = "";
    document.getElementById('l35').style = "";
    document.getElementById('l36').style = "";
    document.getElementById('l37').style = "";
    document.getElementById('l38').style = "";
    document.getElementById('l39').style = "";
    document.getElementById('l40').style = "";
}
//question 28
function q28answer(option){
    selected[27] = document.getElementById(option).value;
}
function q28(){
    document.getElementById('question').innerHTML ='<div id="q">\n\
        <p><b>28)</b>Keep</p>\n\
        </div>\n\
        <div id="options"><span id="left_option">\n\
            <div><input type="radio" name="option" value="a" id="a" onclick="q28answer(`a`)"/>A) threat </div>\n\
            <div><input type="radio" name="option" value="b" id="b" onclick="q28answer(`b`)"/>B) reap </div>\n\
        </span>\n\
        <span id="right_option">\n\
            <div><input type="radio" name="option" value="c" id="c" onclick="q28answer(`c`)"/>C) dead </div>\n\
            <div><input type="radio" name="option" value="d" id="d" onclick="q28answer(`d`)"/>D) seethe</div>\n\
        </span></div>\n\
        <div id="preNext">\n\
            <a href="#" onclick="q27();" id="pre">&Lt;</a>\n\
            <a href="#" onclick="q29();" id="next">&Gt;</a>\n\
            </div>';
    if(selected[27] === 'a'){
        document.getElementById('a').checked = true;
    }else if(selected[27] === 'b'){
        document.getElementById('b').checked = true;
    }else if(selected[27] === 'c'){
        document.getElementById('c').checked = true;
    }else if(selected[27] === 'd'){
        document.getElementById('d').checked = true;
    }else{
        document.getElementById('a').checked = false;
        document.getElementById('b').checked = false;
        document.getElementById('c').checked = false;
        document.getElementById('d').checked = false;
    }
    document.getElementById('l1').style = "background-color: white; color: black;";
    document.getElementById('l2').style = "";
    document.getElementById('l3').style = "";
    document.getElementById('l4').style = "";
    document.getElementById('l5').style = "";
    document.getElementById('l6').style = "";
    document.getElementById('l7').style = "";
    document.getElementById('l8').style = "";
    document.getElementById('l9').style = "";
    document.getElementById('l10').style = "";
    document.getElementById('l11').style = "";
    document.getElementById('l12').style = "";
    document.getElementById('l13').style = "";
    document.getElementById('l14').style = "";
    document.getElementById('l15').style = "";
    document.getElementById('l16').style = "";
    document.getElementById('l17').style = "";
    document.getElementById('l18').style = "";
    document.getElementById('l19').style = "";
    document.getElementById('l20').style = "";
    document.getElementById('l21').style = "";
    document.getElementById('l22').style = "";
    document.getElementById('l23').style = "";
    document.getElementById('l24').style = "";
    document.getElementById('l25').style = "";
    document.getElementById('l26').style = "";
    document.getElementById('l27').style = "";
    document.getElementById('l28').style = "background-color: black; color: white;";
    document.getElementById('l29').style = "";
    document.getElementById('l30').style = "";
    document.getElementById('l31').style = "";
    document.getElementById('l32').style = "";
    document.getElementById('l33').style = "";
    document.getElementById('l34').style = "";
    document.getElementById('l35').style = "";
    document.getElementById('l36').style = "";
    document.getElementById('l37').style = "";
    document.getElementById('l38').style = "";
    document.getElementById('l39').style = "";
    document.getElementById('l40').style = "";
}
//question 29
function q29answer(option){
    selected[28] = document.getElementById(option).value;
}
function q29(){
    document.getElementById('question').innerHTML ='<div id="q">\n\
        <p><b>29)</b>Tax</p>\n\
        </div>\n\
        <div id="options"><span id="left_option">\n\
            <div><input type="radio" name="option" value="a" id="a" onclick="q29answer(`a`)"/>A) paper </div>\n\
            <div><input type="radio" name="option" value="b" id="b" onclick="q29answer(`b`)"/>B) pseudo </div>\n\
        </span>\n\
        <span id="right_option">\n\
            <div><input type="radio" name="option" value="c" id="c" onclick="q29answer(`c`)"/>C) pneumonia </div>\n\
            <div><input type="radio" name="option" value="d" id="d" onclick="q29answer(`d`)"/>D) fan</div>\n\
        </span></div>\n\
        <div id="preNext">\n\
            <a href="#" onclick="q28();" id="pre">&Lt;</a>\n\
            <a href="#" onclick="q30();" id="next">&Gt;</a>\n\
            </div>';
    if(selected[28] === 'a'){
        document.getElementById('a').checked = true;
    }else if(selected[28] === 'b'){
        document.getElementById('b').checked = true;
    }else if(selected[28] === 'c'){
        document.getElementById('c').checked = true;
    }else if(selected[28] === 'd'){
        document.getElementById('d').checked = true;
    }else{
        document.getElementById('a').checked = false;
        document.getElementById('b').checked = false;
        document.getElementById('c').checked = false;
        document.getElementById('d').checked = false;
    }
    document.getElementById('l1').style = "background-color: white; color: black;";
    document.getElementById('l2').style = "";
    document.getElementById('l3').style = "";
    document.getElementById('l4').style = "";
    document.getElementById('l5').style = "";
    document.getElementById('l6').style = "";
    document.getElementById('l7').style = "";
    document.getElementById('l8').style = "";
    document.getElementById('l9').style = "";
    document.getElementById('l10').style = "";
    document.getElementById('l11').style = "";
    document.getElementById('l12').style = "";
    document.getElementById('l13').style = "";
    document.getElementById('l14').style = "";
    document.getElementById('l15').style = "";
    document.getElementById('l16').style = "";
    document.getElementById('l17').style = "";
    document.getElementById('l18').style = "";
    document.getElementById('l19').style = "";
    document.getElementById('l20').style = "";
    document.getElementById('l21').style = "";
    document.getElementById('l22').style = "";
    document.getElementById('l23').style = "";
    document.getElementById('l24').style = "";
    document.getElementById('l25').style = "";
    document.getElementById('l26').style = "";
    document.getElementById('l27').style = "";
    document.getElementById('l28').style = "";
    document.getElementById('l29').style = "background-color: black; color: white;";
    document.getElementById('l30').style = "";
    document.getElementById('l31').style = "";
    document.getElementById('l32').style = "";
    document.getElementById('l33').style = "";
    document.getElementById('l34').style = "";
    document.getElementById('l35').style = "";
    document.getElementById('l36').style = "";
    document.getElementById('l37').style = "";
    document.getElementById('l38').style = "";
    document.getElementById('l39').style = "";
    document.getElementById('l40').style = "";
}
//question 30
function q30answer(option){
    selected[29] = document.getElementById(option).value;
}
function q30(){
    document.getElementById('question').innerHTML ='<div id="q">\n\
        <b>In each of questions 30 to 32, choose the most appropriate stress pattern from the options. The stress syllables are written in capital letters.</b>\n\
        <p><b>30)</b>valedictory</p>\n\
        </div>\n\
        <div id="options"><span id="left_option">\n\
            <div><input type="radio" name="option" value="a" id="a" onclick="q30answer(`a`)"/>A) valEdictory </div>\n\
            <div><input type="radio" name="option" value="b" id="b" onclick="q30answer(`b`)"/>B) VAledictory </div>\n\
        </span>\n\
        <span id="right_option">\n\
            <div><input type="radio" name="option" value="c" id="c" onclick="q30answer(`c`)"/>C) valeDICtory </div>\n\
            <div><input type="radio" name="option" value="d" id="d" onclick="q30answer(`d`)"/>D) valedicTORY</div>\n\
        </span></div>\n\
        <div id="preNext">\n\
            <a href="#" onclick="q29();" id="pre">&Lt;</a>\n\
            <a href="#" onclick="q31();" id="next">&Gt;</a>\n\
        </div>';
    if(selected[29] === 'a'){
        document.getElementById('a').checked = true;
    }else if(selected[29] === 'b'){
        document.getElementById('b').checked = true;
    }else if(selected[29] === 'c'){
        document.getElementById('c').checked = true;
    }else if(selected[29] === 'd'){
        document.getElementById('d').checked = true;
    }else{
        document.getElementById('a').checked = false;
        document.getElementById('b').checked = false;
        document.getElementById('c').checked = false;
        document.getElementById('d').checked = false;
    }
    document.getElementById('l1').style = "background-color: white; color: black;";
    document.getElementById('l2').style = "";
    document.getElementById('l3').style = "";
    document.getElementById('l4').style = "";
    document.getElementById('l5').style = "";
    document.getElementById('l6').style = "";
    document.getElementById('l7').style = "";
    document.getElementById('l8').style = "";
    document.getElementById('l9').style = "";
    document.getElementById('l10').style = "";
    document.getElementById('l11').style = "";
    document.getElementById('l12').style = "";
    document.getElementById('l13').style = "";
    document.getElementById('l14').style = "";
    document.getElementById('l15').style = "";
    document.getElementById('l16').style = "";
    document.getElementById('l17').style = "";
    document.getElementById('l18').style = "";
    document.getElementById('l19').style = "";
    document.getElementById('l20').style = "";
    document.getElementById('l21').style = "";
    document.getElementById('l22').style = "";
    document.getElementById('l23').style = "";
    document.getElementById('l24').style = "";
    document.getElementById('l25').style = "";
    document.getElementById('l26').style = "";
    document.getElementById('l27').style = "";
    document.getElementById('l28').style = "";
    document.getElementById('l29').style = "";
    document.getElementById('l30').style = "background-color: black; color: white;";
    document.getElementById('l31').style = "";
    document.getElementById('l32').style = "";
    document.getElementById('l33').style = "";
    document.getElementById('l34').style = "";
    document.getElementById('l35').style = "";
    document.getElementById('l36').style = "";
    document.getElementById('l37').style = "";
    document.getElementById('l38').style = "";
    document.getElementById('l39').style = "";
    document.getElementById('l40').style = "";
}