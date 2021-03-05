function DegToRad(degree){
    return degree * Math.PI / 180
}

function Lerp(t, a, b){
    return ((b - a) * t) + a
}