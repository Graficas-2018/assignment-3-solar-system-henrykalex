// Por Enrique Alejandro Mondragón Tayabas A01019108
// PArticle reference: http://www.ianww.com/blog/2012/11/04/optimizing-three-dot-js-performance-simulating-tens-of-thousands-of-independent-moving-objects/

let renderer = null,
scene = null,
camera = null,
sunGroup = null,
sun = null,
asteroid = null,
asteroidGroup = null;
planetsGroups = {
  mercury: null,
  venus: null,
  earth: null,
  mars: null,
  jupiter: null,
  saturn: null,
  uranus: null,
  neptune: null,
  pluto: null,
};
planetsMesh = {
  mercury: null,
  venus: null,
  earth: null,
  mars: null,
  jupiter: null,
  saturn: null,
  uranus: null,
  neptune: null,
  pluto: null,
};
planetsMoonsGroups = {
  mercury: [],
  venus: [],
  earth: [],
  mars: [],
  jupiter: [],
  saturn: [],
  uranus: [],
  neptune: [],
  pluto: [],
};
planetsMoons = {
  mercury: [],
  venus: [],
  earth: [],
  mars: [],
  jupiter: [],
  saturn: [],
  uranus: [],
  neptune: [],
  pluto: [],
};
// Arrays order: sun, mercury, vennus
var currentTime = Date.now();
let positionsX = [-340,-360,-380];
function animate() {
    // GET DELTA
    let now = Date.now();
    let deltat = now - currentTime;
    currentTime = now;
    // let movement = now * 0.001;


    let sunAngle = Math.PI * 2 * (deltat / sunDuration);
    // Rotate the sun
    sun.rotation.y += sunAngle;
    asteroidGroup.rotation.y += Math.PI * 2 * (deltat / 90000);
    // Rotate the planets
    for(let planet in planetsGroups){
      if(planetsGroups[planet])
      planetsGroups[planet].rotation.y += (Math.PI * 2 *(deltat / planetsDurations[planet])) / 2;
      if(planetsMesh[planet])
      planetsMesh[planet].rotation.y += (Math.PI * 2 *(deltat / planetsDayDurations[planet]))/2;
      // ROtate moons
      if(planetsMoonsGroups[planet].length>0)
      for(let moonGroupIndex in planetsMoonsGroups[planet]){
        planetsMoonsGroups[planet][moonGroupIndex].rotation.y += (Math.PI * 2 *(deltat / (planetsDayDurations[planet]+getRandRange(100,2000))))/2;
      }
      if(planetsMoons[planet].length>0)
      for(let moonIndex in planetsMoons[planet]){
        planetsMoons[planet][moonIndex].rotation.y += (Math.PI * 2 *(deltat / planetsDayDurations[planet]+getRandRange(100,2000)))/2;
      }
    }

}

function run() {
    requestAnimationFrame(function() { run(); });
        // Render the scene
        renderer.render( scene, camera );
        // Spin the cube for next frame
        animate();
}

