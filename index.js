function distanceFromHqInBlocks (streetNum) {
    let numBlocks = streetNum - 42;
    if (numBlocks > 0) {
        return (numBlocks);
    } else {
        numBlocks = 8;
        return (numBlocks);
    }
    
}

function distanceFromHqInFeet (streetNum) {
    let numFeet = distanceFromHqInBlocks(streetNum) * 264;
    if (numFeet > 0) {
        return (numFeet);
    } else {
        numFeet = 2112
        return (numFeet);
    }
}

function distanceTravelledInFeet (startStreet, endStreet) {
    let distInFeet = Math.abs(endStreet - startStreet) * 264;
    return (distInFeet);
}

function calculatesFarePrice (startStreet, endStreet) {
    let fareDist = Math.abs(distanceTravelledInFeet(startStreet, endStreet));
    
    switch (((fareDist > 400) * (fareDist <= 2000)) == 1) {
        case false:
            if (fareDist <= 400) {
                return (0);
            } else {
                if (fareDist > 2000 && fareDist <= 2500) {
                    return (parseFloat(25.00));
                } else {
                    return (`cannot travel that far`);
                }
            }
        case true:
            return (parseFloat((fareDist - 400) / 50));
        default:
            console.log(`DOES NOT COMPUTE!`);
            break;
    }
}