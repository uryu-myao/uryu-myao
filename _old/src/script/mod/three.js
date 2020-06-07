(function() {

    'use strict';

    // import library
    const THREE = require('three');

    // resposive
    window.addEventListener('resize', function () {
        let width  = window.innerWidth,
            height = window.innerHeight;

        renderer.setSize( width, height );
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
    });

    // render
    const renderer = new THREE.WebGLRenderer();

    // bg color
    renderer.setSize( window.innerWidth, window.innerHeight );
    renderer.setPixelRatio( window.devicePixelRatio );
    document.querySelector('.bg_canvas').appendChild( renderer.domElement );

    // scene
    const scene  = new THREE.Scene();

    // camera
    const camera = new THREE.PerspectiveCamera
    (
        50, window.innerWidth / window.innerHeight, 1, 10000
    );
    camera.position.z = 600;

    // create the shapes
    const geometry = new THREE.Geometry();

    for ( let i = 0; i < 60; i ++ ) {
        let vertex = new THREE.Vector3();
        vertex.x = 1000 * Math.random() - 500;
        vertex.y = 1000 * Math.random() - 500;
        vertex.z = 1000 * Math.random() - 500;
        geometry.vertices.push( vertex );
    }

    // create materials
    const material = new THREE.PointsMaterial({
        size: 4,
        sizeAttenuation: true,
        transparent: true,
        opacity: 0.4
    });

    material.color.setHex( 0x1e3b86 );

    const particles = new THREE.Points( geometry, material );
    particles.sortParticles = true;

    scene.add( particles );

    // draw materials
    let draw = function() {
        requestAnimationFrame( draw );

        let is_update = true;
        if (is_update) {
            // let s = Math.sin( Date.now() * 0.0002 );
            particles.material.color.setHSL(1.5, 1, 0.5 );
            particles.rotation.y = Date.now() * 0.0002;
        }
    }

    // draw Scene
    let render = function() {
        renderer.render( scene, camera );
    };

    // run game loop
    let gameLoop = function() {
        requestAnimationFrame( gameLoop );
        draw();
        render();

        if (!(document.getElementById('top'))) {
            scene.remove( geometry );
        }
    };

    gameLoop();

})();
