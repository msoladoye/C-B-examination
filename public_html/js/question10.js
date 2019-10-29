//question 1
function q1answer(option){
    selected[0] = document.getElementById(option).value;
    
}
function q1(){
    document.getElementById('question').innerHTML ='<div id="q">\n\
        <b>In each of questions 1 to 10, choose the option opposite in meaning to the word or phrase in italics.</b>\n\
        <p><b>1)</b>Prolonged strike action <i>debilitated</i> the industry.</p>\n\
        </div>\n\
        <div id="options"><span id="left_option">\n\
            <div><input type="radio" name="option" value="a" id="a" onclick="q1answer(`a`)"/>A) weakness</div>\n\
            <div><input type="radio" name="option" value="b" id="b" onclick="q1answer(`b`)"/>B) destroyed</div>\n\
        </span>\n\
        <span id="right_option">\n\
            <div><input type="radio" name="option" value="c" id="c" onclick="q1answer(`c`)"/>C) invigorated</div>\n\
            <div><input type="radio" name="option" value="d" id="d" onclick="q1answer(`d`)"/>D) isolated</div>\n\
        </span></div>\n\
        <div id="preNext">\n\
            <a href="#" onclick="q40();" id="pre">&Lt;</a>\n\
            <a href="#" onclick="q2();" id="next">&Gt;</a>\n\
            </div>';
    if(selected[0] === 'a'){
        document.getElementById('a').checked = true;
    }else if(selected[0] === 'b'){
        document.getElementById('b').checked = true;
    }else if(selected[0] === 'c'){
        document.getElementById('c').checked = true;
    }else if(selected[0] === 'd'){
        document.getElementById('d').checked = true;
    }else{
        document.getElementById('a').checked = false;
        document.getElementById('b').checked = false;
        document.getElementById('c').checked = false;
        document.getElementById('d').checked = false;
    }
    document.getElementById('l1').style = "background-color: black; color: white;";
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
//question 2
function q2answer(option){
    selected[1] = document.getElementById(option).value;
}
function q2(){
    document.getElementById('question').innerHTML ='<div id="q">\n\
        <p><b>2)</b>One of the student bought <i>plagiarized</i> copy of the book.</p>\n\
        </div>\n\
        <div id="options"><span id="left_option">\n\
            <div><input type="radio" name="option" value="a" id="a" onclick="q2answer(`a`)"/>A) a revised</div>\n\
            <div><input type="radio" name="option" value="b" id="b" onclick="q2answer(`b`)"/>B) a used</div>\n\
        </span>\n\
        <span id="right_option">\n\
            <div><input type="radio" name="option" value="c" id="c" onclick="q2answer(`c`)"/>C) an original</div>\n\
            <div><input type="radio" name="option" value="d" id="d" onclick="q2answer(`d`)"/>D) an annotated</div>\n\
        </span></div>\n\
        <div id="preNext">\n\
            <a href="#" onclick="q1();" id="pre">&Lt;</a>\n\
            <a href="#" onclick="q3();" id="next">&Gt;</a>\n\
            </div>';
    if(selected[1] === 'a'){
        document.getElementById('a').checked = true;
    }else if(selected[1] === 'b'){
        document.getElementById('b').checked = true;
    }else if(selected[1] === 'c'){
        document.getElementById('c').checked = true;
    }else if(selected[1] === 'd'){
        document.getElementById('d').checked = true;
    }else{
        document.getElementById('a').checked = false;
        document.getElementById('b').checked = false;
        document.getElementById('c').checked = false;
        document.getElementById('d').checked = false;
    }
    document.getElementById('l1').style = "background-color: white; color: black;";
    document.getElementById('l2').style = "background-color: black; color: white;";
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
//question 3
function q3answer(option){
    selected[2] = document.getElementById(option).value;
}
function q3(){
    document.getElementById('question').innerHTML ='<div id="q">\n\
        <p><b>3)</b>The young girl was taken <i>aback</i> by her father’s gift of a car</p>\n\
        </div>\n\
        <div id="options"><span id="left_option">\n\
            <div><input type="radio" name="option" value="a" id="a" onclick="q3answer(`a`)"/>A) shocked</div>\n\
            <div><input type="radio" name="option" value="b" id="b" onclick="q3answer(`b`)"/>B) surprised</div>\n\
        </span>\n\
        <span id="right_option">\n\
            <div><input type="radio" name="option" value="c" id="c" onclick="q3answer(`c`)"/>C) nonplussed</div>\n\
            <div><input type="radio" name="option" value="d" id="d" onclick="q3answer(`d`)"/>D) unmoved</div>\n\
        </span></div>\n\
        <div id="preNext">\n\
            <a href="#" onclick="q2();" id="pre">&Lt;</a>\n\
            <a href="#" onclick="q4();" id="next">&Gt;</a>\n\
            </div>';
    if(selected[2] === 'a'){
        document.getElementById('a').checked = true;
    }else if(selected[2] === 'b'){
        document.getElementById('b').checked = true;
    }else if(selected[2] === 'c'){
        document.getElementById('c').checked = true;
    }else if(selected[2] === 'd'){
        document.getElementById('d').checked = true;
    }else{
        document.getElementById('a').checked = false;
        document.getElementById('b').checked = false;
        document.getElementById('c').checked = false;
        document.getElementById('d').checked = false;
    }
    document.getElementById('l1').style = "background-color: white; color: black;";
    document.getElementById('l2').style = "";
    document.getElementById('l3').style = "background-color: black; color: white;";
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
//question 4
function q4answer(option){
    selected[3] = document.getElementById(option).value;
}
function q4(){
    document.getElementById('question').innerHTML ='<div id="q">\n\
        <p><b>4)</b>Musa is a gifted but <i>erratic</i> player</p>\n\
        </div>\n\
        <div id="options"><span id="left_option">\n\
            <div><input type="radio" name="option" value="a" id="a" onclick="q4answer(`a`)"/>A) unpredictable</div>\n\
            <div><input type="radio" name="option" value="b" id="b" onclick="q4answer(`b`)"/>B) strong</div>\n\
        </span>\n\
        <span id="right_option">\n\
            <div><input type="radio" name="option" value="c" id="c" onclick="q4answer(`c`)"/>C) unstable</div>\n\
            <div><input type="radio" name="option" value="d" id="d" onclick="q4answer(`d`)"/>D) regular</div>\n\
        </span></div>\n\
        <div id="preNext">\n\
            <a href="#" onclick="q3();" id="pre">&Lt;</a>\n\
            <a href="#" onclick="q5();" id="next">&Gt;</a>\n\
            </div>';
    if(selected[3] === 'a'){
        document.getElementById('a').checked = true;
    }else if(selected[3] === 'b'){
        document.getElementById('b').checked = true;
    }else if(selected[3] === 'c'){
        document.getElementById('c').checked = true;
    }else if(selected[3] === 'd'){
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
    document.getElementById('l4').style = "background-color: black; color: white;";
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
//question 5
function q5answer(option){
    selected[4] = document.getElementById(option).value;
}
function q5(){
    document.getElementById('question').innerHTML ='<div id="q">\n\
        <p><b>5)</b>The lamp shades were <i>translucent</i>.</p>\n\
        </div>\n\
        <div id="options"><span id="left_option">\n\
            <div><input type="radio" name="option" value="a" id="a" onclick="q5answer(`a`)"/>A) luminous</div>\n\
            <div><input type="radio" name="option" value="b" id="b" onclick="q5answer(`b`)"/>B) transplant</div>\n\
        </span>\n\
        <span id="right_option">\n\
            <div><input type="radio" name="option" value="c" id="c" onclick="q5answer(`c`)"/>C) opaque</div>\n\
            <div><input type="radio" name="option" value="d" id="d" onclick="q5answer(`d`)"/>D) intersected</div>\n\
        </span></div>\n\
        <div id="preNext">\n\
            <a href="#" onclick="q4();" id="pre">&Lt;</a>\n\
            <a href="#" onclick="q6();" id="next">&Gt;</a>\n\
            </div>';
    if(selected[4] === 'a'){
        document.getElementById('a').checked = true;
    }else if(selected[4] === 'b'){
        document.getElementById('b').checked = true;
    }else if(selected[4] === 'c'){
        document.getElementById('c').checked = true;
    }else if(selected[4] === 'd'){
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
    document.getElementById('l5').style = "background-color: black; color: white;";
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
//question 6
function q6answer(option){
    selected[5] = document.getElementById(option).value;
}
function q6(){
    document.getElementById('question').innerHTML ='<div id="q">\n\
        <p><b>6)</b>My niece has an <i>unquenchable</i> thirst for adventure stories</p>\n\
        </div>\n\
        <div id="options"><span id="left_option">\n\
            <div><input type="radio" name="option" value="a" id="a" onclick="q6answer(`a`)"/>A) a reduced</div>\n\
            <div><input type="radio" name="option" value="b" id="b" onclick="q6answer(`b`)"/>B) an inextinguishable</div>\n\
        </span>\n\
        <span id="right_option">\n\
            <div><input type="radio" name="option" value="c" id="c" onclick="q6answer(`c`)"/>C) an illegitimate</div>\n\
            <div><input type="radio" name="option" value="d" id="d" onclick="q6answer(`d`)"/>D) a spurious</div>\n\
        </span></div>\n\
        <div id="preNext">\n\
            <a href="#" onclick="q5();" id="pre">&Lt;</a>\n\
            <a href="#" onclick="q7();" id="next">&Gt;</a>\n\
            </div>';
    if(selected[5] === 'a'){
        document.getElementById('a').checked = true;
    }else if(selected[5] === 'b'){
        document.getElementById('b').checked = true;
    }else if(selected[5] === 'c'){
        document.getElementById('c').checked = true;
    }else if(selected[5] === 'd'){
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
    document.getElementById('l6').style = "background-color: black; color: white;";
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
//question 7
function q7answer(option){
    selected[6] = document.getElementById(option).value;
}
function q7(){
    document.getElementById('question').innerHTML ='<div id="q">\n\
        <p><b>7)</b>Some of the neighbors have <i>antipathy</i> to dogs.</p>\n\
        </div>\n\
        <div id="options"><span id="left_option">\n\
            <div><input type="radio" name="option" value="a" id="a" onclick="q7answer(`a`)"/>A) acronym for</div>\n\
            <div><input type="radio" name="option" value="b" id="b" onclick="q7answer(`b`)"/>B) enmity towards</div>\n\
        </span>\n\
        <span id="right_option">\n\
            <div><input type="radio" name="option" value="c" id="c" onclick="q7answer(`c`)"/>C) affection for</div>\n\
            <div><input type="radio" name="option" value="d" id="d" onclick="q7answer(`d`)"/>D) alarm for</div>\n\
        </span></div>\n\
        <div id="preNext">\n\
            <a href="#" onclick="q6();" id="pre">&Lt;</a>\n\
            <a href="#" onclick="q8();" id="next">&Gt;</a>\n\
            </div>';
    if(selected[6] === 'a'){
        document.getElementById('a').checked = true;
    }else if(selected[6] === 'b'){
        document.getElementById('b').checked = true;
    }else if(selected[6] === 'c'){
        document.getElementById('c').checked = true;
    }else if(selected[6] === 'd'){
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
    document.getElementById('l7').style = "background-color: black; color: white;";
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
//question 8
function q8answer(option){
    selected[7] = document.getElementById(option).value;
}
function q8(){
    document.getElementById('question').innerHTML ='<div id="q">\n\
        <p><b>8)</b>The dressmaker <i>unpicked</i> the seam of the shirt</p>\n\
        </div>\n\
        <div id="options"><span id="left_option">\n\
            <div><input type="radio" name="option" value="a" id="a" onclick="q8answer(`a`)"/>A) picked up</div>\n\
            <div><input type="radio" name="option" value="b" id="b" onclick="q8answer(`b`)"/>B) threaded</div>\n\
        </span>\n\
        <span id="right_option">\n\
            <div><input type="radio" name="option" value="c" id="c" onclick="q8answer(`c`)"/>C) sewed up</div>\n\
            <div><input type="radio" name="option" value="d" id="d" onclick="q8answer(`d`)"/>D) tore up</div>\n\
        </span></div>\n\
        <div id="preNext">\n\
            <a href="#" onclick="q7();" id="pre">&Lt;</a>\n\
            <a href="#" onclick="q9();" id="next">&Gt;</a>\n\
            </div>';
    if(selected[7] === 'a'){
        document.getElementById('a').checked = true;
    }else if(selected[7] === 'b'){
        document.getElementById('b').checked = true;
    }else if(selected[7] === 'c'){
        document.getElementById('c').checked = true;
    }else if(selected[7] === 'd'){
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
    document.getElementById('l8').style = "background-color: black; color: white;";
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
//question 9
function q9answer(option){
    selected[8] = document.getElementById(option).value;
}
function q9(){
    document.getElementById('question').innerHTML ='<div id="q">\n\
        <p><b>9)</b>The testimony of the witness was <i>vague</i></p>\n\
        </div>\n\
        <div id="options"><span id="left_option">\n\
            <div><input type="radio" name="option" value="a" id="a" onclick="q9answer(`a`)"/>A) ambiguous</div>\n\
            <div><input type="radio" name="option" value="b" id="b" onclick="q9answer(`b`)"/>B) disturbing </div>\n\
        </span>\n\
        <span id="right_option">\n\
            <div><input type="radio" name="option" value="c" id="c" onclick="q9answer(`c`)"/>C) clear</div>\n\
            <div><input type="radio" name="option" value="d" id="d" onclick="q9answer(`d`)"/>D) true</div>\n\
        </span></div>\n\
        <div id="preNext">\n\
            <a href="#" onclick="q8();" id="pre">&Lt;</a>\n\
            <a href="#" onclick="q10();" id="next">&Gt;</a>\n\
            </div>';
    if(selected[8] === 'a'){
        document.getElementById('a').checked = true;
    }else if(selected[8] === 'b'){
        document.getElementById('b').checked = true;
    }else if(selected[8] === 'c'){
        document.getElementById('c').checked = true;
    }else if(selected[8] === 'd'){
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
    document.getElementById('l9').style = "background-color: black; color: white;";
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
//question 10
function q10answer(option){
    selected[9] = document.getElementById(option).value;
}
function q10(){
    document.getElementById('question').innerHTML ='<div id="q">\n\
        <p><b>10)</b>As a student, Isa tried <i>communal</i> living for a few years</p>\n\
        </div>\n\
        <div id="options"><span id="left_option">\n\
            <div><input type="radio" name="option" value="a" id="a" onclick="q10answer(`a`)"/>A) Shared</div>\n\
            <div><input type="radio" name="option" value="b" id="b" onclick="q10answer(`b`)"/>B) Collective</div>\n\
        </span>\n\
        <span id="right_option">\n\
            <div><input type="radio" name="option" value="c" id="c" onclick="q10answer(`c`)"/>C) General</div>\n\
            <div><input type="radio" name="option" value="d" id="d" onclick="q10answer(`d`)"/>D) Private </div>\n\
        </span></div>\n\
        <div id="preNext">\n\
            <a href="#" onclick="q9();" id="pre">&Lt;</a>\n\
            <a href="#" onclick="q11();" id="next">&Gt;</a>\n\
        </div>';
    if(selected[9] === 'a'){
        document.getElementById('a').checked = true;
    }else if(selected[9] === 'b'){
        document.getElementById('b').checked = true;
    }else if(selected[9] === 'c'){
        document.getElementById('c').checked = true;
    }else if(selected[9] === 'd'){
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
    document.getElementById('l10').style = "background-color: black; color: white;";
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