function createScene(canvas){
  renderer = new THREE.WebGLRenderer( { canvas: canvas, antialias: true } );
  renderer.setSize(canvas.width, canvas.height); // Viewppot size
  scene = new THREE.Scene();// Create a new Three.js scene
  scene.background = new THREE.Color( 0.1, 0.1, 0.1 );

  // Add camera
  camera = new THREE.PerspectiveCamera( 45, canvas.width / canvas.height, 1, 4000 );
  camera.position.z = 0;
  camera.position.y = 550;
  camera.rotation.x = -Math.PI/2;
  console.log("camera.rotation.x",camera.rotation.x);
  // for(let prop in camera){
  //   console.log("prop",prop);
  // }
  scene.add(camera);

  // Add a directional light to show off the objects
  let lightTop = new THREE.SpotLight( 0xffffff, 2,400,1.05,0,1);
  let lightBottom = new THREE.SpotLight( 0xffffff, 2,400,1.05,0,1);
  // Position the light out from the scene, pointing at the origin
  lightTop.position.set(0, 300, 0);
  lightTop.target.position.set(0,0,0);

  lightBottom.position.set(0, -300, 0);
  lightBottom.target.position.set(0,0,0);

  let light = new THREE.PointLight( 0xffffff, 1.5,0);
  light.position.set(0, 0, 0);

  // Create sun
  sunGroup = new THREE.Object3D;
  sunGroup.add(light);


  let textureUrl = "./textures/8k_sun.jpg";
  let texture = new THREE.TextureLoader().load(textureUrl);
  let material = new THREE.MeshPhongMaterial({ map: texture });
  let sphereGeometry = new THREE.SphereGeometry(100, 40, 40);
  sun = new THREE.Mesh(sphereGeometry, material);
  sun.add(lightTop);
  sun.add(lightBottom);
  sunGroup.add(sun);

  // Create asteroid
  asteroidGroup = new THREE.Object3D;
  let textureA = new THREE.TextureLoader().load("./textures/moonmap1k.jpg");
  let materialA = new THREE.MeshPhongMaterial({ map: textureA });
  let sphereGeometryA = new THREE.SphereGeometry(10, 40, 40);
  asteroid = new THREE.Mesh(sphereGeometryA, materialA);
  asteroid.position.set(-360,0,0);
  // asteroidGroup.add(asteroid);
  asteroidGroup.position.set(0,0, 0);
  sunGroup.add(asteroidGroup);


  var particle_system_geometry = new THREE.Geometry();

  let radiusMin = 360;
  let radiusMax = 480;

  for (var i=0; i < 10000; i++) {
    // particle_system_geometry.vertices.push(new THREE.Vector3(-360,10,0));
    console.log("getRandRange(0,2*Math.PI)",getRandRange(0,2*Math.PI));
    console.log("getRandRange(radiusMin,radiusMax)",getRandRange(radiusMin,radiusMax));
    let randomAngle = getRandRange(0,2*Math.PI);
    let randomRadius = getRandRange(radiusMin,radiusMax);
    particle_system_geometry.vertices.push(new THREE.Vector3(
      Math.cos(randomAngle) * randomRadius,
      getRandRange(-50,50),
      Math.sin(randomAngle) * randomRadius
    ));
  }
  var particle_system_material = new THREE.ParticleBasicMaterial({
    color: 0x7B7B7B,
    size: 5
  });
  var particleSystem = new THREE.ParticleSystem(
    particle_system_geometry,
    particle_system_material
  );
  // scene.add(particleSystem);
  asteroidGroup.add(particleSystem);


  // Create a group for each planet
  for(let planet in planetsGroups){
    planetsGroups[planet] = new THREE.Object3D;
    sunGroup.add(planetsGroups[planet]);
    planetsGroups[planet].position.set(0,0, 0);

    let planetData = planetsData[planet];
    let newPlanet = new THREE.Mesh(planetData.geometry, planetData.material);
    newPlanet.position.set(planetData.position.x,planetData.position.y,planetData.position.z);
    planetsMesh[planet] = newPlanet;
    planetsGroups[planet].add(newPlanet);

    if(planetsData[planet].moons)
    for(let moon of planetsData[planet].moons){
      let moonGroup = new THREE.Object3D;
      moonGroup.position.set(planetData.position.x,planetData.position.y,planetData.position.z);
      planetsGroups[planet].add(moonGroup);
      planetsMoonsGroups[planet].push(moonGroup);

      let newMoon = new THREE.Mesh(moon.geometry, moon.material);
      newMoon.position.set(moon.position.x,moon.position.y,moon.position.z);
      planetsMoons[planet].push(newMoon);
      moonGroup.add(newMoon);
    }

    var radius   = planetData.position.x,
    segments = 100,
    mat = new THREE.LineBasicMaterial( { color: 0x0000ff } ),
    geometry = new THREE.CircleGeometry( radius, segments );
    geometry.vertices.shift();
    let newLine = new THREE.LineLoop( geometry, mat );
    newLine.rotation.x = Math.PI/2;
    sunGroup.add(newLine);
  }
  scene.add(sunGroup);
}


// for(let prop in object){
//   console.log("prop",prop);
// }
