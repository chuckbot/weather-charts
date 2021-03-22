export interface ISlider {
  value?: number
  defaultValue: number
  min?: number
  max: number
  step: number
  label?: string
  onChangeValue: (value: number) => void
}