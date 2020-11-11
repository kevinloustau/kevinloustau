var canvas = document.getElementById('renderCanvas')
var engine = new BABYLON.Engine(canvas, true, { preserveDrawingBuffer: true, stencil: true })

var createScene = function () {
  var scene = new BABYLON.Scene(engine)
  scene.clearColor = BABYLON.Color3.Black()
  var camera = new BABYLON.FreeCamera('camera1', new BABYLON.Vector3(-2, 5, -10), scene)
  camera.setTarget(BABYLON.Vector3.Zero())
  camera.attachControl(canvas, false)
  var light = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(-2, 1, 0), scene)
  var sphere = BABYLON.Mesh.CreateSphere('sphere1', 16, 2, scene, false, BABYLON.Mesh.FRONTSIDE)
  sphere.position.y = 1
  sphere.position.x = 4
  var ground = BABYLON.Mesh.CreateGround('ground1', 6, 6, 2, scene, false)
  ground.position.x = 4
  return scene
}

var scene = createScene()
BABYLON.SceneLoader.ShowLoadingScreen = false
BABYLON.SceneLoader.AppendAsync('./assets/', 'test.glb', scene).then(function (meshes) {
  let mesh = meshes[0]
  console.log(mesh)
})

engine.runRenderLoop(function () {
  scene.render()
})

window.addEventListener('resize', function () {
  engine.resize()
})
