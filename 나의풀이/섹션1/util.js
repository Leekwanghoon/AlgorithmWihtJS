
/**
 * 총 88문제
 *  @todo Section1: 17문제 기본문제풀이(2/14완료)(o)
 *  @todo Section2: 7문제 1,2차원 탐색(2/15) 수요일(o)
 *  @todo Section3: 5문제 문자열탐색(2/15) 수요일(o)
 *  @todo Section4: 5문제 완전탐색(브루트포스)(2/16) 목요일(o)
 *  @todo Section5: 8문제 효율성(투포인터,슬라이딩윈도우)(2/17) 금요일(o)
 *  @todo Section6: 7문제 자료구조(스택,큐)(2/18) 토요일(o)
 *  @todo Section7: 12문제 정렬과 그리디, 결정알고리즘(2/20~21) 월~화요일 결혼식부터 풀이
 *  @todo Section8: 15문제 재귀함수와 완전탐색(깊이우선탐색, DFS)(2/22~23) 수~목요일
 *  @todo Section9: 7문제 그래프와 탐색(DFS, BFS(넓이우선))(2/24) 금요일(o)
 *  @todo Section10: 5문제 Dynamic programming(동적계획법)(2/25) 토요일
 */


const slice = Array.prototype.slice;

function _curry(fn) {
    return function(a) {
        return function(b) {
            return fn(a,b);
        }
    }
}
function _rcurry(fn) {
    return function(a) {
        return function(b) {
            return fn(b,a);
        }
    }
}


function isObject(obj) {
    return typeof obj === 'object' && !!obj;
}

function _keys(obj) {
    return isObject(obj) ? Object.keys(obj) : [];
}

function improveEach(prop,iter) {
    return returnType(prop) == "object" ? _each(prop,iter) : _strEach(prop,iter)
}

function _strEach(str,iter) {
    for(let i=0;i<str.length;i++) {
        iter(str[i]);
    }
    return str;
}


function _each(list,iter) {
    let keys = _keys(list);
    
    for(let i=0,len=keys.length;i<len;i++) {
        iter(list[keys[i]],i);
    }
    return list;
}

function _rest(list,num) {
    return slice.call(list,num || 1);
}

function _filter(list,predi) {
    _list = [];
    _each(list,function(value) {
        if(predi(value)) {
            _list.push(value);
        }
    })
    return _list;
}

function _reduce(list,iter,memo) {
    if(arguments.length==2){
        memo = list[0];
        list = _rest(list);
    }
    _each(list,function(value) {
        memo = iter(memo,value)
    })
    return memo;
}

function _sum(data) {
    return _reduce(data,function(a,b) {
        return a+b;
    })
} 

function _min(data) {
    return _reduce(data,function(a,b) {
        return a < b ? a : b;
    })
}

function _max(data) {
    return _reduce(data,function(a,b) {
        return a > b ? a : b;
    })
}


// 1이면 홀수, 0이면 짝수
function _findOdd(number) {
    return number%2
}

function _division(number, divide) {
    return number%divide;
}

function findUpperCase(str) {
    return str === str.toUpperCase();
}

function convertToUpperCase(str) {
    return str.toUpperCase();
}

function convertToLowerCase(str) {
    return str.toUpperCase();
}

function convertToNegateCase(str) {
    return str == str.toUpperCase() ? str.toLowerCase() : str.toUpperCase();
}

/**
 * @todo 가운데문자열 출력을 하는 알고리즘을 함수형 프로그램이으로 구현하라.
 */

function NotequalTrue(a,b) {
    return a !==b;
}

function isEqual(a,b) {
    return a===b;
}


/**
 * @todo 8.일곱난쟁이를 풀어야합니다.
 * @see https://shoark7.github.io/programming/algorithm/4-ways-to-get-subarray-consecutive-sum
 * @description 부분합을 dp와 세그먼트트리, 이중포인터, 브루트포스 관점으로 풀어야합니다(4가지풀이)
 */

//가장앞에있는 문자열을 반환한다.
function _findStrIndex(str,predi) {
    for(let i=0;i<str.length;i++) {
        if(predi(str[i])) {
            return i
        }
    }
    return -1;
}

function _identity(val) {
    return val;
}


/**
 * 문자열내 중복된 값을 제거 (문자는 순서를 지켜서 반환)
 * ex) ksekkset -> kset로 반환
 * @param {string} str 
 * @returns {string} 
 */
