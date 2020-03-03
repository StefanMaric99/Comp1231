//Stefan Maric - 101208175
//labtest2
//comp1231

    let initArr = [];

    let numArr = [123,3,64,3];
    let stringArr = ['yo','test','words','green'];
    let thirdArr = [144,2,5,7];
    initArr.push(numArr,stringArr,thirdArr);

    console.log(initArr);

    let s;

        initArr.forEach(function(innerArrays, index) {
            innerArrays.forEach(function(element,index){
                console.log(element)
            })

        });
        // s.toString();
        // s = s.concat(numArr,stringArr,thirdArr);
        // let strings= '';
        // strings = s;
        //
        // console.log(strings);


        function arrayToString(arr) {
            let str = '';
            arr.forEach(function(i, index) {
                str += i;
                if (index != (arr.length - 1)) {
                    str += '   ';
                };
            });
            s=str;
            return str;
        }
        console.log(arrayToString(initArr,));

