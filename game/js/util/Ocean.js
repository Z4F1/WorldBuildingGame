function UpdateOcean(p){
    for(let i = 0; i < p.geometry.attributes.position.array.length; i += 3){
        let x = p.geometry.attributes.position.array[i]
        let y = p.geometry.attributes.position.array[i+1]
        let z = noise.simplex3(x/4, y/4, new Date().getTime()/2000) / 8
        p.geometry.attributes.position.array[i+2] = z;
    }

    p.geometry.attributes.position.needsUpdate = true
    p.material.needsUpdate = true
}