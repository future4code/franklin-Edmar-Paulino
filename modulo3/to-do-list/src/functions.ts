const ALFANUM: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

function createHash(): string {
    let hash: string = "";
    for (let i: number = 0; i < 32; i++) {
        hash = hash.concat(ALFANUM.charAt((Date.now() * Math.random()) % 62));
        if (i >= 8 && i <= 20 && i % 4 === 0) {
            hash = hash.concat("-");
        }
    }
    return hash;
}

export { createHash };