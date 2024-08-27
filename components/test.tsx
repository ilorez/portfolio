import React from 'react';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import "./test.css"
gsap.registerPlugin(useGSAP);

export default function Boxes() {
  const container = useRef<HTMLElement | null>(null);
  const tl = useRef<gsap.core.Timeline>();

  const toggleTimeline = () => {
    if (tl.current) {
      tl.current.reversed(!tl.current.reversed());
    }
  };

  useGSAP(
    () => {
      const boxes = gsap.utils.toArray<HTMLElement>('.box');
      tl.current = gsap
        .timeline()
        .to(boxes[0], { x: 120, rotation: 360 })
        .to(boxes[1], { x: -120, rotation: -360 }, '<')
        .to(boxes[2], { y: -166 })
        .reverse();
    },
    { scope: container }
  );

  return (
    <main>
      <section className="boxes-container" ref={container}>
        <h2>Use the button to toggle a Timeline</h2>
        <div>
          <button onClick={toggleTimeline}>Toggle Timeline</button>
        </div>
        <div className="box gradient-blue">Box 1</div>
        <div className="box gradient-blue">Box 2</div>
        <div className="box gradient-blue">Box 3</div>
      </section>
    </main>
  );
}
