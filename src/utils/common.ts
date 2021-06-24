/**
 是否为空
 @param {String}a 变量
 @return 是否为空
 */
export const isEmpty = function (a:any):boolean {
    if (a === undefined || a === 'undefined' || a === null || a === 'null' || a === '' || JSON.stringify(a) === '{}' || JSON.stringify(a) === '[]') {
        return true
    }
    return false
}