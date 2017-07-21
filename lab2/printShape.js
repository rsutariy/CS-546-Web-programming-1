/**
 * Created by Ruchika Sutariya on 6/1/2017.
 */
function checknumber(lines)
{
    if (typeof lines === 'undefined') {
        throw "Please Enter any Number !";
    }
    if (typeof lines !== 'number' || typeof lines === 'string') {
        throw "Please Enter Numerical Values Only...!";
    }
}

module.exports= {

PrintTriangle: function(lines){
    checknumber(lines);
    var i, j, sp, pattern;
    for (i = 0; i < lines; i++) {
        pattern = "";
        for (sp = lines; sp > i; sp--) {
            pattern += " ";
        }
        pattern += "\/";
        for (j = 0; j <= (2 * i) - 1; j++) {
            if (i === lines - 1) {
                pattern += "-";
            }
            else {
                pattern += " ";
            }
        }
        pattern += "\\";
        console.log(pattern);
    }
    console.log('\n');

},

PrintSquare :function (lines){
    var i, j, pattern;
    checknumber(lines);
    if (lines < 2)
        throw "Please Enter no of lines>=2 for function PrintSquare().";
    for (i = 1; i <= lines; i++) {
        pattern = "";
        pattern += "|";
        for (j = 1; j <= lines; j++) {
            if (i === 1 || i === lines)
                pattern += "-";
            else
                pattern += " ";

        }
        pattern += "|";
        console.log(pattern);

    }
console.log('\n');
},

Printrhombus : function (lines){

    var i, j, sp, pattern;
    checknumber(lines);
    if (lines < 2)
        throw "Please Enter no of lines>=2 for function Printrhombus().";
    if (lines % 2 !== 0)
        throw "Rhombus cannot be possible. Please Enter Even Number.";
    for (i = 0; i < lines / 2; i++) {
        pattern = "";
        for (sp = lines; sp >= i; sp--) {
            pattern += " ";
        }
        pattern += "\/";
        if (i === 0)
            pattern += "-";
        else {
            for (j = 0; j < (2 * i + 1); j++) {
                pattern += " ";
            }
        }
        pattern += "\\";
        console.log(pattern);
    }
    for (i = lines / 2; i > 0; i--) {
        pattern = "";
        for (sp = lines + 1; sp >= i; sp--) {
            pattern += " ";
        }
        pattern += "\\";
        if (i === 1)
            pattern += "-";
        else {
            for (j = (2 * i - 1); j > 0; j--) {
                pattern += " ";

            }
        }
        pattern += "\/";
        console.log(pattern);
    }
console.log('\n');
}
};

