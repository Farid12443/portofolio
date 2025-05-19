const canvas = document.getElementById("bg");
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    100
);
camera.position.z = 5;

const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);


const loader = new THREE.TextureLoader();
const particleTexture = loader.load(
    "https://threejs.org/examples/textures/sprites/circle.png"
);


const geometry = new THREE.BufferGeometry();
const particleCount = 500;
const positions = [];

for (let i = 0; i < particleCount; i++) {
    positions.push(
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10
    );
}

geometry.setAttribute(
    "position",
    new THREE.Float32BufferAttribute(positions, 3)
);

const material = new THREE.PointsMaterial({
    size: 0.05,
    map: particleTexture,
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    color: new THREE.Color(0x00ffff)
});

const particles = new THREE.Points(geometry, material);
scene.add(particles);

function animate() {
    requestAnimationFrame(animate);
    particles.rotation.y += 0.001;
    particles.rotation.x += 0.001;
    renderer.render(scene, camera);
}

animate();

// Handle Resize
window.addEventListener("resize", () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});
