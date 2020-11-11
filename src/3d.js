var canvas = document.getElementById('renderCanvas')
var engine = new BABYLON.Engine(canvas, true, { preserveDrawingBuffer: true, stencil: true })

var scene = new BABYLON.Scene(engine)
scene.clearColor = BABYLON.Color3.Black()
var camera = new BABYLON.FreeCamera('camera1', new BABYLON.Vector3(-2, 5, -10), scene)
camera.setTarget(new BABYLON.Vector3(0, 2, 0))
camera.attachControl(canvas, false)
var light1 = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(-2, 1, 0), scene)
light1.intensity = 1

var light2 = new BABYLON.PointLight('light2', new BABYLON.Vector3(0, 3, 0), scene)
light2.intensity = 40

var shadowGenerator = new BABYLON.ShadowGenerator(1024, light2)

BABYLON.SceneLoader.ShowLoadingScreen = false

BABYLON.SceneLoader.ImportMesh('', 'https://srv-store1.gofile.io/download/FUZYAY/test.glb', '', scene, (meshes) => {
  const mesh = meshes[0]
  mesh.position.x = 4
  mesh.scaling = new BABYLON.Vector3(2.5, 2.5, 2.5)
})

engine.runRenderLoop(function () {
  scene.render()
})

window.addEventListener('resize', function () {
  engine.resize()
})
