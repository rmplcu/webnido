import * as THREE from "three"
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader'
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'

//scene
const scene = new THREE.Scene()
scene.background = new THREE.Color(0xffffff)

//canvas
const canvas = document.querySelector(".webgl")
const sizes = {
    width : window.innerWidth,
    height: window.innerHeight
}

//grid
const grid = new THREE.GridHelper( 50, 50, 0xffffff, 0x555555 );
grid.rotateOnAxis( new THREE.Vector3( 0, 1, 0 ), 90 * ( Math.PI / 180 ) );
scene.add( grid );

//camera
const camera = new THREE.PerspectiveCamera(75, sizes.width/sizes.height, 0.1, 100)
camera.position.set(0,1,2)
scene.add(camera)

//renderer
const renderer = new THREE.WebGL1Renderer({
    canvas:canvas
})
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
renderer.shadowMap.enabled = true
renderer.gammaOutput = true

//controls
const orbitctrl = new OrbitControls(camera, renderer.domElement)

//lights
const light = new THREE.AmbientLight(new THREE.Color('hsl(0, 0%, 100%)'), 0.75)
scene.add(light)    

let directionalLightBack = new THREE.DirectionalLight(new THREE.Color('hsl(0, 0%, 100%)'), 0.25);
directionalLightBack.position.set(30, 100, 100);
scene.add(directionalLightBack);

let directionalLightFront = new THREE.DirectionalLight(new THREE.Color('hsl(0, 0%, 100%)'), 0.25);
directionalLightFront.position.set(-30, 100, -100);
scene.add(directionalLightFront);

//glb loader
const loader = new GLTFLoader()
loader.load('../assets/portariviste.glb', (glb) => {
    const root = glb.scene
    root.scale.set(1, 1, 1)
    scene.add(root)
    document.getElementById('loading').style.display = 'none'
    document.getElementById('loading_msg').style.display = 'none'
    canvas.style.display = 'block'
}, (xhr) => {
    const amt = Math.round(xhr.loaded/xhr.total*100)
    document.getElementById('loading_msg').innerHTML = 'Loading: ' + amt + '%'
    document.getElementById('loading_bar').style.width = (amt / 2) + '%'
}, (error) => {
    console.error(error)
})

function animate() {
    requestAnimationFrame(animate)
    orbitctrl.update()
    renderer.render(scene, camera)
}

animate()