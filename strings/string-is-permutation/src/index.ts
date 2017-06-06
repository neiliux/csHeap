export class UnitOfWork {
    public isPermutation(str1: string, str2: string): boolean {
        // Time complexity: O(N+N) -- best case
        // Time complexity: O(N+N*2) -- worst case
        
        if (!str1 || !str2 || str1.length !== str2.length) {
            return false;
        }

        let hash: any = {};
       
        for (let i=0, len=str1.length; i<len; i++) {
            hash[str1[i]] = this.processChar(hash[str1[i]]);
            hash[str2[i]] = this.processChar(hash[str2[i]]);
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

    private processChar(count: number): number {
        return !!count
            ? count-1
            : 1;
    }
}
