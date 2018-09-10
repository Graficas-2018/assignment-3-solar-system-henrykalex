// Por Enrique Alejandro Mondragón Tayabas A01019108
// Astronomy reference: http://www.go-astronomy.com/planets/planet-moons.htm

const plutoMoons = [
  {
    geometry: new THREE.SphereGeometry(0.51,20,20),
    material: new THREE.MeshPhongMaterial({ map: new THREE.TextureLoader().load("./textures/moonmap1k.jpg") }),
    position: {x:15,y:15,z:0},
  },
  {
    geometry: new THREE.SphereGeometry(0.51,20,20),
    material: new THREE.MeshPhongMaterial({ map: new THREE.TextureLoader().load("./textures/moonmap1k.jpg") }),
    position: {x:20,y:15,z:0},
  },
  {
    geometry: new THREE.SphereGeometry(0.51,20,20),
    material: new THREE.MeshPhongMaterial({ map: new THREE.TextureLoader().load("./textures/moonmap1k.jpg") }),
    position: {x:10,y:15,z:0},
  },
  {
    geometry: new THREE.SphereGeometry(0.51,20,20),
    material: new THREE.MeshPhongMaterial({ map: new THREE.TextureLoader().load("./textures/moonmap1k.jpg") }),
    position: {x:12,y:15,z:0},
  },
  {
    geometry: new THREE.SphereGeometry(0.51,20,20),
    material: new THREE.MeshPhongMaterial({ map: new THREE.TextureLoader().load("./textures/moonmap1k.jpg") }),
    position: {x:5,y:15,z:0},
  }
];

function getRandRange(min,max){
  return Math.random() * (max - min) + min;
}

const neptuneMoons = (()=>{
  let moons = [];
  for(let i = 0; i<14;i++){
    moons.push({
      geometry: new THREE.SphereGeometry(getRandRange(2,8),20,20),
      material: new THREE.MeshPhongMaterial({ map: new THREE.TextureLoader().load("./textures/moonmap1k.jpg") }),
      position: {x:getRandRange(-100,100),y:getRandRange(-20,25),z:getRandRange(-100,100)},
    });
  }
  return moons;
})();

const uranusMoons = (()=>{
  let moons = [];
  for(let i = 0; i<27;i++){
    moons.push({
      geometry: new THREE.SphereGeometry(getRandRange(2,8),20,20),
      material: new THREE.MeshPhongMaterial({ map: new THREE.TextureLoader().load("./textures/moonmap1k.jpg") }),
      position: {x:getRandRange(-100,100),y:getRandRange(-20,25),z:getRandRange(-100,100)},
    });
  }
  return moons;
})();

const saturnMoons = (()=>{
  let moons = [];
  for(let i = 0; i<62;i++){
    moons.push({
      geometry: new THREE.SphereGeometry(getRandRange(2,8),20,20),
      material: new THREE.MeshPhongMaterial({ map: new THREE.TextureLoader().load("./textures/moonmap1k.jpg") }),
      position: {x:getRandRange(-200,200),y:getRandRange(-100,100),z:getRandRange(-200,200)},
    });
  }
  return moons;
})();

const jupiterMoons = (()=>{
  let moons = [];
  for(let i = 0; i<62;i++){
    moons.push({
      geometry: new THREE.SphereGeometry(getRandRange(2,8),20,20),
      material: new THREE.MeshPhongMaterial({ map: new THREE.TextureLoader().load("./textures/moonmap1k.jpg") }),
      position: {x:getRandRange(-200,200),y:getRandRange(-100,100),z:getRandRange(-200,200)},
    });
  }
  return moons;
})();
