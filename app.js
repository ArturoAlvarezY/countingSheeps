export const countingSheepsAndWolves = (sheeps) =>
{    let sheepCount = 0;

    for (let i = 0; i < sheeps.length; i++) {
        if (sheeps[i] === true) {
            sheepCount += 1;
        }
    }

    if (sheepCount === 0) {
        return "wolves eaten sheeps!";
    }
     else {
        return `Number of sheeps: ${sheepCount}`;
    }
};


