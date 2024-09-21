
export const blockingFunc = () => {
    new Array(100_000_000)
        .map((elm, index) => elm + index)
        .reduce((acc, cur) => acc + cur, 0);
};

export const randomIntFromInterval = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};
