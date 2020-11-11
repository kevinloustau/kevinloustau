var canvas = document.getElementById('renderCanvas')
var engine = new BABYLON.Engine(canvas, true, { preserveDrawingBuffer: true, stencil: true })

var createScene = function () {
  var scene = new BABYLON.Scene(engine)
  scene.clearColor = BABYLON.Color3.Black()
  var camera = new BABYLON.FreeCamera('camera1', new BABYLON.Vector3(-2, 5, -10), scene)
  camera.setTarget(new BABYLON.Vector3(0, 2, 0))
  camera.attachControl(canvas, false)
  var light = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(-2, 1, 0), scene)
  light.intensity = 1
  return scene
}

var scene = createScene()
BABYLON.SceneLoader.ShowLoadingScreen = false
// BABYLON.SceneLoader.AppendAsync('./assets/', 'test.glb', scene).then(function (meshes) {})

BABYLON.SceneLoader.ImportMesh('', './assets/', 'test.glb', scene, function (meshes) {
  const mesh = meshes[0]
  mesh.position.x = 4
  console.log(mesh)
  mesh.scaling = new BABYLON.Vector3(2.5, 2.5, 2.5)
})

engine.runRenderLoop(function () {
  scene.render()
})

window.addEventListener('resize', function () {
  engine.resize()
})
