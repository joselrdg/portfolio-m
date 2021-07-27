import { ParallaxLayer } from '@react-spring/parallax'
import React from 'react'
import { Head } from '../common/head/Head'

export const SectionOneH = () => {
    return (
        <ParallaxLayer
        offset={3}
        speed={0.1}
        style={{
            backgroundColor: 'black',
        }}
      >
      </ParallaxLayer>
    )
}
