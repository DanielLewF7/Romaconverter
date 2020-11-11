$(document).ready(function() {
    $(".romsub").click(function () {
        var i = 0;
        var input = $("#rom").val();
        var counter = input.length;
        var index;
        var Ergebnis = 0;
        while (counter > i) {
            i++;
            index = counter - i;
            var preindex = index - 1;
            var temp = romaconvert(input[index]);
            var temp2 = romaconvert(input[preindex]);
            if (temp <= temp2 || preindex < 0) {
                Ergebnis += temp;
            } else if (temp2 < temp && temp2 >= 0) {
                Ergebnis += temp - temp2;
                i++;
            }
        }
        $("#newdez").val(Ergebnis);
    });
    function romaconvert (romachar) {
        switch (romachar) {
            case "I":
                return 1;
                break;
            case "V":
                return 5;
                break;
            case "X":
                return 10;
                break;
            case "L":
                return 50;
                break;
            case "C":
                return 100;
                break;
            case "D":
                return 500;
                break;
            case "M":
                return 1000;
                break;
            default:

        }
    }
});