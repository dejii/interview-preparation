/*
Given an array of words and a length L, format the text such that each line has exactly
 L characters and is fully (left and right) justified.
You should pack your words in a greedy approach; that is, pack as many words as you can in each line.

Pad extra spaces ‘ ‘ when necessary so that each line has exactly L characters.
Extra spaces between words should be distributed as evenly as possible.
If the number of spaces on a line do not divide evenly between words, the empty slots on the left will be assigned more spaces than the slots on the right.
For the last line of text, it should be left justified and no extra space is inserted between words.

Your program should return a list of strings, where each string represents a single line.

Example:

words: ["This", "is", "an", "example", "of", "text", "justification."]

L: 16.

Return the formatted lines as:

[
   "This    is    an",
   "example  of text",
   "justification.  "
]
 Note: Each word is guaranteed not to exceed L in length. 
*/

function justify(text, B) {

    var n = text.length;
    text = text.split('+');
    if (text.length === 1) {
        var j = 0;
        while (n < B) {
            text[j] = text[j] + ' '
            n++
        }

    } else { // add spaces after each one but the last one
        for (var i = 0; i < text.length - 1; i++) {
            text[i] = text[i] + ' '
        }
        var j = 0;
        while (n < B) {
            text[j] = text[j] + ' '
            n++
            j = (j+1) % (text.length - 1)
        }

    }

    return text.join('')

    
}

function justifiedText(A, B) {
    var result = [];
    for (var i = 0; i < A.length;) {
        var count = 0;
        var text = '';
        while(count <= B && i < A.length) {
            text += A[i] + '+';
            count += A[i].length + 1;
            if ((i + 1 < A.length) && (count + A[i+1].length > B)) {
                count = B + 1
            
                text = text.substring(0, text.length - 1)
            }
            i++
        }
        result.push(text);

    }
    // console.log(result)
    // justify up to n - 1
    for (var i = 0; i < result.length - 1; i++) {
        result[i] = justify(result[i], B)
    }   
    // justify the last item
    var lastStr = result[result.length - 1]
    var lastStr = lastStr.split('+')
    lastStr.pop();

    for (var i = 0; i < lastStr.length - 1; i++) {
        lastStr[i] = lastStr[i] + ' '
    }
    lastStr = lastStr.join('')
    while (lastStr.length < B) {
        lastStr += ' ';
    }
    result[result.length - 1] = lastStr;




    return result

}


// var a  = ['This', 'is', 'an', 'example', 'of', 'text', 'justification.'];
// var a = ['deji', 'is']
// var a = [""]
// var a = ["What","must","be","acknowledgment","shall","be"]
var a = ["Science","is","what","we","understand","well","enough","to","explain","to","a","computer.","Art","is","everything","else","we","do"]
// var c = `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).`
// var a = ["ask","not","what","your","country","can","do","for","you","ask","what","you","can","do","for","your","country"]
// var a = ["Listen","to","many,","speak","to","a","few."]
// a = c.split(' ')

var b = 20;
console.log(justifiedText(a, b))