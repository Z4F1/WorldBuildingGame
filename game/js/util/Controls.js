/// Takes keyboard input

let forwardVel = 0
let sideVel = 0
let zoomVel = 0

function CameraControls(t, c){
    //W
    if(keys[87]){
        forwardVel = Lerp(0.1, forwardVel, 1)
    }
    //S
    if(keys[83]){
        forwardVel = Lerp(0.1, forwardVel, -1)
    }

    if(!keys[87] && !keys[83]){
        forwardVel = Lerp(0.1, forwardVel, 0)
    }

    //A
    if(keys[65]){
        sideVel = Lerp(0.1, sideVel, -1)
    }
    //D
    if(keys[68]){
        sideVel = Lerp(0.1, sideVel, 1)
    }

    if(!keys[65] && !keys[68]){
        sideVel = Lerp(0.1, sideVel, 0)
    }
    //Q
    if(keys[32]){
        zoomVel = Lerp(0.1, zoomVel, 1)
    }
    if(keys[16]){
        zoomVel = Lerp(0.1, zoomVel, -1)
    }

    if(!keys[32] && !keys[16]){
        zoomVel = Lerp(0.1, zoomVel, 0)
    }
    let x = Math.min(Math.max(c.position.x + sideVel, -60), 60)
    let y = Math.min(Math.max(c.position.y + forwardVel, -90), 70)
    let z = Math.min(Math.max(c.position.z + zoomVel, 5), 60)

    c.position.set(x, y, z)
}

function KeyPressed(e){
    keys[e.keyCode] = true
}

function KeyReleased(e) {
    delete keys[e.keyCode]
}