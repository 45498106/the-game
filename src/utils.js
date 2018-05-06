module.exports = {
    vector: {
        getVectorBetweenTwoPointsAngle(p1, p2) {
            return Math.atan2(p2.y - p1.y, p2.x - p1.x) * 180 / Math.PI;
        },
        getNewCoordsFromAngle(x, y, angleDegrees, length) {
            if (!x || !y || !angle || !length) {
                throw Error(
                    "Vector utils: you must specify all parameters to get new coordinates from starting point ang angle of the vector."
                );
            }

            const angleRadians = this.deegreesToRadians(angleDegrees);
            
            return [
                length * Math.cos(angleRadians) + x,
                length * Math.sin(angleRadians) + y
            ]
        },
        deegreesToRadians(degrees) {
            return degrees * Math.PI / 180;
        }
    }
};
