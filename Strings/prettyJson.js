/*
Given a string A representating json object. Return an array of string denoting json object with proper indentaion.

Rules for proper indentaion:

Every inner brace should increase one indentation to the following lines.
Every close brace should decrease one indentation to the same line and the following lines.
The indents can be increased with an additional ‘\t’
Note:

[] and {} are only acceptable braces in this case.

Assume for this problem that space characters can be done away with.



Input Format

The only argument given is the integer array A.
Output Format

Return a list of strings, where each entry corresponds to a single line. The strings should not have "\n" character in them.
For Example

Input 1:
    A = "{A:"B",C:{D:"E",F:{G:"H",I:"J"}}}"
Output 1:
    { 
        A:"B",
        C: 
        { 
            D:"E",
            F: 
            { 
                G:"H",
                I:"J"
            } 
        } 
    }

Input 2:
    A = ["foo", {"bar":["baz",null,1.0,2]}]
Output 2:
   [
        "foo", 
        {
            "bar":
            [
                "baz", 
                null, 
                1.0, 
                2
            ]
        }
    ]
*/

function tabsString(count) {
    var tempCount = count;
    var str = '';
    while(tempCount > 0) {
        str += '\t';
        tempCount--
    }
    return str
}

function prettyJson(A) {
    var tabCount = 0;
    var result = [];
    var n = A.length
    var flag = false;

    for(var i = 0; i < n;i++) {
        var j = i;

        var str = ''
        while (A[j] !== ',') {
            if (A[j] === '{') {
                if (str.trim()) {
                    result.push(tabsString(tabCount) + str);
                    // tabCount++
                }
                result.push(tabsString(tabCount) + A[j]);
                tabCount++
                break
            } else if (A[j] === '[') {
                if (str.trim()) {
                    result.push(tabsString(tabCount) + str);
                    // tabCount++
                }
                result.push(tabsString(tabCount) + A[j]);
                tabCount++
                break
            } else if (A[j] === '}') {
                if (str.trim()) {
                    result.push(tabsString(tabCount) + str);
                    tabCount--
                }
                if ((j + 1) < n && A[j+1] === ',') {
                    result.push(tabsString(tabCount) + A[j] + A[j+1]);
                    i++    
                    j++
                    flag = true;
                } else {
                    result.push(tabsString(tabCount) + A[j]);
                    tabCount--
                }
                break
            } else if (A[j] === ']') {
                if (str.trim()) {
                    result.push(tabsString(tabCount) + str);
                    tabCount--
                }
                if ((j + 1) < n && A[j+1] === ',') {
                    result.push(tabsString(tabCount) + A[j] + A[j+1]);
                    j++
                    i++    
                    flag = true;
                } else {
                    result.push(tabsString(tabCount) + A[j]);
                    tabCount--
                }
                break
            } else {
                str += A[j]
            
            }
            j++
        }
        if (!flag) {
            if (A[j] === ',') {
                str += A[j]
                result.push(tabsString(tabCount) + str);
            }
        }
        i = j
            
    }
    result.map(r => console.log(r) )
    // return result
    
}

// var a = '["foo", {"bar":["baz",null,1.0,2]}]'
var a = '{A:"B",C:{D:"E",F:{G:"H",I:"J"}}}'
// var a = ''
var a = `{"attributes":[{"nm":"ACCOUNT","lv":[{"v":{"Id":null,"State":null},"vt":"java.util.Map","cn":1}],"vt":"java.util.Map","status":"SUCCESS","lmd":13585},{"nm":"PROFILE","lv":[{"v":{"Party":null,"Ads":null},"vt":"java.util.Map","cn":2}],"vt":"java.util.Map","status":"SUCCESS","lmd":41962}]}`
console.log(prettyJson(a))