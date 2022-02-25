/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
    let v1 = version1.split('.');
    let v2 = version2.split('.');
    if(v1.length>v2.length){
      while(v1.length!==v2.length){
        v2.push('0')
      }
    }
  else if(v2.length>v1.length){
    while(v1.length!==v2.length){
        v1.push('0')
      }
  }
  for(let i=0;i<v1.length;i++){
    if(parseInt(v1[i])>parseInt(v2[i])){
      return 1
    }
    else if(parseInt(v1[i])< parseInt(v2[i])){
      return -1
    }
  }
 return 0
};

console.log('1',compareVersion('1.1.1','1.1'))//1
console.log('2',compareVersion('1.1','1'))//1
console.log('3',compareVersion('1.0.0','1'))//0
console.log('4',compareVersion('1.0.0','1.1'))//-1
console.log('5',compareVersion('1.0.0','1.0.0.0.1'))//-1