function removeStrDuplicates(str) {
    let _str = "";
    for(let i=0; i<str.length;i++) {
        if(i == _findStrIndex(str,function(val) {
            if(str[i] == val) {
                return true
            } else {
                return false;
            }
        })) {
            _str += str[i];
        }
    }
    return _str;
}



// i == arr.indexOf(arr[i])
function _removeWordDuplicates(arr,predi) {
    let _list = [];
    for(let i=0; i<arr.length; i++) {
        if( predi(i,_findStrInArrayIndex(arr,arr[i])) ) {
            _list.push(arr[i])
        }
    }
    return _list;
}





// 배열내 문자열을 찾아주는 인덱스
/**
 * 
 * @param {Array} arr 
 * @param {String} findStr 
 * @returns {number} arr내 findStr문자가 있으면 첫번째 인덱스 반환, 아니면 -1반환
 */
function _findStrInArrayIndex(arr,findStr) {
    for(let i=0; i<arr.length; i++) {
        if(arr[i] == findStr) {
            return i;
        }
    }
    return -1;
}

// _findIndex: 찾아내면 그순간 인덱스를 반환, 못찾으면 -1을 반환
function _findIndex(list,predi) {
    var keys = _keys(list);
    for(let i=0,len=keys.length;i<len;i++) {
        if(predi(list[keys[i]])) return i;
    }
    return -1
};


/**
 * typeof prop의 결과값을 반환
 * @param {any} prop 
 * @returns prop의 type을 반환
 */
function returnType(prop) {
    return typeof prop;
}





// 데이터에 영향을 안받아야하거든
// Array.indexOf

// str.indexOf



//위의 것을 개선해보자


const _rfindIndex = _rcurry(_findIndex);

function _map(list,mapper) {
    _list = []
    _each(list,function(value) {
        _list.push(mapper(value));
    })
    return _list;
}




// a가 b보다 크면 true 작으면 false
function _compare(a,b) {
    return a > b
}



function _eachIndex(list,iter) {
    for(var i=0;i<list.length;i++) {
        iter(list[i],i);
    }
    return list
}


// filter values,flunk
// map
// findIndex,find,some every -> for문을
// reduce min max max_by min_by group_by, count_by



// const obj = [{id:10}]
// const obj = [1,2,3,4];
// 객체의 프로퍼티도 얻을 수 있다.
// for (const property in obj) {
//     console.log(`${property}: ${obj[property]}`);
// }


//객체의 value만 얻을 수 있다.
// const array1 = ['a', 'b', 'c'];
// for (const element of array1) {
//   console.log(element);
// }



/**
 * minus a-b
 * @param {number} a 
 * @param {number} b 
 * @returns {number} 
 */
function minus(a,b) {
    return a-b;
}

/**
 * 
 * @param {number} a 1:가위 2:바위 3:보
 * @param {number} b 1:가위 2:바위 3:보 
 * @return {string} a가 이기면 A, b가 이기면 B출력
*/
function winnerLock(a,b) {
    if(minus(a,b) === 0) return "D"
    if(minus(a,b) === 2) return "B"
    if(minus(a,b) === 1) return "A"
    if(minus(a,b) === -2) return "A"
    if(minus(a,b) === -1) return "B"
}


// let obj ={name:"이광훈"};
// let str = "이광훈";
// console.log(Object.getOwnPropertyDescriptor(obj,'name'),"name")
// console.log(Object.getOwnPropertyDescriptors(str),"str")

function _이차원배열만들기(배열길이,배열에넣을값) {

}


/**
 * 
 * @param {string} str 단일문자열 
 */
const charCodeAt = String.prototype.charCodeAt;
function isalpha(c) {
    return (((c >= 'a') && (c <= 'z')) || ((c >= 'A') && (c <= 'Z')));
}

function _asciiConvert(str) {
    return charCodeAt.call(str);;
}

/**
 * number -> string ex) 123 -> '123'
 * @param {number} number 
* @return {string} string 
*/
function _convertString(num) {
    return String(num);
}


/**
 * number -> string ex) 123 -> '123'
 * @param {string} string 
* @return {number} number 
*/
function _convertNumber(c) {
    return parseInt(c);
}

function _reverseStr(str) {
    _str = ""
    for(let i=str.length-1;i>=0;i--) {
        _str += str[i]
    }
    return _str
}


function indexRemove(arr,index) {
    _list = [];
    for(let i=0;i<arr.length;i++) {
        if(i != index) _list.push(arr[i]);
    }
    return _list
}


