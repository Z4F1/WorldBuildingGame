const scene = new THREE.Scene()
scene.background = new THREE.Color( 0x444448 )

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.01, 1000)

const sun = new THREE.DirectionalLight( 0xffffff, 1)
sun.castShadow = true
sun.shadow.mapSize.width = 2048
sun.shadow.mapSize.height = 2048
sun.shadow.camera.near = 0.1
sun.shadow.camera.far = 1000
scene.add(sun)

const sunTarget = new THREE.Object3D()
sunTarget.position.set(-10, -10, -5)
scene.add(sunTarget)

sun.target = sunTarget

const amb = new THREE.AmbientLight(0xffffff, 0.5)
scene.add(amb)

const renderer = new THREE.WebGLRenderer({antialias: true})
renderer.shadowMap.enabled = true
renderer.shadowMap.autoUpdate = true
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

function RenderScene(){
    renderer.render(scene, camera)
}