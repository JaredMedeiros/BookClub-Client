import './GridWave.scss'
import Helmet from 'react-helmet'
import THREE from 'https://cdnjs.cloudflare.com/ajax/libs/three.js/103/three.min.js'
import SimplexNoise from 'https://cdnjs.cloudflare.com/ajax/libs/simplex-noise/2.4.0/simplex-noise.min.js'
import jQuery from 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js'


export default function GridWave() {

   

( function( $ ) {
    "use strict";
      
        $( function() {
            
    
            
            var $window                   = $( window ),
                windowWidth               = window.innerWidth,
                windowHeight              = window.innerHeight,
                rendererCanvasID          = '3D-background-three-canvas5';
            
        
            
            // Generate one plane geometries mesh to scene
            //-------------------------------------	
            var camera,
                scene,
                material,
                group,
                lights = [],
                renderer,
                shaderSprite,
                clock = new THREE.Clock();
            
    
            var geometry, plane, simplex;
            
            var factor = 300,
                speed = 0.0005, // terrain size
                cycle = 0, //move speed
                scale = 30; // smoothness
                
       
    
            init();
            render();
    
            function init() {
                //camera
                camera = new THREE.PerspectiveCamera( 60, windowWidth / windowHeight, 1, 10000 );
                camera.position.set( 0, 0, 100 );
    
            
                //Scene
                scene = new THREE.Scene();
    
                //HemisphereLight
                lights[ 0 ] = new THREE.PointLight( 0xff00cc, 1, 0 );
                lights[ 1 ] = new THREE.PointLight( 0x0066ff, 1, 0 );
                lights[ 2 ] = new THREE.PointLight( 0x0000ff, 1, 0 );
    
                lights[ 0 ].position.set( 0, 200, 0 );
                lights[ 1 ].position.set( 100, 200, 100 );
                lights[ 2 ].position.set( - 100, - 200, - 100 );
    
                scene.add( lights[ 0 ] );
                scene.add( lights[ 1 ] );
                scene.add( lights[ 2 ] );
    
                
    
                //WebGL Renderer		
                renderer = new THREE.WebGLRenderer( { 
                                        canvas   : document.getElementById( rendererCanvasID ), //canvas
                                        alpha    : true, 
                                        antialias: true 
                                    } );
                renderer.setSize( windowWidth, windowHeight );
    
            
                // Immediately use the texture for material creation
                group = new THREE.Object3D();
                group.position.set(0,-300,-1000);
                group.rotation.set(29.8,0,0);
    
                
                
                geometry = new THREE.PlaneGeometry(4000, 2000, 128, 64);
                material = new THREE.MeshLambertMaterial({
                    color: 0xffffff,
                    opacity: 1,
                    blending: THREE.NoBlending,
                    side: THREE.FrontSide,
                    transparent: false,
                    depthTest: false,
                    wireframe: true
                });
                plane = new THREE.Mesh(geometry, material);
                plane.position.set(0, 0, 0);
                
                simplex = new SimplexNoise();
                moveNoise();
                
                
                group.add(plane);
                scene.add(group);
                
                
    
                // Fires when the window changes
                window.addEventListener( 'resize', onWindowResize, false );
                
                
            }
    
            function render() {
                requestAnimationFrame( render );
                
                var delta     = clock.getDelta();
    
                //To set a background color.
                renderer.setClearColor( 0x000000 );	
                
            
                //change noise values over time
                moveNoise();
                
                //update sprite
                cycle -= delta * 0.5;
                
                
    
                renderer.render( scene, camera );
                
                
    
                
            }
    
    
            function onWindowResize() {
                camera.aspect = window.innerWidth / window.innerHeight;
                camera.updateProjectionMatrix();
                renderer.setSize( window.innerWidth, window.innerHeight );
            }
    
    
    
            function moveNoise() {
                var _iteratorNormalCompletion2 = true;
                var _didIteratorError2 = false;
                var _iteratorError2 = undefined;
    
                try {
                    for (var _iterator2 = geometry.vertices[Symbol.iterator](), _step2; ! (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                        var vertex = _step2.value;
                        var xoff = vertex.x / factor;
                        var yoff = vertex.y / factor + cycle;
                        var rand = simplex.noise2D(xoff, yoff) * scale;
                        vertex.z = rand;
                    }
                } catch(err) {
                    _didIteratorError2 = true;
                    _iteratorError2 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion2 && _iterator2.
                        return != null) {
                            _iterator2.
                            return ();
                        }
                    } finally {
                        if (_didIteratorError2) {
                            throw _iteratorError2;
                        }
                    }
                }
    
                geometry.verticesNeedUpdate = true;
                cycle += speed;
            }
            
            
    
        
        } );
      
        
    } ) ( jQuery );


    return (
        <canvas id = '3D-background-threecanvas5'></canvas>
    )
}