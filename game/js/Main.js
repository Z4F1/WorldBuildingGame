const ocean = CreatePlane(0x8ecfde, 150, 150, 300, 300)
scene.add(ocean)

const land = CreatePlane(0x8bbd77, 150, 150, 300, 300)
scene.add(land)

const cube = CreateCube(0xffffff, 1, 1, 2)
scene.add(cube)

camera.position.set(0, -10, 10)
camera.rotation.set(DegToRad(45), 0, 0)

noise.seed(0.5)

let keys = {}
function inital(){
    window.requestAnimationFrame(update)

    //Land structure
    let landVer = land.geometry.attributes.position.array
    for(let i = 0; i < landVer.length; i += 3){
        let x = landVer[i]
        let y = landVer[i+1]
        let z = noise.simplex2(x/40,y/40)*4
        landVer[i+2] = z
    }

    land.geometry.attributes.position.needsUpdate = true
    land.material.needsUpdate = true
    
    document.addEventListener("keydown", KeyPressed)
    document.addEventListener("keyup", KeyReleased)
}

function update(time){
    window.requestAnimationFrame(update)
    
    CameraControls(time, camera)

    UpdateOcean(ocean)
    RenderScene()
}

inital()