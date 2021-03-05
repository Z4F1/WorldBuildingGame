function CreateCube(color, height, depth, width, wireframe = false){
    let geomerty = new THREE.BoxGeometry(height, depth, width)
    let material = new THREE.MeshStandardMaterial({color: color})

    if(wireframe){

        let wf = new THREE.WireframeGeometry(geomerty)
        let line = new THREE.LineSegments(wf)

        line.material.depthTest = false
        line.material.opacity = 0.25
        line.material.transparent = true

        return line

    }else {

        let _cube = new THREE.Mesh(geomerty, material)
    
        _cube.castShadow = true
        _cube.receiveShadow = true
    
        return _cube
    }
}

function CreatePlane(color, width, height, widthSegments = 1, heightSegments = 1, wireframe = false){
    let geomerty = new THREE.PlaneGeometry(width, height, widthSegments, heightSegments)
    let material = new THREE.MeshStandardMaterial({color: color})

    if(wireframe){

        let wf = new THREE.WireframeGeometry(geomerty)
        let line = new THREE.LineSegments(wf)

        line.material.depthTest = false
        line.material.opacity = 0.25
        line.material.transparent = true

        return line

    }else {

        let _plane = new THREE.Mesh(geomerty, material)

        _plane.castShadow = true
        _plane.receiveShadow = true
    
        return _plane
    }
}