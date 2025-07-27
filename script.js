
// Mobile menu toggle
document.getElementById('mobile-menu-button').addEventListener('click', function() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            const mobileMenu = document.getElementById('mobile-menu');
            if (!mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
            }
        }
    });
});

// Scroll animation
const scrollElements = document.querySelectorAll('.scroll-animate');

const elementInView = (el, dividend = 1) => {
    const elementTop = el.getBoundingClientRect().top;
    return (
        elementTop <= 
        (window.innerHeight || document.documentElement.clientHeight) / dividend
    );
};

const displayScrollElement = (element) => {
    element.classList.add('visible');
};

const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
        if (elementInView(el, 1.25)) {
            displayScrollElement(el);
        }
    });
};

window.addEventListener('scroll', () => {
    handleScrollAnimation();
});

// Initialize animations on load
document.addEventListener('DOMContentLoaded', () => {
    handleScrollAnimation();
});

// // 3D Globe with Three.js
// const initGlobe = () => {
//     const container = document.getElementById('globe-container');
//     if (!container) return;
    
//     const width = container.clientWidth;
//     const height = container.clientHeight;
    
//     // Scene
//     const scene = new THREE.Scene();
//     scene.background = new THREE.Color(0xf8fafc);
    
//     // Camera
//     const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
//     camera.position.z = 5;
    
//     // Renderer
//     const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
//     renderer.setSize(width, height);
//     container.appendChild(renderer.domElement);
    
//     // Create a sphere (globe)
//     const geometry = new THREE.SphereGeometry(2, 32, 32);
    
//     // Load texture
//     const textureLoader = new THREE.TextureLoader();
//     const texture = textureLoader.load('https://threejs.org/examples/textures/planets/earth_atmos_2048.jpg');
//     const bumpMap = textureLoader.load('https://threejs.org/examples/textures/planets/earth_normal_2048.jpg');
//     const specularMap = textureLoader.load('https://threejs.org/examples/textures/planets/earth_specular_2048.jpg');
    
//     const material = new THREE.MeshPhongMaterial({
//         map: texture,
//         bumpMap: bumpMap,
//         bumpScale: 0.05,
//         specularMap: specularMap,
//         specular: new THREE.Color('grey'),
//         shininess: 5
//     });
    
//     const globe = new THREE.Mesh(geometry, material);
//     scene.add(globe);
    
//     // Add ambient light
//     const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
//     scene.add(ambientLight);
    
//     // Add directional light
//     const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
//     directionalLight.position.set(5, 3, 5);
//     scene.add(directionalLight);
    
//     // Add social media icons around the globe
//     const iconGeometry = new THREE.SphereGeometry(0.1, 16, 16);
//     const iconMaterial = new THREE.MeshBasicMaterial({ color: 0x3b82f6 });
    
//     const icons = [];
//     const iconPositions = [
//         { x: 0, y: 2.5, z: 0 }, // Top
//         { x: 0, y: -2.5, z: 0 }, // Bottom
//         { x: 2.5, y: 0, z: 0 }, // Right
//         { x: -2.5, y: 0, z: 0 }, // Left
//         { x: 0, y: 0, z: 2.5 }, // Front
//         { x: 0, y: 0, z: -2.5 } // Back
//     ];
    
//     iconPositions.forEach(pos => {
//         const icon = new THREE.Mesh(iconGeometry, iconMaterial);
//         icon.position.set(pos.x, pos.y, pos.z);
//         scene.add(icon);
//         icons.push(icon);
//     });
    
//     // Animation loop
//     const animate = () => {
//         requestAnimationFrame(animate);
        
//         // Rotate globe
//         globe.rotation.y += 0.005;
        
//         // Rotate icons around the globe
//         icons.forEach(icon => {
//             icon.rotation.y += 0.01;
//         });
        
//         renderer.render(scene, camera);
//     };
    
//     // Handle window resize
//     const handleResize = () => {
//         const newWidth = container.clientWidth;
//         const newHeight = container.clientHeight;
        
//         camera.aspect = newWidth / newHeight;
//         camera.updateProjectionMatrix();
        
//         renderer.setSize(newWidth, newHeight);
//     };
    
//     window.addEventListener('resize', handleResize);
    
//     // Start animation
//     animate();
// };

// Initialize the globe when the page loads
document.addEventListener('DOMContentLoaded', initGlobe);
