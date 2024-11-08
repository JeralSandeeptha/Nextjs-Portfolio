import { VedioSectionComponentProps } from '@/types/components.types';
import React from 'react';

const VedioSection = (props: VedioSectionComponentProps) => {
  return (
    <div className='w-full min-h-[60vh] md:min-h-[100vh]'>
      <div className='w-full px-3 min-h-[60vh] md:min-h-[100vh] md:px-[5%] md:py-6 rounded'>
        <iframe
          src="https://player.vimeo.com/video/1007492884?autoplay=1&muted=1&loop=1&autopause=0&controls=0&app_id=122963"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          className='w-full min-h-[60vh] md:min-h-[100vh] rounded max-w-[2000px]'
        ></iframe>
      </div>
    </div>
  )
}

export default VedioSection;
