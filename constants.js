// Por Enrique Alejandro Mondragón Tayabas A01019108
// Astronomy reference: http://www.go-astronomy.com/planets/planet-moons.htm

const planetsData = {
  mercury: {
    geometry: new THREE.SphereGeometry(3.5,20,20),
    material: new THREE.MeshPhongMaterial({ map: new THREE.TextureLoader().load("./textures/mercurymap.jpg") }),
    position: {x:-140,y:0,z:0}
  },
  venus: {
    geometry: new THREE.SphereGeometry(8.7,20,20),
    material: new THREE.MeshPhongMaterial({ map: new THREE.TextureLoader().load("./textures/venusmap.jpg") }),
    position: {x:-160,y:0,z:0}
  },
  earth: {
    geometry: new THREE.SphereGeometry(9.1,20,20),
    material: new THREE.MeshPhongMaterial({ map: new THREE.TextureLoader().load("./textures/earthmap1k.jpg") }),
    position: {x:-210,y:0,z:0},
    moons: [
      {
        geometry: new THREE.SphereGeometry(4.3,20,20),
        material: new THREE.MeshPhongMaterial({ map: new THREE.TextureLoader().load("./textures/moonmap1k.jpg") }),
        position: {x:-15,y:15,z:0},
      }
    ]
  },
  mars: {
    geometry: new THREE.SphereGeometry(4.8,20,20),
    material: new THREE.MeshPhongMaterial({ map: new THREE.TextureLoader().load("./textures/mars_1k_color.jpg") }),
    position: {x:-260,y:0,z:0},
    moons: [
      {
        geometry: new THREE.SphereGeometry(2.91,20,20),
        material: new THREE.MeshPhongMaterial({ map: new THREE.TextureLoader().load("./textures/moonmap1k.jpg") }),
        position: {x:-15,y:15,z:0},
      },
      {
        geometry: new THREE.SphereGeometry(1.91,20,20),
        material: new THREE.MeshPhongMaterial({ map: new THREE.TextureLoader().load("./textures/moonmap1k.jpg") }),
        position: {x:20,y:6,z:0},
      }
    ]
  },
  jupiter: {
    geometry: new THREE.SphereGeometry(102.7,20,20),
    material: new THREE.MeshPhongMaterial({ map: new THREE.TextureLoader().load("./textures/jupitermap.jpg") }),
    position: {x:-760,y:0,z:0},
    moons: jupiterMoons
  },
  saturn: {
    geometry: new THREE.SphereGeometry(86.6,20,20),
    material: new THREE.MeshPhongMaterial({ map: new THREE.TextureLoader().load("./textures/saturnmap.jpg") }),
    position: {x:-1300,y:0,z:0},
    moons: saturnMoons
  },
  uranus: {
    geometry: new THREE.SphereGeometry(35.6,20,20),
    material: new THREE.MeshPhongMaterial({ map: new THREE.TextureLoader().load("./textures/jupitermap.jpg") }),
    position: {x:-1780,y:0,z:0},
    moons: uranusMoons
  },
  neptune: {
    geometry: new THREE.SphereGeometry(36.7,20,20),
    material: new THREE.MeshPhongMaterial({ map: new THREE.TextureLoader().load("./textures/neptunemap.jpg") }),
    position: {x:-2080,y:0,z:0},
    moons: neptuneMoons
  },
  pluto: {
    geometry: new THREE.SphereGeometry(1.7,20,20),
    material: new THREE.MeshPhongMaterial({ map: new THREE.TextureLoader().load("./textures/plutomap1k.jpg") }),
    position: {x:-2400,y:0,z:0},
    moons: plutoMoons
  },
};
const sunDuration = 100000; // real = 1.997 km/s
const planetsDurations = { // speeds are proprtion of real
  mercury: 4082, // real = 48.92 km/s
  venus: 5702, // real = 35.02 km/s
  earth: 6706, // real = 29.78 km/s
  mars: 11169, // real = 17.88 km/s
  jupiter: 15303, // real = 13.05 km/s
  saturn: 20716, // real = 9.64 km/s
  uranus: 29325, // real = 6.81 km/s
  neptune: 36777, // real = 5.43 km/s
  pluto: 42309, // real = 4.72 km/s
}; // ms
const planetsDayDurations = { // speeds are proprtion of real
  mercury: 4082, // real = 48.92 km/s
  venus: 5702, // real = 35.02 km/s
  earth: 6706, // real = 29.78 km/s
  mars: 11169, // real = 17.88 km/s
  jupiter: 15303, // real = 13.05 km/s
  saturn: 20716, // real = 9.64 km/s
  uranus: 29325, // real = 6.81 km/s
  neptune: 36777, // real = 5.43 km/s
  pluto: 42309, // real = 4.72 km/s
}; // ms
