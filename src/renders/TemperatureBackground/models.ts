export interface ITemperatureBackground {
  controllerSnapshot: ControllerSnapshot
}

export interface ControllerSnapshot {
  distance: number
  turbidity: number
  rayleigh: number
  mieCoefficient: number
  mieDirectionalG: number
  inclination: number
}