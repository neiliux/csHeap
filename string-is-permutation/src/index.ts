export class UnitOfWork {
    public isPermutation(str1: string, str2: string): boolean {
        if (!str1 || !str2 || str1.length !== str2.length) {
            return false;
        }

        let hash: any = {};
       
        for (let i=0, len=str1.length; i<len; i++) {
            if (!hash[str1[i]]) {
                hash[str1[i]] = 1;
            } else {
                hash[str1[i]]++;
            }
        } 
        
        for (let i=0, len=str2.length; i<len; i++) {
            if (hash[str2[i]]) {
                hash[str2[i]]--;
            } else {
                hash[str2[i]] = 1;
            }
        }
  
        let result: boolean = true; 
        Object
            .keys(hash)
            .forEach(k => {
                if (hash[k] !== 0) {
                    result = false;
                }
            });

        return result;
    } 
}
