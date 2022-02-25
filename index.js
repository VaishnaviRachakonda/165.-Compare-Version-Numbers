/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
    let v1 = version1.split('.');
    let v2 = version2.split('.');
    let len= v1.length>=v2.length?v1.length:v2.length;
    for(let i=0;i<len;i++){
     if(parseInt(v1[i])!==parseInt(v2[i])){
         if(parseInt(v1[i])===NaN && parseInt(v2[i])) return -1
        else if (parseInt(v2[i])===NaN && parseInt(v1[i])) return 1
           else if(parseInt(v1[i])>parseInt(v2[i])) {
                return 1
            }
            else if(parseInt(v1[i])<parseInt(v2[i])){
                return -1
            }
        }
    }
        return 0
};