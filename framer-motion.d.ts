declare module 'framer-motion' {
  import * as React from 'react'

  export interface MotionProps extends React.HTMLAttributes<HTMLElement> {
    children?: React.ReactNode
    initial?: any
    animate?: any
    exit?: any
    variants?: any
    transition?: any
    whileHover?: any
    whileTap?: any
    whileFocus?: any
    whileInView?: any
    drag?: any
    dragConstraints?: any
    dragElastic?: any
    dragMomentum?: any
    onDragStart?: any
    onDragEnd?: any
    onHoverStart?: any
    onHoverEnd?: any
    onTapStart?: any
    onTap?: any
    onTapCancel?: any
    onAnimationStart?: any
    onAnimationComplete?: any
    [key: string]: any
  }

  export interface AnimationControls {
    start: (variant: string | any) => Promise<any>
    set: (variant: string | any) => void
    stop: () => void
    [key: string]: any
  }

  export function useAnimation(options?: any): AnimationControls

  export const motion: {
    div: React.ComponentType<MotionProps>
    span: React.ComponentType<MotionProps>
    button: React.ComponentType<MotionProps>
    a: React.ComponentType<MotionProps>
    img: React.ComponentType<MotionProps>
    svg: React.ComponentType<MotionProps>
    [key: string]: React.ComponentType<MotionProps>
  }

  export default motion
}
