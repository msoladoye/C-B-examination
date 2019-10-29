//question 31
function q31answer(option){
    selected[30] = document.getElementById(option).value;
}
function q31(){
    document.getElementById('question').innerHTML ='<div id="q">\n\
        <p><b>31)</b>congratulation</p>\n\
        </div>\n\
        <div id="options"><span id="left_option">\n\
            <div><input type="radio" name="option" value="a" id="a" onclick="q31answer(`a`)"/>A) CONgratulation </div>\n\
            <div><input type="radio" name="option" value="b" id="b" onclick="q31answer(`b`)"/>B) congratulation </div>\n\
        </span>\n\
        <span id="right_option">\n\
            <div><input type="radio" name="option" value="c" id="c" onclick="q31answer(`c`)"/>C) congraTUlation </div>\n\
            <div><input type="radio" name="option" value="d" id="d" onclick="q31answer(`d`)"/>D) congratulation</div>\n\
        </span></div>\n\
        <div id="preNext">\n\
            <a href="#" onclick="q30();" id="pre">&Lt;</a>\n\
            <a href="#" onclick="q32();" id="next">&Gt;</a>\n\
            </div>';
    if(selected[30] === 'a'){
        document.getElementById('a').checked = true;
    }else if(selected[30] === 'b'){
        document.getElementById('b').checked = true;
    }else if(selected[30] === 'c'){
        document.getElementById('c').checked = true;
    }else if(selected[30] === 'd'){
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
    document.getElementById('l30').style = "";
    document.getElementById('l31').style = "background-color: black; color: white;";
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
//question 32
function q32answer(option){
    selected[31] = document.getElementById(option).value;
}
function q32(){
    document.getElementById('question').innerHTML ='<div id="q">\n\
        <p><b>32)</b>conspiracy</p>\n\
        </div>\n\
        <div id="options"><span id="left_option">\n\
            <div><input type="radio" name="option" value="a" id="a" onclick="q32answer(`a`)"/>A) conspiracy </div>\n\
            <div><input type="radio" name="option" value="b" id="b" onclick="q32answer(`b`)"/>B) conspiracy </div>\n\
        </span>\n\
        <span id="right_option">\n\
            <div><input type="radio" name="option" value="c" id="c" onclick="q32answer(`c`)"/>C) CONspiracy</div>\n\
            <div><input type="radio" name="option" value="d" id="d" onclick="q32answer(`d`)"/>D) conspiracy</div>\n\
        </span></div>\n\
        <div id="preNext">\n\
            <a href="#" onclick="q31();" id="pre">&Lt;</a>\n\
            <a href="#" onclick="q33();" id="next">&Gt;</a>\n\
            </div>';
    if(selected[31] === 'a'){
        document.getElementById('a').checked = true;
    }else if(selected[31] === 'b'){
        document.getElementById('b').checked = true;
    }else if(selected[31] === 'c'){
        document.getElementById('c').checked = true;
    }else if(selected[31] === 'd'){
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
    document.getElementById('l30').style = "";
    document.getElementById('l31').style = "";
    document.getElementById('l32').style = "background-color: black; color: white;";
    document.getElementById('l33').style = "";
    document.getElementById('l34').style = "";
    document.getElementById('l35').style = "";
    document.getElementById('l36').style = "";
    document.getElementById('l37').style = "";
    document.getElementById('l38').style = "";
    document.getElementById('l39').style = "";
    document.getElementById('l40').style = "";
}
//question 33
function q33answer(option){
    selected[32] = document.getElementById(option).value;
}
function q33(){
    document.getElementById('question').innerHTML ='<div id="q">\n\
        <b>In each of questions 33 to 35, the word in capital letters  has the emphatic stress. Choose the option to which the  given sentence relates.</b>\n\
        <p><b>33)</b>My mother bought a BICYCLE yesterday.</p>\n\
        </div>\n\
        <div id="options"><span id="left_option">\n\
            <div><input type="radio" name="option" value="a" id="a" onclick="q33answer(`a`)"/>A) Whose mother bought a bicycle yesterday?</div>\n\
            <div><input type="radio" name="option" value="b" id="b" onclick="q33answer(`b`)"/>B) Did my mother steal a bicycle yesterday?</div>\n\
        </span>\n\
        <span id="right_option">\n\
            <div><input type="radio" name="option" value="c" id="c" onclick="q33answer(`c`)"/>C) When did my mother buy a bicycle?</div>\n\
            <div><input type="radio" name="option" value="d" id="d" onclick="q33answer(`d`)"/>D) What did my mother buy a  yesterday?</div>\n\
        </span></div>\n\
        <div id="preNext">\n\
            <a href="#" onclick="q32();" id="pre">&Lt;</a>\n\
            <a href="#" onclick="q34();" id="next">&Gt;</a>\n\
            </div>';
    if(selected[32] === 'a'){
        document.getElementById('a').checked = true;
    }else if(selected[32] === 'b'){
        document.getElementById('b').checked = true;
    }else if(selected[32] === 'c'){
        document.getElementById('c').checked = true;
    }else if(selected[32] === 'd'){
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
    document.getElementById('l30').style = "";
    document.getElementById('l31').style = "";
    document.getElementById('l32').style = "";
    document.getElementById('l33').style = "background-color: black; color: white;";
    document.getElementById('l34').style = "";
    document.getElementById('l35').style = "";
    document.getElementById('l36').style = "";
    document.getElementById('l37').style = "";
    document.getElementById('l38').style = "";
    document.getElementById('l39').style = "";
    document.getElementById('l40').style = "";
}
//question 34
function q34answer(option){
    selected[33] = document.getElementById(option).value;
}
function q34(){
    document.getElementById('question').innerHTML ='<div id="q">\n\
        <p><b>34)</b> AMINA  went to Abuja by air.</p>\n\
        </div>\n\
        <div id="options"><span id="left_option">\n\
            <div><input type="radio" name="option" value="a" id="a" onclick="q34answer(`a`)"/>A)  Did Amina go to Abuja by road?</div>\n\
            <div><input type="radio" name="option" value="b" id="b" onclick="q34answer(`b`)"/>B) Did Amina go to job by air?</div>\n\
        </span>\n\
        <span id="right_option">\n\
            <div><input type="radio" name="option" value="c" id="c" onclick="q34answer(`c`)"/>C) Is Amina going to Abuja by air?</div>\n\
            <div><input type="radio" name="option" value="d" id="d" onclick="q34answer(`d`)"/>D) Who went to Abuja by air?</div>\n\
        </span></div>\n\
        <div id="preNext">\n\
            <a href="#" onclick="q33();" id="pre">&Lt;</a>\n\
            <a href="#" onclick="q35();" id="next">&Gt;</a>\n\
            </div>';
    if(selected[33] === 'a'){
        document.getElementById('a').checked = true;
    }else if(selected[33] === 'b'){
        document.getElementById('b').checked = true;
    }else if(selected[33] === 'c'){
        document.getElementById('c').checked = true;
    }else if(selected[33] === 'd'){
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
    document.getElementById('l30').style = "";
    document.getElementById('l31').style = "";
    document.getElementById('l32').style = "";
    document.getElementById('l33').style = "";
    document.getElementById('l34').style = "background-color: black; color: white;";
    document.getElementById('l35').style = "";
    document.getElementById('l36').style = "";
    document.getElementById('l37').style = "";
    document.getElementById('l38').style = "";
    document.getElementById('l39').style = "";
    document.getElementById('l40').style = "";
}
//question 35
function q35answer(option){
    selected[34] = document.getElementById(option).value;
}
function q35(){
    document.getElementById('question').innerHTML ='<div id="q">\n\
        <p><b>35)</b>Musa is STAYING in Enugu</p>\n\
        </div>\n\
        <div id="options"><span id="left_option">\n\
            <div><input type="radio" name="option" value="a" id="a" onclick="q35answer(`a`)"/>A) . Is Audu staying in Enugu?</div>\n\
            <div><input type="radio" name="option" value="b" id="b" onclick="q35answer(`b`)"/>B) Was Musa staying in Enugu?</div>\n\
        </span>\n\
        <span id="right_option">\n\
            <div><input type="radio" name="option" value="c" id="c" onclick="q35answer(`c`)"/>C) Is Musa passing through Enugu?</div>\n\
            <div><input type="radio" name="option" value="d" id="d" onclick="q35answer(`d`)"/>D) Is Musa staying on the outskirts of Enugu?</div>\n\
        </span></div>\n\
        <div id="preNext">\n\
            <a href="#" onclick="q34();" id="pre">&Lt;</a>\n\
            <a href="#" onclick="q36();" id="next">&Gt;</a>\n\
            </div>';
    if(selected[34] === 'a'){
        document.getElementById('a').checked = true;
    }else if(selected[34] === 'b'){
        document.getElementById('b').checked = true;
    }else if(selected[34] === 'c'){
        document.getElementById('c').checked = true;
    }else if(selected[34] === 'd'){
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
    document.getElementById('l30').style = "";
    document.getElementById('l31').style = "";
    document.getElementById('l32').style = "";
    document.getElementById('l33').style = "";
    document.getElementById('l34').style = "";
    document.getElementById('l35').style = "background-color: black; color: white;";
    document.getElementById('l36').style = "";
    document.getElementById('l37').style = "";
    document.getElementById('l38').style = "";
    document.getElementById('l39').style = "";
    document.getElementById('l40').style = "";
}
//question 36
function q36answer(option){
    selected[35] = document.getElementById(option).value;
}
function q36(){
    document.getElementById('question').innerHTML ='<div id="q">\n\
        <b>In each of questions 98 to 100, choose the word that best completes the gap(s).</b>\n\
        <p><b>36)</b>Those ........ are very beautiful</p>\n\
        </div>\n\
        <div id="options"><span id="left_option">\n\
            <div><input type="radio" name="option" value="a" id="a" onclick="q36answer(`a`)"/>A) our flowers </div>\n\
            <div><input type="radio" name="option" value="b" id="b" onclick="q36answer(`b`)"/>B) flowers of her </div>\n\
        </span>\n\
        <span id="right_option">\n\
            <div><input type="radio" name="option" value="c" id="c" onclick="q36answer(`c`)"/>C) flowers of ours </div>\n\
            <div><input type="radio" name="option" value="d" id="d" onclick="q36answer(`d`)"/>D) flower’s her’s</div>\n\
        </span></div>\n\
        <div id="preNext">\n\
            <a href="#" onclick="q35();" id="pre">&Lt;</a>\n\
            <a href="#" onclick="q37();" id="next">&Gt;</a>\n\
            </div>';
    if(selected[35] === 'a'){
        document.getElementById('a').checked = true;
    }else if(selected[35] === 'b'){
        document.getElementById('b').checked = true;
    }else if(selected[35] === 'c'){
        document.getElementById('c').checked = true;
    }else if(selected[35] === 'd'){
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
    document.getElementById('l30').style = "";
    document.getElementById('l31').style = "";
    document.getElementById('l32').style = "";
    document.getElementById('l33').style = "";
    document.getElementById('l34').style = "";
    document.getElementById('l35').style = "";
    document.getElementById('l36').style = "background-color: black; color: white;";
    document.getElementById('l37').style = "";
    document.getElementById('l38').style = "";
    document.getElementById('l39').style = "";
    document.getElementById('l40').style = "";
}
//question 37
function q37answer(option){
    selected[36] = document.getElementById(option).value;
}
function q37(){
    document.getElementById('question').innerHTML ='<div id="q">\n\
        <p><b>37)</b>The word … divide between the end of one line.</p>\n\
        </div>\n\
        <div id="options"><span id="left_option">\n\
            <div><input type="radio" name="option" value="a" id="a" onclick="q37answer(`a`)"/>A) has been </div>\n\
            <div><input type="radio" name="option" value="b" id="b" onclick="q37answer(`b`)"/>B) have been </div>\n\
        </span>\n\
        <span id="right_option">\n\
            <div><input type="radio" name="option" value="c" id="c" onclick="q37answer(`c`)"/>C) has being </div>\n\
            <div><input type="radio" name="option" value="d" id="d" onclick="q37answer(`d`)"/>D) have being</div>\n\
        </span></div>\n\
        <div id="preNext">\n\
            <a href="#" onclick="q36();" id="pre">&Lt;</a>\n\
            <a href="#" onclick="q38();" id="next">&Gt;</a>\n\
            </div>';
    if(selected[36] === 'a'){
        document.getElementById('a').checked = true;
    }else if(selected[36] === 'b'){
        document.getElementById('b').checked = true;
    }else if(selected[36] === 'c'){
        document.getElementById('c').checked = true;
    }else if(selected[36] === 'd'){
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
    document.getElementById('l30').style = "";
    document.getElementById('l31').style = "";
    document.getElementById('l32').style = "";
    document.getElementById('l33').style = "";
    document.getElementById('l34').style = "";
    document.getElementById('l35').style = "";
    document.getElementById('l36').style = "";
    document.getElementById('l37').style = "background-color: black; color: white;";
    document.getElementById('l38').style = "";
    document.getElementById('l39').style = "";
    document.getElementById('l40').style = "";
}
//question 38
function q38answer(option){
    selected[37] = document.getElementById(option).value;
}
function q38(){
    document.getElementById('question').innerHTML ='<div id="q">\n\
        <p><b>38)</b>Cooking has never been jumoke’s ......</p>\n\
        </div>\n\
        <div id="options"><span id="left_option">\n\
            <div><input type="radio" name="option" value="a" id="a" onclick="q38answer(`a`)"/>A) style </div>\n\
            <div><input type="radio" name="option" value="b" id="b" onclick="q38answer(`b`)"/>B) recital </div>\n\
        </span>\n\
        <span id="right_option">\n\
            <div><input type="radio" name="option" value="c" id="c" onclick="q38answer(`c`)"/>C) forte </div>\n\
            <div><input type="radio" name="option" value="d" id="d" onclick="q38answer(`d`)"/>D) purview</div>\n\
        </span></div>\n\
        <div id="preNext">\n\
            <a href="#" onclick="q37();" id="pre">&Lt;</a>\n\
            <a href="#" onclick="q39();" id="next">&Gt;</a>\n\
            </div>';
    if(selected[37] === 'a'){
        document.getElementById('a').checked = true;
    }else if(selected[37] === 'b'){
        document.getElementById('b').checked = true;
    }else if(selected[37] === 'c'){
        document.getElementById('c').checked = true;
    }else if(selected[37] === 'd'){
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
    document.getElementById('l30').style = "";
    document.getElementById('l31').style = "";
    document.getElementById('l32').style = "";
    document.getElementById('l33').style = "";
    document.getElementById('l34').style = "";
    document.getElementById('l35').style = "";
    document.getElementById('l36').style = "";
    document.getElementById('l37').style = "";
    document.getElementById('l38').style = "background-color: black; color: white;";
    document.getElementById('l39').style = "";
    document.getElementById('l40').style = "";
}
//question 39
function q39answer(option){
    selected[38] = document.getElementById(option).value;
}
function q39(){
    document.getElementById('question').innerHTML ='<div id="q">\n\
        <p><b>39)</b>The knight spent all the night pacing  </p>\n\
        </div>\n\
        <div id="options"><span id="left_option">\n\
            <div><input type="radio" name="option" value="a" id="a" onclick="q39answer(`a`)"/>A) to and from </div>\n\
            <div><input type="radio" name="option" value="b" id="b" onclick="q39answer(`b`)"/>B) from and to </div>\n\
        </span>\n\
        <span id="right_option">\n\
            <div><input type="radio" name="option" value="c" id="c" onclick="q39answer(`c`)"/>C) to and fro </div>\n\
            <div><input type="radio" name="option" value="d" id="d" onclick="q39answer(`d`)"/>D) D fro and to </div>\n\
        </span></div>\n\
        <div id="preNext">\n\
            <a href="#" onclick="q38();" id="pre">&Lt;</a>\n\
            <a href="#" onclick="q40();" id="next">&Gt;</a>\n\
            </div>';
    if(selected[38] === 'a'){
        document.getElementById('a').checked = true;
    }else if(selected[38] === 'b'){
        document.getElementById('b').checked = true;
    }else if(selected[38] === 'c'){
        document.getElementById('c').checked = true;
    }else if(selected[38] === 'd'){
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
    document.getElementById('l30').style = "";
    document.getElementById('l31').style = "";
    document.getElementById('l32').style = "";
    document.getElementById('l33').style = "";
    document.getElementById('l34').style = "";
    document.getElementById('l35').style = "";
    document.getElementById('l36').style = "";
    document.getElementById('l37').style = "";
    document.getElementById('l38').style = "";
    document.getElementById('l39').style = "background-color: black; color: white;";
    document.getElementById('l40').style = "";
}
//question 40
function q40answer(option){
    selected[49] = document.getElementById(option).value;
}
function q40(){
    document.getElementById('question').innerHTML ='<div id="q">\n\
        <p><b>40)</b>The woman refused to testify ..... her husband.</p>\n\
        </div>\n\
        <div id="options"><span id="left_option">\n\
            <div><input type="radio" name="option" value="a" id="a" onclick="q40answer(`a`)"/>A) against </div>\n\
            <div><input type="radio" name="option" value="b" id="b" onclick="q40answer(`b`)"/>B) in</div>\n\
        </span>\n\
        <span id="right_option">\n\
            <div><input type="radio" name="option" value="c" id="c" onclick="q40answer(`c`)"/>C) from</div>\n\
            <div><input type="radio" name="option" value="d" id="d" onclick="q40answer(`d`)"/>D) at</div>\n\
        </span></div>\n\
        <div id="preNext">\n\
            <a href="#" onclick="q39();" id="pre">&Lt;</a>\n\
            <a href="#" onclick="q1();" id="next">&Gt;</a>\n\
        </div>';
    if(selected[39] === 'a'){
        document.getElementById('a').checked = true;
    }else if(selected[39] === 'b'){
        document.getElementById('b').checked = true;
    }else if(selected[39] === 'c'){
        document.getElementById('c').checked = true;
    }else if(selected[39] === 'd'){
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
    document.getElementById('l40').style = "background-color: black; color: white;";
}