import React from 'react'
import * as SliderPrimitive from '@radix-ui/react-slider'
import { cn, sliderRange } from '@openui-org/theme'

export interface Comp extends React.ElementRef<typeof SliderPrimitive.Range> {}
export interface Props extends React.ComponentPropsWithoutRef<typeof SliderPrimitive.Range> {}

const SliderRange = React.forwardRef<Comp, Props>(({ className, ...props }, ref) => (
  <SliderPrimitive.Range
    ref={ref}
    className={cn(sliderRange(), className)}
    {...props}
  />
))

SliderRange.displayName = SliderPrimitive.Range.displayName

export default SliderRange