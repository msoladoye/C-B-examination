//question 11
function q11answer(option){
    selected[10] = document.getElementById(option).value;
}
function q11(){
    document.getElementById('question').innerHTML ='<div id="q">\n\
        <b>In each of the following questions 11 – 20 choose the word nearest in meaning to the word or phrase in italics</b>\n\
        <p><b>11)</b> The chairman admires <i>incessant</i> meetings.</p>\n\
        </div>\n\
        <div id="options"><span id="left_option">\n\
            <div><input type="radio" name="option" value="a" id="a" onclick="q11answer(`a`)"/>A) unusual</div>\n\
            <div><input type="radio" name="option" value="b" id="b" onclick="q11answer(`b`)"/>B) planed</div>\n\
        </span>\n\
        <span id="right_option">\n\
            <div><input type="radio" name="option" value="c" id="c" onclick="q11answer(`c`)"/>C) irregular </div>\n\
            <div><input type="radio" name="option" value="d" id="d" onclick="q11answer(`d`)"/>D) constant </div>\n\
        </span></div>\n\
        <div id="preNext">\n\
            <a href="#" onclick="q10();" id="pre">&Lt;</a>\n\
            <a href="#" onclick="q12();" id="next">&Gt;</a>\n\
            </div>';
    if(selected[10] === 'a'){
        document.getElementById('a').checked = true;
    }else if(selected[10] === 'b'){
        document.getElementById('b').checked = true;
    }else if(selected[10] === 'c'){
        document.getElementById('c').checked = true;
    }else if(selected[10] === 'd'){
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
    document.getElementById('l11').style = "background-color: black; color: white;";
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
//question 12
function q12answer(option){
    selected[11] = document.getElementById(option).value;
}
function q12(){
    document.getElementById('question').innerHTML ='<div id="q">\n\
        <p><b>12)</b>Today’s weather is <i>favorable</i> for a game of tennis.</p>\n\
        </div>\n\
        <div id="options"><span id="left_option">\n\
            <div><input type="radio" name="option" value="a" id="a" onclick="q12answer(`a`)"/>A) encouraging </div>\n\
            <div><input type="radio" name="option" value="b" id="b" onclick="q12answer(`b`)"/>B) impartial</div>\n\
        </span>\n\
        <span id="right_option">\n\
            <div><input type="radio" name="option" value="c" id="c" onclick="q12answer(`c`)"/>C) disapproving</div>\n\
            <div><input type="radio" name="option" value="d" id="d" onclick="q12answer(`d`)"/>D) disapproving</div>\n\
        </span></div>\n\
        <div id="preNext">\n\
            <a href="#" onclick="q11();" id="pre">&Lt;</a>\n\
            <a href="#" onclick="q13();" id="next">&Gt;</a>\n\
            </div>';
    if(selected[11] === 'a'){
        document.getElementById('a').checked = true;
    }else if(selected[11] === 'b'){
        document.getElementById('b').checked = true;
    }else if(selected[11] === 'c'){
        document.getElementById('c').checked = true;
    }else if(selected[11] === 'd'){
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
    document.getElementById('l12').style = "background-color: black; color: white;";
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
//question 13
function q13answer(option){
    selected[12] = document.getElementById(option).value;
}
function q13(){
    document.getElementById('question').innerHTML ='<div id="q">\n\
        <p><b>13)</b>All the candidates looked <i>aghast</i> at the first reading of the questions</p>\n\
        </div>\n\
        <div id="options"><span id="left_option">\n\
            <div><input type="radio" name="option" value="a" id="a" onclick="q13answer(`a`)"/>A) satisfied</div>\n\
            <div><input type="radio" name="option" value="b" id="b" onclick="q13answer(`b`)"/>B) fulfilled</div>\n\
        </span>\n\
        <span id="right_option">\n\
            <div><input type="radio" name="option" value="c" id="c" onclick="q13answer(`c`)"/>C) dismay</div>\n\
            <div><input type="radio" name="option" value="d" id="d" onclick="q13answer(`d`)"/>D) relaxed</div>\n\
        </span></div>\n\
        <div id="preNext">\n\
            <a href="#" onclick="q12();" id="pre">&Lt;</a>\n\
            <a href="#" onclick="q14();" id="next">&Gt;</a>\n\
            </div>';
    if(selected[12] === 'a'){
        document.getElementById('a').checked = true;
    }else if(selected[12] === 'b'){
        document.getElementById('b').checked = true;
    }else if(selected[12] === 'c'){
        document.getElementById('c').checked = true;
    }else if(selected[12] === 'd'){
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
    document.getElementById('l12').style = "background-color: black; color: white;";
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
//question 14
function q14answer(option){
    selected[13] = document.getElementById(option).value;
}
function q14(){
    document.getElementById('question').innerHTML ='<div id="q">\n\
        <p><b>14)</b>Joke gave Muhammad a <i>jaunty</i> smile</p>\n\
        </div>\n\
        <div id="options"><span id="left_option">\n\
            <div><input type="radio" name="option" value="a" id="a" onclick="q14answer(`a`)"/>A) a frightful</div>\n\
            <div><input type="radio" name="option" value="b" id="b" onclick="q14answer(`b`)"/>B) a discouraging</div>\n\
        </span>\n\
        <span id="right_option">\n\
            <div><input type="radio" name="option" value="c" id="c" onclick="q14answer(`c`)"/>C) an inviting</div>\n\
            <div><input type="radio" name="option" value="d" id="d" onclick="q14answer(`d`)"/>D) a cheerful</div>\n\
        </span></div>\n\
        <div id="preNext">\n\
            <a href="#" onclick="q13();" id="pre">&Lt;</a>\n\
            <a href="#" onclick="q15();" id="next">&Gt;</a>\n\
            </div>';
    if(selected[13] === 'a'){
        document.getElementById('a').checked = true;
    }else if(selected[13] === 'b'){
        document.getElementById('b').checked = true;
    }else if(selected[13] === 'c'){
        document.getElementById('c').checked = true;
    }else if(selected[13] === 'd'){
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
    document.getElementById('l13').style = "background-color: black; color: white;";
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
//question 15
function q15answer(option){
    selected[14] = document.getElementById(option).value;
}
function q15(){
    document.getElementById('question').innerHTML ='<div id="q">\n\
        <p><b>15)</b>The first round of the tournament was a <i>doddle</i>.</p>\n\
        </div>\n\
        <div id="options"><span id="left_option">\n\
            <div><input type="radio" name="option" value="a" id="a" onclick="q15answer(`a`)"/>A) easy</div>\n\
            <div><input type="radio" name="option" value="b" id="b" onclick="q15answer(`b`)"/>B) balanced</div>\n\
        </span>\n\
        <span id="right_option">\n\
            <div><input type="radio" name="option" value="c" id="c" onclick="q15answer(`c`)"/>C) exasperating</div>\n\
            <div><input type="radio" name="option" value="d" id="d" onclick="q15answer(`d`)"/>D) dodgy</div>\n\
        </span></div>\n\
        <div id="preNext">\n\
            <a href="#" onclick="q14();" id="pre">&Lt;</a>\n\
            <a href="#" onclick="q16();" id="next">&Gt;</a>\n\
            </div>';
    if(selected[14] === 'a'){
        document.getElementById('a').checked = true;
    }else if(selected[14] === 'b'){
        document.getElementById('b').checked = true;
    }else if(selected[14] === 'c'){
        document.getElementById('c').checked = true;
    }else if(selected[14] === 'd'){
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
    document.getElementById('l15').style = "background-color: black; color: white;";
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
//question 16
function q16answer(option){
    selected[15] = document.getElementById(option).value;
}
function q16(){
    document.getElementById('question').innerHTML ='<div id="q">\n\
        <p><b>16)</b>The lazy man cast a <i>lustful</i> glance at his neighbor’s wife.</p>\n\
        </div>\n\
        <div id="options"><span id="left_option">\n\
            <div><input type="radio" name="option" value="a" id="a" onclick="q16answer(`a`)"/>A) covetous</div>\n\
            <div><input type="radio" name="option" value="b" id="b" onclick="q16answer(`b`)"/>B) hateful</div>\n\
        </span>\n\
        <span id="right_option">\n\
            <div><input type="radio" name="option" value="c" id="c" onclick="q16answer(`c`)"/>C) quick</div>\n\
            <div><input type="radio" name="option" value="d" id="d" onclick="q16answer(`d`)"/>D) envious</div>\n\
        </span></div>\n\
        <div id="preNext">\n\
            <a href="#" onclick="q15();" id="pre">&Lt;</a>\n\
            <a href="#" onclick="q17();" id="next">&Gt;</a>\n\
            </div>';
    if(selected[15] === 'a'){
        document.getElementById('a').checked = true;
    }else if(selected[15] === 'b'){
        document.getElementById('b').checked = true;
    }else if(selected[15] === 'c'){
        document.getElementById('c').checked = true;
    }else if(selected[15] === 'd'){
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
    document.getElementById('l16').style = "background-color: black; color: white;";
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
//question 17
function q17answer(option){
    selected[16] = document.getElementById(option).value;
}
function q17(){
    document.getElementById('question').innerHTML ='<div id="q">\n\
        <p><b>17)</b>They accused him of <i>fomenting</i> political unrest</p>\n\
        </div>\n\
        <div id="options"><span id="left_option">\n\
            <div><input type="radio" name="option" value="a" id="a" onclick="q17answer(`a`)"/>A) preventing</div>\n\
            <div><input type="radio" name="option" value="b" id="b" onclick="q17answer(`b`)"/>B) inciting</div>\n\
        </span>\n\
        <span id="right_option">\n\
            <div><input type="radio" name="option" value="c" id="c" onclick="q17answer(`c`)"/>C) discouraging</div>\n\
            <div><input type="radio" name="option" value="d" id="d" onclick="q17answer(`d`)"/>D) guiding</div>\n\
        </span></div>\n\
        <div id="preNext">\n\
            <a href="#" onclick="q16();" id="pre">&Lt;</a>\n\
            <a href="#" onclick="q18();" id="next">&Gt;</a>\n\
            </div>';
    if(selected[16] === 'a'){
        document.getElementById('a').checked = true;
    }else if(selected[16] === 'b'){
        document.getElementById('b').checked = true;
    }else if(selected[16] === 'c'){
        document.getElementById('c').checked = true;
    }else if(selected[16] === 'd'){
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
    document.getElementById('l17').style = "background-color: black; color: white;";
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
//question 18
function q18answer(option){
    selected[17] = document.getElementById(option).value;
}
function q18(){
    document.getElementById('question').innerHTML ='<div id="q">\n\
        <p><b>18)</b>You can <i>learn</i> a great deal just from watching other players</p>\n\
        </div>\n\
        <div id="options"><span id="left_option">\n\
            <div><input type="radio" name="option" value="a" id="a" onclick="q18answer(`a`)"/>A) allow</div>\n\
            <div><input type="radio" name="option" value="b" id="b" onclick="q18answer(`b`)"/>B) invent</div>\n\
        </span>\n\
        <span id="right_option">\n\
            <div><input type="radio" name="option" value="c" id="c" onclick="q18answer(`c`)"/>C) accumulate</div>\n\
            <div><input type="radio" name="option" value="d" id="d" onclick="q18answer(`d`)"/>D) discover</div>\n\
        </span></div>\n\
        <div id="preNext">\n\
            <a href="#" onclick="q17();" id="pre">&Lt;</a>\n\
            <a href="#" onclick="q19();" id="next">&Gt;</a>\n\
            </div>';
    if(selected[17] === 'a'){
        document.getElementById('a').checked = true;
    }else if(selected[17] === 'b'){
        document.getElementById('b').checked = true;
    }else if(selected[17] === 'c'){
        document.getElementById('c').checked = true;
    }else if(selected[17] === 'd'){
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
    document.getElementById('l18').style = "background-color: black; color: white;";
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
//question 19
function q19answer(option){
    selected[18] = document.getElementById(option).value;
}
function q19(){
    document.getElementById('question').innerHTML ='<div id="q">\n\
        <p><b>19)</b>All the researchers where asked to <i>garner</i> information on the new viral infection</p>\n\
        </div>\n\
        <div id="options"><span id="left_option">\n\
            <div><input type="radio" name="option" value="a" id="a" onclick="q19answer(`a`)"/>A) collect</div>\n\
            <div><input type="radio" name="option" value="b" id="b" onclick="q19answer(`b`)"/>B) distort</div>\n\
        </span>\n\
        <span id="right_option">\n\
            <div><input type="radio" name="option" value="c" id="c" onclick="q19answer(`c`)"/>C) disseminate</div>\n\
            <div><input type="radio" name="option" value="d" id="d" onclick="q19answer(`d`)"/>D) give</div>\n\
        </span></div>\n\
        <div id="preNext">\n\
            <a href="#" onclick="q18();" id="pre">&Lt;</a>\n\
            <a href="#" onclick="q20();" id="next">&Gt;</a>\n\
            </div>';
    if(selected[18] === 'a'){
        document.getElementById('a').checked = true;
    }else if(selected[18] === 'b'){
        document.getElementById('b').checked = true;
    }else if(selected[18] === 'c'){
        document.getElementById('c').checked = true;
    }else if(selected[18] === 'd'){
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
    document.getElementById('l19').style = "background-color: black; color: white;";
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
//question 20
function q20answer(option){
    selected[19] = document.getElementById(option).value;
}
function q20(){
    document.getElementById('question').innerHTML ='<div id="q">\n\
        <p><b>20)</b>The dispute between the two countries has in the <i>serving</i> of diplomatic relation</p>\n\
        </div>\n\
        <div id="options"><span id="left_option">\n\
            <div><input type="radio" name="option" value="a" id="a" onclick="q20answer(`a`)"/>A) breaking</div>\n\
            <div><input type="radio" name="option" value="b" id="b" onclick="q20answer(`b`)"/>B) swapping</div>\n\
        </span>\n\
        <span id="right_option">\n\
            <div><input type="radio" name="option" value="c" id="c" onclick="q20answer(`c`)"/>C) securing</div>\n\
            <div><input type="radio" name="option" value="d" id="d" onclick="q20answer(`d`)"/>D) strengthening</div>\n\
        </span></div>\n\
        <div id="preNext">\n\
            <a href="#" onclick="q19();" id="pre">&Lt;</a>\n\
            <a href="#" onclick="q21();" id="next">&Gt;</a>\n\
        </div>';
    if(selected[19] === 'a'){
        document.getElementById('a').checked = true;
    }else if(selected[19] === 'b'){
        document.getElementById('b').checked = true;
    }else if(selected[19] === 'c'){
        document.getElementById('c').checked = true;
    }else if(selected[19] === 'd'){
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
    document.getElementById('l20').style = "background-color: black; color: white;";
    document.getElementById('l21').style = "";
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