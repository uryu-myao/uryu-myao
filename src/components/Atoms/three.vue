<template>
  <div id="three" />
</template>

<script>
import * as THREE from 'three'
// import { OrbitControls } from 'three-orbitcontrols-ts'
import OrbitControls from 'orbit-controls-es6'

export default {
  name: 'Three',
  props: {
    three: {
      type: String,
      default: 'three'
    }
  },
  // =============================================================================
  // data
  // =============================================================================
  data() {
    return {
      $canvus: null,
      controls: null,
      camera: null,
      scene: null,
      renderer: null,
      box: null,
      sphere: null,
      directionalLight: null,
      spotLight: null,
      ambientLight: null,
      plane: null,
      step: null
    }
  },
  mounted() {
    this.init()
    this.animate()
    this.event()
  },
  methods: {
    init() {
      // *** DOM
      this.$canvus = document.getElementById('three')
      // *** scene
      this.scene = new THREE.Scene()
      // *** camera
      this.camera = new THREE.PerspectiveCamera(
        45, // 視野角：0～90
        this.$canvus.clientWidth / this.$canvus.clientHeight, // 縦横比
        1, // 視体積手前までの距離
        1000 // 視体積奥までの距離
      )
      this.camera.position.set(10, 40, 40) // カメラ位置の設定(x, y ,z)
      this.camera.lookAt(this.scene.position) // カメラ視野の中心座標の設定
      this.scene.add(this.camera)

      // renderer
      // ***
      this.renderer = new THREE.WebGLRenderer({
        antialias: true, // 斜線や曲線などに発生する微細な階段状のギザギザした部分を目立たなくする
        alpha: true
      })
      this.renderer.setClearColor(0x1d1d1f, 1) // 背景色
      this.renderer.setSize(this.$canvus.clientWidth, this.$canvus.clientHeight)
      this.renderer.setPixelRatio(window.devicePixelRatio) // 高解像度対応
      this.renderer.shadowMap.enabled = true

      // *** axes
      // const axes = new THREE.AxesHelper(20)
      // this.scene.add(axes)

      // plane
      // ***
      const planeGeometry = new THREE.PlaneGeometry(50, 50)
      const planeMaterial = new THREE.MeshLambertMaterial({
        color: 0x8dc3ff
      })
      this.plane = new THREE.Mesh(planeGeometry, planeMaterial)

      this.plane.rotation.x = -0.5 * Math.PI
      this.plane.position.set(0, 0, 0)
      this.plane.receiveShadow = true // shadow

      this.scene.add(this.plane)

      // *** box
      const boxGeometry = new THREE.BoxGeometry(4, 4, 4)
      const boxMaterial = new THREE.MeshToonMaterial({
        color: 0x8dc3ff
      })
      this.box = new THREE.Mesh(boxGeometry, boxMaterial)
      this.box.position.set(-4, 4, 0)
      this.box.castShadow = true // shadow

      this.scene.add(this.box)

      // sphere
      // ***
      // MeshLambertMaterial
      // ***
      const sphereGeometry = new THREE.SphereGeometry(4, 12, 12)
      const sphereMaterial = new THREE.MeshToonMaterial({
        color: 0x8dc3ff
      })
      this.sphere = new THREE.Mesh(sphereGeometry, sphereMaterial)
      this.sphere.position.set(10, 4, 2)
      this.sphere.castShadow = true

      this.scene.add(this.sphere)

      // light
      // ***
      // DirectionalLight, PointLight, AmbientLight(補足として使用) HemisphereLight(下からの光は反射光)
      // ***
      this.hemisphereLight = new THREE.HemisphereLight(0xffffff, 0xbfbfe0, 1)
      this.hemisphereLight.position.set(0, 50, 30)
      this.hemisphereLight.castShadow = true
      this.scene.add(this.spotLight)

      this.spotLight = new THREE.SpotLight(0xffffe0, 0.25)
      this.spotLight.position.set(0, 50, 0)
      this.spotLight.castShadow = true
      this.scene.add(this.spotLight)

      this.ambientLight = new THREE.AmbientLight(0xededff, 1) // 0xから始まる16進数, 光の強さ
      this.scene.add(this.ambientLight)

      // *** controls
      // this.controls = new OrbitControls(this.camera, this.renderer.domElement)
      this.controls = new OrbitControls(this.camera, this.renderer.domElement)
      this.controls.enabled = true
      this.controls.maxDistance = 1500
      this.controls.minDistance = 0
      // this.controls.autoRotate = true
      // this.controls.update()

      // *** append
      this.$canvus.appendChild(this.renderer.domElement)
    },

    // =============================================================================
    // animation（フレームアニメーション）
    // =============================================================================
    animate() {
      // box
      this.box.rotation.x += 0.005
      this.box.rotation.y += 0.005
      this.box.rotation.z += 0.005

      // sphere
      this.step += 0.04
      this.sphere.position.x = 10 + 10 * Math.cos(this.step)
      this.sphere.position.y = 4 + 10 * Math.abs(Math.sin(this.step))
      requestAnimationFrame(this.animate)
      this.renderer.render(this.scene, this.camera)
    },

    // =============================================================================
    // event
    // =============================================================================
    event() {
      // resize
      window.addEventListener('resize', this.resize, {
        once: false,
        passive: true,
        capture: false
      })
    },
    resize() {
      this.camera.aspect = window.innerWidth / window.innerHeight
      this.camera.updateProjectionMatrix()
      this.renderer.setSize(window.innerWidth, window.innerHeight)
    }
  }
}
</script>

<style lang="scss" scoped>
#three {
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -3;
}
</style>
