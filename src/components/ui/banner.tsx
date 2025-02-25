"use client";

import { Canvas } from "@react-three/fiber";
import React from "react";
import DisplacementPlane from "@/src/components/3js/displacement-plane";

export default function Banner() {
    return (
        <div className="relative flex h-[75px] w-full items-center justify-center overflow-hidden rounded-md">
          <div className="h-full w-full bg-neutral-900">
            <Canvas camera={{position: [0, 0, 1] }}>
              <DisplacementPlane />
            </Canvas>
          </div>
        </div>
      );
}